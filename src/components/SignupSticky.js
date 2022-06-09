import React from 'react'
import { Link } from 'react-router-dom'

function SignupSticky() {
  return (
    <div className='sticky sticky--green'>
      <h2>SIGN UP</h2>
      <form className='login--form'>
        <label>User Name</label>
        <input type='text' placeholder='superbounce'></input>
        <label>Password</label>
        <input type='password' placeholder='******'></input>
        <label>Confirm Password</label>
        <input type='password' placeholder='******'></input>
        <button type='submit'>Log In</button>
      </form>
      <p>Already have an account? 
        <Link to='/login'> Login</Link>
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

export default SignupSticky