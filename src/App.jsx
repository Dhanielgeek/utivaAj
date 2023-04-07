import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import School from './Pages/Schools/School'
import Header from './Components/Header'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sch' element={<School/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
