
import clientPromise from "../../lib/mongodb";

function cookie_to_obj(str) {
    str = str.split(', ');
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }
    return result;
}

export default async function fetchUserBasket(req, res) {


    const {ObjectId} = require('mongodb'); // or ObjectID 
    const client = await clientPromise;
    const db = client.db("bcomm");

    const cookies = req.headers.cookie
    console.log(`cookie is: ${cookies}`)
    if (cookies === undefined || cookies === 'undefined') return res.status(400).send({})

    const c_o = cookie_to_obj(cookies)
    let o_id = new ObjectId(c_o.session_id);   // id as a string is passed
    const user = await db.collection("users").find({_id: o_id}).toArray();
    // console.log('in the fetch user')
    // console.log(user)

    return res.status(200).send(user[0].basket)
}