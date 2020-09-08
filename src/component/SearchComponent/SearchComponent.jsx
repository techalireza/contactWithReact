import React from 'react'
import { connect } from 'react-redux'
import { setSearch } from '../../redux/contact/contact.action'

function SearchComponent({search, setSearch}) {

    return (
        <div>
            <div className="my-3">
                <form id='search-form'>
                    <div className="input-group">
                        <input type="text" name='search' onChange={e => setSearch(e.target.value)} value={search} className="form-control" placeholder="Search" />
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.contactsRootReducer.searchList,
    }
}
export default connect(mapStateToProps, { setSearch })(SearchComponent)
