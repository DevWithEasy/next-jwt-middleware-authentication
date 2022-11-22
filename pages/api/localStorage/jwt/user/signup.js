import bcrypt from "bcrypt"
import initDatabase from "../../../../../database/dbConnect"
import User from "../../../../../database/model/User"


export default async function handler(req, res) {
  initDatabase()
  try {
    const hashed = await bcrypt.hash(req.body.password,10)
    const newUser = new User({
      ...req.body,
      password: hashed
    })
    newUser.save()
    res.status(200).send('Account successfully created.')
  } catch (error) {
    res.status(500).send(error.message)
  }
}