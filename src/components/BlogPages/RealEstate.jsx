import React, { useEffect } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
import style from './automotive.module.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import BlogCard from '../Pages/BlogCard'
import Apartment from '../assets/Real Estate/Apartments.png'
import propertyManegenent from '../assets/Real Estate/Property Management.png'
import Realtors from '../assets/Real Estate/Realtors.png'
import Staging from '../assets/Real Estate/Home Staging Services.png'
import EstateAppreasials from '../assets/Real Estate/Real Estate Appraisers.png'
import EstatePhotograph from '../assets/Real Estate/Real Estate Photography.png'
import Constructioncompany from '../assets/Real Estate/Construction Company.png'
import EstateInvestementCompany from '../assets/Real Estate/Real Estate Investment Companies.png'
import CommertialEstare from '../assets/Real Estate/Commercial Real Estate Agencies.png'
import BannerImage from '../assets/Automotive/realestate.png'
import { Helmet } from 'react-helmet';

export default function RealEstate() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
     <Helmet>
        <title>Strategic Digital Marketing for Real Estate</title>
        <meta name="description" content="Fuel your Real Estate brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/real-estate" />
      </Helmet>
     <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Real Estate</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
        <div> <BlogCard img={Apartment} link='/industries/real-estate/apartments' catagory='Apartment' /></div>
        <div> <BlogCard img={propertyManegenent} link='/industries/real-estate/property-management-services/seo' catagory='Property Management' /></div>
        <div> <BlogCard img={Realtors} link='/industries/real-estate/realtors' catagory='Realtors' /></div>
        <div><BlogCard img={Staging} link='/industries/real-estate/home-staging-services/seo' catagory='Home Staging Services' /></div>
        <div> <BlogCard img={EstateAppreasials} link='/industries/real-estate/real-estate-appraisers/seo' catagory='Real Estate Appraisers' /></div>
        <div> <BlogCard img={EstatePhotograph} link='/industries/real-estate/real-estate-photographers/seo' catagory='Real Estate Photograph' /></div>
        <div> <BlogCard img={Constructioncompany} link='/industries/real-estate/construction-companies/seo' catagory='Construction Company' /></div>
        <div> <BlogCard img={EstateInvestementCompany} link='/industries/real-estate/real-estate-investement-companies/seo' catagory='Real Estate Investment companies' /></div>
        <div> <BlogCard img={CommertialEstare} link='/industries/real-estate/commercial-real-estate' catagory='Commercial Real Estate Agencies' /></div>
      </div>
    </>
  )
}
