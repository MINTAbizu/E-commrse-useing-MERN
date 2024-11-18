import React from 'react'
import '../Header/header.css'
import Lowrheader from './Lowrheader'
// import {Link} from 'react-router-dom'
// import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { useStateValue } from '../dataprovider.jsx copy/dataprovider'
// import { useStateValue } from '../product/chekout/StateProvideer'
// import { Datacontext } from '../../../compount/dataprovider.jsx/dataprovider'

function Header() {
    // const [{basket},dispacth]=useContext(Datacontext)
    // const [{basket,user }, dispacth]=useStateValue()
    // console.log(basket.length)
    const handleauthentication=()=>{
        if(user){
            auth.signOut()
        }
    }

  return (
    <div className='fixed'>
        <section >
            <section className='headersection'>
                
                <div className='logocontainer'>
                    {/* <Link to=""> */}
                        logo image
                        <img src="" alt="" />
                    {/* </Link> */}
                    <div className='delvery'>
                    <span>icon</span>
                   
                        <p>Delverd to</p>
                        <span>Ethiopia</span>
                    </div>
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
                    {/* riheht side  */}
                 
                    <div  className='lanuage'>
                           {/* flag image */}
                           flag
                          <a href="" className=''> <img src="" alt="" /></a>
                           <select name="" id="">
                            <option value="">EN</option>

                           </select>

                    </div>
                    {/* sign in */}
                  
                    {/* <Link to={!user && "/Login"}> */}
                       <div onClick={handleauthentication}>
                      <span>
                      {/* {user ? "Sign Out" : "Sign In"} */}
                      </span>
                      
                       </div>
                    {/* </Link> */}
                    <div>
                    {/* Hello {!user ? "Guest" : user.email} */}
                    </div>
                    
                    {/* orders */}
                    {/* < Link to="/orders"> */}
                        <p>orders</p>
                        <span>returns</span>
                    {/* </Link> */}
                    {/* cart */}
                    <Link to={"/Chekout"} className='cart'>
                        cartimage
                        <img src="" alt="" />
                        {/* <span>{{basket}.length}</span> */}
                        {/* <p>{basket.length}</p> */}
                        {/* {basket.length} */}
                    </Link>
                </div>
            </section> 
        </section>
      <Lowrheader/>
    </div>
  )
}

export default Header
