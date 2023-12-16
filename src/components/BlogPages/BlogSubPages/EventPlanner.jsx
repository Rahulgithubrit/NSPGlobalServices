import React from 'react'
import { Helmet } from 'react-helmet'
import HomeTwo from '../../LandingPages/HomeTwo'

export default function EventPlanner() {
  return (
    <>
      <Helmet>
        <title>Strategic Digital Marketing for Event Planner</title>
        <meta name="description" content="Fuel your Event Planner Company success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/local-consumer/event-planner" />
      </Helmet>
      {/* <h1></h1>
      <div>EventPlanner</div> */}
      <HomeTwo h1="Digital Marketing Services for Event Planner"/>
    </>
  )
}
