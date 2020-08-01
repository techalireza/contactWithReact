import React from 'react'

function SearchComponent(props) {
    return (
        <div>
            <div className="my-3">
                <form id='search-form'>
                    <div className="input-group">
                        <input type="text" name='search' onChange={props.handleChange} className="form-control" placeholder="Search" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchComponent
