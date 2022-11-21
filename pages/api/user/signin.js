import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import initDatabase from "../../../database/dbConnect";
import User from "../../../database/model/User";
export default async function handler(req, res) {
  initDatabase()
  try {
    const user = await User.findOne({email : req.body.email})
    if (!user) return res.status(404).send('User not found')
    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid) return res.status(404).send('Credentials do not match')
    const acceess_token = await jwt.sign({id : user._id},process.env.JWT_SECRET)
    if(user && valid){
      res.status(200).send({...user._doc,token : acceess_token})
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}