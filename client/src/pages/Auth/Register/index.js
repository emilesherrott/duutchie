import React, { useState } from "react"
import axios from 'axios'
import "./style.css"

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  const handleChange = (e) => {
    const newUserData = { ...userData, [e.target.name]: e.target.value }
    setUserData(newUserData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/register', userData)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div id="register-form">
          <div className="label-form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={handleChange} required />
          </div>
          <div className="label-form">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" onChange={handleChange} required />
          </div>
          <div className="label-form">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handleChange} required />
          </div>
          <div className="label-form">
            <label htmlFor="password-confirmation">Password Confirmation:</label>
            <input type="password" id="password-confirmation" name="passwordConfirmation" onChange={handleChange} required />
          </div>
          <div className="label-form">
            <input type="submit" />
          </div>
        </div>
      </form>
    </>
  )
}

export default Register
