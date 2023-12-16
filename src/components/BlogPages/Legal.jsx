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
import Bankruptcy from '../assets/Legal/Bankruptcy lawyers.png'
import FamilyLaw from '../assets/Legal/Family lawyers.png'
import CriminalDefence from '../assets/Legal/Criminal defense lawyers.png'
import Immigration from '../assets/Legal/Immigration lawyers.png'
import EstatePlanning from '../assets/Legal/Estate planning lawyers.png'
import PersonalInjury from '../assets/Legal/Personal Injury.jpg'
import BannerImage from '../assets/Automotive/20230726_200021_0004.png'
import { Helmet } from 'react-helmet';

export default function Legal() {
  useEffect(function () {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Expert Digital Marketing Services for Legal Professionals</title>
        <meta name="description" content="Our digital marketing strategies are designed to help legal professionals succeed online. Choose us to navigate the digital landscape." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/legal" />
      </Helmet>
      <div className={style.container1}>
        <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>Digital Marketing Services for Legal Professionals</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
        <div> <BlogCard img={PersonalInjury} link='/industries/legal/personal-injury-lawyers/seo' catagory='Personal Injury Lawyers' /></div>
        <div> <BlogCard img={CriminalDefence} link='/industries/legal/criminal-defense-lawyers/seo' catagory='Criminal Defence Law' /></div>
        <div> <BlogCard img={FamilyLaw} link='/industries/legal/family-lawyers/seo' catagory='Familiy Law' /></div>
        <div><BlogCard img={Bankruptcy} link='/industries/legal/bankruptcy-lawyers/seo' catagory='Bankruptcy Law' /></div>
        <div> <BlogCard img={Immigration} link='/industries/legal/immigration-lawyers/seo' catagory='Immigartion Law' /></div>
        <div> <BlogCard img={EstatePlanning} link='/industries/legal/estate-planning-lawyers/seo' catagory='Estate Planning Law' /></div>
      </div>
    </>
  )
}
