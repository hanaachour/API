import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
export const UserList = () => {
    const[myData,setMyData]=useState([]);
    console.log(myData);
    useEffect(()=>{
      axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
     setMyData(res.data);
     console.log(myData);
    })
    .catch((err)=>{console.log(err)});
    } , [] ) ;
    

  return (
    <div>
        <h2>UserList</h2><br/>
        <Table striped bordered hover>
             <thead>
               <tr>
                 <th>ID :</th>
                 <th>Name :</th>
                 <th>Username :</th>
                 <th>Email :</th>
               </tr>
             </thead>
        {myData.map((el)=>(
             <tbody>
               <tr>
                 <td> {el.id}</td>
                 <td>{el.name}</td>
                 <td>{el.username}</td>
                 <td>{el.email}</td>
               </tr>
             </tbody>
          
         ))}
         </Table>
     

    </div>
  )
}
