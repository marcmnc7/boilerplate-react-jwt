import React, { useState } from 'react'
import { withAuth } from '../context/AuthContext'

function LoginForm (props)  {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin (event) {
    event.preventDefault()
    await props.authContext.login(email, password)
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"/>
      <label htmlFor="password">Password</label>
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password"/>
      <input type="submit"/>
    </form>
  )
}

export default withAuth(LoginForm)
