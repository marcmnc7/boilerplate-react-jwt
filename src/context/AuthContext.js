import React, { useEffect, useState, Component } from 'react'
import api from '../lib/api'
import { useHistory } from "react-router-dom"

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  let history = useHistory()
  const [user, setUser] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true)
  
  useEffect(() => {
    console.info('In useEffect AuthContext')
    async function fetchUser () {
      try {
        const user = await api.get('/users/me')
        setUser(user)
      } catch (error) {
        if (error.message === 'REFRESH_TOKEN_EXPIRED') {
          setUser(null)
          history.push('/login')
        }
      } finally {
        setLoadingUser(false)
      }
    }
    fetchUser()
  }, [history])
  

  async function logout () {
    try {
      setLoadingUser(true)
      await api.post('/auth/logout')
    } catch (error) {
      console.error(error)
    } finally {
      setUser(null)
      history.push('/login')
      setLoadingUser(false)
    }
  }

  async function login (email, password) {
    try {
      setLoadingUser(true)
      await api.post('/auth/login', { email, password })
      const user = await api.get('/users/me')
      setUser(user)
      history.push('/private')
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingUser(false)
    }
  }

  async function register (email, password, password2) {
    try {
      setLoadingUser(true)
      await api.post('/auth/register', email, password, password2)
      await api.post('/auth/login', email, password)
      const user = await api.get('/users/me')
      setUser(user)
      history.push('/private')
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingUser(false)
    }
  }

  const context = {
    user,
    loadingUser,
    setUser,
    login,
    logout,
    register,
  }

  return (
    <AuthContext.Provider value={context}> 
      { children }
    </AuthContext.Provider>
  )
}

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {value => <Comp {...this.props} authContext={value} />}
        </AuthContext.Consumer>
      )
    }
  }
}

export default AuthProvider
