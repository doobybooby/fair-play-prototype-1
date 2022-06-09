import React from 'react'

function Home() {
  return (
    <div className='home--component'>
      <h1>FAIR PLAY</h1>
      <form className='room-search--form'>
        <label>Room Search</label>
        <input type='text' placeholder='pier 6'></input>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Home