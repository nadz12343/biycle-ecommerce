import cookie from "cookie"

export default function signOut(req, res){

    
    if (req.method === "GET") {
        console.log(req.headers.cookie)
        res.setHeader("Set-Cookie", cookie.serialize("session_id", "", {
            httpOnly: true,
            expires: new Date(0),
            path: "/"
        }))
    return res.status(200).send("jJ")
    }
}