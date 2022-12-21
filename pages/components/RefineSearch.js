
import Link from "next/link"

export default function RefineSearch(){


    return (
    <section className="sticky top-0 z-20 w-full px-64 py-32 bg-white border-b-2 border-text-black">
        <div className="flex items-center justify-center">
            <section className="flex mr-auto">

            
                <div className="px-64 font-bold text-text-black">
                    Price: 
                    <span className="font-regular">From:</span>
                    <input type = "number" className = "border-2 border-slate-700"/>
                    <span className="font-regular">To:</span> 
                    <input type = "number" className = "border-2 border-slate-700"/>  
                </div>

                <select className="px-64 font-bold text-text-black">
                    Product Category 
                    {/* <span className="font-regular">From:</span>
                    <input type = "number" className = "border-2 border-slate-700"/>
                    <span className="font-regular">To:</span> 
                    <input type = "number" className = "border-2 border-slate-700"/>   */}
                </select>


                <p className="pr-64 font-bold text-text-black">About Us</p>
                <Link href = "/Products"><p class="pr-64 font-bold text-text-black">Products</p></Link>
                <p className="font-bold text-text-black ">Contact Us</p>    
    
            </section>

            <button className= "px-32 py-16 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-white text-h6 w-fit">
                Refine
            </button>            
        </div>
    </section>
    )
}