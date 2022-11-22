import axios from "axios"
export default async function localAllusers(SetUsers){
    try {
        const config ={
            headers: {
                'acceess_token' : localStorage.getItem('acceess_token')
            }
        }
        const res = await axios.get(`/api/localStorage/jwt/user/users`,config)
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