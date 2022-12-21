
import { useState } from "react"

export default function SignUp() {


    //Controlled Input for Signup
    const [signUpData, setSignUpData] = useState({name: "", email: "", password: "", confirmPassword: ""})

    function handleChange(event){
        setSignUpData(prevSignUpData => {
            return {
                ...prevSignUpData,
                [event.target.name]: event.target.value
            }
        })
    }
    console.log(signUpData.name)

    return (
        <div className="flex flex-col items-center mt-64 w-fit">
        <h1 className="text-white text-h2s md:text-h1">Sign Up</h1>


            {/* FOR GENERAL BREAKPOINT */}
            <input className = "py-24 pl-16 pr-48 mt-32 font-bold text-white placeholder-white bg-transparent border-2 rounded-md md:hidden border-primary text-h4s " name = "name" onChange={handleChange} value = {signUpData.name} placeholder="Name"  type = "text"/>
            <input className = "py-24 pl-16 pr-48 mt-32 font-bold text-white placeholder-white bg-transparent border-2 rounded-md md:hidden border-primary text-h4s " name = "email" onChange={handleChange} value = {signUpData.email} placeholder="Email"  type = "email"/>


            {/* FOR GENERAL BREAKPOINT */}
            <input className = "py-24 pl-16 pr-48 mt-32 font-bold text-white placeholder-white bg-transparent border-2 rounded-md md:hidden border-primary text-h4s " name = "password" onChange={handleChange} value = {signUpData.password} placeholder="Password" type = "password"/>
            <input className = "py-24 pl-16 pr-48 mt-32 font-bold text-white placeholder-white bg-transparent border-2 rounded-md md:hidden border-primary text-h4s" name = "confirmPassword" onChange={handleChange} value = {signUpData.confirmPassword} placeholder="Confirm Password" type = "password"/>
        
        
        {/* USED FOR WHEN THE MD BREAKPOINT IS REACHED */}
        <div className="hidden mt-32 md:block md:mt-128">
            <input className = "py-24 pl-16 pr-48 mr-32 font-bold text-white placeholder-white bg-transparent border-2 rounded-md border-primary text-h6" name = "name" onChange={handleChange} value = {signUpData.name} placeholder="Name"  type = "text"/>
            <input className = "py-24 pl-16 pr-48 mt-32 font-bold text-white placeholder-white bg-transparent border-2 rounded-md border-primary text-h6" name = "email" onChange={handleChange} value = {signUpData.email} placeholder="Email"  type = "email"/>
        </div>

        {/* USED FOR WHEN THE MD BREAKPOINT IS REACHED */}
        <div className="hidden mt-32 md:block md:mt-32">
            <input className = "py-24 pl-16 pr-48 mt-32 mr-32 font-bold text-white placeholder-white bg-transparent border-2 rounded-md border-primary text-h6" name = "password" onChange={handleChange} value = {signUpData.password} placeholder="Password" type = "password"/>
            <input className = "py-24 pl-16 pr-48 mt-32 font-bold text-white placeholder-white bg-transparent border-2 rounded-md border-primary text-h6" name = "confirmPassword" onChange={handleChange} value = {signUpData.confirmPassword} placeholder="Confirm Password" type = "password"/>
        </div>

        <button className= "w-full px-32 py-16 mx-auto mt-64 font-bold rounded-full md:w-full bg-gradient-to-r from-primary to-secondary text-text-white text-h3s md:text-h6">
                    Sign Up
        </button>

    </div>
    )
}