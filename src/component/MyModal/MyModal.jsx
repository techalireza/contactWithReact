import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { connect } from 'react-redux'
import { addContact } from '../../redux/contact/contact.action'
import { editContact } from '../../redux/contact/contact.action'

function MyModal({ show, setShow, contacts, addContact, submitTemp, setsubmitTemp, editContact }) {
    const [check, setCheck] = useState(false);
    const [name, setName] = useState(contacts.name);
    const [family, setFamily] = useState(contacts.family);
    const [phone, setphone] = useState(contacts.phone);
    const handleClose = () => setShow(false);

    console.log(submitTemp)
    const submitForm = (e) => {
        e.preventDefault();
        setCheck(false);
        if (submitTemp.value == "Submit") {
            addContact({
                id: Date.now(),
                name,
                family,
                phone
            })
        }
        else if (submitTemp.value == "Edit") {
            editContact([...contacts.map((contact) => {
                if (contact.id == submitTemp.item.id) {
                    contact.name = name;
                    contact.family = family;
                    contact.phone = phone;
                    return contact;
                }
                else {
                    return contact;
                }
            })])
        }
        handleReset();
        handleClose();
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
    // handleHide , submitForm , setName , setFamily , setphone , submitTemp , handleReset , show , name ,family , phone
    return (
        <div>
            <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD CONTACT</Modal.Title>
                </Modal.Header>
                <form id='contact_form' onSubmit={submitForm}>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="id_name">Name: </label>
                            <input value={name} type="text" onChange={e => setName(e.target.value)} name="name" className="form-control" id="id_name" placeholder="Enter name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_last_name">Last name: </label>
                            <input value={family} type="text" onChange={e => setFamily(e.target.value)} className="form-control" name="family" id="id_last_name" placeholder="Enter last name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">phone: </label>
                            <input value={phone} type="phone" onChange={e => setphone(e.target.value)} name='phone' className="form-control" id="phone" placeholder="Enter Phone" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-primary">{submitTemp.value}</button>
                        <button type="reset" className="btn btn-primary" onClick={handleReset}>Clear</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        contacts: state.contactsRootReducer.contactList,
    }
}
export default connect(mapStateToProps, { addContact, editContact })(MyModal)