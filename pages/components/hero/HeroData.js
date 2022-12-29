

export default function HeroData({imgPath, header, shortMsg, buttonMsg, frameIndex}){

    return(
    <div style={{backgroundImage: `url(${imgPath})`, backgroundSize: 'cover' }} class="" id = "hero">
        <div class=" h-full bg-overlay-opacity">

            <div class = 'text-white w-fit pt-32 pl-24 md:pt-160 md:pl-112'>
                <h1 className="text-h3s md:text-h1">{header}</h1>

                <p class=" pt-64 md:w-[400px] md:text-p text-ps h-fit">{shortMsg}</p>
                
                <button class= "px-32 py-16 mt-64 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-black text-h5s md:text-h6 w-fit">
                    {buttonMsg} <img src = "/assets/icons/next.png" className="inline-block w-16 h-16 md:w-24 md:h-24"/>
                </button>
            </div>

            {/* USED WHEN MD BREAKPOINT IS SATISFIED */}
            <div class="md:flex md:justify-center w-full mt-64 hidden ">
                <iconify-icon icon="material-symbols:circle" class="mb-32 frame-hero" width = "32" height= "32"  id = "f0" style={{color: frameIndex === 0? "white": "rgba(0,0,0,.5)"}}></iconify-icon>
                <iconify-icon icon="material-symbols:circle" class="px-32 mb-32 frame-hero text-overlay" width = "32" height= "32" id = "f1" style={{color: frameIndex === 1? "white": "rgba(0,0,0,.5)"}}></iconify-icon>
                <iconify-icon icon="material-symbols:circle" class="mb-32 frame-hero text-overlay" width = "32" height= "32" id = "f2" style={{color: frameIndex === 2? "white": "rgba(0,0,0,.5)"}}></iconify-icon>
            </div>

            {/* USED WHEN FOR GENERAL BREAKPOINT */}
            <div class="flex justify-center w-full mt-64 md:hidden ">
                <iconify-icon icon="material-symbols:circle" class="mb-32 frame-hero" width = "16" height= "16"  id = "f0" style={{color: frameIndex === 0? "white": "rgba(0,0,0,.5)"}}></iconify-icon>
                <iconify-icon icon="material-symbols:circle" class="px-32 mb-32 frame-hero text-overlay" width = "16" height= "16" id = "f1" style={{color: frameIndex === 1? "white": "rgba(0,0,0,.5)"}}></iconify-icon>
                <iconify-icon icon="material-symbols:circle" class="mb-32 frame-hero text-overlay" width = "16" height= "16" id = "f2" style={{color: frameIndex === 2? "white": "rgba(0,0,0,.5)"}}></iconify-icon>
            </div>
        </div>    
    </div>
    )
}