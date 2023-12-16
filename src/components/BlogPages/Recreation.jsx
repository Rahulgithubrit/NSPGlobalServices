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
import BoatDealer from '../assets/Recreation And Entertainment/Boat Dealers.png'
import RVParks from '../assets/Recreation And Entertainment/Campgrounds & RV Parks.png'
import RadioStation from '../assets/Recreation And Entertainment/Radio Stations.png'
import SwimmingPool from '../assets/Recreation And Entertainment/Swimming Pool Companies.png'
import GolfCourse from '../assets/Recreation And Entertainment/Golf Courses.png'
import OutDoorProduct from '../assets/Recreation And Entertainment/Outdoor Products.png'
import recreation from '../assets/Recreation And Entertainment/Recreation & Entertainment.png'
import BannerImage from '../assets/Automotive/recreation.png'
import { Helmet } from 'react-helmet';

export default function Recreation() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
      <Helmet>
        <title>Drive Success in Recreation: Our Proven Digital Marketing Services</title>
        <meta name="description" content="Transform your recreational business with our expert digital marketing services. Boost visibility, engage audiences, and drive success with tailored strategies." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/recreation" />
      </Helmet>
     <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Recreation Industry</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
        <div> <BlogCard img={BoatDealer} link='/industries/recreation/boat-dealers/seo' catagory='Boat Dealers' /></div>
        <div> <BlogCard img={RVParks} link='/industries/recreation/rv-parks-campgrounds/seo' catagory='Campgrounds & RV Parks' /></div>
        <div> <BlogCard img={GolfCourse} link='/industries/recreation/golf-course-companies/seo' catagory='Golf Courses' /></div>
        <div><BlogCard img={OutDoorProduct} link='/industries/recreation/outdoor-products/seo' catagory='Outdoor Products' /></div>
        <div> <BlogCard img={RadioStation} link='/industries/recreation/radio-stations/seo' catagory='Radio Stations' /></div>
        <div> <BlogCard img={recreation} link='/industries/recreation/travel-recreation-websites' catagory='Recreation' /></div>
        <div> <BlogCard  link='' catagory='' /></div>
        <div> <BlogCard img={SwimmingPool} link='/industries/recreation/swimming-pool-companies/seo' catagory='Swimming Pool Companies' /></div>
      </div>
    </>
  )
}
