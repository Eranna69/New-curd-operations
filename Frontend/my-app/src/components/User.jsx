import React, { useEffect, useState } from 'react'
import  '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const User = () => {
  const [users,setUsers]=useState([])

   useEffect(()=>{
             axios.get('http://localhost:8080/api/getall').then((res)=>{
              setUsers(res.data)
             })
   },[])

   const handledelete=async(userId)=>{
    console.log(userId)
       await axios.delete(`http://localhost:8080/api/delete/${userId}`,)
       .then((res)=>{
          setUsers((preUsers)=>preUsers.filter((user)=>user._id !==userId))
       }).catch((err)=>console.log(err))
   }


  return (
    <div className='userTable'>
      <Link to={"/add"} className='addButton'>Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={2}>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>

            <tbody>
                  {users.map((item,index)=>
                 (
                    <tr key={item._id}>
                      <td >{index+1}</td>
                      <td>{item.fname} {" "} {item.lname}</td>
                      <td>{item.email}</td>
                       <td className='actionButton'>
                      <button onClick={()=>handledelete(item._id)}>Delete</button>
                      <Link to={'/edit/'+item._id}>Edit</Link>
                    </td>
                    </tr>
                  ))}
            </tbody>
      </table>
    </div>
  )
}
