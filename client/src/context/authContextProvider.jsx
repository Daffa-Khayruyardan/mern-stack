import React, {createContext, useEffect, useReducer} from "react";

export const authContext = createContext();

const authReducer = (state,action) => {
    switch(action.type) {
        case 'LOGIN': 
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        case 'UPDATE_USER':
            const getUserData = JSON.parse(localStorage.getItem('user'))

            return { user: {email: action.payload, token: getUserData.token, _id: getUserData._id} } ;
        default: 
            return state;
    }
};

const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer, {user: null})

    useEffect(() => {
        const getUserInfo = JSON.parse(localStorage.getItem('user'));

        if(getUserInfo) {
            dispatch({type: 'LOGIN', payload: getUserInfo})
        }
    }, []);

    return (
        <authContext.Provider value={{...state,dispatch}}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;