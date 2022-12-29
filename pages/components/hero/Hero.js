import { useEffect, useState } from "react"

import HeroData from "./HeroData"
import data from "../../../hero"

export default function Hero(){


    const heroImgPaths = ['./assets/bg/hero/hero.jpg', './assets/bg/hero/hero2.jpg', './assets/bg/hero/hero3.jpg']

    let currentFrameIndex = 0

    const frames = data.map((e, index) => {
        return <HeroData imgPath = {e.imgPath} header = {e.header} shortMsg={e.shortMsg} buttonMsg = {e.buttonMsg} frameIndex = {index} key = {index} />
    })


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
        if (currentFrameIndex > frames.length-1) {
            currentFrameIndex = 0
            setCurrentFrame(frames[currentFrameIndex])
        } else {
            setCurrentFrame(frames[currentFrameIndex])
        }
    }
    

    useEffect(() => {
        const autoImgCarousel = setInterval(() =>switchFrame(), 4000)
    
        return () => clearInterval(autoImgCarousel)
    }, [])


    return (

    currentFrame

    )
}