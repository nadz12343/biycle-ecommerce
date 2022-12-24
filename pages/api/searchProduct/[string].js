
import clientPromise from "../../../lib/mongodb";

export default async function searchProduct(req, res){


    if (req.method === "GET"){

        const urlParts = req.url.split('/')
        const desiredItem = urlParts[urlParts.length-1]
        console.log(desiredItem)

        const client = await clientPromise;

        const db = client.db("bcomm");

        const others = [ 'Bicycle', "Cycle", 'Clothings', 'Gloves', 'Helmet', 'Jacket', 'Mountain', 'Road']
        const brands = [  'Apollo', 'Armaurto', 'Carrera', 'Craft', 'Giro', 'Lazer', 'Met', 'Muc', 'Rockrider', 'Triban', 'Van Rysel', 'Voodoo', 'rockrider']
        const keywords = others.concat(brands)

        const filteredKeyword = keywords.find(keyword => keyword.toLowerCase().includes(desiredItem) || desiredItem.toLowerCase().includes(keyword.toLowerCase()))
        const product = await db.collection("products").find({$or :[{category: filteredKeyword}, {type: filteredKeyword}, {brand: filteredKeyword} ]}).toArray();

        console.log(product)

        if (product.length < 1) return res.status(400).send([])

        return res.status(200).send(product)

    }
}