import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CustomizePage from './pages/CustomizePage'
import Home from './pages/Home'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'


function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
          <Route exact path='/whiteboard' element={<CustomizePage/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/reset-password' element={<ResetPassword/>}/>
        </Routes>
      </Router>
    </DndProvider>
  )
}

export default App
