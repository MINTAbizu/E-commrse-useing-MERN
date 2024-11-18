import React from 'react'
// import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';
import '../Footer/Footer.css'

function Myfooter() {
    const Linkitem = [
		{
			title: "Get to Know Us",
			item: [
                // https://www.amazon.jobs/en/
				{ path: "#", name: "Careers" },
				{ path: "#", name: "Amazon Newsletter" },
				{ path: "#", name: "About Amazon" },
				{ path: "#", name: "Accessibility" },
				{ path: "#", name: "Sustainability" },
				{ path: "#", name: "Press Center" },
				{ path: "#", name: "Investor Relations" },
				{ path: "#", name: "Amazon Devices" },
				{ path: "#", name: "Amazon Science" },
			],
		},

		{
			title: "Make Money with Us",

			// item: [
			// 	{ path: "#", name: "Sell products on Amazon" },
			// 	{ path: "#", name: "Sell apps on Amazon" },
			// 	{ path: "#", name: "Supply to Amazon" },
			// 	{ path: "#", name: "Protect & Build Your Brand" },
			// 	{ path: "#", name: "Become an Affiliate" },
			// 	{ path: "#", name: "Become a Delivery Driver" },
			// 	{ path: "#", name: "Start a Package Delivery Business" },
			// 	{ path: "#", name: "Advertise Your Products" },
			// 	{ path: "#", name: "Self-Publish with Us" },
			// 	{ path: "#", name: "Host an Amazon Hub" },
			// 	{ path: "#", name: "› See More Ways to Make Money" },
			// ],
		},

		{
			title: "Amazon Payment Products",
			// item: [
			// 	{ path: "#", name: "Amazon Visa" },
			// 	{ path: "#", name: "Amazon Store Card" },
			// 	{ path: "#", name: "Amazon Secured Card" },
			// 	{ path: "#", name: "Amazon Business Card" },
			// 	{ path: "#", name: "Shop with Points" },
			// 	{ path: "#", name: "Credit Card Marketplace" },
			// 	{ path: "#", name: "Reload Your Balance" },
			// 	{ path: "#", name: "Amazon Currency Converter" },
			// ],
		},
		{
			title: "Let Us Help You",
			// item: [
			// 	{ path: "#", name: "Amazon and COVID-19" },
			// 	{ path: "#", name: "Your Account" },
			// 	{ path: "#", name: "Your Orders" },
			// 	{ path: "#", name: "Shipping Rates & Policies" },
			// 	{ path: "#", name: "Amazon Prime" },
			// 	{ path: "#", name: "Returns & Replacements" },
			// 	{ path: "#", name: "Manage Your Content and Devices" },
			// 	{ path: "#", name: "Your Recalls and Product Safety Alerts" },
			// 	{ path: "#", name: "Help" },
			// ],
		},
	];
  return (
    <>
			<div className="Footer ">
               <a href="">
                   Back to top
               </a>


            </div>

            <div fluid className="Footer__wrapper ">
            {Linkitem.map((item, i) => (
              
							<div key={i}>
								<h6 className="mt3 ">{item.title}</h6>
                                <a href=""></a>
								{/* {item.item.map((links, LinksIndex) => (
									<li key={LinksIndex} className="mbme5 ">
										<a href={links.path}>{links.name}</a>
									</li>
								))} */}
							</div>
						))}
                          {/* console.log(item) */}
            </div>
        
      
    </>
  )
}

export default Myfooter
