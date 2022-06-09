import React from 'react'

function RulesSticky() {
  return (
    <div className='rules--sticky'>
      <h2>RULES</h2>
      <ol className='rules--list'>
        <li>Join/Create a Room</li>
        <li>Call "Next"</li>
        <li>Play when it's your turn</li>
      </ol>
      <div className='connected--links'>
        <button href='/rooms'>Rooms</button>
        <br/>
        <button href='/login'>Login</button>
      </div>
    </div>
  )
}

export default RulesSticky