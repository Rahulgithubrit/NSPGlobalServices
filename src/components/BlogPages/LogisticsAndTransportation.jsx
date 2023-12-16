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
import FreightForward from '../assets/Freight forwarders.png'
import TruckCompanies from '../assets/Truck companies.png'
import AirCargo from '../assets/Air cargo carriers.png'
import ShippingCompanies from '../assets/Shipping companies.png'
import Couries from '../assets/Courier and delivery services.png'
import WareHousing from '../assets/Warehousing and distribution companies.png'
import CustomBroker from '../assets/Customs brokers.png'
import CARTAXIRENTAL from '../assets/Logistics/Car Taxi Rental.jpg'
import LogisticsConsulting from '../assets/Logistics consulting firms.png'
import BannerImage from '../assets/Automotive/logistics.png'
import { Helmet } from 'react-helmet';

export default function LogisticsAndTransportation() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
     <Helmet>
        <title>Strategic Digital Marketing for Logistics</title>
        <meta name="description" content="Fuel your Logistics brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/logistics" />
      </Helmet>
     <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Logistics</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
        <div> <BlogCard img={CARTAXIRENTAL} link='/industries/logistics/taxi-rental-companies/seo' catagory='Car Rentals,Taxi Services' /></div>
        <div> <BlogCard img={FreightForward} link='/industries/logistics/freight' catagory='Freight forwarders' /></div>
        <div> <BlogCard img={TruckCompanies} link='/industries/logistics/trucking-companies/seo' catagory='Trucking Companies' /></div>
        <div><BlogCard img={AirCargo} link='/industries/logistics/air-cargo' catagory='Air Cargo Carriers' /></div>
        <div> <BlogCard img={ShippingCompanies} link='/industries/logistics/shipping' catagory='Shipping Campanies' /></div>
        <div> <BlogCard img={Couries} link='/industries/logistics/courier-services/seo' catagory='Courier and delivery Services' /></div>
        <div> <BlogCard img={WareHousing} link='/industries/logistics/warehousing' catagory='WareHousing And Distribution' /></div>
        <div> <BlogCard img={CustomBroker} link='/industries/logistics/customs' catagory='Customs Brokers' /></div>
        <div> <BlogCard img={LogisticsConsulting} link='/industries/logistics/logistics-consulting-firm' catagory='Logistics Consulting Firm' /></div>
      </div>
    </>
  )
}
