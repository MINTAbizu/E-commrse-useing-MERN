import React from 'react'
import Layout from './Layout'
import CarouselEffect from '../compont/carousel/Carousel'
import Product from './product/Product'
import Chekout from './checkout/Chekout'
import Home from './Home'

function Landing() {
  return (
    <Layout> 

      <CarouselEffect/>
      {/* <Chekout/> */}
      <Home/>

      
      
    </Layout>
  )
}

export default Landing

