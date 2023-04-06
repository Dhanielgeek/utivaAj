import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import School from './Pages/Schools/School'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sch' element={<School/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
