 
// import Counder from './components/Counder'
import React from 'react'
import './App.css'
// import { Routes } from 'react-router-dom'
import Rating from './components/Rating'
//  import Usecon from './components/Usecon'
 import { Route,Routes,Link } from 'react-router-dom'
import Usecon from './components/Usecon'
function App() {
  return (
     <>
     <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='rating'>Rating</Link></li>
        <li><Link to='usecon'>Context</Link></li>
     </ul>
     <Routes>
        <Route path='rating' element={<Rating/>}/>
        <Route path='usecon' element={<Usecon/>}/>
     </Routes>
     </>
  )
}

export default App
