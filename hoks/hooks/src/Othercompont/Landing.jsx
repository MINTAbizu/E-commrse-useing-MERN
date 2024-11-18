import React from 'react'
import Layout from './Layout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../compont/Home';

function Landing() {
  return (
    <Layout>
        <Home/>

      
    </Layout>
  )
}

export default Landing
