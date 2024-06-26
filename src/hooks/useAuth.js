import axios from 'axios'
import React from 'react'

const useAuth = () => {

    //register
    const createNewUser = data => {
        const url = "https://hotel-app-backend-1.onrender.com/users"
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    //login
    const loginUser = (data) => {
        const url = "https://hotel-app-backend-1.onrender.com/users/login"
        axios.post(url, data)
            .then(res => {
                 console.log(res)
                 localStorage.setItem("token", res.data.token)
                 localStorage.setItem("user", JSON.stringify(res.data.user))
                })
            .catch(err => console.log(err))
    }  

    return { createNewUser, loginUser }
}

export default useAuth
