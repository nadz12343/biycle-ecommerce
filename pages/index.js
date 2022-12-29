import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Hero from './components/hero/Hero'
import Footer from './components/Footer'
import Browse from './components/browse/Browse'
import ProductCard from './components/ProductCard'

import Ads from './components/Ads'

export default function index() {


    
  return (
    <>

    <Header dirLevel="."/>
    <Hero/>
    <Ads/>

    {/* <!-- BESTSELLERS --> */}

    {/* <h2 class="flex justify-center mb-64 text-black">Our Bestsellers</h2>

    <div class="h-full row-span-5 rounded-md ml-128 mr-128" style={{backgroundImage: "url('./assets/bg/bg-card.png')", backgroundSize: "cover"}}>
        <section class="bg-overlay-opacity grid grid-cols-[min-content_40%_auto] place-items-center  rounded-md">

            <div class="px-32 py-16 mt-32 mr-32 bg-primary rounded-tr-md rounded-br-md text-h4 h-fit place-self-start"><span class="pr-1">£</span>259.99</div>

            <img src="./assets/bikes/b1.png" alt="" class="object-contain h-auto"/>
            <div class="flex flex-col items-center mt-32 ml-64 mr-144 h-fit place-self-start">
                <h3>Road Bike</h3>
                <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus .</p>
                <button class= "px-32 py-16 mt-64 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-white text-h6 w-fit">More information</button>
            </div>

        </section>
    </div>

    <div class="h-full row-span-5 mt-64 rounded-md ml-128 mr-128" style={{backgroundImage: "url('./assets/bg/bg-card.png')", backgroundSize: "cover"}}>
        <section class="bg-overlay-opacity grid grid-cols-[min-content_40%_auto] place-items-center  rounded-md">

            <div class="px-32 py-16 mt-32 mr-32 bg-primary rounded-tr-md rounded-br-md text-h4 h-fit place-self-start"><span class="pr-1">£</span>259.99</div>

            <img src="./assets/bikes/b1.png" alt="" class="object-contain h-auto" />
            <div class="flex flex-col items-center mt-32 ml-64 mr-144 h-fit place-self-start">
                <h3>Road Bike</h3>
                <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus .</p>
                <button class= "px-32 py-16 mt-64 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-white text-h6 w-fit">More information</button>

            </div>

        </section>
    </div> */}
    
    {/* <!-- END OF BESTSELLERS --> */}

    {/* <!-- SERVICING --> */}

    <div className="mt-256"style = {{backgroundImage: "url('./assets/bg/servicing-bg.jpg')", backgroundSize: "cover"}}>

        <div className="h-full bg-overlay-opacity grid grid-rows-[h-fit_60%-auto] lg:grid-cols-[60%_auto]">
            <h3 className="px-40 pt-40 text-center h-fit lg:hidden text-h2s">Our simple bicycle servicing process</h3>
            <img src="./assets/bikes/b1.png" alt=""/>

                <div className="flex flex-col items-center justify-center pt-32 text-center">
                    <h3 className="hidden pb-64 h-fit lg:block">Our simple bicycle servicing process</h3>

                    <div className="grid items-center w-full grid-cols-2 grid-rows-2 gap-32 m-4 text-white steps">
                        <section>
                            <h5 className="md:h5 text-h4s" id = "tune-up">
                                01. Tune-ups & builds
                            </h5>
                            <p className='text-ps md:p'>
                                We have all the necessary parts to create a bike that fits you perfectly
                            </p>
                        </section>
                        <section>
                            <h5 className="md:h5 text-h4s" id = "adjust">
                                02. Personal bike fit
                            </h5>
                            <p className='text-ps md:p'>
                                Adjusment of height, pedals, handlebar for the most comfortable ride            
                            </p>
                        </section>                    
                        <section>
                            <h5 className="md:h5 text-h4s">
                                03. Adjust & install
                            </h5>
                            <p className='text-ps md:p'>
                                Need a bike repair? We offer a range of spare parts and quality service
                            </p>
                        </section>                    
                        <section>
                            <h5 className="md:h5 text-h4s">
                                04. Free delivery
                            </h5>
                            <p className='text-ps md:p'>
                                Choose a bike at our shop and get free delivery to any location in the city                        
                            </p>
                        </section>
                    </div>

                </div>

        </div>
    
    </div>

    {/* <!-- WHY US SECTION --> */}
    <h1 class="text-center text-h1s md:text-h1 text-text-black mt-72">Why choose us?</h1>

    <div style = {{backgroundImage: "url('./assets/bg/why-us-bg.jpg')", backgroundSize: "cover"}} className="">
        <section className="flex bg-overlay-opacity">
            {/* <!-- <img src="./why-us/fast-delivery.png" alt="" class="text-gradient-to-r from-primary to-secondary"> --> */}
                <div className="flex flex-col items-center justify-center w-full my-24">
                    <img src="./assets/why-us/fast-delivery.svg" alt="" className="w-64 h-64 md:w-128 md:h-128"/>
                    <h4 className="text-white text-h5s md:text-h4">One day delivery</h4>
                    <p className="text-center text-text-color h-fit text-ps md:text-p">You can always count on us for a fast speedy delivery</p>
                </div>
                
                <div className="flex flex-col items-center justify-center w-full my-24">
                    <img src="./assets/why-us/fast-delivery.svg" alt="" className="w-64 h-64 md:w-128 md:h-128"/>
                    <h4 className="text-white text-h5s md:text-h4">One day delivery</h4>
                    <p className="text-center text-text-color h-fit text-ps md:text-p">You can always count on us for a fast speedy delivery</p>
                </div>

                <div className="flex flex-col items-center justify-center w-full my-24">
                    <img src="./assets/why-us/fast-delivery.svg" alt="" className="w-64 h-64 md:w-128 md:h-128"/>
                    <h4 className="text-white text-h5s md:text-h4">One day delivery</h4>
                    <p className="text-center text-text-color h-fit text-ps md:text-p">You can always count on us for a fast speedy delivery</p>
                </div>


    
        </section>
    </div>
 

    {/* <!-- FOOTER --> */}
    <Footer/>
    <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js" async></script>

    </>
  )
}
