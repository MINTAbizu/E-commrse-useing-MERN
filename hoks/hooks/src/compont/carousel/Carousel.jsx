import React from 'react'
// import carousel from 'react-responsive-carousel'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {image} from '../../Othercompont/Home/carouselimage'
import '../carousel/carosel.css'
// import Product from '../product/Product';

function CarouselEffect() {
  return (
    <div>

        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndecators={false}
        showThumbs={false}
        >
            {
                image.map((imagelink,i)=>{
                    return <img src={imagelink} alt="" key={i} />
                         })
            }
        </Carousel>

        
      
    </div>
  ) 
}

export default CarouselEffect
