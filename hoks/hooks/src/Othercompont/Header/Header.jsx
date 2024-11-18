// export default Header
// import { Link } from 'react-router-dom'
import {Link} from 'react-router-dom'
// import {auth} from '../Firebase/firebase'
import '../Header/header.css'

import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';

function Header() {
    const [{ basket,user}, dispatch] = useStateValue();
    // console.log(basket.length)
  //   const handleauthentication=()=>{
  //     if(user){
  //         auth.signOut()
  //     }
  // }
  
// const handleauthentication=(e)=>{
//   if(user){
//     auth.signout()
//   }
// }
  return (
    <div className='fixed'>
      <section className='headersection'>
      <div className='logocontainer'>
      <Link to={'/'}>logo image</Link>
      <img src="" alt="" />
      </div>
      <div className='search'>
                    {/* search */}
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                    
                    <input type="text" placeholder='search all product' />

                    <p>serch icon</p>


                </div>
                <div className='ordercontainer'>
                <div  className='lanuage'>
                           {/* flag image */}
                           flag
                          <a href="" className=''> <img src="" alt="" /></a>
                           <select name="" id="">
                            <option value="">EN</option>

                           </select>

                    </div>
                    <Link  to={!user &&"/login"}
                    // to={!user && "/login"}
                    >
                       <div 
                      //  onClick={handleauthentication}
                       >
                      <span>
                      {user ? "Sign Out" : "Sign In"}
                      </span>
                      
                       </div>
                    </Link>
                   
                        {/* <span>sign</span> */}
                    

<div>
  <>
  {
    user?(
      <>
      <p>{user?.email.split()}</p>
      <span onClick={()=>auth.signout()}>signout</span>
      </>
  
  ):(
   <>
   
   </>
  )
  }
  </>
  
   {/* <div>{user?(hellow {user?.email?.split("@")[0]}):(<p>signin</p>) }</div> */}
 
                    Hello 
                    {!user ? "Guest" : user.email?.spllit("@")[0]}
                    </div>
                    <Link to={"/orders"}>orderes <br/>returns</Link>

                    <div>
                   
                    </div>
                    <div>
                      <Link to={'/Checkout'} style={{color:"red", background:"white"}}>   {basket.length}cart</Link>
                    </div>
                </div>


      </section>
    </div>
  )
}

export default Header
