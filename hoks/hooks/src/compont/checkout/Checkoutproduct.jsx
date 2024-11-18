import React from 'react'
import { useStateValue } from '../dataprovider.jsx copy/dataprovider'
// import { type } from '../../../compount/utilitys/action.types'
// import { useStateValue } from '../dataprovider.jsx copy/dataprovider'
// import { useStateValue } from './chekout/StateProvideer'
// import { useStateValue } from './chekout/StateProvideer'
    
// import '../product/chekout/checkoutproduct/.css'
function Checkoutproduct({id,title,image,price,rating}) {
    const [{basket},dispacth]=useStateValue()
    console.log({basket})
    const removefrombasket=()=>{
        dispacth({
            type:'REMOVE_FROM_BASKET',
            id: id, 
        })
       
    }
 

  return (
    <div className='checkoutproduct'>
        <div className='checkouotproductimage'>
            <img src={image} alt="" />
        </div>
        <div  className='info'>
            <p>{title}</p>
            <p className='price'>
                <small>$</small>
                {price}
            </p>
            <div className='rating'>
  {Array(rating)
    .fill()
    .map((_, i) => {
      return <p key={i}>⭐</p>; // Add a unique key
    })}
</div>
            {/* <div className='rating'>
                {Array(rating)
                .fill()
                .map((_,i)=>{
                    <p>⭐</p>
                })
                
                
                }
            </div> */}
            <button  onClick={removefrombasket}  >remove from basket</button>
            {/* onClick={removefrombasket} */}

        </div>

      
    </div>
  )
}

export default Checkoutproduct
