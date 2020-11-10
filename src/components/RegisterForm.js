import React, { useState } from 'react'
import { withAuth } from '../context/AuthContext'

function RegisterForm (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  async function register (event) {
    event.preventDefault()
    await props.authContext.register(email, password, password2)
  }

  return (
    <form onSubmit={register}>
      <label htmlFor="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"/>
      <label htmlFor="password">Password</label>
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password"/>
      <label htmlFor="password2">Confirm password</label>
      <input value={password2} type="password" onChange={(e) => setPassword2(e.target.value)} name="password2" id="password2"/>
      <input type="submit"/>
    </form>
  )
}

export default withAuth(RegisterForm)
