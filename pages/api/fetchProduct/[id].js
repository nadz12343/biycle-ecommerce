import clientPromise from "../../../lib/mongodb";
const {ObjectId} = require('mongodb'); // or ObjectID 
const fs = require('fs')
export default async function handler(req, res) {


  async function getImgSuffix(product) {
    let suffix 

     await fs.readdir(`public/${product.imgPath}`, async (error, files) => { 

      suffix = files.filter(f => typeof parseInt(f[0]) === "number" && parseInt(f[0]))

      // console.log(`in S ${suffix}`)

   });
   return suffix
  }
  const client = await clientPromise;
    
    const db = client.db("bcomm");

    const splitted = req.url.split("/");
    const id = splitted[splitted.length-1]
    
    let o_id = new ObjectId(id);   // id as a string is passed

    let suffix

    switch (req.method) {

      case "GET":

        //finds the desired product via its specific id
        const product = await db.collection("products").findOne({"_id":o_id});

        const total = await db.collection("products").count()
        const range = Math.floor(Math.random() * (total - 1))


        const relatedProducts = await db.collection("products").aggregate([ { $sample: { size: 3 } } ]).toArray()
        // console.log(relatedProducts)

        let imgs = fs.readdirSync(`public/${product.imgPath}`)
        suffix = imgs.filter(f => typeof parseInt(f[0]) === "number" && parseInt(f[0]))
        // console.log(`suffix is: ${suffix}`)

        //modPro is the products, suffix of the product and the related products, all in one JS objec
        let modProd = {...product, imgSuffix: suffix, relatedProducts}

        res.json({ status: 200, data: modProd});
        break;
    }
  }