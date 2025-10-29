import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { Riple } from 'react-loading-indicators';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    console.log(location)

    if (loading) {
        return (
          <div className="flex justify-center min-h-screen items-center">
            <Riple color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
          </div>
        );
    }
    if (user && user?.email) {
        return children
    } else {
        return <Navigate state={location.pathname} to="/auth/login">

        </Navigate>
    }
    ;
};

export default PrivateRoute;