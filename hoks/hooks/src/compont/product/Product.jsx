import React from 'react'
import '../product/product.css'
import { useStateValue } from '../dataprovider.jsx copy/dataprovider'
// import { useStateValue } from './chekout/StateProvideer'

function Product({id,title,price,rating,image}) {
  const [{basket},dispacth]=useStateValue()
  // console.log("this is basket"+basket)
  const addtobasket=()=>{
    dispacth({
      type:"ADD_TO_BASKET",
      id:id,
      image:image,
      title:title,
      price:price,
      rating:rating

    })
   
  }
  return (
    <div className='product'>
        <div className='productinfo'>
            <p>{title}</p>
            <p className='productprice'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='productrating'>
            
            {Array(rating)
            .fill()
            .map(()=>(
              <p>⭐</p>

            ))
            
            }
            
            </div>
            <div>
              {/* <h1>image</h1> */}
              <img src={image} alt="" />
            </div>
            <button onClick={addtobasket() }>Add to basket</button>
            

        </div>
      
      
    </div>
  )
}

export default Product
