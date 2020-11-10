import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { Link } from "react-router-dom"

export default function RegisterPage() {
  return (
    <div>
      Register page
      <RegisterForm />
      <Link to="/login" >Already have an account</Link>
    </div>
  )
}
