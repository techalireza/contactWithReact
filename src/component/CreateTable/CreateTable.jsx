import React, { useEffect , useState } from 'react'
import {
    Link
} from "react-router-dom";
import ShowContact from '../ShowContact/ShowContact';
import './CreateTable.css'
import { editContact } from '../../redux/contact/contact.action'
import { deleteContact } from '../../redux/contact/contact.action'
import { connect } from 'react-redux'
import MyModal from '../MyModal/MyModal';


function CreateTable({ contacts, search, deleteContact, editContact }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [submitTemp, setsubmitTemp] = useState({ value: "Edit", id: 0 });

    const randomColor = () => {
        let randColor = `${Math.floor((Math.random() * 10))}${Math.floor((Math.random() * 10) + 1)}${Math.floor((Math.random() * 10) + 1)}`;
        return randColor;
    }
    const handleEdit = (item) => {
        setsubmitTemp({ value: "Edit", item })
        setShow(!show)
    }
    let filterSearch = contacts.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))
    return (
        <div>
            <table id='contact_table' className="table table-striped table-hover">
                <tbody>
                    {
                        // contact === filterSearch ?
                        //     contact.map((item) => (
                        //         <tr key={item.id}>
                        //             <td>{item.name.charAt(0)}</td>
                        //             <td className="d-flex flex-row">
                        //                 <Link to={`/single-contact/${item.id}`}>
                        //                     <img className="mr-5" src={`https://ui-avatars.com/api/?name=${item.name}+${item.family}&background=${randomColor()}&rounded=true&color=fff&size=50`} alt="" />
                        //                     <p className="my-auto mr-2">{item.name}</p>
                        //                     <p className="my-auto mr-2">{item.family}</p>
                        //                 </Link>
                        //             </td>

                        //         </tr>
                        //     )
                        //     )
                        //     :
                        filterSearch.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name.charAt(0)}</td>
                                <td>
                                    <Link to={`/single-contact/${item.id}`} className="d-flex flex-row">
                                        <img className="mr-3 mr-lg-4 avatar" src={`https://ui-avatars.com/api/?name=${item.name}+${item.family}&background=${randomColor()}&rounded=true&color=fff&size=50`} alt="" />
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-row">
                                                <p className="my-auto mr-2">{item.name}</p>
                                                <p className="my-auto mr-2">{item.family}</p>
                                            </div>
                                            <p className="my-auto mr-2">{item.phone}</p>
                                        </div>
                                    </Link>
                                </td>
                                <td>
                                    <a href={`tel:${item.phone}`}><button className="btn">
                                        <img src="../../../../img/phone-call.svg" alt="" />
                                    </button></a>
                                    <button type="button" className="btn" onClick={() => handleEdit(item)}>
                                        <img src="../../../../img/edit.svg" alt="" />
                                    </button>
                                    <button type="reset" className="btn" onClick={() => deleteContact(item.id)}>
                                        <img src="../../../../img/delete.svg" alt="" />
                                    </button>
                                    <MyModal show={show} setShow={setShow} submitTemp={submitTemp} setsubmitTemp={setsubmitTemp}/>
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        contacts: state.contactsRootReducer.contactList,
        search: state.contactsRootReducer.searchList,
    }
}
export default connect(mapStateToProps, { editContact, deleteContact })(CreateTable)

