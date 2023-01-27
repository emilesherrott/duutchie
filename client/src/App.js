import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar, Footer } from './components'
import { Welcome } from './pages'
import { Register, SignIn } from './pages/Auth'
import './styles/App.css';

const App = () => {
  const [username, setUsername] = useState("")

  return (
    <div className="App">
      <NavBar username={username}/>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/register" element={<Register setUsername={setUsername}/>}/>
        <Route path="/sign-in" element={<SignIn setUsername={setUsername}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
