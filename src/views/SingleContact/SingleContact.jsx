import React from 'react'
import {Row , Col} from 'reactstrap'
import {useParams} from 'react-router-dom'
 


function SingleContact({contact}) {
    const {id} = useParams();
    return (
       <Row>
           <Col xs='12' md='8' lg='6' className=" px-3 mx-auto my-3">
                {contact.map(item => (item.id==id)&&
                <div >
                    <p>{item.name}</p>
                </div>

                )}
           </Col>
       </Row>
    )
}

export default SingleContact
