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
import CollageandUnivercity from '../assets/Colleges & Universities.png'
import LanguageSchool from '../assets/Language schools.png'
import DayCares from '../assets/Daycares.png'
import TutoringServices from '../assets/Tutoring services.png'
import CookingSchool from '../assets/Cooking schools.png'
import ArtSchool from '../assets/Art schools.png'
import OnlineEducation from '../assets/Online Education.png'
import BannerImage from '../assets/Automotive/photo_2023-07-26_20-47-29.jpg'
import { Helmet } from 'react-helmet';

export default function Education() {
  useEffect(function () {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services for Education: Boost Your Online Presence</title>
        <meta name="description" content="Our digital marketing services empower educational institutions to thrive online. Elevate your brand and engage students effectively." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/education" />
      </Helmet>
      <div className={style.container1}>
        <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>Digital Marketing Services for Education Industries </h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
        <div> <BlogCard img={CollageandUnivercity} link='/industries/education/colleges-universities/seo' catagory='Colleges & Universities' /></div>
        <div> <BlogCard img={LanguageSchool} link='/industries/education/language-schools/seo' catagory='Language Schools' /></div>
        <div> <BlogCard img={DayCares} link='/industries/education/day-care/seo' catagory='Daycares' /></div>
        <div> <BlogCard img={TutoringServices} link='/industries/education/tutoring/seo' catagory='Tutoring Serives' /></div>
        <div> <BlogCard img={CookingSchool} link='/industries/education/cooking-schools/seo' catagory='Cooking Schools' /></div>
        <div> <BlogCard img={ArtSchool} link='/industries/education/arts-schools/seo' catagory='Arts Schools' /></div>
        <div> <BlogCard img={OnlineEducation} link='/industries/education/online-education/seo' catagory='Online Education' /></div>
      </div>
    </>
  )
}
