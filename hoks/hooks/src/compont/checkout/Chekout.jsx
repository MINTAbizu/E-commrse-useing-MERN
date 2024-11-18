import React from 'react'
import '../checkout/chekout.css'
import Subtotal from './Subtotal'
import Checkoutproduct from '../checkout/Checkoutproduct'
import { useStateValue } from '../dataprovider.jsx copy/dataprovider'
// import Subtotal from './Subtotal'
// import Checkoutproduct from '../Checkoutproduct'
// import { useStateValue } from './StateProvideer'

function Chekout() {
  const [{basket},dispacth]=useStateValue()
  console.log(basket)
  return (
    <div className='checkout'>
      <div className='left'>
        <img className='checkoutimage' 
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
						alt=""  />
            <h1>hellow</h1>
            <h2 className='checkouttitile'>your shooping Basket</h2>
            <hr />
            {
  basket?.map((item) => {
    return (
      <Checkoutproduct
        key={item.id} // Add a unique key for each item
        id={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
        rating={item.rating}
      />
    );
  })
}
            {/* {
              basket?.map((item)=>{
                console.log(item);
                <Checkoutproduct
                // product={item}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    
                    image={item.
                      image
                            }
                    
                      rating
                      ={item.
                        rating
                        }
                
                />
                console.log(item)

              })
            } */}
            

      </div>
<div className='right'>
<Subtotal/>
</div>
      
    </div>
  )
}

export default Chekout
