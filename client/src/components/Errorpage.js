import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
        <div className='notfound'>
          <center>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <NavLink to='/'>Back to Home Page</NavLink>
          </center>
        </div>
    </>
  )
}

export default Errorpage