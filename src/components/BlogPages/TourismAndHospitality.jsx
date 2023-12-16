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
import HotelsResorts from '../assets/Tourism & Hospitality/Hotels & Resorts.png'
// import Events from '../assets/Tourism & Hospitality/Event venues.png'
import Country from '../assets/Tourism & Hospitality/Country Clubs.png'
import Casinos from '../assets/Tourism & Hospitality/Casinos .png'
import Amussement from '../assets/Tourism & Hospitality/Amusement parks.png'
import Adventure from '../assets/Tourism & Hospitality/Adventure tourism companies.png'
import Limo from '../assets/Tourism & Hospitality/Limo Companies.png'
import Museums from '../assets/Tourism & Hospitality/Museums.png'
import MuseumsArt from '../assets/Tourism & Hospitality/Art.jpg'
import Resturent from '../assets/Tourism & Hospitality/Restaurants and cafes.png'
import Tour from '../assets/Tourism & Hospitality/Tour operators.png'
import Trevel from '../assets/Tourism & Hospitality/Travel agencies.png'
import Vacation from '../assets/Tourism & Hospitality/Vacation Rentals.png'
import BannerImage from '../assets/Automotive/tourism.png'
import { Helmet } from 'react-helmet';

export default function TourismAndHospitality() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
    <Helmet>
        <title>Strategic Digital Marketing for Tourism And Hospitality</title>
        <meta name="description" content="Fuel your Tourism And Hospitality success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/tourism-hospitality" />
      </Helmet>
     <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Tourism And Hospitality</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
        <div> <BlogCard img={HotelsResorts} link='/industries/tourism-hospitality/hotels-resorts' catagory='Hotels & Resorts' /></div>
        <div> <BlogCard img={Vacation} link='/industries/tourism-hospitality/vacation-rentals' catagory='Vacation Rentals' /></div>
        <div> <BlogCard img={Museums} link='/industries/tourism-hospitality/museums' catagory='Museums' /></div>
        <div><BlogCard img={Tour} link='/industries/tourism-hospitality/tour-operators' catagory='Tour Operators' /></div>
        <div> <BlogCard img={Trevel} link='/industries/tourism-hospitality/travel-agencies' catagory='Travel Agencies' /></div>
        <div> <BlogCard img={Resturent} link='/industries/tourism-hospitality/movie-theaters' catagory='Resturent And Cafes' /></div>
        <div> <BlogCard img={Amussement} link='/industries/tourism-hospitality/amusement-parks' catagory='Amusement Parks' /></div>
        <div> <BlogCard img={MuseumsArt} link='/industries/tourism-hospitality/art-galleries' catagory='Art Galleries' /></div>
        <div> <BlogCard img={Adventure} link='/industries/tourism-hospitality/adventure' catagory='Adventure Tourism Companies' /></div>
        <div> <BlogCard img={Casinos} link='/industries/tourism-hospitality/casinos' catagory='Casinos' /></div>
        <div> <BlogCard img={Country} link='/industries/tourism-hospitality/country-clubs' catagory='Country Clubs' /></div>
        <div> <BlogCard img={Limo} link='/industries/tourism-hospitality/limo-companies' catagory='Limo Companies' /></div>
      </div>
    </>
  )
}
