import React from 'react'
import { Helmet } from 'react-helmet'
import HomeTwo from '../../LandingPages/HomeTwo'

export default function Pharmaceutical() {
  return (
   <>
    <Helmet>
        <title>Strategic Digital Marketing for Pharmaceutical Companies</title>
        <meta name="description" content="Fuel your Pharmaceutical Companies success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/medical-health/pharmaceutical-companies" />
      </Helmet>
      {/* <h1></h1>
   <div>Pharmaceutical</div> */}
   <HomeTwo h1="Digital Marketing Services for Pharmaceutical Companies"/>
   </>
  )
}
