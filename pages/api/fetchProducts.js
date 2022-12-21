import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {

  const client = await clientPromise;

  const db = client.db("bcomm");
    // console.log("hey")
  switch (req.method) {
    
    case "GET":
      const products = await db.collection("products").find({}).toArray();
      res.json({ status: 200, data: products });
      break;
  }
}