import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
// import useFirebase from '../hooks/useFirebase'
// import useService from '../hooks/useService';
export const  AuthContext = createContext()
const AuthProvider = ({children}) => {
    // const {products} = useProducts()
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;