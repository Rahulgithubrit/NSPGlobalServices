import React, { useEffect } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
import Fashion from '../assets/Fashion.png'
import style from './automotive.module.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import BlogCard from '../Pages/BlogCard'
// import SEO from '../assets/SEO for Auto Rental business.png'
import Fitness from '../assets/Fitness franchises.png'
// import SocialServices from '../assets/Social Services.png'
import ResturentFrenchise from '../assets/Restaurant franchises.png'
import RetailFrenchise from '../assets/Retail franchises.png'
import AutomotiveFrenchise from '../assets/Automotive franchises.png'
import HEalthAndWellness from '../assets/Health and wellness franchises.png'
import Education from '../assets/Education franchises.png'
import CleaningAndMAintenance from '../assets/Cleaning and maintenance franchises.png'
import TrevelAndHospitaity from '../assets/Travel and hospitality franchises.png'
import HomeImprovement from '../assets/Franchise/Home Improvement.jpg'
import SeniorCare from '../assets/Senior care franchises..png'
import BannerImage from '../assets/Automotive/FrenchiseSEO.png'
import { Helmet } from 'react-helmet';

export default function Franchises() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
      <Helmet>
        <title>Drive Traffic and Leads: SEO for Franchise Industries</title>
        <meta name="description" content="Our SEO services for Franchise Industries drive targeted traffic and leads to boost your business. Get noticed in the Franchise Industries." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/franchises" />
      </Helmet>
      <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>SEO Services for Franchise Industries</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
       <div> <BlogCard img={Fitness} link='/industries/franchises/child-entertainment-and-recreation-franchise' catagory='Fitness Franchise' /></div>
       <div> <BlogCard img={ResturentFrenchise} link='/industries/franchises/restaurant-franchise/seo' catagory='Restaurant Franchise' /></div>
       <div> <BlogCard img={RetailFrenchise} link='/industries/franchises/retail-franchise/seo' catagory='Retail Franchise' /></div>
       <div> <BlogCard img={AutomotiveFrenchise} link='/industries/franchises/automotive-franchise/seo' catagory='Automotive Franchises' /></div>
       <div> <BlogCard img={HEalthAndWellness} link='/industries/franchises/health-wellness-franchise/seo' catagory='Health & wellness Franchises' /></div>
       <div> <BlogCard img={Education} link='/industries/franchises/education-franchise/seo' catagory='Education Franchises' /></div>
       <div> <BlogCard img={CleaningAndMAintenance} link='/industries/franchises/cleaning-franchise/seo' catagory='Cleaning & maintaince Franchises' /></div>
       <div> <BlogCard img={HomeImprovement} link='/industries/franchises/home-improvement-franchise/seo' catagory='Home improvement Franchises' /></div>
       <div> <BlogCard img={TrevelAndHospitaity} link='/industries/franchises/hospitality-franchise/seo' catagory='Travel & Hospatility Franchises' /></div>
       <div> <BlogCard img={SeniorCare} link='/industries/franchises/senior-care-franchise/seo' catagory='Senior Care Franchises' /></div>
      </div>
    </>
  )
}
