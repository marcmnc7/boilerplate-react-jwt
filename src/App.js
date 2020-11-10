import React from 'react'
import LoginPage from './pages/LoginPage'
import PrivatePage from './pages/PrivatePage'
import PublicPage from './pages/PublicPage'
import NotFoundPage from './pages/NotFoundPage'
import RestrictedPage from './pages/RestrictedPage'
import Layout from './components/Layout'
import RegisterPage from './pages/RegisterPage'
import './App.css'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">
        <Layout>
          <Switch>
            <PrivateRoute exact path="/private" component={PrivatePage} />
            <PublicPage exact path="/public" component={PublicPage} />
            <PublicRoute exact path="/restricted" component={RestrictedPage} restricted={true}/>
            <PublicRoute exact path="/login" component={LoginPage} restricted={true}/>
            <PublicRoute exact path="/register" component={RegisterPage} restricted={true}/>
            <PublicRoute path="/" component={NotFoundPage} />
          </Switch>
        </Layout>
    </div>
  );
}

export default App
