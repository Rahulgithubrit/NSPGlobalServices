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
import AirCraft from '../assets/Manufacturing/Aircraft Sales.png'
import CounterTop from '../assets/Manufacturing/Countertop Manufacturers.png'
import FoodBreveges from '../assets/Manufacturing/Food & Beverage Manufacturing.png'
// import AutoManufacturing from '../assets/Manufacturing/Auto Manufacturing.png'
import AutoManufacturing from '../assets/Auto Manufacturing.png'
import SolarPanel from '../assets/Manufacturing/Solar Panel Manufacturers.png'
import Pharmacuetical from '../assets/Manufacturing/Pharmaceutical Companies.png'
import BannerImage from '../assets/Automotive/20230726_200021_0005.png'
import { Helmet } from 'react-helmet';

export default function Manufacturing() {
  useEffect(function () {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Digital Marketing for Manufacturing Industries: Boost Your Brand</title>
        <meta name="description" content="Discover how digital marketing can transform your manufacturing business. Boost brand visibility, generate leads, and stay ahead in the industry." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/manufacturing" />
      </Helmet>
      <div className={style.container1}>
        <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>Digital Marketing for Manufacturing Industries</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
        <div> <BlogCard img={AutoManufacturing} link='/industries/automotive/auto-manufacturing' catagory='Auto Manufacturing' /></div>
        <div> <BlogCard img={AirCraft} link='/industries/manufacturing/aviation/seo' catagory='Aircraft Sales' /></div>
        <div> <BlogCard img={CounterTop} link='/industries/manufacturing/countertop-manufacturers/seo' catagory='Countertop Manufacturers' /></div>
        <div> <BlogCard img={FoodBreveges} link='/industries/manufacturing/food-beverages-manufacturers/seo' catagory='Food & Beverage Manufacturing' /></div>
        {/* <div><BlogCard img={AutoManufacturing} link='/automanufacturing' catagory='Auto Manufacturing' /></div> */}
        <div> <BlogCard img={SolarPanel} link='/industries/manufacturing/solar-panel-manufacturers/seo' catagory='Solar Panel Manufacturing' /></div>
        <div> <BlogCard img={Pharmacuetical} link='/industries/manufacturing/phamaceutical-manufacturers/seo' catagory='Pharmaceutical' /></div>
      </div>
    </>
  )
}
