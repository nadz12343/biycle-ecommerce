
import clientPromise from "../../lib/mongodb";

export default async function updateUser(req, res){

    const client = await clientPromise

    const db = client.db("bcomm")

    const ObjectId = require('mongodb').ObjectId


    if (req.method === "PUT") {
        const data = JSON.parse(req.body)
        console.log(data)
        //this is where you have to check for the constrant e,g, name is 50 characters long at max, etc.
        const res_ = await db.collection("users").update({"_id": ObjectId(data.id)},{$set: {firstname: data.firstname, surname: data.surname}});
        return res.send({data})
    }

}

