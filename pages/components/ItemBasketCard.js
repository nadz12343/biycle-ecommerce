
import { useEffect, useState } from "react"
import Image from "next/image"
export default function ItemBasketCard({name, imgPath, price, quantity, key }){


    const originalPrice = 324.99
    // const [quantity, setQuantity] = useState(1)
    // const [price, setPrice] = useState(originalPrice)
 

    // useEffect(() => {
    //     setPrice(price => originalPrice*quantity)

    // },[quantity])

    function increaseQuantity(){
        if (quantity <3) setQuantity(quantity => quantity + 1)
    }

    function decreaseQuantity(){
        if (quantity > 0) setQuantity(quantity => quantity - 1)
    }

    function alterPrice(){
        setPrice(price => price*quantity)
    }

    return (
        <div className="flex flex-wrap w-full mb-48 bg-white border-b-2 h-fit border-grey-400" id = {key}>
            {/* <img src = "./assets/bicycles/mountains/carrera/1.jpeg" className="w-[75px] height-[75px] pr-32"></img> */}
            <div className="w-[40%] relative h-full">
                <Image src = {`/${imgPath}/1.jpeg`} width= '100' height={100} className="" style={{objectFit: 'contain'}}></Image>
            </div>

            <h4 className="pt-16 pl-16 text-h6s">{name}</h4>

            <div className="pt-16 ml-auto mr-32">
                <p className="font-bold text-ps">£{price}</p>
                <div className="flex items-center px-16 py-8 mt-16 border-2 rounded-md border-grey-400">
                    <button className="text-ps" onClick={decreaseQuantity}>-</button>
                    <p className="px-8 text-ps">{quantity}</p>
                    <button className="text-ps" onClick={increaseQuantity}>+</button>
                </div>
            </div>

        </div>
    )
}