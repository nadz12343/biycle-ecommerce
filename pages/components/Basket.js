
import ItemBasketCard from "./ItemBasketCard"
import { useEffect, useState } from "react"
export default function Basket({hideBasket}){

    const [rawBasket, setRawBasket] = useState(null)

    const [userId, setUserId] = useState()

    useEffect(() => {

        fetch("/api/fetchUserBasket").then(res => res.status === 200 ? res.json() : null).then(data => {
            setRawBasket(data)
        })

        
    }, [])

    return(

            <div className="text-black w-full absolute top-0 left-0 lg:left-auto lg:right-0 h-[100vh] lg:w-[40%] bg-white flex flex-col">

                <div className="flex flex-row px-32 py-16 border-b-2 border-slate-400">
                    <h1 className="text-black text-h1s md:text-h1 h-fit">Basket</h1>
                    <button className="ml-auto" onClick={hideBasket}>X</button>
                </div>

                <div className="h-full overflow-scroll ">
                    {rawBasket !== null ? 
                     rawBasket.items.map((item, index) => <ItemBasketCard name = {item.name} imgPath = {item.imgPath} price = {item.price} quantity = {item.quantity}  key = {index}/>) 
                     : <p className="p-32 font-bold text-black">please login to add items to basket</p>}
                </div>


                <div className="flex flex-row justify-around mt-auto mb-64 border-2 border-grey-400">
                    <button>Clear Basket</button>
                    <button>Checkout</button>
                </div>

             </div>

    )
}