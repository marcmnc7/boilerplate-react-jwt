import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../context/AuthContext'
import Loading from '../components/Loading'

const PrivateRoute = ({ component: Component, authContext, ...rest }) => {
    if (authContext.loadingUser) return <Loading />
    return (
        <Route {...rest} render={props => (
            authContext.user
            ? <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default withAuth(PrivateRoute)
