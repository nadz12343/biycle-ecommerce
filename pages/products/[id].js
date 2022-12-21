
import clientPromise from "../../lib/mongodb";

import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"

import { useState, useEffect } from "react"
import {useRouter} from "next/router"
export const getStaticPaths = async () => {
    // const res = await fetch("http://localhost:3000/api/fetchProducts", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    // const data = await res.json()

    const client = await clientPromise;

    const db = client.db("bcomm");

    const products = await db.collection("products").find({}).toArray();

    // console.log((products[0]._id.toString()))

    const paths = products.map(product => {
        return {
            params:{id: product._id.toString()}  
        }
    })

    return {
        paths:  paths,
        fallback: false
    }
}

 
export const getStaticProps = async (context) => {
    const id = context.params.id

    // console.log(context)

    const {ObjectId} = require('mongodb'); // or ObjectID 
    const fs = require('fs')

    const client = await clientPromise;
    
    const db = client.db("bcomm");

    // const splitted = req.url.split("/");
    // const id = splitted[splitted.length-1]
    
    let o_id = new ObjectId(id);   // id as a string is passed

    let suffix
    const product = await db.collection("products").findOne({"_id":o_id});

    let imgs = fs.readdirSync(`public/${product.imgPath}`)
    suffix = imgs.filter(f => typeof parseInt(f[0]) === "number" && parseInt(f[0]))

    // console.log(product)

 

    //   console.log(suffix)
    return {
        props: {product: {
            _id: context.params.id,
            name :product.name,
            category: product.category,
            type: product.type,
            brand: product.brand,
            price: product.price,
            rating: product.rating,
            imgPath: product.imgPath,
            bestseller: product.bestSeller,
            desc: product.desc,
            imgSuffix: suffix,
            // relatedproducts: product.relatedProducts       
        }}
    }
} 

