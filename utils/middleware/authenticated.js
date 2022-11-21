import jwt from "jsonwebtoken"
const authenticated = (handler)=>{
    return async (req,res)=>{
        const token = req.headers["acceess_token"]
        if(!token) return console.log('you are not authenticated')
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            req.user = user
          })
        return handler(req,res)
    }
}
export default authenticated;

// const authenticated = (handler)=>{
//     async (req,res)=>{
//         //here is you authentication code
//         return handler(req,res)
//     }
// }
// export default authenticated;