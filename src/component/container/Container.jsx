import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Container-style.css'


function Container(props) {

    const [check, setCheck] = useState(false);
    const [contact , setContact] = useState([]);
    const [email , setEmail ] = useState('');
    const [name , setName ] = useState('');
    const [family , setFamily] = useState('');
    // const handleChange = (e) => {
        
        
    // }
    const showForm = (check) => {
        setCheck(true);
    }
    const hideForm = (check) => {
        setCheck(false);
    }
    const submitForm = (e) => {
        e.preventDefault();
        setContact([...contact , {
            id : Date.now(),
            name ,
            family,
            email
        }])
        setEmail('');
        setName('');
        setFamily('');
    }
    // const submitForm = (e) => {
    //     // console.log(id);
    //     // console.log(contact.id)
    //     e.preventDefault();
    //     const {name , value} = e.target
    //     setContact([ ...contact , {[name] : value}])
    // }
    const clearForm = () => {

    }
    // const {id , name , family , phone , email, address, birthday , details} = contact;
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

                                        <th>name</th>
                                        <th>last name</th>

                                        <th>email</th>
                                        
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
                                                        <button type="submit" className="btn btn-primary">Save</button>
                                                        <button type="reset" className="btn btn-primary">Clear</button>
                                                    </td>
                                                </tr>
                                            
                                        )
                                        
                                    })
                                }
                                </tbody>
                                
                            </table>
                            <button className="btn btn-primary" onClick={(check => showForm(check))}>Add</button>
                            <button className="btn btn-secondary" onClick={check => hideForm(check)}>Cancel</button>
                        </div>
                        <div id="form" className={check === true ? 'show' : null}>
                            <form id='contact_form' onSubmit={submitForm}>
                                

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
                                
                                <button type="submit" className="btn btn-primary">Save</button>
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