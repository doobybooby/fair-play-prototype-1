import React from 'react'
import { Link } from 'react-router-dom'

function LogInSticky() {
  return (
    <div className='sticky sticky--blue'>
      <h2>LOG IN</h2>
      <form className='login--form'>
        <label>User Name</label>
        <input type='text' placeholder='superbounce'></input>
        <label>Password</label>
        <input type='password' placeholder='******'></input>
        <button type='submit'>Log In</button>
      </form>
      <p>Don't have an account? 
        <Link to='/signup'> Sign up</Link>
      </p>
      <div>
        <button className='sticky--button sticky--pink'>
          <Link className='sticky--button' to='/rooms'>Rooms</Link>
        </button>
        <button class='sticky--button sticky--yellow'>
          <Link class='sticky--button' to='/'>Home</Link>
        </button>
      </div>
    </div>
  )
}

export default LogInSticky