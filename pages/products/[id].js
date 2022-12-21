
import ProductViewer from "../ProductViewer";
export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/fetchProducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

    const data = await res.json()

    const paths = data.data.map(product => {
        return {
            params: {id: product._id}
        }
    })

    return {
        paths:  paths,
        fallback: false
    }
}
 
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`http://localhost:3000/api/fetchProduct/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    const data = await res.json()

    return {
        props: {product: data.data}
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
        key = {product._id}/>
    )
}