import React from 'react'
import {Link } from 'react-router-dom'
function RulesSticky() {
  return (
    <div className='sticky sticky--yellow'>
      <h2>RULES</h2>
      <ol className='rules--list'>
        <li>Join/Create a Room</li>
        <li>Call "Next"</li>
        <li>Play when it's your turn</li>
      </ol>
      <div>
        <button className='sticky--button sticky--pink'>
          <Link className='sticky--button' to='/rooms'>Rooms</Link>
        </button>
        <button class='sticky--button sticky--blue'>
          <Link class='sticky--button' to='/login'>Log In</Link>
        </button>
      </div>
    </div>
  )
}

export default RulesSticky