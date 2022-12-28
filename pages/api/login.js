
import clientPromise from "../../lib/mongodb";
// import { setCookie } from "universal "
import cookie from "cookie"
export default async function login(req, res){

    const client = await clientPromise

    const db = client.db("bcomm")

    if (req.method == "POST") {

        // console.log(req.headers['set-cookie'][0])

        const {email, password} = JSON.parse(req.body)
        // console.log(`the email is ${email}, the password is: ${password}`)

        const user = await db.collection("users").find({email: email, password: password}).toArray();

        // console.log(user)

        if (user.length === 0) {
            return res.status(404).send({d: 'login failed'})
        }
      
        res.setHeader("Set-Cookie", cookie.serialize("session_id", `${user[0]._id}`, {
            httpOnly: false,
            maxAge: 3600,
            path: "/"
        }))

        return res.status(200).send({user})

    }

}