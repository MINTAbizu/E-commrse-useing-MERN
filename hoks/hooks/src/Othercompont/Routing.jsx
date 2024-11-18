import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from '../Othercompont/Landing';
import Checkout from '../Othercompont/Checkout/Checkout';
import Header from './Header/Header';
import Home from './Home/Home';

function Routing() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
            <Route
						path="/"
						element={
							<>
								<Header />
								<Home />
								{/* <Footer /> */}
							</>
						}
					/>
        </Routes>
    </Router>
      
    </>
  )
}

export default Routing
