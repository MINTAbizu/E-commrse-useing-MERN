import React, { useState } from 'react'
import '../../Othercompont/Aut/sign.css'
import { Link } from 'react-router-dom'
// import { auth } from '../../Othercompont/Firebase/firebase'
// import { auth } from "./firebase";

import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
// import useHistory from 'react-router-dom'

function Login() {
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    // console.log(password)
    // console.log(email)
    // const history=useHistory()

// amazon2424
    // const signhandler=(e)=>{
    //   if(e.target.name==="sign"){
    //     signInWithEmailAndPassword(auth,email,password)
    //     .then((userinfo)=>{
    //       dispacth({
    //         type:type.SET_USER,
    //         user:userinfo.user
    //       })

    //     }).catch((error)=>{
    //       console.log(error)
    //     })
       
    //   }
    //   else{
    //     createUserWithEmailAndPassword(auth,email,password)
    //     .then((userinfo)=>{
    //       dispacth({
    //         type:type.SET_USER,
    //         user:userinfo.user
    //       })

    //     }).catch((error)=>{
    //       console.log(error)
    //     })
        
    //   }
    // }

const signIn = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				if (userCredential) {
					navigate("/");
				}
        console.log(auth)
			})
			.catch((error) => alert(error.message));
	};


	const register = (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(email)
				if (userCredential) navigate("/");
			})
			.catch((error) => {
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};
  
  return (
    <div className='loginform'>
      <h3>amazon image</h3>
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
        <input type="text"  required
        value={email}  name='sign'
        onChange={(e)=>setemail(e.target.value)}
        
        placeholder='enter email'/>
        <label htmlFor="">password</label>
        <input type="password" name="" id="" required 
        value={password} 
         placeholder='password'
        onChange={(e)=>setpassword(e.target.value)}
        />
        <button 
        onClick={signIn}
         type='submit'>Login </button>
        <p>thisis  amazon authentiacation page </p>
        <button type='submit'
         onClick={register}
         >create new acount</button>
         
      </form>
   
    </div>

    <h1>hy'this highly interactive  project devloped  <br/>
       by mintesinot bizuayehw :</h1><br />
 <h2>   i'am MERN-stack web app devloper </h2>
    
    </div>
  )
}

export default Login
