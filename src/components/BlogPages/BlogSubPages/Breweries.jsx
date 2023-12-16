import React from 'react'
import { Helmet } from 'react-helmet'
import HomeTwo from '../../LandingPages/HomeTwo'

export default function Breweries() {
  return (
   <>
    <Helmet>
        <title>Strategic Digital Marketing for Wineries</title>
        <meta name="description" content="Fuel your Wineries Company success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/food-beverage/wineries" />
      </Helmet>
      {/* <h1></h1>
   <div>Breweries</div> */}
   <HomeTwo h1="Digital Marketing Services for Wineries"/>
   </>
  )
}
