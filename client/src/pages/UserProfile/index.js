import React, { useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'

const UserProfile = () => {

const getData = async () => {
    const response = await axios.post('/profile', {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
    })
    console.log(response)
}



    return (
        <></>
    )
}

export default UserProfile