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
import FinanceInsurance from '../assets/Insurance (1)/Financial Insurance.png'
import AutoInsurance from '../assets/Insurance (1)/Auto insurance.png'
import Bussines from '../assets/Insurance (1)/Business insurance.png'
import DisabilityInsurance from '../assets/Insurance (1)/Disability insurance.png'
import Health from '../assets/Insurance (1)/Health Insurance.png'
import HomeInsurance from '../assets/Insurance (1)/Homeowners insurance.png'
import Travel from '../assets/Insurance (1)/Travel insurance.png'
import BannerImage from '../assets/Automotive/insurance.png'
import { Helmet } from 'react-helmet';

export default function Insurance() {
  useEffect(function () {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>SEO Services for Insurance Companies | Boost Your Online Presence</title>
        <meta name="description" content="Drive organic traffic to your insurance website with our SEO strategies. Elevate your company's visibility and reputation online." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/insurance" />
      </Helmet>
      <div className={style.container1}>
        <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>SEO Services for Insurance Companies</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
        <div> <BlogCard img={FinanceInsurance} link='/industries/insurance/financial-insurance/seo' catagory='Financial Insurance' /></div>
        <div> <BlogCard img={Health} link='/industries/insurance/health-insurance/seo' catagory='Health Insurance' /></div>
        <div> <BlogCard img={Bussines} link='/industries/insurance/business-insurance/seo' catagory='Business Insurance' /></div>
        <div> <BlogCard img={AutoInsurance} link='/industries/insurance/automobile-insurance/seo' catagory='Auto Insurance' /></div>
        <div> <BlogCard img={Travel} link='/industries/insurance/travel-insurance/seo' catagory='Travel Insurance' /></div>
        <div> <BlogCard img={HomeInsurance} link='/industries/insurance/home-insurance/seo' catagory='HomeOwners Insurance' /></div>
        <div> <BlogCard img={DisabilityInsurance} link='/industries/insurance/disability-insurance/seo' catagory='Disability Insurance' /></div>
      </div>
    </>
  )
}
