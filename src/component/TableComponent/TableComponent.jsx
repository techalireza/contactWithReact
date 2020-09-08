import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import CreateTable from '../CreateTable/CreateTable'
import MyModal from '../MyModal/MyModal'
import './TableComponent.css'
import Swal from 'sweetalert2'

function TableComponent({}) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [submitTemp, setsubmitTemp] = useState({ value: "Submit", id: 0 , item : {name : "" , family: "" , phone: ""}});

    return (
        <div>
            <div id="main">
                <button className="btn w-100 text-left d-flex flex-row align-items-center add-contact" onClick={handleShow}>
                    <img src="../../../../img/plus.png" alt=""/>
                    <p>Create New Contact</p>
                </button>
                <CreateTable />
                <MyModal show={show} setShow={setShow} submitTemp={submitTemp} setsubmitTemp={setsubmitTemp}/>

            </div>
        </div>
    )
}


export default TableComponent













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

    // useEffect(() => {
    //     handleSort();
    // }, [contact])
    