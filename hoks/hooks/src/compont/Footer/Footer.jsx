import React from "react";
// import "./Footer.css";
// import "../../assets/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.css";
// import flag from "../../assets/image/us-flag.jpg";
import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";

function Footer() {
	const LinkItems = [
		{
			title: "Get to Know Us",
			items: [
				{ linkUrl: "https://www.amazon.jobs/en/", linkName: "Careers" },
				{ linkUrl: "#", linkName: "Amazon Newsletter" },
				{ linkUrl: "#", linkName: "About Amazon" },
				{ linkUrl: "#", linkName: "Accessibility" },
				{ linkUrl: "#", linkName: "Sustainability" },
				{ linkUrl: "#", linkName: "Press Center" },
				{ linkUrl: "#", linkName: "Investor Relations" },
				{ linkUrl: "#", linkName: "Amazon Devices" },
				{ linkUrl: "#", linkName: "Amazon Science" },
			],
		},

		{
			title: "Make Money with Us",

			items: [
				{ linkUrl: "#", linkName: "Sell products on Amazon" },
				{ linkUrl: "#", linkName: "Sell apps on Amazon" },
				{ linkUrl: "#", linkName: "Supply to Amazon" },
				{ linkUrl: "#", linkName: "Protect & Build Your Brand" },
				{ linkUrl: "#", linkName: "Become an Affiliate" },
				{ linkUrl: "#", linkName: "Become a Delivery Driver" },
				{ linkUrl: "#", linkName: "Start a Package Delivery Business" },
				{ linkUrl: "#", linkName: "Advertise Your Products" },
				{ linkUrl: "#", linkName: "Self-Publish with Us" },
				{ linkUrl: "#", linkName: "Host an Amazon Hub" },
				{ linkUrl: "#", linkName: "› See More Ways to Make Money" },
			],
		},

		{
			title: "Amazon Payment Products",
			items: [
				{ linkUrl: "#", linkName: "Amazon Visa" },
				{ linkUrl: "#", linkName: "Amazon Store Card" },
				{ linkUrl: "#", linkName: "Amazon Secured Card" },
				{ linkUrl: "#", linkName: "Amazon Business Card" },
				{ linkUrl: "#", linkName: "Shop with Points" },
				{ linkUrl: "#", linkName: "Credit Card Marketplace" },
				{ linkUrl: "#", linkName: "Reload Your Balance" },
				{ linkUrl: "#", linkName: "Amazon Currency Converter" },
			],
		},
		{
			title: "Let Us Help You",
			items: [
				{ linkUrl: "#", linkName: "Amazon and COVID-19" },
				{ linkUrl: "#", linkName: "Your Account" },
				{ linkUrl: "#", linkName: "Your Orders" },
				{ linkUrl: "#", linkName: "Shipping Rates & Policies" },
				{ linkUrl: "#", linkName: "Amazon Prime" },
				{ linkUrl: "#", linkName: "Returns & Replacements" },
				{ linkUrl: "#", linkName: "Manage Your Content and Devices" },
				{ linkUrl: "#", linkName: "Your Recalls and Product Safety Alerts" },
				{ linkUrl: "#", linkName: "Help" },
			],
		},
	];

	return (
		<>
			<div className="Footer ">
				<a className="backToTop d-flex justify-content-center " href="#">
					<a className="text-center text-white my-3" href="/">
						Back to top
					</a>
				</a>
				<div fluid className="Footer__wrapper ">
					<Row className="mx-5 px-5 my-3">
						{LinkItems.map((item, i) => (
							<Col xs={3} sm={6} md={3} lg key={i}>
								<h6 className="mt-4 mb-3 ">{item.title}</h6>
								{item.items.map((links, LinksIndex) => (
									<li key={LinksIndex} className="mb-2 me-5 ">
										<Link to={links.linkUrl}>{links.linkName}</Link>
									</li>
								))}
							</Col>
						))}
					</Row>
				</div>
				<div style={{ border: "1px solid #3A4553" }}></div>
				<div className="Footer__lang   text-center d-flex justify-content-center">
					<a href="#">
						<img
							className="footer__logo pt-3 mt-4 me-5"
							src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
							alt=""
						/>
					</a>

					<Row className="d-flex ms-4 mt-4 lang">
						<div
							className=" col-xs-6
						 col-sm-6 col-md-6"
						>
							<select className="mb-3 p-2 mt-1">
								<option value="en">🌐︎ English</option>
								<option value="es">Spanish</option>
							</select>
						</div>
						<div className="col-xs-6 col-sm-6 p-1 col-md-6  mt-2 ">
							<div className="">
								<Link className="py-2 border border-secondary">
									<img className="flag ps-1 " src={flag} alt="px-1 Flag" />{" "}
									<span className="me-1"> United States</span>
								</Link>
							</div>
						</div>
					</Row>
				</div>

				<br />
				<center className="build_by pb-3">
					<div className="fs-4 ">Built by: Nardos Moges</div>
				</center>
			</div>
		</>
	);
}

export default Footer;
