import User from "../model/User"

export const getUser=async(req,res)=>{
    try{
       const users =  await User.find({})
       res.status(200).send(users)
    }catch(err){
        res.status(500).send(err.message)
    }
}

export const getSingleUser=async(req,res)=>{
    const {id} = req.query
    try{
       const user =  await User.find({"_id" : id})
       res.status(200).send(user)
    }catch(err){
        res.status(500).send(err.message)
    }
}