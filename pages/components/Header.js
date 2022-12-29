
import Link from "next/link"
import { useEffect, useState } from "react"

import Basket from "./Basket"
import Search from "./Search"
import {useRouter}  from "next/router"
export default function Header({dirLevel}){

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const [showBasket, setShowBasket] = useState(false)

    const [sess_id, setSess_id] = useState(null)

    const router =  useRouter()
    const mobileMenuOn= (
        <nav className="flex flex-col mx-8 lg:hidden h-[100vh] ">
            <div className="flex">
                <button className="mr-auto border-slate-700" onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}>
                    <img className="w-24 h-24" src = "/assets/icons/hamburger.png"/>
                </button>
                <Link href = {sess_id === null ? `/LoginSignUp` : `/Account/${sess_id}`}>
                        <img className = 'w-24 h-24 mx-24' src={`${dirLevel}/assets/icons/account.png`} alt=""/>
                </Link>     
                <img className = 'w-24 h-24 cursor-pointer' src={`${dirLevel}/assets/icons/basket.png`} alt="" onClick={() => setShowBasket(showBasket => !showBasket)}/>    
            </div>

            <div className="flex flex-col items-center justify-between w-full h-full">
                <Link href = "/" onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}>
                    <p className="py-64 font-regular text-h1s text-text-black ">Home</p>
                </Link>
                <Link href = "/AboutUs" onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}>
                    <p className="py-64 font-regular text-h1s text-text-black s">About Us</p>
                </Link>
                <Link href = "/Products" onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}>
                <p className="py-64 font-regular text-h1s text-text-black ">Products</p>
                </Link>

            </div>        
        </nav>
    )

    useEffect(() => {
        fetch("/api/keepLoggedIn").then(res => {
            console.log(res.status)
            return res.json()
        }).then(data => {
            console.log(`in the useeffect ${data}`)
            console.log(data)
            if (data.session_id === null) console.log("JS")
            else {
                setSess_id(`${data.session_id}`)
            }
        })
    })

    const mobileMenuOff = (
        <nav className="flex flex-col mx-8 lg:hidden">
            <div className="flex">
                <button className="mr-auto border-slate-700" onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}>
                    <img className="w-24 h-24" src = "/assets/icons/hamburger.png"/>
                </button>
                <Link href = {sess_id === null ? `/LoginSignUp` : `/Account/${sess_id}`}>
                        <img className = 'w-24 h-24 mx-24' src={`${dirLevel}/assets/icons/account.png`} alt=""/>
                </Link>     
                <img className = 'w-24 h-24 cursor-pointer' src={`${dirLevel}/assets/icons/basket.png`} alt="" onClick={() => setShowBasket(showBasket => !showBasket)}/>    
            </div>
        </nav>
    )


    return (
        <header className="sticky top-0 z-10 w-full px-32 py-16 bg-white border-b-2 md:px-64 md:py-32 border-text-black">

        {/* USED WHEN LG BREAKPOINT IS SATISFIED */}
        <nav className="hidden lg:flex lg:items-center">
            <section className="flex mr-auto">
                <Link href = "/"><p className="pr-64 font-regular text-text-black">Home</p></Link>
                <Link href = "/AboutUs"><p className="pr-64 font-regular text-text-black">About Us</p></Link>
                <Link href = "/Products"><p className="pr-64 font-regular text-text-black">Products</p></Link>
                <p className="font-regular text-text-black ">Contact Us</p>    
            </section>

            <section className="flex w-[50%] mx-auto">
            <Search dirLevel = ".."/>

            </section>

            <section className="flex">
                    <Link href = {sess_id === null ? `/LoginSignUp` : `/Account/${sess_id}`}>
                        <img className = 'w-8 h-8 mx-16 md:w-32 md:h-32' src={`${dirLevel}/assets/icons/account.png`} alt=""/>
                    </Link>
                        <img className = 'w-8 h-8 ml-16 cursor-pointer md:w-32 md:h-32' src={`${dirLevel}/assets/icons/basket.png`} alt="" onClick={() => setShowBasket(showBasket => !showBasket)}/>    
            </section>
        </nav>

            {showMobileMenu ? mobileMenuOn: mobileMenuOff}
            {showBasket && <Basket hideBasket={() => setShowBasket(false)}/>}

    </header>
   
    )
}