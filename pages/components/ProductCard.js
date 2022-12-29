
import Image from "next/image"
import Link from "next/link"
export default function ProductCard({width, height, id, name, category, type, brand, price, imgpath, rating, bestseller, dirLevel}){

    const className_ = `w-[50%] sm:w-[40%] md:w-[33%] lg:w-[25%] h-fit grid grid-rows-[40%_auto] my-48 sm:my-48 md:mt-256 m-32 inline`
    return (
        <div className= {className_} style={{backgroundColor: "#FFFFFF"}}>

            <div className="flex items-center justify-center pt-24">
                <div className="w-full h-full ml-[30%] md:ml-64" style={{backgroundImage: `url('${dirLevel}/${imgpath}/1.jpeg')`, backgroundSize:"contain", backgroundRepeat: "no-repeat"}}></div>
            </div>


            <div className="mt-32 rounded-md h-fit" style={{backgroundImage: `url(${dirLevel}/assets/bg/bg-card.png)`, backgroundSize: "cover", backdropFilter: 'blur(5px)'}}>

                <div className = "h-full rounded-md bg-overlay-opacity">
                    <h6 className="pt-32 px-40 text-white w-full h-[75px] md:h-[100px] overflow-hidden md:text-h6 sm:text-h5s text-ps">{name}</h6>
                    <div className="pt-8 pl-40 text-primary md:text-h6 text-h5s">&#9733;&#9733;&#9733;</div>
                    <div className="py-8 pl-40 mt-16 mr-32 md:mt-16 text-h5s text-primary rounded-tr-md rounded-br-md md:text-h5 h-fit place-self-start">
                        <span class="pr-1">£</span>{price}
                    </div>
                    <Link href = {`/products/${id}`} className="flex justify-center" >
                        <button className= "px-16 py-8 my-32 font-bold rounded-full md:px-32 md:py-16 md:my-64 sm:text-h5s bg-gradient-to-r from-primary to-secondary text-text-white text-ps md:text-h6">
                            More information <img src = "/assets/icons/next.png" className="inline-block w-8 h-8 md:w-24 md:h-24"/>
                        </button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}