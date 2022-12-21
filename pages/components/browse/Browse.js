
export default function Browse({imgPath, header, shortMsg, buttonMsg, frameIndex}){
    return (        
        // {/* <!-- BROWSE ADS --> */}
    <div style={{backgroundImage: "url('./assets/bg/browse/browse.jpg')", backgroundSize: 'cover' }} class="h-full mb-64 mr-64 rounded-md">
        {/* <!-- overlay --> */}
        <div class = "h-full rounded-md bg-overlay-opacity">

            {/* <!-- CONTENT --> */}
            <div class="flex flex-col h-full px-48">

                <h2 class="mt-48 font-extrabold">Browse our bicycles</h2>
                <p class="w-1/2 mt-32 text-text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloraliquid 
                    ullam officia amet voluptates laboriosam suscipit eum est.
                </p>
                <button class= "px-32 py-16 mt-64 mb-auto font-bold text-black rounded-full bg-gradient-to-r from-primary to-secondary text-h6 w-fit">Explore Collections!</button>


                <div class="flex justify-center w-full mt-64">
                <iconify-icon icon="material-symbols:circle" class="mb-32 frame-hero" width = "32" height= "32"  id = "f0" style={{color: frameIndex === 0? "white": "rgba(0,0,0,.5)"}}></iconify-icon>
                <iconify-icon icon="material-symbols:circle" class="px-32 mb-32 frame-hero text-overlay" width = "32" height= "32" id = "f1" style={{color: frameIndex === 1? "white": "rgba(0,0,0,.5)"}}></iconify-icon>
                <iconify-icon icon="material-symbols:circle" class="mb-32 frame-hero text-overlay" width = "32" height= "32" id = "f2" style={{color: frameIndex === 2? "white": "rgba(0,0,0,.5)"}}></iconify-icon>
            </div>
            </div>

        </div>
        
    </div>
    )
}