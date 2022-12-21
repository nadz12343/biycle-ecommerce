
import Header from '../components/Header'
import Basket from '../components/Basket'
import {useRouter} from 'next/router'
import { useState } from 'react'
export default function Account({id, email, firstname, surname}) {

    const router = useRouter()

    function signOut(){
      window.localStorage.setItem("isLoggedIn", false)
      router.push("/LoginSignUp")
    }

    function submitEdit(){
        fetch("http://localhost:3000/api/updateUser", {
          method: "PUT",
          body: JSON.stringify(newDetails)  
        }).then(res => res.json()).then(d => {
          const data = d.data
          console.log(data)
          
          setNewDetails({id: data.id, email: data.email, firstname: data.firstname, surname: data.surname})
          window.localStorage.setItem('id', data.id)
          window.localStorage.setItem('email', data.email)
          window.localStorage.setItem('firstname', data.firstname)
          window.localStorage.setItem('surname', data.surname)
          // router.push()
        })
    }

    function handleChange(event){
      setNewDetails(prevNewDetails => {
          return {
              ...prevNewDetails,
              [event.target.name]: event.target.value
          }
      })
  }  


    const [newDetails, setNewDetails] = useState({id, email, firstname, surname})
    const [showEditDetails, setShowEditDetails] = useState(false)
    const [showBasket, setShowBasket] = useState(false)


    const editDetailsAccordian = (
      <div className= {showEditDetails ? "block": "hidden"}>
        <input className = "py-24 pl-16 pr-48 mt-32 font-bold placeholder-black bg-transparent border-2 rounded-md md:mt-128 border-primary text-h6" name = "firstname" value = {newDetails.firstname} onChange={handleChange} placeholder={firstname} type = "text"/>
        <input className = "py-24 pl-16 pr-48 mt-32 font-bold placeholder-black bg-transparent border-2 rounded-md md:mt-128 border-primary text-h6" name = "surname" value = {newDetails.surname} onChange={handleChange} placeholder={surname} type = "text"/>

        <button className= "w-full px-32 py-16 mx-auto mt-64 font-bold placeholder-black rounded-full bg-gradient-to-r from-primary to-secondary text-text-white text-h6" onClick={() => submitEdit()}>
            Update details
        </button>
      </div>
    )

    return (

        <>
          <Header/>
          <div className="flex flex-col items-center justify-center h-full" >
          
              <h1 className = "mt-64 text-h1s sm:text-h1 text-text-black ">Welcome back, {newDetails.firstname} {newDetails.surname}</h1>
              <button className= "px-32 py-16 mx-auto mt-64 font-bold placeholder-white rounded-full w-fit bg-gradient-to-r from-primary to-secondary text-text-white text-h6" onClick={() => setShowEditDetails(showEditDetails => !showEditDetails)}>
              Edit Details
          </button>
          {editDetailsAccordian}
          <button className= "px-32 py-16 mx-auto mt-64 font-bold placeholder-white rounded-full w-fit bg-gradient-to-r from-primary to-secondary text-text-white text-h6" onClick={() => setShowBasket(showBasket => !showBasket)}>
              View Basket
          </button>
          <button onClick={signOut} className= "px-32 py-16 mx-auto mt-64 font-bold placeholder-white rounded-full w-fit bg-gradient-to-r from-primary to-secondary text-text-white text-h6">
              Sign Out
          </button>
          {showBasket && <Basket/>}
          </div >
        </>
    )
}

export async function getServerSideProps(context) {


    return {
      props: {
        id: context.params.id,
        email: context.query.email,
        firstname:context.query.firstname,
        surname: context.query.surname,
      }
    }

  }