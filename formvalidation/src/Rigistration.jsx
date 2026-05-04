import React from 'react'
import { useState } from 'react';


export default function Rigistration() {

    const [name, setName]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [confirmpass, setConfirmpass]=useState();
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(name && email && password && confirmpass){
            if(password === confirmpass){
                alert("Sing Up Succes Fully")
            }else{
                alert("ERR: password & Confirmpassword Must be Same")

            }
        }else{
            alert("all faild are mandatory")
        }

    }


  return (
    <div>
        <form onSubmit={handlesubmit}>
            <h1 className='heading'>Sign up</h1>
        <div>
            <p className='fieldName'>Name</p>
            <input type='text' onChange={(e)=> setName(e.target.value)}/>
            <p  className= "data">{name? "" : "Name is Required"}</p>
        </div>

        <div>
            <p className='fieldName'>Email</p>
            <input type='email' onChange={(e)=> setEmail(e.target.value)}/>
            <p className='data'>{email? "" : "Email is requried"}</p>
        </div>
         <div>
            <p className='fieldName'>Password</p>
            <input type='password' onChange={(e)=> setPassword(e.target.value)}/>
            <p className='data'>{password? "" :"Password is requried"}</p>
        </div>
         <div>
            <p className='fieldName'>Confirm passsword</p>
            <input type='password' onChange={(e)=> setConfirmpass(e.target.value)}/>
            <p className='data'>{confirmpass? "" :"conform password is requried"} </p>
        </div>
        <div>
            <button>Sign up</button>
        </div>
        </form>
      
    </div>
  )
}
