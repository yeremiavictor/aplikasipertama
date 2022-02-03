import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailMhsComp = () => {
    const {id} = useParams()
    const [user,setUser] = useState(null)

    useEffect(()=> {
        fetch(`http://localhost:3001/tampil/${id}`)
        .then((resp)=> resp.json())
        .then((data) => {
            setUser(data)
        })
        .catch((err) => console.log(err))
    },[id])

    
    
    return (
        <div>

            <h1>Detail Page</h1>
            <p>params id: {id}</p>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </div>
    )

}

export default DetailMhsComp
