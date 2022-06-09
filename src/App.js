import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import LogInSticky from './components/LogInSticky';
import RoomSticky from './components/RoomSticky';
import RulesSticky from './components/RulesSticky';
import SignupSticky from './components/SignupSticky'

function App() {
  return (
    <div className='mainAppComponent'>
      <Home />
      <Routes>
        <Route path='/' element={<RulesSticky />}/>
        <Route path='/login' element={<LogInSticky />} />
        <Route path='/rooms' element={<RoomSticky />} />
        <Route path='/signup' element={<SignupSticky />} />
      </Routes>
    </div>
  );
}

export default App;
