import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DashBoard from './Dashboard';
import About from './About';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/dashboard" exact Component={DashBoard} />
        <Route path="/about" exact Component={About} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
