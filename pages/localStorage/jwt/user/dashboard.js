import { useState } from "react";
import localAllusers from "../../../../libs/localAllusers";

export default function Dashboard({token}){
    const [users,SetUsers] = useState([])

    return (
        <div className="p-10">

            <button onClick={()=>localAllusers(SetUsers)} className="px-6 py-2 bg-green-400 text-white rounded">Hello users</button>

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