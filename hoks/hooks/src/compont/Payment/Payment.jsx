import React, { useEffect, useState } from 'react'
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js'

import { useStateValue } from '../dataprovider.jsx copy/dataprovider';
import CurrencyFormat from 'react-currency-format';

 import {axios} from './axios'

 import {useHistory} from 'react-router-dom'


// to use  stripe  u shoud have to sign up strip websit

function Payment() {
    const [{basket},dispacth]=useStateValue()
    const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
 const history=useHistory()
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const stripe = useStripe();
	const elements = useElements();

    const getBasketTotal =(basket)=>{
             basket?.reduce((amount,item)=>item.price+amount ,0)
         }
         useEffect(() => {
            // generate the special stripe secret which allows us to charge a customer
            const getClientSecret = async () => {
                const response = await axios({
                    method: "post",
                    // stripe expects the total in a currencies subunits
                    url: `/payments/create?total=${parseInt(getBasketTotal(basket) * 100)}`,
                });
                setClientSecret(response.data.clientSecret);
            };
            getClientSecret();
        }, [basket]);

         const handleSubmit = async (event) => {
            event.preventDefault();
            setProcessing(true);
    
            const payload = await stripe
                .confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                    },
                })
                .then(({ paymentIntent }) => {
                    // paymentIntent = payment confirmation
    
                    // db.collection("users")
                    //     .doc(user?.uid)
                    //     .collection("orders")
                    //     .doc(paymentIntent.id)
                    //     .set({
                    //         basket: basket,
                    //         amount: paymentIntent.amount,
                    //         created: paymentIntent.created,
                    //     });
    
                    setSucceeded(true);
                    setError(null);
                    setProcessing(false);

                    history.replace('/orders')
    
                    dispacth({
                        type: "EMPTY_BASKET",
                    });
    
                    navigate("/orders");
                });
        };
      

        const handleChange = (event) => {
            setDisabled(event.empty);
            setError(event.error ? event.error.message : "");
        };
  return (
    <div className='payment'>
      <div className="payment__container">
        <h1>checkout
            {basket?.length}items
        </h1>
        <div className="payment__section">
        <div className="payment__title">
        <h3>Delivery Address</h3>
        </div>
        <div className="payment__address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Chicago, IL</p>
					</div>


        </div>
        <div className="payment__section">
        <div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
        </div>
        <div className="payment__section">
            <div>
              <h3>payment methode</h3>
            </div>
            <div className="payment__details">
                <form action="">
                    <CardElement/>
                    <div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
                                {error && <div>{error}</div>}
							</div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
