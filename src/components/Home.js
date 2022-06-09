import React from 'react'
import LogInSticky from './LogInSticky'
import RoomSticky from './RoomSticky'
import RulesSticky from './RulesSticky'

function Home() {
  return (
    <div className='home--component'>
      <h1>Fair Play</h1>
      <form className='room-search--form'>
        <label>Room Name</label>
        <input type='text'></input>
        <button type='submit'>Search</button>
      </form>
      <div className='sticky'>
        <RulesSticky />
        <LogInSticky />
        <RoomSticky />
      </div>
    </div>
  )
}

export default Home