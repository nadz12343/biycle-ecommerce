

export default function Ads() {



    return (
        <>

    {/* <!-- BROWSE ADS --> */}
    <div style={{backgroundImage: "url('./assets/bg/browse/browse.jpg')", backgroundSize: 'cover' }}className="w-full h-full mr-64 mt-128 md:hidden">
        {/* <!-- overlay --> */}
        <div className = "h-full bg-overlay-opacity">

            {/* <!-- CONTENT --> */}
            <div className="flex flex-col h-full px-48">

                <h2 className="mt-48 font-extrabold text-h3s">Browse our bicycles</h2>
                <p className="w-1/2 mt-32 text-text-white text-ps">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloraliquid 
                    ullam officia amet voluptates laboriosam suscipit eum est.
                </p>
                <button className= "px-32 py-16 mt-64 mb-auto font-bold text-black rounded-full bg-gradient-to-r from-primary to-secondary text-h4s w-fit">Explore Collections!</button>


                <div className="flex justify-center w-full text-white">
                    <iconify-icon icon="material-symbols:circle" className="mb-32"></iconify-icon>
                    <iconify-icon icon="material-symbols:circle" className="px-32 mb-32"></iconify-icon>
                    <iconify-icon icon="material-symbols:circle" className="mb-32"></iconify-icon>
                </div>
            </div>

        </div>
        
    </div>

        {/* <!-- CLOTHING ADS --> */}
        <div class="h-full row-span-5 rounded-md w-full md:hidden mt-48" style={{backgroundImage: "url('./assets/bg/clothings/clothing.jpg')", backgroundSize: 'cover'}}>
        <div class = "h-full bg-overlay-opacity">

                <div class="flex flex-col h-full px-48">

                    <h3 class="mt-48 text-h3s">Our Clothings</h3>
                    <p class="mt-32 text-text-color text-ps">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloraliquid 
                        ullam officia amet voluptates laboriosam suscipit eum est.
                    </p>
                    <button class= "px-32 py-16 mt-64 mb-auto font-bold text-black rounded-full bg-gradient-to-r from-primary to-secondary text-h4s w-fit">Explore Collections!</button>


                    <div class="flex justify-center w-full text-white">
                        <iconify-icon icon="material-symbols:circle" class="mb-32"></iconify-icon>
                        <iconify-icon icon="material-symbols:circle" class="px-32 mb-32"></iconify-icon>
                        <iconify-icon icon="material-symbols:circle" class="mb-32"></iconify-icon>
                    </div>
                </div>

            
        </div>
    </div>


    {/* USED WHEN MD BREAKPOINT HAS OCCURED */}
    
            {/* <!-- ADS --> */}
    <div class="hidden md:grid grid-cols-[70%_30%] grid-rows-[60%_auto] mt-256 mb-128 mx-64 aspect-video">

    {/* <!-- BROWSE ADS --> */}
    <div style={{backgroundImage: "url('./assets/bg/browse/browse.jpg')", backgroundSize: 'cover' }}class="h-full mb-64 mr-64 rounded-md">
        {/* <!-- overlay --> */}
        <div class = "h-full rounded-md bg-overlay-opacity">

            {/* <!-- CONTENT --> */}
            <div class="flex flex-col h-full px-48">

                <h2 class="mt-48 font-extrabold">Browse our bicycles</h2>
                <p class="w-1/2 mt-32 text-text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloraliquid 
                    ullam officia amet voluptates laboriosam suscipit eum est.
                </p>
                <button class= "px-32 py-16 mt-64 mb-auto font-bold text-black rounded-full bg-gradient-to-r from-primary to-secondary text-h6 w-fit">Explore Collections!</button>


                <div class="flex justify-center w-full text-white">
                    <iconify-icon icon="material-symbols:circle" class="mb-32"></iconify-icon>
                    <iconify-icon icon="material-symbols:circle" class="px-32 mb-32"></iconify-icon>
                    <iconify-icon icon="material-symbols:circle" class="mb-32"></iconify-icon>
                </div>
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
                    <button class= "px-32 py-16 mt-64 mb-auto font-bold text-black rounded-full bg-gradient-to-r from-primary to-secondary text-h6 w-fit">Explore Collections!</button>


                    <div class="flex justify-center w-full text-white">
                        <iconify-icon icon="material-symbols:circle" class="mb-32"></iconify-icon>
                        <iconify-icon icon="material-symbols:circle" class="px-32 mb-32"></iconify-icon>
                        <iconify-icon icon="material-symbols:circle" class="mb-32"></iconify-icon>
                    </div>
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