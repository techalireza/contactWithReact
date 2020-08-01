import React from 'react'
import Modal from 'react-bootstrap/Modal'
function MyModal({handleHide , submitForm , setName , setFamily , setphone , submitTemp , handleReset , show , name ,family , phone}) {
    return (
        <div>
            <Modal show={show} onHide={handleHide}>
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
                                <label for="phone">phone: </label>
                                <input value={phone} type="phone" onChange={e => setphone(e.target.value)} name='phone' class="form-control" id="phone" placeholder="Enter Phone" />
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

export default MyModal
