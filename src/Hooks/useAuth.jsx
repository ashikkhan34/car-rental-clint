import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

export const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;