import axios from "axios"

export default function Dashboard(){
    const allusers =async()=>{
        try {
            const config ={
                headers: {
                    'acceess_token' : localStorage.getItem('acceess_token')
                }
            }
            const res = await axios.get('api/users',config)
            if(res.data){
                console.log(res.data)
            }
        } catch (error) {
            if(error){
                console.log(error)
            }
        }
    }
    return (
        <div className="">
            <button onClick={()=>allusers()}>Hello users</button>
        </div>
    )
}