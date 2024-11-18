import React, { useState } from 'react'
import '../Aut/sign.css'
import { Link } from 'react-router-dom'
// import { auth } from '../../Firebase/Firebase'
// import usehistory from 'react-router-dom'

function Login() {
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const history=useHisory()

    const signin=(e)=>{
        e.prevDefaualt()
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
          if(auth){
            history.push('/')
          }
          
        }).cacth((error)=>alert(error.message))

    }
    const createaccount=(e)=>{
        e.prevDefaualt()
        
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          if(auth){
            history.push('/')
          }
        }).cacth((error)=>alert(error.message))

        

    }
  return (
    <div className='loginform'>
      
    <div className='login'>
             <div>
              
             </div>
      {/* <img src="" alt="" />  */}

      <form action="">
        <Link to={'/'}>
        <h1>
              Home
            </h1>
        </Link>

           
        {/* <h3>Sign in</h3> */}
        <h1>Sign in</h1>
        <label htmlFor="">Emaile</label>
        <input type="text" value={email} 
        onChange={(e)=>setemail(e.target.value)} placeholder='enter email'/>
        <label htmlFor="">password</label>
        <input type="password" name="" id="" value={password} placeholder='password'
        onChange={(e)=>setpassword(e.target.value)}
        />
        <button onClick={signin} type='submit'>Login </button>
        <p>thisis  amazon authentiacation page </p>
        <button type='submit' onClick={createaccount}>create new acount</button>
      </form>
    </div>
    </div>
  )
}

export default Login
