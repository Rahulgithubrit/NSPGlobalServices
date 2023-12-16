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
import Architecture from '../assets/Professional Services/Architecture.png'
import Consultants from '../assets/Professional Services/Consultants.png'
import Engineering from '../assets/Professional Services/Engineering.png'
import Mergers from '../assets/Professional Services/Mergers and Acquisitions.png'
import Payrolls from '../assets/Professional Services/Payroll Services.png'
import Publishing from '../assets/Professional Services/Publishing Companies.png'
import Recruiters from '../assets/Professional Services/Recruiters.png'
import Translation from '../assets/Professional Services/Translation and Interpretation Services.png'
import BannerImage from '../assets/Automotive/proffesional services.png'
import { Helmet } from 'react-helmet';

export default function ProfessionalServices() {
  useEffect(function () {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Strategic Digital Marketing for Professional Services</title>
        <meta name="description" content="Fuel your Professional Services brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/professional-services" />
      </Helmet>
      <div className={style.container1}>
        <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>Digital Marketing Services for Professional Services</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
        <div> <BlogCard img={Architecture} link='/industries/professional-services/architectural-firms' catagory='Architechure' /></div>
        <div> <BlogCard img={Consultants} link='/industries/professional-services/consultants' catagory='Consultants' /></div>
        <div> <BlogCard img={Engineering} link='/industries/professional-services/engineering-firms' catagory='Engineering' /></div>
        <div><BlogCard img={Mergers} link='/industries/professional-services/mergers-acquisitions' catagory='Mergers And Acquisitions' /></div>
        <div> <BlogCard img={Payrolls} link='/industries/professional-services/payroll-services' catagory='Payroll Services' /></div>
        <div> <BlogCard img={Publishing} link='/industries/professional-services/publishing-companies' catagory='Publishing Companies' /></div>
        <div> <BlogCard img={Recruiters} link='/industries/professional-services/recruiters' catagory='Recruiters' /></div>
        <div> <BlogCard img={Translation} link='/industries/professional-services/translation-and-interpretations-services' catagory='Translation and Interpretation Services' /></div>
      </div>
    </>
  )
}
