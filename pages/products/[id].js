
import clientPromise from "../../lib/mongodb";

import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"

import { useState, useEffect } from "react"

export const getStaticPaths = async () => {


    const client = await clientPromise;

    const db = client.db("bcomm");

    const products = await db.collection("products").find({}).toArray();

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


    const {ObjectId} = require('mongodb'); // or ObjectID 
    const fs = require('fs')

    const client = await clientPromise;
    
    const db = client.db("bcomm");
    
    let o_id = new ObjectId(id);   // id as a string is passed

    let suffix
    const product = await db.collection("products").findOne({"_id":o_id});

    let imgs = fs.readdirSync(`public/${product.imgPath}`)
    suffix = imgs.filter(f => typeof parseInt(f[0]) === "number" && parseInt(f[0]))

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
            key = {product._id} />
            

    )
}


 function ProductViewer({id, name, category, type, brand, price, rating, imgpath, bestseller, desc, imgsuffixs, relatedproducts}){

    const [mainImg, setMainImg] = useState(<Image src={`/${imgpath}/${imgsuffixs[0]}`} fill className="object-contain rounded-md "/>)

    const [imgList, setImgList] = useState("")


    function switchMainImg(newImgPath){

        setMainImg(<Image src={`${newImgPath}`}  fill className="object-contain rounded-md "/>)

    }

    function initialImgListSetup(){

        const imgs = imgsuffixs.map((suffix, index) => <img onClick={() => switchMainImg(`/${imgpath}/${suffix}`)} src = {`/${imgpath}/${suffix}`} alt={suffix} id = {index}
        className = "mr-32 border-2 rounded-md border-slate-200"
        key = {index} />)


        return imgs
    }

    useEffect(() => {
        setImgList(initialImgListSetup())
    }, [])

    function addToBasket() {
        fetch(`/api/addItemToBasket/`, {
            method: "POST",
            body: JSON.stringify({name, imgPath: imgpath, price, quantity: 1})
        }).then(res => res.status === 200 ? alert('item has been added to the basket'): alert('please login first'))
    }
     
    return (
        <>
            <Header dirLevel={".."}/>

            <div className="grid lg:grid-cols-[60%_auto] grid-rows-2 lg:grid-rows-1 gap-32 md:m-64 m-8 overflow-hidden">
                
                {/* THE LEFT SIDE - IMAGES OF THE BICYCLE */}
                <div className="flex flex-col h-full">
            
                    <div className="relative flex items-center justify-center h-full overflow-hidden bg-white rounded-md">
                        {mainImg}
                    </div>
            
                    {/* IMG OPTIONS */}
                    <section className="relative flex h-64 mt-32 overflow-scroll md:h-144 border-p">
                       {imgList}
                    </section>
                </div>
                {/* EMPTY MIDDLE */}
                {/* <div></div> */}
            
                {/* THE END SECTION */}
                
                <div className="rounded-md " style = {{backgroundImage: "url(../assets/bg/bg-card.png)", backgroundSize: "cover",}}>
                <div className = "flex flex-col h-full rounded-md bg-overlay-opacity">
            
                    <h4 className="px-32 pt-32 text-white md:text-h4 text-h4s">{name}</h4>
                    
                    <div className="pt-8 pl-32 text-primary text-h6s md:text-h6">&#9733;&#9733;&#9733;</div>
            
            
                    <h4 class=" px-32 mt-8 text-h3s md:text-h4 text-primary font-extrabold">£{price}</h4>
            
                    <p className= "px-32 my-32 text-primary text-ps md:text-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloraliquid ullam 
                        officia amet voluptates laboriosam suscipit eum est.
                    </p>
                    
                    <div className="flex flex-wrap justify-between w-fit h-fit">
                
                        <label className="block py-8 pl-32 mb-auto font-bold text-white w-fit text-h6s md:text-h6" for = "quantity">Quantity:
                            <select className="inline-block px-16 py-8 ml-16 bg-transparent border-2 rounded-full md:ml-32 md:text-p border-primary text-ps" name = "quantity">
                                <option value="None">None</option>
                                <option value="None">1</option>
                                <option value="None">2</option>
                                <option value="None">3</option>
            
                            </select>
                        </label>
            
                        <label className="block py-8 pl-32 mb-auto font-bold text-white w-fit text-h6s md:text-h6" for = "Size">Size:
                            <select className="inline-block px-16 py-8 ml-16 bg-transparent border-2 rounded-full md:ml-32 md:text-p text-ps border-primary" name = "quantity">
                                <option value="None">Small</option>
                                <option value="None">Medium</option>
                                <option value="None">Large</option>
                                <option value="None">X-Large</option>
            
                            </select>
                        </label>
                    </div>
            
                    <button className= "px-16 py-8 mt-32 mb-32 ml-32 font-bold rounded-full md:px-32 md:py-16 bg-gradient-to-r from-primary to-secondary text-text-white text-h6s md:text-h6 w-fit" onClick={() => addToBasket("apollo")}>
                        Add to basket
                    </button>
                    </div>
                </div>
            
            </div>          

            <Footer/>
        </>
    )
}