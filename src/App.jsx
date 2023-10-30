import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CustomizePage from './pages/CustomizePage'
import Home from './pages/Home'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';


function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
          <Route exact path='/customize' element={<CustomizePage/>}/>
        </Routes>
      </Router>
    </DndProvider>
  )
}

export default App
