import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from "react-router-dom"

export default function LoginPage() {

  return (
    <div>
      Login Page
      <LoginForm/>
      <Link to="/register" >Don't have an account</Link>
    </div>
  )
}
