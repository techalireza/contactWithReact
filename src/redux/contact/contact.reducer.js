import types from './contact.type'

const initialState = {
    contactList: [
        {id : 1 , name : "alireza" , family : "ma" , phone : "091203133123"}
    ],
    searchList : ''
}
const contactReducer = (state = initialState, action) => {
    const { type , payload } = action;
    switch (type) {
        case types.ADD_CONTACT:
            return {
                ...state , 
                contactList: [...state.contactList , payload]
            }
        case types.DELETE_CONTACT:
            return{
                ...state , 
                contactList : [...state.contactList.filter(item => item.id !== payload )]
            }
        case types.EDIT_CONTACT:
            return{
                ...state ,
                contactList : [...state.contactList.map(item => item.id == payload.id ? payload : item)]
            }
        case types.SET_SEARCH:
            return{
                ...state ,
                searchList : payload
            }
        default:
            return state;
    }
    
}



export default contactReducer;