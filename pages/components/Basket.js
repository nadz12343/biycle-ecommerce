
import {BasketContextProvider,BasketContextConsumer} from "./contexts/BasketContext"
import { useContext } from "react"
import ItemBasketCard from "./ItemBasketCard"
export default function Basket(){

    
const val = useContext(BasketContextProvider, BasketContextConsumer)



    return(

        <BasketContextConsumer>

            {context => (
             <div className="text-black w-full absolute top-0 left-0 lg:left-auto lg:right-0 h-[100vh] lg:w-[40%] bg-white flex flex-col">
                <h1 className="pb-32 text-black text-h1s md:text-h1 h-fit">Basket</h1>

                <div className="overflow-scroll">
                {context.basket.map((item, index) => <ItemBasketCard key = {index}/>)}
                </div>
                {/* {context.basket.map(item => <p className="pb-16">{item}</p>)} */}


                <div className="flex flex-row justify-around mt-auto border-2 border-grey-400">
                    <button>Clear Basket</button>
                    <button>Checkout</button>
                </div>

             </div>
            )}            
        </BasketContextConsumer>
    )
}