import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router"


const UserEdit = () => {

    const[name, setName]=useState('')
    const[age, setAge]=useState('')
    const[email, setEmail]=useState('')

    const navigate=useNavigate();


    const {id}= useParams();
    console.log(id)

    useEffect(()=>{
      getUserData()
    },[])

    const getUserData=async()=>{
        const url="http://localhost:3000/users/"+id;
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setName(response.name);
        setEmail(response.email);
        setAge(response.age)
    }

    const updateUserData=async()=>{
        const url="http://localhost:3000/users/"+id;
        let response = await fetch(url,{
            method:"PUT",
            body:JSON.stringify({name,email,age})
        });
        response=await response.json()
        console.log(response)

        if(response){
            alert('user data update succesfully'),
            navigate('/')
        }
    }

   






    return(
    <div  style={{textAlign:"center",  alignItems:"center"}}>
      <h1>Edit  User Page</h1>
      <input type='text'value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
      <br/><br/>
        <input type='text' value={age}  onChange={(e)=>setAge(e.target.value)} placeholder='Enter Age'/>
      <br/><br/>
      <input type='text' value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
      <br/><br/>
    <button onClick={updateUserData}>Update User</button>
    </div>
  )
}

export default UserEdit
