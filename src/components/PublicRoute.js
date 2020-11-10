import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../context/AuthContext'
import Loading from '../components/Loading'

const PublicRoute = ({component: Component, authContext, restricted, ...rest}) => {
    if (authContext.loadingUser) return <Loading />
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            authContext.user && restricted
            ? <Redirect to={process.env.REACT_APP_RESTRICTED_REDIRECT_TO} />
            : <Component {...props} />
        )} />
    );
};

export default withAuth(PublicRoute)
