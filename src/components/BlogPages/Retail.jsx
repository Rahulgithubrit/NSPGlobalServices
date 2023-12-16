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
import Department from '../assets/Retail & Ecommerce/Department Stores.png'
import Toys from '../assets/Retail & Ecommerce/Toys and games stores.png'
import Ecommerce from '../assets/Retail & Ecommerce/Ecommerce.png'
import HomeDecore from '../assets/Retail & Ecommerce/Home decor and furnishings stores.png'
import Jewelery from '../assets/Retail & Ecommerce/Jewelry and accessories stores.png'
import Luxary from '../assets/Retail & Ecommerce/Luxury Brands.png'
import OnlineMarketPlace from '../assets/Retail & Ecommerce/Online marketplaces.png'
import PetSupplies from '../assets/Retail & Ecommerce/Pet supplies stores.png'
import Sports from '../assets/Retail & Ecommerce/Sports and outdoor stores.png'
import Clothing from '../assets/Retail & Ecommerce/Clothing and apparel stores.png'
import Beauty from '../assets/Retail & Ecommerce/Beauty and skincare stores.png'
import Health from '../assets/Retail & Ecommerce/Health and wellness stores.png'
import Elctrinics from '../assets/Retail & Ecommerce/Electronics stores.png'
import BannerImage from '../assets/Automotive/retail.png'
import { Helmet } from 'react-helmet';

export default function Retail() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
     <Helmet>
        <title>Strategic Digital Marketing for Retail E-Commerce Industries</title>
        <meta name="description" content="Fuel your Retail E-Commerce Industries‍ brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/retail-ecommerce" />
      </Helmet>
    <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Retail E-Commerce Industries</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
        <div> <BlogCard img={Department} link='/industries/retail-ecommerce/department-stores' catagory='Department Stores' /></div>
        <div> <BlogCard img={Toys} link='/industries/retail-ecommerce/toys-stores' catagory='Toys and Games Stores' /></div>
        <div > <BlogCard img={Ecommerce} link='/industries/retail-ecommerce/ecommerce' catagory='Ecommerce' /></div>
        <div><BlogCard img={HomeDecore} link='/industries/retail-ecommerce/home-decor-stores' catagory='Home Decor And Furniture' /></div>
        <div> <BlogCard img={Jewelery} link='/industries/retail-ecommerce/jewelry' catagory='Jewelry And Accessories' /></div>
        <div > <BlogCard img={Luxary} link='/industries/retail-ecommerce/luxury-brands' catagory='Luxury Brands' /></div>
        <div> <BlogCard img={PetSupplies} link='/industries/retail-ecommerce/pet-supplies-store' catagory='Pet Supplies Stores' /></div>
        <div> <BlogCard img={OnlineMarketPlace} link='/industries/retail-ecommerce/online-market-places' catagory='Online MarketPlaces' /></div>
        <div> <BlogCard img={Clothing} link='/industries/retail-ecommerce/apparel-stores' catagory='Clothing And Apparel' /></div>
        <div> <BlogCard img={Beauty} link='/industries/retail-ecommerce/beauty-skincare' catagory='Beauty And Skincare' /></div>
        <div> <BlogCard img={Health} link='/industries/retail-ecommerce/health-wellness-stores' catagory='Health And Wellness' /></div>
        <div> <BlogCard img={Elctrinics} link='/industries/retail-ecommerce/electronics-stores' catagory='Electronics Stores' /></div>
        <div> <BlogCard img={Sports} link='/industries/retail-ecommerce/sports-stores' catagory='Sports And Outdoor Stores' /></div>
      </div>
    </>
  )
}
