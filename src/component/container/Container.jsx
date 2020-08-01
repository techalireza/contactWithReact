import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Container-style.css'

// import Button from 'react-bootstrap/Button'
import SearchComponent from '../SearchComponent/SearchComponent'
import TableComponent from '../TableComponent/TableComponent'


function Container(props) {

    const [contact, setContact] = useState([
        { id:1 , name: "Alireza", family: "mousavi", phone: "+989121111111" },
        { id:12 , name: "mohammad", family: "mousavi", phone: "+989122222222" },
        { id:13 , name: "fateme sadat", family: "mousavi", phone: "+989123333333" },
        { id:14 , name: "hasan", family: "abdoly", phone: "+989124444444" },
        { id:15 , name: "mojtaba", family: "hasani", phone: "+989125555555" },
        { id:16 , name: "zahra", family: "alipour", phone: "+989126666666" },
    ]);
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

