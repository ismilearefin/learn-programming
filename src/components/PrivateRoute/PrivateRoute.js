import React, { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return (
            <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            />
        )
    }
    if(user){
        return children
    }
return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;