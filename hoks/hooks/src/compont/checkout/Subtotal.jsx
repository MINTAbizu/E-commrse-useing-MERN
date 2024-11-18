import React from 'react'
// import CurrencyFormat from 'react-currancy-format'
// import CurrencyFormat from "react-currency-format";
import '../checkout/subtotal.css'
// import { useStateValue } from './StateProvideer'
// import useHistory from 'react-router-dom'

 
function Subtotal() {
    // const [{basket},dispacth]=useStateValue()
    // const history=useHistory()
    // const gettotal =(basket)=>{
    //     basket?.reduce((amount,item)=>item.price+amount ,0)
    // }
  return (
    <div className='subtoatal'>
        {/* <CurrencyFormat

        renderText={(value)=>{
            <div>
                 <div>
            <p>
                sutotoal(0 items): 
                <strong>{0}</strong>
            </p>
            
            <small className='subtotalleft'>
                <input type="checkbox" />This order contains  a gift
                
            </small>
            </div>  
            </div>
        }}
        
        decimalscale={2}
        value={gettotal(basket)}
        displatype={true}
        prefix={'$'}
        
        />  */}
       
            <div>
            <p>
                subtotoal(items): 
                {/* {basket.length} */}
                {/* <strong>{value}</strong> */}
            </p>
            
            <small className='subtotalleft'>
                <input type="checkbox" />This order contains  a gift
                
            </small> 
            </div>  
        {/* <button onClick={(e)=>history.puse('/payment')}>processed</button> */}
        <button onClick={(e)=>history.pushState('/Payment')}>Processed</button>
         
      
    </div>
  )
}

export default Subtotal
