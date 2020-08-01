import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import CreateTable from '../CreateTable/CreateTable'
import MyModal from '../MyModal/MyModal'
import './TableComponent.css'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

function TableComponent({ contact, setContact, filterSearch }) {

    const [check, setCheck] = useState(false);
    const [submitTemp, setsubmitTemp] = useState({ value: "Submit", id: 0 });
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [phone, setphone] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const showForm = (check) => {
    //     setCheck(true);
    // }
    // const handleSort = () => {
    //     let temp = {};
    //     setContact(contact.map((item) => {
    //         contact.map((itemSort = item ) => {
    //             // if (item.name > itemSort.name) {
    //             //     temp = item;
    //             //     item = itemSort;
    //             //     itemSort = temp;
    //             //     console.log(temp)
    //             // }
    //             console.log(item);
    //             console.log(itemSort)
    //         })
    //     }));
    // }
    const submitForm = (e) => {
        e.preventDefault();
        setCheck(false);
        console.log(name);
        if (submitTemp.value == "Submit") {
            setContact([...contact, {
                id: Date.now(),
                name,
                family,
                phone
            }])

        }
        else if (submitTemp.value == "Edit") {
            setContact([...contact.map((item) => {
                if (item.id == submitTemp.id) {
                    item.name = name;
                    item.family = family;
                    item.phone = phone;
                    setsubmitTemp({ value: "Submit", id: 0 });
                    console.log(submitTemp);
                    return item;

                }
                else {
                    return item;
                }
            })])

        }

        handleReset();
        handleClose();

    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              setContact(contact.filter(item => item.id !== id))
            }
          })
        
    }
    const handleEdit = (item) => {
        handleShow();
        setphone(item.phone)
        setName(item.name)
        setFamily(item.family)
        setsubmitTemp({ value: "Edit", id: item.id })
        console.log(submitTemp)
    }
    const handleReset = () => {
        setphone('');
        setName('');
        setFamily('');
    }
    const handleHide = () => {
        handleClose()
        handleReset()
        setsubmitTemp({ value: "Submit", id: 0 })
    }
    // useEffect(() => {
    //     handleSort();
    // }, [contact])

    return (
        <div>
            <div id="main">
                <button className="btn w-100 text-left d-flex flex-row align-items-center add-contact" onClick={handleShow}>
                    <img src="../../../../img/plus.png" alt=""/>
                    <p>Create New Contact</p>
                </button>
                <CreateTable contact={contact} filterSearch={filterSearch} handleDelete={handleDelete} handleEdit={handleEdit} />

                <MyModal handleHide={handleHide} submitForm={submitForm} setName={setName} show={show}
                    setFamily={setFamily} setphone={setphone} submitTemp={submitTemp} handleReset={handleReset}
                    name={name} family={family} phone={phone} />

            </div>
        </div>
    )
}

export default TableComponent
