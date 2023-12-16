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
import Bakeries from '../assets/Bakeries.png'
import Cafes from '../assets/Cafes.png'
import SpecialityFood from '../assets/Specialty food stores.png'
import BarsAndPubs from '../assets/Bars and pubs.png'
import Resturents from '../assets/Restaurants.png'
import OnlineFoodDelivery from '../assets/Online food delivery services..png'
import BannerImage from '../assets/Automotive/food.png'
import OrganicFood from '../assets/Organic food stores.png'
import { Helmet } from 'react-helmet';

export default function FoodAndBeverage() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
   <>
    <Helmet>
        <title>Strategic Digital Marketing for Food Beverage</title>
        <meta name="description" content="Fuel your Food Beverage success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/food-beverage" />
      </Helmet>
    <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Food Beverage</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
       <div> <BlogCard img={Bakeries} link='/industries/food-beverage/bakeries/seo' catagory='Bakeries' /></div>
       <div> <BlogCard img={Fashion} link='/industries/food-beverage/wineries' catagory='Breweries' /></div>
       <div> <BlogCard img={Cafes} link='/industries/food-beverage/cafes/seo' catagory='Cafes' /></div>
       <div> <BlogCard img={Fashion} link='/industries/food-beverage/food-products/seo' catagory='Food Products' /></div>
       <div> <BlogCard img={SpecialityFood} link='/industries/food-beverage/speciality-food-stores/seo' catagory='Specialty Food Stores' /></div>
       <div> <BlogCard img={BarsAndPubs} link='/industries/food-beverage/bars/seo' catagory='Bars & pubs' /></div>
       <div> <BlogCard img={Resturents} link='/industries/food-beverage/restaurants/seo' catagory='Resturants' /></div>
       <div> <BlogCard img={OrganicFood} link='/industries/food-beverage/organic-food-stores/seo' catagory='Organic Food Stores' /></div>
       <div> <BlogCard img={OnlineFoodDelivery} link='/industries/food-beverage/online-food-delivery/seo' catagory='Online Food Delivery Services' /></div>
      </div>
   </>
  )
}
