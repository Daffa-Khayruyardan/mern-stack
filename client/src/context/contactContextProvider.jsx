import React, {createContext, useReducer} from "react";

export const contactContext = createContext();

// create contact reducer
const contactReducer = (state,action) => {
    switch(action.type) {
        case 'SET_CONTACT':
            return { contacts: action.payload }
        case 'ADD_CONTACT':
            return { contacts: [action.payload, ...state.contacts]}
        case 'DELETE_CONTACT':
            return { contacts: state.contacts.filter(c => c._id !== action.payload._id) }
        default: 
            state
    }
};

const ContactContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(contactReducer, { contacts: null});

    return(
        <contactContext.Provider value={{...state,dispatch}}>
            {children}
        </contactContext.Provider>
    );
};

export default ContactContextProvider;