import React, { useState } from 'react'

const UserAdd = () => {
    const[name, setName]=useState('')
    const[age, setAge]=useState('')
    const[email, setEmail]=useState('')
 
    const creatUser=async()=>{
        console.log(name,age,email)
        const url="http://localhost:3000/users";
        let response = await fetch(url,{
            method:'Post',
            body:JSON.stringify({name,age,email})
        });
        const data = await response.json();
        if(data){
            alert("New User Added")
           
        }
        setName("")
        setAge("")
        setEmail("")
    }   



  return (
    <div style={{textAlign:"center",  alignItems:"center"}}>
      <h1>Add New User</h1>
      <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
      <br/><br/>
      <input type='text'  onChange={(e)=>setAge(e.target.value)} placeholder='Enter Age'/>
      <br/><br/>
      <input type='text'  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
      <br/><br/>
      <button onClick={creatUser}>Add User</button>
    </div>
  )
}

export default UserAdd
