import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { setTokenToLocalStorage } from "../../../helpers/auth"
import "./style.css"

const SignIn = ({ setUsername }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  })

  const [error, setError] = useState("")

  const signInUnsuccessful = () => {
    return error
  }

  const navigate = useNavigate()

  const handleChange = (e) => {
    const signInData = { ...userData, [e.target.name]: e.target.value }
    setUserData(signInData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(userData)
      const { data } = await axios.post("http://localhost:3000/sign-in", userData)
      console.log(data)
      setTokenToLocalStorage(data.token)
      setUsername(data.user)
      setTimeout(() => {
        navigate("/")
      }, 400)
    } catch (err) {
      setError(err["response"]["data"]["message"])
      signInUnsuccessful()
    }
  }

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div id="register-form">
          <div className="label-form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={handleChange} required />
          </div>
          <div className="label-form">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handleChange} required />
          </div>
          <div className="label-form">
            <input type="submit" id="sign-in-submit" />
          </div>
        </div>
      </form>
      {signInUnsuccessful() ? <span id="sign-in-error">{error}</span> : <></>}
    </>
  )
}

export default SignIn
