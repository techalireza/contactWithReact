import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Container-style.css'


function Container(props) {

    const [check, setCheck] = useState(false);
    const [contact, setContact] = useState([
        {
            id: 1, name: 'ali', family: 'bashe', phone: '091212345678', email: 'ali@gmail.com', address: 'khaniabad no', birthday: '1399/2/2', details: ':)'
        },
        {
            id: 2, name: 'ali', family: 'bashe', phone: '091212345678', email: 'ali@gmail.com', address: 'khaniabad no', birthday: '1399/2/2', details: ':)'
        },
    ])

    const showForm = (check) => {
        setCheck(true);
    }
    const hideForm = (check) => {
        setCheck(false);
    }
    const submitForm = (e) => {
        // console.log(id);
        // console.log(contact.id)
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name);
        console.log(value)
        setContact([...contact, { [name]: value }])
    }
    const clearForm = () => {

    }
    const {id , name , family , phone , email, address, birthday , details} = contact;
    return (
        <div>
            <>
                <div id="root" className="container-fluid my-3">
                    <div className="container p-4">
                        <form id='search-form'>
                            <div className="input-group">
                                <input type="text" name='search' id='search' className="form-control" placeholder="Search" />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="main">
                        <div id="table" className="table-responsive mx-2 ">
                            <table id='contact_table' className="table table-striped table-hover">
                                <thead class="thead-dark ">
                                    <tr>
                                        <th>#</th>
                                        <th>name</th>
                                        <th>last name</th>
                                        <th>phone</th>
                                        <th>email</th>
                                        <th>address</th>
                                        <th>birthday</th>
                                        <th>details</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                
                                {
                                    contact.map(item => {
                                        
                                        return (
                                            <tbody key={item.id}>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.family}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.birthday}</td>
                                                    <td>{item.details}</td>
                                                    <td>
                                                        <button type="submit" className="btn btn-primary">Save</button>
                                                        <button type="reset" className="btn btn-primary">Clear</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                        
                                    })
                                }
                                
                            </table>
                            <button className="btn btn-primary" onClick={(check => showForm(check))}>Add</button>
                            <button className="btn btn-secondary" onClick={check => hideForm(check)}>Cancel</button>
                        </div>
                        <div id="form" className={check === true ? 'show' : null}>
                            <form id='contact_form'>
                                <div className="form-group">
                                    <label for="id_id">ID: </label>
                                    <input value={id} type="number" name="id" className="form-control" id="id_id" placeholder="id of contact" required />
                                </div>

                                <div className="form-group">
                                    <label for="id_name">Name: </label>
                                    <input value={name} type="text" name="name" className="form-control" id="id_name" placeholder="Enter name" required />
                                </div>
                                <div className="form-group">
                                    <label for="id_last_name">Last name: </label>
                                    <input value={family} type="text" className="form-control" name="family" id="id_last_name" placeholder="Enter last name" />
                                </div>
                                <div className="form-group">
                                    <label for="id_phone">phone: </label>
                                    <input value={phone} type="phone" name="phone" className="form-control" id="id_phone" placeholder="Enter Phone" />
                                </div>
                                <div className="form-group">
                                    <label for="id_email">Email: </label>
                                    <input value={email} type="email" name='email' class="form-control" id="id_email" placeholder="Enter Email" />
                                </div>
                                <div class="form-group">
                                    <label for="id_address">address</label>
                                    <textarea value={address} name="address" className="form-control" id="id_address" placeholder="Enter Address"></textarea>
                                </div>
                                <div className="form-group">
                                    <label for="id_birthday">birthday</label>
                                    <input value={birthday} type="datetime-local" name='birthday' className="form-control" id="id_birthday"
                                        placeholder="Enter birthday" />
                                </div>
                                <div className="form-group">
                                    <label for="id_details">details: </label>
                                    <input value={details} type="text" name="details" className="form-control" id="id_details" placeholder="Enter details" />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={submitForm}>Save</button>
                                <button type="reset" className="btn btn-primary" onClick={clearForm}>Clear</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )

}
export default Container;