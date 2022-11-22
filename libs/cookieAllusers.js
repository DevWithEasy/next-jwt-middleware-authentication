import axios from "axios"
export default async function cookieAllusers(SetUsers){
    try {
        const res = await axios.get(`/api/cookie/jwt/user/users`)
        if(res.data){
            SetUsers(res.data)
            console.log(res.data)
        }
    } catch (error) {
        if(error){
            console.log(error)
        }
    }
}