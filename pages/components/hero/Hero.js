import { useEffect, useState } from "react"

import HeroData from "./HeroData"
import data from "../../../hero"
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

export default function Hero(){


    //current servicing step we are on
    // let step = 0

    // //creating the transition effect between each of the servicing step
    // function transitionStep(){
    //     let steps = document.getElementsByClassName("step")

    //     if (step == steps.length) step = 0 //when the servicing step value doesnt exist
    //     // steps[0].style.color = "black"
    //     for (let i = 0; i < steps.length; i++) {
    //         //when we are not on our current servicing step
    //         if (i !== step) {
    //             steps[i].style.color = "rgba(255, 255, 255, 0.19)"
    //             steps[i].style.transition = "color 2s"

    //             steps[i].nextElementSibling.style.color = "rgba(255, 255, 255, 0.1)"
    //             steps[i].nextElementSibling.style.transition = "color 2s"

    //         }
    //     }
    //     //do this for our current servicing step
    //     steps[step].style.color = "white"
    //     steps[step].style.transition = "color 2s"
    //     steps[step].nextElementSibling.style.color = "white"
    //     steps[step].nextElementSibling.style.transition = "color 2s"
    //     //goto next servicing step
    //     step += 1
    // }

    // //REACT way of using setInterval functions
    // useEffect(() => {
    //    const inter = setInterval(() =>transitionStep(), 4000)
    
    // return () => clearInterval(inter)}
    // ,[])

    const heroImgPaths = ['./assets/bg/hero/hero.jpg', './assets/bg/hero/hero2.jpg', './assets/bg/hero/hero3.jpg']

    let currentFrameIndex = 0

    const frames = data.map((e, index) => {
        return <HeroData imgPath = {e.imgPath} header = {e.header} shortMsg={e.shortMsg} buttonMsg = {e.buttonMsg} frameIndex = {index} key = {index} />
    })
 //   console.log(frames)




    // const [currentFrameIndex, setCurrentFrameIndex] = useState(0)
    const [currentFrame, setCurrentFrame] = useState(frames[currentFrameIndex])

    function carousel(){

        currentImg += 1

        if (currentImg === heroImgPaths.length) currentImg = 0

        //transition of background image
        const heroTag = document.getElementById('hero')
        heroTag.style.transition = "background-image 1s ease"


        heroTag.style.backgroundImage = `url(${heroImgPaths[currentImg]})`
        heroTag.style.transition = "background-image 1s ease"

        //transition of frame tag
        const framesTag = document.getElementsByClassName('frame-hero')

        for (let i = 0; i < 3; i++){
            framesTag[currentImg].style.transition = "color 1s ease"

            if (i===currentImg) framesTag[currentImg].style.color = "white"
            else framesTag[i].style.color = "rgba(0,0,0,.5)"      
        }

    }

    function switchFrame(){
        (currentFrameIndex+=1)
     //   console.log(currentFrameIndex)
        if (currentFrameIndex > frames.length-1) {
            // setCurrentFrameIndex(0)
            currentFrameIndex = 0
            setCurrentFrame(frames[currentFrameIndex])
        } else {
            // setCurrentFrameIndex(currentFrameIndex+1)
            setCurrentFrame(frames[currentFrameIndex])
        }
    }
    

    useEffect(() => {
        const autoImgCarousel = setInterval(() =>switchFrame(), 4000)
    
        return () => clearInterval(autoImgCarousel)
    }, [])


    return (
    // <div style={{backgroundImage: "url('./assets/bg/hero/hero.jpg')", backgroundSize: 'cover' }} class="" id = "hero">
    //     <div class="h-full bg-overlay-opacity">

    //         <div class = 'flex flex-col text-white w-fit pt-160 pl-112'>
    //             <h1>New Collections</h1>

    //             <p class=" pt-64 w-[400px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    //                 Accusamus doloraliquid ullam officia amet voluptates laboriosam 
    //                 suscipit eum est.
    //             </p>
                
    //             <button class= "px-32 py-16 mt-64 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-black text-h6 w-fit">Explore Collections!</button>
    //         </div>

    //         <div class="flex justify-center w-full mt-64">
    //             <iconify-icon icon="material-symbols:circle" class="mb-32 frame-hero text-white" width = "32" height= "32"  id = "f0"></iconify-icon>
    //             <iconify-icon icon="material-symbols:circle" class="px-32 mb-32 frame-hero text-overlay" width = "32" height= "32" id = "f1"></iconify-icon>
    //             <iconify-icon icon="material-symbols:circle" class="mb-32 frame-hero text-overlay" width = "32" height= "32" id = "f2"></iconify-icon>
    //         </div>
    //     </div>    
    // </div>

    currentFrame
    

    )
}