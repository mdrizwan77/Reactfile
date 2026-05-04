
import './App.css'
import React, { useState } from 'react'


function App() {
  const [name, setName]= useState("")
  const [email,setEmail]=useState("")
  const[messege,setMessege]=useState("")
  const [data,setData]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    const newuser = {
      name:name,
      email:email,
      messege:messege
    }
    setData([...data,newuser])
    setName("")
    setEmail("")
    setMessege("")
    console.log(name,email,messege)
  }






  return (
    <>
    <section className='contact'>
      <div className='content'>
        <h1>Contact page</h1>
        
      </div>

    <div className='container'>
      <div className='contactinfo'>
        <div className='box'>
          <div className='icon'></div>
          <div className='text'>
            <h2>Adress</h2>
            <p>25 d c dey road</p>
          </div>
        </div>

        <div className='box'>
          <div className='icon'></div>
          <div className='text'>
            <h2>Phonr Number</h2>
            <p>9330401023</p>
          </div>
        </div>
      
        <div className='box'>
          <div className='icon'></div>
          <div className='text'>
            <h2>Email</h2>
            <p>mdrizwan2848713@gmail.com</p>
          </div>
        </div>

      </div>

      <div className='contactform'>
        <form onSubmit={submitHandler}>
          <h2>Send Detail</h2>
          <div className='inputbox'>
            <label htmlFor='name'>Name</label>
            <input type='text'  id='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
            
          </div>
  
          <div className='inputbox'>
            <label htmlFor="email">Email</label>
            <input type='text'  id='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            
          </div>
          <div className='inputbox'>
            <label htmlFor='msg'>Msg</label>
            <textarea  id='messege' cols='20' rows='5' value={messege} onChange={(e)=> setMessege(e.target.value)}></textarea>
            

          </div>
          
          <div className='inputbox'>
            <input type='submit' className='button' value='send'></input>
          </div>
        </form>
      </div>
    </div>

    </section>
   
    
    
    </>
  )
}

export default App
