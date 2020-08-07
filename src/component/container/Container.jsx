import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Container-style.css'

// import Button from 'react-bootstrap/Button'
import SearchComponent from '../SearchComponent/SearchComponent'
import TableComponent from '../TableComponent/TableComponent'


function Container({contact,setContact}) {


    const [search, setSearch] = useState('');
    const [filterSearch, setfilterSearch] = useState([])

    // const handleChange = (e) => {


    // }

    // const submitForm = (e) > {
    //     // console.log(id);
    //     // console.log(contact.id)
    //     e.preventDefault();
    //     const {name , value} = e.target
    //     setContact([ ...contact , {[name] : value}])
    // }
    // const clearForm = () => {

    // }
    const handleChange = (e) => {
        const { name, value } = e.target
        setSearch(value);
    }

    // const {id , name , family , phone , email, address, birthday , details} = contact;
    // setF(contact.filter(item =>
    //     item.name.toLowerCase().startsWith(search)

    // ));
    useEffect(() => {
        const func = async () => setfilterSearch([...contact.filter(item =>

            item.name.toLowerCase().includes(search) ||
            item.family.toLowerCase().includes(search) ||
            item.phone.includes(search),
            console.log('filterSearch : ', filterSearch),
            console.log('contact : ', contact)


        )]);
        func().then(() => {
            console.log('error')
        })
    }, [search, contact])

    return (
        <div>
            <>
                <div className="row">
                    <div id="root" className="col-12 col-md-6 col-lg-4 px-3 mx-auto my-3">
                        <SearchComponent handleChange={handleChange} />
                        <TableComponent contact={contact} setContact={setContact} filterSearch={filterSearch} />
                    </div>
                </div>
            </>
        </div>
    )

}
export default Container;

