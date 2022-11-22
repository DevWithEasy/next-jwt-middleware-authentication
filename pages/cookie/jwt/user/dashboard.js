import { useState } from "react";
import cookieAllusers from "../../../../libs/cookieAllusers";
// import Cookies from 'js-cookie'

// export function getServerSideProps({req,res}){
    
//     return {
//         props :{
//             token : req.cookies.token ||null
//         }
//     }
// }

export default function Dashboard({token}){
    //creat client cookies
    // async function login(){
    //     Cookies.set('token', 'Hello world');
    // }
    // async function logout(){
    //     Cookies.remove('token');
    // }
    const [users,SetUsers] = useState([])

    return (
        <div className="p-10">

            <button onClick={()=>cookieAllusers(SetUsers)} className="px-6 py-2 bg-green-400 text-white rounded">Hello users</button>

            <div className="space-x-y">
                {
                    users && users.map(user=><div key={user._id} className="border-b">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>Member From : {new Date(user.createdAt).toDateString()}</p>
                    </div>)
                }
            </div>
        </div>
    )
}