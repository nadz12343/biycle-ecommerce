import Header from "./components/Header"

export default function LoginSignup(){

    return (
        <>
            <Header/>

            <div className="absolute z-[-1] w-fit h-fit before:bg-overlay-opacity before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0">
                <video autoPlay source src ={ "./assets/vids/vid.mp4"} loop className="w-auto h-full">
                    {/* <source src = "./assets/vids/test.mp4" ></source> */}
                </video>
            </div>

            <div className="grid grid-cols-[30%_auto] m-64">
                <div className="flex flex-col items-center mt-32">
                    <h1 className="text-white">Login</h1>

                    <p>Already have an account with us? Login!</p>

                    <input className = "py-24 pl-16 pr-48 font-bold text-white bg-transparent border-2 rounded-md mt-128 border-primary text-h6" placeholder="Email"  type = "email"/>
                    <input className = "py-24 pl-16 pr-48 mt-32 font-bold text-white bg-transparent border-2 rounded-md border-primary text-h6" placeholder="Password" type = "password"/>
                    <button className= "px-32 py-16 mx-auto mt-64 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-white text-h6 w-fit">
                        Login
                    </button>
                </div>


                <div className="flex flex-col items-center mt-32">
                    <h1 className="text-text-black">Sign Up</h1>


                    <p>Don't have an account with us? Sign-Up!</p>

                    <div>
                        <input className = "py-24 pl-16 pr-48 mr-32 font-bold border-2 mt-128 border-primary text-h6 text-text-black" placeholder="Name"  type = "text"/>
                        <input className = "py-24 pl-16 pr-48 mt-32 font-bold border-2 rounded-md border-primary text-h6 text-text-black" placeholder="Email"  type = "email"/>
                    </div>
                    
                    <div>
                        <input className = "py-24 pl-16 pr-48 mt-32 mr-32 font-bold border-2 rounded-md border-primary text-h6 text-text-black" placeholder="Password" type = "password"/>
                        <input className = "py-24 pl-16 pr-48 mt-32 font-bold border-2 rounded-md border-primary text-h6 text-text-black" placeholder="Confirm Password" type = "password"/>
                    </div>
        
                    <button className= "px-32 py-16 mx-auto mt-64 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-white text-h6 w-fit">
                                Login
                    </button>

                </div>
            </div>
        </>
    )
}