import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { setTokenToLocalStorage } from "../../../helpers/auth"
import "./style.css"

const Register = ({ setUsername }) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  const [error, setError] = useState("")

  const signInUnsuccessful = () => {
    return error
  }

  const navigate = useNavigate()

  const handleChange = (e) => {
    const newUserData = { ...userData, [e.target.name]: e.target.value }
    setUserData(newUserData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("http://localhost:3000/register", userData)
      setTokenToLocalStorage(data.token)
      setUsername(data.user)
      setTimeout(() => {
        navigate("/")
      }, 400)
    } catch (err) {
      console.log(err)
      setError(err["response"]["data"]["message"])
      signInUnsuccessful()
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
            <input type="email" id="email" name="email" onChange={handleChange} required />
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
      {signInUnsuccessful() ? <span id="sign-in-error">{error}</span> : <></>}
    </>
  )
}

export default Register
