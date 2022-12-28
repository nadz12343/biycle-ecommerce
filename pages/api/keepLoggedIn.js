

function cookie_to_obj(str) {
    str = str.split(', ');
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }
    return result;
}

export default async function keepLoggedIn(req, res){

    if (req.method === "GET") {
        const cookies = req.headers.cookie
        let c_o
        if (cookies === undefined) {
            return res.status(200).send({session_id: null})
        }
        c_o = cookie_to_obj(cookies)
        return res.status(200).send(c_o)
    }

}