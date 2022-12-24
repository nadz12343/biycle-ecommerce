
import Header from "./components/Header"
export default function AboutUs(){
    return(
        <>
                <Header dirLevel={"."}/>
                <div className="h-[fit]" style={{backgroundImage: "url('../assets/bg/hero/hero.jpg')", backgroundSize:"cover"}}>
                    <div className="h-full bg-overlay-opacity">
                        <h1 className="py-64 pl-128">About Us</h1>
                    </div>
                </div>

            <section className="flex flex-col m-128">
                <h2 className="mb-32 text-black">Our Story</h2>
                <p>I am a highly organised and motivated professional Fashion Designer with a wealth of experience in a range of 
                    photographic styles and services. Just run your Fashion Store which will be a reflection of you a sexy and confident woman 
                    that shines with her unique style. Our goal is to make fashion as easy possible. We bring you the best of glam and sexy 
                    clothes while keeping in mind that high quality things arent always too expensive. Our goal is to make fashion as easy as 
                    possible, that is why we add carefully selected products on a daily basis, and this is essential for us. This is how you keep 
                    up with the times in style! We ship worldwide & space!
                </p>
                <button className="self-start mt-32">Read more about our story</button>
            </section>


            <section className = "flex items-center justify-center m-128 h-[600px]">
                <iframe id="ytplayer" type="text/html" width="100%" height="100%" src="https://www.youtube.com/embed/loo-BRfuf34?autoplay=1&origin=http://example.com" frameborder="0"></iframe>
            </section>

            <h2 className="text-black m-128"> Meet our team</h2>
            <section className="">

            </section>
        </>
    )
}