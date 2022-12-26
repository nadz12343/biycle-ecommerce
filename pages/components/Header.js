
import Link from "next/link"
import { useState } from "react"

import Basket from "./Basket"
import Search from "./Search"
import { BasketContextProvider } from "./contexts/BasketContext"
export default function Header({dirLevel}){

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const [showBasket, setShowBasket] = useState(false)

    const mobileMenuOn= (
        <nav className="flex flex-col md:hidden h-[100vh] ">
            <button className="self-start ml-auto border-b-2 border-slate-700" onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}>
                Hover Menu
            </button>
            <div className="flex flex-col items-center justify-around w-full h-full">
                <Link href = "/" onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}><p className="font-regular text-h3 text-text-black">Home</p></Link>
                <Link href = "/AboutUs" onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}><p className="font-regular text-h3 text-text-black">About Us</p></Link>
                <Link href = "/Products" onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}><p className="font-regular text-h3 text-text-black">Products</p></Link>
                <img className = 'w-8 h-8 mx-16 md:w-32 md:h-32' src={`${dirLevel}/assets/icons/basket.png`} alt="" onClick={() => setShowBasket(showBasket => !showBasket)}/>    

            </div>        
        </nav>
    )

    const mobileMenuOff = (
        <nav className="flex flex-col md:hidden">
            <button className="self-start ml-auto" onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}>
                Hover Menu
            </button>   
        </nav>
    )


    return (
        <header className="sticky top-0 z-10 w-full px-64 py-32 bg-white border-b-2 border-text-black">

        {/* USED WHEN MD BREAKPOINT IS SATISFIED */}
        <nav className="hidden md:flex md:items-center">
            <section className="flex mr-auto">
                <Link href = "/"><p className="px-64 font-regular text-text-black">Home</p></Link>
                <Link href = "/AboutUs"><p className="pr-64 font-regular text-text-black">About Us</p></Link>
                <Link href = "/Products"><p className="pr-64 font-regular text-text-black">Products</p></Link>
                <p className="font-regular text-text-black ">Contact Us</p>    
    
            </section>

            <section className="flex w-[50%] mx-auto">
            <Search dirLevel = ".."/>

            </section>

            <section className="flex">
                    <Link href = "/LoginSignUp">
                        <img className = 'w-8 h-8 mx-16 md:w-32 md:h-32' src={`${dirLevel}/assets/icons/account.png`} alt=""/>
                    </Link>
                        <img className = 'w-8 h-8 mx-16 md:w-32 md:h-32' src={`${dirLevel}/assets/icons/basket.png`} alt="" onClick={() => setShowBasket(showBasket => !showBasket)}/>    
            </section>
        </nav>

        <BasketContextProvider>
            {showMobileMenu ? mobileMenuOn: mobileMenuOff}
            {showBasket && <Basket/>}
        </BasketContextProvider>

    </header>
   
    )
}