import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CustomizePage from './pages/CustomizePage'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
          <Route exact path='/customize' element={<CustomizePage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
