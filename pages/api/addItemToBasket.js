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

export default async function addItemToBasket(req, res){

    const client = await clientPromise;
    const db = client.db("bcomm");
    const {ObjectId} = require('mongodb'); // or ObjectID 

    const cookies = req.headers.cookie

    const item = JSON.parse(req.body)
    console.log(item)
    //get the user using the cookie which holds the user id

    //when user is not logged in
    if (cookies === undefined || cookies === 'undefined') return res.status(400).send()

    //when user is logged in
    else {
        const c_o = cookie_to_obj(cookies)
        let o_id = new ObjectId(c_o.session_id);   // id as a string is passed
        const user = await db.collection("users").find({_id: o_id}).toArray();

        user[0].basket.items.push(item)
        // const totalPrice = 
        const updated = db.collection("users").update({_id: o_id}, {$set: {basket: user[0].basket}})
        // console.log(user[0].basket.items)
        return res.status(200).send()
    }


}