import types from './contact.type'

export const addContact = (contact) => {
    return {
        type: types.ADD_CONTACT,
        payload: contact
    }
}
export const deleteContact = (id) => {
    return {
        type: types.DELETE_CONTACT,
        payload: id
    }
}
export const editContact = (contact) => {
    return {
        type: types.EDIT_CONTACT,
        payload: contact
    }
}
export const setSearch = (input) => {
    return {
        type: types.SET_SEARCH,
        payload: input
    }
}