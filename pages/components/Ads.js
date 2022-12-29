

export default function Ads() {



    return (
        <>

    {/* <!-- BROWSE ADS --> */}
    <div style={{backgroundImage: "url('./assets/bg/browse/browse.jpg')", backgroundSize: 'cover' }}className="w-full h-full mr-64 mt-128 lg:hidden">
        {/* <!-- overlay --> */}
        <div className = "h-full bg-overlay-opacity">

            {/* <!-- CONTENT --> */}
            <div className="flex flex-col h-full px-48">

                <h2 className="mt-48 font-extrabold text-h3s">Browse our bicycles</h2>
                <p className="w-1/2 mt-32 text-text-white text-ps md:text-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloraliquid 
                    ullam officia amet voluptates laboriosam suscipit eum est.
                </p>
                <button class= "px-32 py-16 my-64 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-black text-h5s md:text-h6 w-fit">
                    Explore Our Bicycles! <img src = "/assets/icons/next.png" className="inline-block w-8 h-8"/>
                </button>
               
            </div>

        </div>
        
    </div>

        {/* <!-- CLOTHING ADS --> */}
        <div class="h-full row-span-5 rounded-md w-full lg:hidden mt-48" style={{backgroundImage: "url('./assets/bg/clothings/clothing.jpg')", backgroundSize: 'cover'}}>
        <div class = "h-full bg-overlay-opacity">

                <div class="flex flex-col h-full px-48">

                    <h3 class="mt-48 text-h3s">Our Clothings</h3>
                    <p class="mt-32 text-text-color text-ps md:text-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloraliquid 
                        ullam officia amet voluptates laboriosam suscipit eum est.
                    </p>
                    <button class= "px-32 py-16 my-64 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-black text-h5s md:text-h6 w-fit">
                        Check Our Clothes Out! <img src = "/assets/icons/next.png" className="inline-block w-8 h-8"/>
                    </button>

                </div>

            
        </div>
    </div>


    {/* USED WHEN lg BREAKPOINT HAS OCCURED */}
    
            {/* <!-- ADS --> */}
    <div class="hidden lg:grid grid-cols-[70%_30%] grid-rows-[60%_auto] mt-256 mb-128 mx-64 aspect-video">

    {/* <!-- BROWSE ADS --> */}
    <div style={{backgroundImage: "url('./assets/bg/browse/browse.jpg')", backgroundSize: 'cover' }}class="h-full mb-64 mr-64 rounded-md">
        {/* <!-- overlay --> */}
        <div class = "h-full rounded-md bg-overlay-opacity">

            {/* <!-- CONTENT --> */}
            <div class="flex flex-col h-full px-48">

                <h2 class="mt-48 font-extrabold">Browse our bicycles</h2>
                <p class="w-1/2 mt-32 text-text-white text-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloraliquid 
                    ullam officia amet voluptates laboriosam suscipit eum est.
                </p>
                <button class= "px-32 py-16 my-64 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-black text-h5s md:text-h6 w-fit">
                    Explore Our Bicycles! <img src = "/assets/icons/next.png" className="inline-block w-24 h-24 ml-8"/>
                </button>




            </div>

        </div>
        
    </div>


    {/* <!-- CLOTHING ADS --> */}
    <div class="h-full row-span-5 rounded-md" style={{backgroundImage: "url('./assets/bg/clothings/clothing.jpg')", backgroundSize: 'cover'}}>
        <div class = "h-full rounded-md bg-overlay-opacity">

                <div class="flex flex-col items-center h-full px-48">

                    <h3 class="mt-48">Our Clothings</h3>
                    <p class="mt-32 text-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloraliquid 
                        ullam officia amet voluptates laboriosam suscipit eum est.
                    </p>
                    <button class= "px-32 py-16 my-64 font-bold rounded-full bg-gradient-to-r flex items-center from-primary to-secondary text-text-black text-h5s md:text-h6 w-fit">
                        Check Our Clothes Out! <img src = "/assets/icons/next.png" className="inline-block w-32 h-32 ml-8"/>
                    </button>


                </div>

            
        </div>
    </div>

    {/* <!-- SERVICING ADS --> */}
    <div class="h-full row-span-2 mt-64 mr-64 rounded-md" style={{backgroundImage: "url('./assets/bg/servicing-bg.jpg')", backgroundSize: 'cover'}}>
        <div class="h-full rounded-md bg-overlay-opacity">
            
            <div class="flex flex-col h-full px-48">
                <h3 class="mt-48">Try our service for FREE</h3>
            </div>
        </div>
    </div>
    {/* <!-- <div class="h-full mt-64 bg-red-900 rounded-md">d</div> --> */}
</div>
</>
    )
}