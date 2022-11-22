import initDatabase from "../../../../../database/dbConnect";
import User from "../../../../../database/model/User";
import authenticated from "../../../../../utils/middleware/localStorage/jwt/authenticated";


async function handler(req, res) {
    initDatabase()
    try {
        if(!req.user) return res.status(401).send("Token is not valid");
        const users = await User.find({})
        if(!users) return res.status(404).send("No users found");
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default authenticated(handler);