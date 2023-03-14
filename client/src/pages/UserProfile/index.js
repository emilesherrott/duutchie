import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { getTokenFromLocalStorage } from "../../helpers/auth"
import "./style.css"

const UserProfile = () => {
  const [data, setData] = useState({})
  const [response, setResponse] = useState()
  const [userData, setUserData] = useState({
    password: "",
    new_password: "",
  })

  const navigate = useNavigate()
  const homePage = () => {
    setTimeout(() => {
      navigate("/")
    }, 1000)
  }
  let result = undefined
  


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:3000/profile", {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      setData(data)
    }
    getData()
  }, [])


  const handleChange = (e) => {
    const newUserData = { ...userData, [e.target.name]: e.target.value }
    setUserData(newUserData)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
       result = await axios.put("http://localhost:3000/profile", userData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      result = result.request.status
      homePage()
    } catch (err) {
      result = err.response.request.status
    }
    finally {
      setResponse(result)
    }
  }



  return (
    <>
      <h1>Hello {data.username}</h1>
      <h2>Your saved recipes:</h2>
      <h2 id="update-password">Upate password:</h2>
      <form onSubmit={handleSubmit}>
        <div id="register-form">
          <div className="label-form">
            <label htmlFor="password"> Old Password:</label>
            <input type="password" id="password" name="password" onChange={handleChange} required />
          </div>
          <div className="label-form">
            <label htmlFor="new_password"> New Password:</label>
            <input type="password" id="new_password" name="new_password" onChange={handleChange} required />
          </div>
          <div className="label-form update-submit-div">
            <input type="submit" className="update-submit-input"/>
            <div className={`${response === 202 ? "update-successful" : "update-unsuccessful"}`} ></div>
          </div>
        </div>
      </form>
      <div>
        { response === 202 ? <p>Update Successful</p> : <></> }
      </div>
    </>
  )
}

export default UserProfile
