import React,{useState} from "react";
import faker from "faker";
import Delete from "./delete"
const generateRandomData=()=>{
    return {
        id:faker.random.uuid(),
        name:faker.name.findName(),
        email:faker.internet.email(),
        phone:faker.phone.phoneNumber(),

    }
}
const MyFakerData=()=>{
    const [data,setData]=useState(Array.from({length:5},generateRandomData));
    const handle=(id)=>{
        const updatedData=data.filter((item)=>item.id!==id);
        setData(updatedData);
    }
    return(
        <>
            <ul>
                {data.map((item)=>(
                    <li key={item.id}>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                        <p>Phone: {item.phone}</p>
                        <Delete 
                            onDelete={()=>handle(item.id)}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}
export default MyFakerData;