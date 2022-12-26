
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
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a 
                    Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin 
                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
                    literature, discovered the undoubtable source.
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