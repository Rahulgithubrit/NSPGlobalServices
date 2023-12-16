import React from 'react'
import { Helmet } from 'react-helmet'
import HomeTwo from '../../LandingPages/HomeTwo'

export default function TechCompanies() {
  return (
    <>
      <Helmet>
        <title>Strategic Digital Marketing for Technology Companies</title>
        <meta name="description" content="Fuel your Technology Companies success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/technology/technology-companies" />
      </Helmet>
      {/* <h1></h1>
      <div>TechCompanies</div> */}
      <HomeTwo h1="Digital Marketing Services for Technology Companies"/>
    </>
  )
}
