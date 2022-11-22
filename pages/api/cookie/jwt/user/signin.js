import bcrypt from "bcrypt";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import initDatabase from "../../../../../database/dbConnect";
import User from "../../../../../database/model/User";

export default async function handler(req, res) {
  initDatabase()
  try {
    const user = await User.findOne({email : req.body.email})

    if (!user) return res.status(404).send('User not found')

    const valid = await bcrypt.compare(req.body.password, user.password)

    if (!valid) return res.status(404).send('Credentials do not match')

    const acceess_token = await jwt.sign({id : user._id},process.env.JWT_SECRET)
    res.setHeader("Set-Cookie" , cookie.serialize("cb_access_token",acceess_token,{
      httpOnly: true,
      secure : process.env.NODE_ENV !== "development",
      sameSite: "strict",
      path: "/"
    }))
    if(user && valid){
      res.status(200).send(user._doc)
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}