import react, { useState } from "react"



export default function Addcontact(){
    const [contact, setContact]= useState({name:"", email:""});

    const handlechange = (e)=>{
        if(e.target.name === "name"){
            setContact({...contact, name:e.target.value})
        }
        else{
            setContact({...contact, email:e.target.value})
        }

    }

    const handlesubmit=() =>{
        if(contact.name === "" || contact.email === ""){
            alert("Please fill all the detail")
            return
        }
        console.log(contact)
    }
    return(
        <div className="formHeader">
            <div className="add-contact">Add Contact</div>
            <form>
                <label htmlFor="name">Name</label><br/>
                <input type="text" placeholder="Enter your name"  name="name" value={contact.name}
                onChange={handlechange}/><br/>

                <label htmlFor="email">Email</label><br/>
                <input type="text" placeholder="Enter your Email"  name="Email" value={contact.email}
                onChange={handlechange}/>

            
            </form>
            <button className="btn" onClick={handlesubmit}>Add Contact</button>

        </div>
    )

}