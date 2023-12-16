import React from 'react'
import { Helmet } from 'react-helmet'
import HomeTwo from '../../LandingPages/HomeTwo'

export default function Appartment() {
  return (
    <>
     <Helmet>
        <title>Strategic Digital Marketing for Apartments</title>
        <meta name="description" content="Boost your Apartments success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/real-estate/apartments" />
      </Helmet>
      {/* <h1></h1>
    <div>Appartment</div> */}
    <HomeTwo h1="Digital Marketing Services for Apartments"/>
    </>
  )
}
