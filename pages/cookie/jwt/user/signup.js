import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Signup(){
    const router = useRouter()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const data = {name,email,password}
    async function signup(e){
        e.preventDefault()
        try {
            const res = await axios.post('/api/user/signup',data)
            if(res.data){
                console.log(res.data)
                router.push("/user/signin")
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className="h-screen bg-gray-300 flex justify-center items-center">
            <form onSubmit={(e)=>signup(e)} className="bg-white rounded p-4 space-y-3">
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name" className="w-full border focus:outline-none focus:border-blue-400 rounded p-2"/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="email" className="w-full border focus:outline-none focus:border-blue-400 rounded p-2"/>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="password" className="w-full border focus:outline-none focus:border-blue-400 rounded p-2"/>
                <div className="flex justify-end">
                    <input type="submit" value="Signup"  className="px-6 py-2 bg-blue-500 text-white rounded"/>
                </div>
            </form>
        </div>
    )
}