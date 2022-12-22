
import clientPromise from "../../lib/mongodb";

export default async function login(req, res){

    const client = await clientPromise

    const db = client.db("bcomm")

    if (req.method == "POST") {

        // console.log(req.headers['set-cookie'][0])

        const {email, password} = JSON.parse(req.body)
        console.log(`the email is ${email}, the password is: ${password}`)

        const user = await db.collection("users").find({email: email, password: password}).toArray();

        console.log(user)

        if (user.length === 0) {
            return res.status(404).send({d: 'login failed'})
        }
        // return res.status(200).json({d:'login success'})
        return res.status(200).send({user})

    }

}