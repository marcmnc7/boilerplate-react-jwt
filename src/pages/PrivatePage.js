import React, { useEffect } from 'react'
import { withAuth } from '../context/AuthContext'

function PrivatePage(props) {

  
  useEffect(() => {
    async function fetchData () {
      console.info('Fetching...')
    }
    console.info('In useEffect PrivatePage')
    fetchData()
  }, [])

  async function logout () {
    await props.authContext.logout()
  }

  return (
    <div>
      <p>Private page</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default withAuth(PrivatePage)
