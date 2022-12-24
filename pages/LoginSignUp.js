import Header from "./components/Header"

import Login from "./components/Login"
import SignUp from "./components/SignUp"

import Account from "./Account/[id]"
import { useState, useEffect } from "react"
import {useRouter} from 'next/router'

export default function LoginSignup(){

    const router = useRouter()


    const [pickedSignUp, setPickedSignUp] = useState(false)

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [userDetails, setUserDetails] = useState(null)


    useEffect(() => {

        const doesExist = window.localStorage.getItem("isLoggedIn")
        // console.log(`does exist: ${doesExist}`)

        if (doesExist === "true") {
            router.push({
                pathname: `/Account/[id]`,
                query: {
                    id: window.localStorage.getItem('id'),
                    email: window.localStorage.getItem('email'),
                    firstname: window.localStorage.getItem('firstname'),
                    surname: window.localStorage.getItem('surname'),

                }
        })
        }
        
    },[])
    return (
        <>
            <Header dirLevel= ".."/>

            
            <div className="absolute z-[-1] w-fit h-[100vh] before:bg-overlay-opacity before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0">
                <video autoPlay source src ={ "./assets/vids/vid.mp4"} loop className="w-auto h-full" style={{"objectFit": "cover"}}>
                    {/* <source src = "./assets/vids/test.mp4" ></source> */}
                </video>
            </div>

            <div className="flex flex-col flex-wrap items-center justify-center ">

                {pickedSignUp ? <SignUp/> : isLoggedIn ? <Account firstname="H@J"/> : <Login setUserDetails={setUserDetails}/>}
                {/* {isLoggedIn ? <Account firstname="H@J"/> : <Login setIsLoggedIn={setIsLoggedIn}/>} */}

                {!pickedSignUp ? 
                    <p className="mt-32">Don&apos;t have an account with us? <button className="block px-16 mx-auto mt-16 font-extrabold border-2 rounded-full text-h3s md:text-h5 border-primary" onClick={() => setPickedSignUp(true)}>Sign-Up!</button></p> :
                    <p className="mt-32">Already have an account with us? <button className="block px-16 mx-auto mt-16 font-extrabold border-2 rounded-full text-h3s md:text-h5 border-primary" onClick={() => setPickedSignUp(false)}>Login!</button></p>
                }
            </div>
        </>
    )
}

