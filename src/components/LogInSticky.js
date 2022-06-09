import React from 'react'

function LogInSticky() {
  return (
    <div className='login--sticky'>
      <h2>LOG IN</h2>
      <form className='login--form'>
        <label>User Name
        </label>
          <input type='text' placeholder='superbounce'></input>
        <label>Password
        </label>
          <input type='password' placeholder='******'></input>
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default LogInSticky