import React from 'react'
import { connect } from 'react-redux'
import { setSearch } from '../../redux/contact/contact.action'

function SearchComponent(search, setSearch, contacts) {

    return (
        <div>
            {
                console.log("serach : ", search),
                console.log("contacts search : ", contacts)
            }
            <div className="my-3">
                <form id='search-form'>
                    <div className="input-group">
                        <input type="text" name='search' value={search} onChange={e => setSearch(e.target.value)} className="form-control" placeholder="Search" />
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.contactsRootReducer.searchList,
        contacts : state.contactsRootReducer.contactList
    }
}
export default connect(mapStateToProps, { setSearch })(SearchComponent)
