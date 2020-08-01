import React from 'react'

function ShowContact({filterSearch , handleDelete , handleEdit}) {
    return (
        <div>
            {
                filterSearch.map(item =>
                    <div>
                        <a href={`tel:${item.phone}`}><button className="btn btn-primary">Call</button></a>
                        <button type="submit" className="btn btn-primary" onClick={() => handleEdit(item)}>Edit</button>
                        <button type="reset" className="btn btn-primary" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}

export default ShowContact
