import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './compont/Header/Header';
// import Chekout from './compont/checkout/Chekout';
// import Home from './compont/Home';


// import Myfooter from './compont/Footer/Myfooter';
// import { useStateValue } from './compont/dataprovider.jsx copy/dataprovider';
// import Header from '../src/Othercompont/Header/Header';
// import Checkout from './Othercompont/Checkout/Checkout';
// import Home from './Othercompont/Home/Home';
import Home from './Othercompont/Home/Home';
import Header from './Othercompont/Header/Header';
import Routing from './Othercompont/Routing';
import Checkout from './Othercompont/Checkout/Checkout';
import Login from './Othercompont/Aut/Login';
import Payment from './Othercompont/Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from './Othercompont/StateProvider/StateProvider';
import { useEffect } from 'react';
import Orders from './Othercompont/orders/Orders';
// import {auth} from "../src/Othercompont/Firebase/firebase"

// import {} from "./Firebase/"


const promise=loadStripe('pk_test_51Q3NEjP5mNm487HRo50PwmPQK1ZfcEHXNpgkQCqYlwWPkIRf5B5V6ZszhbDzdOY360mU6fvuCwk8qCYnJYCovbfX00XQ6aqYUO')


// sk_test_51Q3NEjP5mNm487HR87QNklGRuE5avJeyMnxsxvvtcvTcECOgsn5Tex1czQNqvniSfljNVXyfEzuO5XsHIm4iUTRf00QudWsJbD
// my stripe secreate key



function App() {
    const [{ },dispacth]=useStateValue()
    // useEffect(() => {
	// 	auth.onAuthStateChanged((authUser) => {
	// 		// console.log("THE USER IS >>> ", authUser);
	// 		if (authUser) {
	// 			dispacth({
	// 				type: "SET_USER",
	// 				user: authUser,
	// 			});
	// 		} else {
	// 			dispacth({
	// 				type: "SET_USER",
	// 				user: null,
	// 			});
	// 		}
	// 	});
	// }, []);
    return (
       <>
       {/* <Routing/> */}
       {/* <Myfooter/> */}

	   {/* <Header/>
	   <Home/>
	   <Checkout/> */}

	   
	   {/* othercompont routing */}
	   {/* <Routing/> */}
	   
	   <Router>
        <Routes>
          
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

			<Route
									path="/Checkout"
									element={
										<>
											<Header />
											<Checkout />
											{/* <Footer /> */}
										</>
									}
								/>


<Route
						path="/payment"
						element={
							<>
								<Header />
								<Elements  stripe={promise}> 
								<Payment/>
								</Elements >
								{/* <Footer /> */}
							</>
						}
					/>


<Route
						path="/login"
						element={
							<>
								<Login/>
								{/* <Footer /> */}
							</>
						}
					/>

<Route
						path="/orders"
						element={
							<>
							<Header/>
								<Orders/>
								{/* <Footer /> */}
							</>
						}
					/>					
					
        </Routes>
    </Router>
				
       
       </>
    );
}

export default App;