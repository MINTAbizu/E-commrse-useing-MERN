import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Landing';
import Chekout from './checkout/Chekout';
import Checkoutproduct from './checkout/Checkoutproduct';
import Login from './Aut/Login';
import Payment from './Payment/Payment';
// import Chekout from './checkout/Chekout';
// import {loadStripe} from '@stripe/stripe-js'
// import {Elements} from '@stripe/react-stripe-js'

// const promise=loadStripe('API from stripe publishablekey')

function Routing() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Chekout' element={<Chekout/>}/>
        {/* <Route path='/Payment' element={<Payment/>}/> */}
        <Element stripe={Promise}>
              {/* <Route path='/checkoutp' element={<Checkoutproduct/>}/> */}
        </Element>
        
    
      </Routes>
    </Router>
      
      
    </>
  )
}

export default Routing
