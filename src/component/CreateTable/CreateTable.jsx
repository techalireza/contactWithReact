import React,{useEffect} from 'react'
import {
    Link
} from "react-router-dom";
import ShowContact from '../ShowContact/ShowContact';
import './CreateTable.css'


function CreateTable({ contact, filterSearch, handleDelete, handleEdit }) {
    const randomColor = () => {
            let randColor = `${Math.floor((Math.random() * 10))}${Math.floor((Math.random() * 10) + 1)}${Math.floor((Math.random() * 10) + 1)}`;
            return randColor;
           
        }
    useEffect(() => {
        
    },)
    return (
        <div>
            <table id='contact_table' className="table table-striped table-hover">
                {/* <thead class="thead-dark ">
                    <tr>
                        <th>name</th>
                        <th>last name</th>
                        <th>phone</th>
                        <th>action</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        contact === filterSearch ?
                            filterSearch.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name.charAt(0)}</td>
                                    <td className="d-flex flex-row">
                                        <Link to={`/single-contact/${item.id}`}>
                                            <img className="mr-5" src={`https://ui-avatars.com/api/?name=${item.name}+${item.family}&background=${randomColor()}&rounded=true&color=fff&size=50`} alt="" />
                                            <p className="my-auto mr-2">{item.name}</p>
                                            <p className="my-auto mr-2">{item.family}</p>
                                        </Link>
                                    </td>

                                </tr>
                            )
                            )
                            :
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
                                        <button type="submit" className="btn" onClick={() => handleEdit(item)}>
                                            <img src="../../../../img/edit.svg" alt="" />
                                        </button>
                                        <button type="reset" className="btn" onClick={() => handleDelete(item.id)}>
                                            <img src="../../../../img/delete.svg" alt="" />
                                        </button>
                                    </td>
                                </tr>
                            )
                            )
                    }
                </tbody>
            </table>
        </div>

    )
    function Home() {
        return <h2>Home</h2>;
    }

    function About() {
        return <h2>About</h2>;
    }

    function Users() {
        return <h2>Users</h2>;
    }
}

export default CreateTable






