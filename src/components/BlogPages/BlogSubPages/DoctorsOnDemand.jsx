import React from 'react'
import { Helmet } from 'react-helmet'
import HomeTwo from '../../LandingPages/HomeTwo'

export default function DoctorsOnDemand() {
  return (
    <>
     <Helmet>
        <title>Strategic Digital Marketing for Hospitals Healthcare</title>
        <meta name="description" content="Fuel your Hospitals Healthcare success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/medical-health/hospitals-healthcare" />
      </Helmet>
      {/* <h1></h1>
    <div>DoctorsOnDemand</div> */}
    <HomeTwo h1="Digital Marketing Services for Hospitals Healthcare"/>
    </>
  )
}
