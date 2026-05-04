
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


function UserList() {
  const [userData, setUserData] = useState([]);
  const[loading, setLoading]=useState(false);
  const navigate=useNavigate();

  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true)
    getUserData();


  },[])

  const Deleteuser=async(id)=>{
    console.log(id)
    const url="http://localhost:3000/users";
    const respone=await fetch(url+"/"+id,{
        method:"DELETE"

    })
    const data= await respone.json();
    if(data){
        alert("Delete Item")
        getUserData()
    }


  }
  const Edituser=(id)=>{
    navigate("/edit/"+id)

  }

  return (
    <>
      <h1>Student List</h1>
      <ul className='user-list user-list-head'>
        <li>Name</li>
        <li className='li'>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>

      {
      
      !loading?
      userData.map((user) =>(
       <ul key={user.name} className='user-list'>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
        <li>
            <button onClick={()=>Deleteuser(user.id)}>Delete</button>
            <button onClick={()=>Edituser(user.id)}>Edit</button>
        </li>

       </ul>
        
      ))
      :<h1>Data loadung</h1>
    }
  
    </>
  );
}

export default UserList;