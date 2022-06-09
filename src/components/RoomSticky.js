import React from 'react'
import {Link } from 'react-router-dom'

function RoomSticky() {
  return (
    <div className='sticky sticky--pink'>
      <h2>ROOMS</h2>
      <button className='create--room'>Create Room</button>
      or join below
      <ol className='rules--list'>
        <li><a href='/'>PIER 6</a></li>
        <li><a href='/'>Central Park</a></li>
        <li><a href='/'>PS2 OPEN GYM</a></li>
      </ol>
      <div>
        <button className='sticky--button sticky--yellow'>
          <Link className='sticky--button' to='/'>Home</Link>
        </button>
        <button class='sticky--button sticky--blue'>
          <Link class='sticky--button' to='/'>Login</Link>
        </button>
      </div>
    </div>
  )
}

export default RoomSticky