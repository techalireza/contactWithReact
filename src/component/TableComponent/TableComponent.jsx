import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'


function TableComponent({ contact, setContact, filterSearch }) {

    const [check, setCheck] = useState(false);
    const [editMood, setEditMood] = useState(false);
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const showForm = (check) => {
        setCheck(true);
    }
    const submitForm = (e) => {
        e.preventDefault();
        setCheck(false);

        setContact([...contact, {
            id: Date.now(),
            name,
            family,
            email
        }])
        setEmail('');
        setName('');
        setFamily('');
    }
    const handleDelete = (id) => {
        setContact(contact.filter(item => item.id !== id))
    }
    const handleEdit = (item) => {
        handleShow();
        setEmail(item.email)
        setName(item.name)
        setFamily(item.family)
        setEditMood(true)
    }
    return (
        <div>
            <div id="main">
                <div id="table" className="table-responsive mx-2 ">
                    <table id='contact_table' className="table table-striped table-hover">
                        <thead class="thead-dark ">
                            <tr>

                                <th>name</th>
                                <th>last name</th>
                                <th>email</th>
                                <th>action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                contact.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.family}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                <button type="submit" className="btn btn-primary">Edit</button>
                                                <button type="reset" className="btn btn-primary">Delete</button>
                                            </td>
                                        </tr>

                                    )

                                })
                            }
                            {
                                filterSearch != undefined && filterSearch.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.family}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button type="submit" className="btn btn-primary" onClick={() => handleEdit(item)}>Edit</button>
                                            <button type="reset" className="btn btn-primary" onClick={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={handleShow}>Add Contact</button>

                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ADD CONTACT</Modal.Title>
                    </Modal.Header>
                    <form id='contact_form' onSubmit={submitForm}>
                        <Modal.Body>
                            <div className="form-group">
                                <label for="id_name">Name: </label>
                                <input value={name} type="text" onChange={e => setName(e.target.value)} name="name" className="form-control" id="id_name" placeholder="Enter name" required />
                            </div>
                            <div className="form-group">
                                <label for="id_last_name">Last name: </label>
                                <input value={family} type="text" onChange={e => setFamily(e.target.value)} className="form-control" name="family" id="id_last_name" placeholder="Enter last name" />
                            </div>

                            <div className="form-group">
                                <label for="id_email">Email: </label>
                                <input value={email} type="email" onChange={e => setEmail(e.target.value)} name='email' class="form-control" id="id_email" placeholder="Enter Email" />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="reset" className="btn btn-primary">Clear</button>

                        </Modal.Footer>

                    </form>



                </Modal>

            </div>
        </div>
    )
}

export default TableComponent
