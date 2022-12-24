
import {useEffect, useState, useContext, createContext, useReducer} from 'react'
import {useRouter} from 'next/router'

import Account from '../Account/[id]';

export default function Login({setUserDetails}) {



    //Controlled Input for Login
    const [loginData, setLoginData] = useState({email: "", password: ""})

    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    const router = useRouter()

    const loggedOutUI = (    <div className="flex flex-col items-center mt-64 w-fit">
    {/* {LoggedInStatus} */}
    <h1 className="text-white">Login</h1>

    <input className = "py-24 pl-16 pr-48 mt-32 font-bold text-white placeholder-white bg-transparent border-2 rounded-md md:mt-128 border-primary text-h6" name = "email" onChange={handleChange} value = {loginData.email} placeholder="Email"  type = "email"/>
    <input className = "py-24 pl-16 pr-48 mt-32 font-bold text-white placeholder-white bg-transparent border-2 rounded-md border-primary text-h6" name = "password" onChange={handleChange} value = {loginData.password} placeholder="Password" type = "password"/>
    <button className= "w-full px-32 py-16 mx-auto mt-64 font-bold placeholder-white rounded-full bg-gradient-to-r from-primary to-secondary text-text-white text-h6" onClick={() => tryLogin(loginData)}>
        Login
    </button>
</div>)

    function handleChange(event){
        setLoginData(prevLoginData => {
            return {
                ...prevLoginData,
                [event.target.name]: event.target.value
            }
        })
    }

    async function tryLogin(loginData){

        fetch("/api/login", {
            method: "POST",
            // headers: {
            //     'Set-Cookie': "loggedIn=true"
            // },
            body: JSON.stringify(loginData)
        },
        ).then(res => {
            if (res.status === 200) {
                document.cookie = "isLoggedIn=true"
                // console.log(document.cookie)
                return res.json()
            }
            else {
                // console.log(document.cookie)
                return null
            }
        }).then(data => {
            if (data !== null) {
                // console.log(data)
                window.localStorage.setItem('isLoggedIn', true)
                // console.log(window.localStorage)
                window.localStorage.setItem('id', data.user[0]._id)
                window.localStorage.setItem('email', data.user[0].email)
                window.localStorage.setItem('firstname', data.user[0].firstname)
                window.localStorage.setItem('surname', data.user[0].surname)

                router.push({
                    pathname: `/Account/[id]`,
                    query: {
                        id: data.user[0]._id,
                        email: data.user[0].email,
                        firstname: data.user[0].firstname,
                        surname: data.user[0].surname,
    
                    }
            })
            } else {
                console.log("user failed to login")
            }

        })
    }



    return (
        loggedOutUI
    )
}