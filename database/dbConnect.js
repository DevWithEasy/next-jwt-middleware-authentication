import mongoose from "mongoose"

const initDatabase=async()=>{
    if(mongoose.connection.readyState === 1){
        console.log("Database connected")
        return mongoose.connection.asPromise()
    }
    return await mongoose.connect(process.env.MONGO_URI)
}
export default initDatabase;