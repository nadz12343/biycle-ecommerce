import clientPromise from "../../lib/mongodb";
import ProductCard from "./ProductCard";
import Header from "./Header";
import Hero from "./hero/Hero";
import Footer from "./Footer";

const ObjectId = require('mongodb').ObjectId

export default function index({newProducts}) {

  // console.log(products)
  let mappedProductData
  if (newProducts.length < 1) mappedProductData = "no items found, please try using the keywords: 'Bicycle', 'Bike', 'Cycle', 'Clothings', 'Clothes', 'Gloves', 'Helmet', 'Jacket', 'Mountain', 'Road'"
  else mappedProductData = newProducts.map((product, index) => {

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
        dirLevel = ".."
      />
    )
})
    
  return (
    <>

      <Header dirLevel={".."}/>
      {/* <Hero/> */}
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

  let ids

  if (typeof(context.query.ids) !== "object") ids = [ObjectId(context.query.ids)]
  else ids = context.query.ids.map(id => ObjectId(id))

  const client = await clientPromise;

  const db = client.db("bcomm");
  const products = await db.collection("products").find({_id: {$in : ids}}).toArray();

  const newProducts = products.map(product => {
    return {
      ...product,
      _id: product._id.toString()
    }
  })

  return {
    props: { newProducts },
  };
}