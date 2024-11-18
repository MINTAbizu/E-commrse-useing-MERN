import React from "react";
import "../Home/Home.css";
import Product from "../../Othercompont/Product/Product";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "../../compont/carousel/Carousel";
// import { Container } from "react-bootstrap";
// import NewCustomer from "../NewCustomer/NewCustomer";

function Home() {
	return (
		<>
			<div fluid className="p-0">
				<div className="home">
					<div className="home__container">
						{/* <HomeCarousel /> */}
						<Carousel/>
						<div className="banner__fadeBottom"></div>
						<div className="home__row">
							<Product
								id="12321341"
								title="INSIGNIA All-New 50-inch Class F30 Series LED 4K UHD Smart Fire TV (NS-50F301NA24, 2023 Model)"
								price={199.99}
								rating={5}
								image="https://m.media-amazon.com/images/I/81DM+ZzL8rL._AC_SL1500_.jpg"
							/>
							<Product
								id="49538094"
								title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
								price={235.99}
								rating={4}
								image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
							/>
						</div>
						<div className="home__row">
						<Product
								id="4903850"
								title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
								price={199.99}
								rating={3}
								image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
							/>
							<Product
								id="23449930"
								title="Foroxin Journal notebook (A5-Dotted, Turquoise Color),192 Pages, Medium 5.7X8.3 inches - 80 gsm Thick Paper, Hardcover"
								price={9.96}
								rating={5}
								image="https://m.media-amazon.com/images/I/61foes84HUL._AC_SX679_.jpg"
							/>
							<Product
								id="32543543"
								title="Apple iPad Pro 11-inch (4th Generation)"
								price={799.0}
								rating={4}
								image="https://m.media-amazon.com/images/I/81gC7frRJyL._AC_SL1500_.jpg"
							/>
							
							<Product
								id="4903850"
								title="
Samsung Galaxy A51 5G|A516U|128GB|Single SIM|GSM Unlocked|Android Smartphone|Black (Renewed)"
								price={169.0}
								rating={3}
								image="https://m.media-amazon.com/images/I/71hH4loo+hL._AC_SL1500_.jpg"
							/>

							<Product
								id="32543543"
								title="Hbada Gaming Chair Ergonomic Racing Chair High Back Computer Chair with Height Adjustment Headrest and Lumbar Support E-Sports Swivel Chair with Adjustment Footrest,Red and Black"
								price={199.99}
								rating={4}
								image="https://m.media-amazon.com/images/I/51cakyagQmL._AC_SL1200_.jpg"
							/>
							<Product
								id="23449930"
								title="Hamilton Beach Works with Alexa Smart Coffee Maker, Programmable, 12 Cup Capacity, Black and Stainless Steel (49350) – A Certified for Humans Device"
								price={99.99}
								rating={3}
								image="https://m.media-amazon.com/images/I/61FBNvTiG1L._AC_SL1001_.jpg"
							/>
						</div>
						<div className="home__row">
							<Product
								id="49032222"
								title="
Cliganic USDA Organic Jojoba Oil, 100% Pure (4oz)|Moisturizing Oil for Face, Hair, Skin & Nails|Natural Cold Pressed Hexane Free"
								price={9.99}
								rating={4}
								image="https://m.media-amazon.com/images/I/61aoVkMoAwL._SL1263_.jpg"
							/>

							<Product
								id="23445930"
								title="
MIATONE Outdoor Portable Bluetooth Wireless Speaker Waterproof - Grey"
								price={42.99}
								rating={5}
								image="https://m.media-amazon.com/images/I/71aeRmTSlrL._AC_SL1500_.jpg"
							/>
							<Product
								id="3254355"
								title="Plug in Wall Sconce Set of 2, Indoor Bedside Wall Lamp Light "
								price={36.9}
								rating={4}
								image="https://m.media-amazon.com/images/I/412II1XVo2S._AC_SL1000_.jpg"
							/>
						</div>

						<div className="home__row">
							<Product
								id="90829332"
								title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
								price={1094.98}
								rating={4}
								image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SL1500_.jpg"
							/>
						</div>
						<div className="home__row">
							<Product
								id="4903850"
								title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
								price={199.99}
								rating={3}
								image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
							/>
							<Product
								id="23449930"
								title="Foroxin Journal notebook (A5-Dotted, Turquoise Color),192 Pages, Medium 5.7X8.3 inches - 80 gsm Thick Paper, Hardcover"
								price={9.96}
								rating={5}
								image="https://m.media-amazon.com/images/I/61foes84HUL._AC_SX679_.jpg"
							/>
							<Product
								id="32543543"
								title="Apple iPad Pro 11-inch (4th Generation)"
								price={799.0}
								rating={4}
								image="https://m.media-amazon.com/images/I/81gC7frRJyL._AC_SL1500_.jpg"
							/>
							<Product
								id="4903850"
								title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
								price={199.99}
								rating={3}
								image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
							/>
							<Product
								id="23449930"
								title="Foroxin Journal notebook (A5-Dotted, Turquoise Color),192 Pages, Medium 5.7X8.3 inches - 80 gsm Thick Paper, Hardcover"
								price={9.96}
								rating={5}
								image="https://m.media-amazon.com/images/I/61foes84HUL._AC_SX679_.jpg"
							/>
							<Product
								id="32543543"
								title="Apple iPad Pro 11-inch (4th Generation)"
								price={799.0}
								rating={4}
								image="https://m.media-amazon.com/images/I/81gC7frRJyL._AC_SL1500_.jpg"
							/>

						</div>
						<div className="home__row">
						<Product
								id="4903850"
								title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
								price={199.99}
								rating={3}
								image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
							/>
							<Product
								id="23449930"
								title="Foroxin Journal notebook (A5-Dotted, Turquoise Color),192 Pages, Medium 5.7X8.3 inches - 80 gsm Thick Paper, Hardcover"
								price={9.96}
								rating={5}
								image="https://m.media-amazon.com/images/I/61foes84HUL._AC_SX679_.jpg"
							/>
							<Product
								id="32543543"
								title="Apple iPad Pro 11-inch (4th Generation)"
								price={799.0}
								rating={4}
								image="https://m.media-amazon.com/images/I/81gC7frRJyL._AC_SL1500_.jpg"
							/>
						</div>
					</div>
				</div>
				{/* <NewCustomer/> */}
			</div>
		</>
	);
}

export default Home;
