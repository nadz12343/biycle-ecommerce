import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Hero from './components/hero/Hero'
import Footer from './components/Footer'
import Browse from './components/browse/Browse'
import ProductCard from './components/ProductCard'

import RefineSearch from "./components/RefineSearch"
import { useEffect } from 'react'

import clientPromise from "../lib/mongodb";

export default function index({newProducts}) {

  // console.log(products)
  const mappedProductData = newProducts.map((product, index) => {

    return (
     <ProductCard 
    //  width={'full'} height={'fit'}
    width={'[25%]'} height={'fit'}

     id = {product._id} 
        name = {product.name}
        category = {product.category}
        type = {product.type}
        brand = {product.brand}
        price = {product.price}
        rating = {product.rating}
        imgpath = {product.imgPath}
        bestseller = {product.bestSeller}
        key = {index}
        dirLevel = "."
      />
    )
})

// console.log(mappedProductData)

    
  return (
    <>

      <Header dirLevel= "."/>
      <Hero/>
      {/* <RefineSearch/> */}
    
      {/* <div className='flex flex-wrap md:grid  md:grid-cols-4  md:grid-rows-[600px] gap-16 mx-64'>
        {mappedProductData}
      </div> */}

      <div className='flex flex-wrap justify-center w-full'>
        {mappedProductData}
      </div>

      {/* {mappedProductData[0]} */}

      {/* <!-- FOOTER --> */}
      <Footer/>
      <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js" async></script>

    </>
  )
}

export async function getServerSideProps(context) {
//   let res = await fetch("http://localhost:3000/api/fetchProducts", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//  let products = await res.json();
//  console.log(products)

console.log(context.query)

const client = await clientPromise;

  const db = client.db("bcomm");
  const products = await db.collection("products").find({}).toArray();

  const newProducts = products.map(product => {
    return {
      ...product,
      _id: product._id.toString()
    }
  })

  // console.log(`length of new newProducts is ${newProducts.length}`)
  return {
    props: { newProducts },
  };
}