export default function W({product}){
    // console.log(product)
    return (
        <ProductViewer 
        id = {product._id}
        name = {product.name}
        category = {product.category}
        type = {product.type}
        brand = {product.brand}
        price = {product.price}
        rating = {product.rating}
        imgpath = {product.imgPath}
        bestseller = {product.bestSeller}
        desc = {product.desc}
        imgsuffixs = {product.imgSuffix}
        relatedproducts = {product.relatedProducts}
        key = {product._id}/>
    )
}


 function ProductViewer({id, name, category, type, brand, price, rating, imgpath, bestseller, desc, imgsuffixs, relatedproducts}){
 
//    const [mainImg, setMainImg] = useState(<img src={`/${imgpath}/${imgsuffixs[0]}`} style={{backgroundSize: "cover", width: "830px", maxHeight: "601px"}}/>)
// console.log(typeof (imgsuffixs[0]))

    const [mainImg, setMainImg] = useState(<Image src={`/${imgpath}/${imgsuffixs[0]}`} width= {750} height = {750} className="rounded-md"/>)

    const [imgList, setImgList] = useState("")


    function switchMainImg(newImgPath){
        // setMainImg(<img src={`${newImgPath}`} style={{backgroundSize: "scale-down", aspectRatio: ""}}/>)
        // setMainImg(<img src={`${newImgPath}`} style={{backgroundSize: "cover", width: "830px", maxHeight: "601px"}}/>)
        setMainImg(<Image src={`${newImgPath}`}  width= {750} height = {750} className="rounded-md"/>)

    }

    function initialImgListSetup(){
{/* <img onClick = {() => switchImg("./assets/bikes/b2.png")} src="./assets/bikes/b2.png" className = "mr-32 border-2 rounded-md border-slate-200" 
style={{backgroundSize: "scale-down", aspectRatio: ""}}/> */}

        const imgs = imgsuffixs.map((suffix, index) => <img onClick={() => switchMainImg(`/${imgpath}/${suffix}`)} src = {`/${imgpath}/${suffix}`} alt={suffix} id = {index}
        className = "mr-32 border-2 rounded-md border-slate-200"
        key = {index} />)

        return imgs
    }

    useEffect(() => {
        setImgList(initialImgListSetup())
    }, [])
     
 
    return (
        <>
            <Header/>

            <div className="grid grid-cols-[60%_auto] gap-32 m-64">
                
                {/* THE LEFT SIDE - IMAGES OF THE BICYCLE */}
                <div className="flex flex-col">

                    <div className="flex items-center justify-center bg-white rounded-md">
                        {mainImg}
                    </div>

                    {/* IMG OPTIONS */}
                    <section className="flex mt-32 overflow-scroll h-144 border-p">
                        {/* <div className="flex items-center mr-32 border-2 rounded-md border-slate-200">
                            <iconify-icon icon="teenyicons:360-outline" width= {96} height={96}></iconify-icon>
                        </div> */}
                        {/* <img onClick = {() => switchImg("./assets/bikes/b2.png")} src="./assets/bikes/b2.png" className = "mr-32 border-2 rounded-md border-slate-200" style={{backgroundSize: "scale-down", aspectRatio: ""}}/>
                        <img onClick = {() => switchImg("./assets/bikes/b1.png")} src="./assets/bikes/b1.png" className = "mr-32 border-2 rounded-md border-slate-200" style={{backgroundSize: "scale-down", aspectRatio: ""}}/>
                        <img src={`../${imgpath}`} className = "mr-32 border-2 rounded-md border-slate-200" style={{backgroundSize: "scale-down", aspectRatio: ""}}/>
                        <img src="../assets/bikes/b1.png" className = "mr-32 border-2 rounded-md border-slate-200" style={{backgroundSize: "scale-down", aspectRatio: ""}}/>
                        <img src="../assets/bikes/b1.png" className = "mr-32 border-2 rounded-md border-slate-200" style={{backgroundSize: "scale-down", aspectRatio: ""}}/> */}
                        {imgList}

                    </section>
                </div>
                {/* EMPTY MIDDLE */}
                {/* <div></div> */}

                {/* THE END SECTION */}
                
                <div className="rounded-md " style = {{backgroundImage: "url(../assets/bg/bg-card.png)", backgroundSize: "cover",}}>
                <div className = "flex flex-col h-full rounded-md bg-overlay-opacity">

                    <h4 className="px-32 pt-32 text-white">{name}</h4>
                    
                    <div className="pt-16 pl-32 text-primary text-h6">&#9733;&#9733;&#9733;</div>


                    <div className="w-1/4 px-32 py-16 mt-32 mr-32 text-center h6 bg-primary rounded-tr-md rounded-br-md text-h6 h-fit place-self-start">
                        <span class="pr-1">£</span>{price}
                    </div>

                    <p className= "px-32 my-32 text-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloraliquid ullam 
                        officia amet voluptates laboriosam suscipit eum est.
                    </p>
                
                    <label className="block pl-32 mb-auto font-bold text-white w-fit text-h6" for = "quantity">Quantity:
                        <select className="inline-block px-16 py-8 ml-32 bg-transparent border-2 rounded-full text-p border-primary" name = "quantity">
                            <option value="None">None</option>
                            <option value="None">1</option>
                            <option value="None">2</option>
                            <option value="None">3</option>

                        </select>
                    </label>

                    <label className="block pl-32 mb-auto font-bold text-white w-fit text-h6" for = "Size">Size:
                        <select className="inline-block px-16 py-8 ml-32 bg-transparent border-2 rounded-full text-p border-primary" name = "quantity">
                            <option value="None">Small</option>
                            <option value="None">Medium</option>
                            <option value="None">Large</option>
                            <option value="None">X-Large</option>

                        </select>
                    </label>

                    <button className= "px-32 py-16 mt-32 mb-32 ml-32 font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-text-white text-h6 w-fit">
                        Add to basket
                    </button>
                    </div>
                </div>

            </div>
            <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js" async></script>

            <Footer/>
        </>
    )
}