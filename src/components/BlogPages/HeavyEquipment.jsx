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
import Forklift from '../assets/Heavy Equipment (1)/Forklift Dealers.png'
import Equipment from '../assets/Heavy Equipment (1)/Equipment Rentals.png'
import Construction from '../assets/Heavy Equipment (1)/Construction equipment.png'
import Agricultural from '../assets/Heavy Equipment (1)/Agricultural equipment.png'
import HeavyTruck from '../assets/Heavy Equipment (1)/Heavy truck and trailer sales.png'
import Industrial from '../assets/Heavy Equipment (1)/Industrial machinery.png'
import MatraiHandling from '../assets/Heavy Equipment (1)/Material handling equipment.png'
import Mining from '../assets/Heavy Equipment (1)/Mining equipment.png'
import Paving from '../assets/Heavy Equipment (1)/Paving Companies.png'
import Power from '../assets/Heavy Equipment (1)/Power generation equipment.png'
import BannerImage from '../assets/Automotive/heavyequipment.png'
import { Helmet } from 'react-helmet';

export default function HeavyEquipment() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
    <Helmet>
        <title>Digital Marketing Services for Heavy Equipment | Boost Your Online Presence</title>
        <meta name="description" content="Our digital marketing services for heavy equipment help you stand out online. Discover how we drive growth in this competitive industry." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/heavy-equipment" />
      </Helmet>
       <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Heavy Equipment</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
       <div> <BlogCard img={Forklift} link='/industries/heavy-equipment/forklift-dealers/seo' catagory='Forklift Dealer' /></div>
       <div> <BlogCard img={Construction} link='/industries/heavy-equipment/construction-equipment-companies/seo' catagory='Construction Equipment' /></div>
       <div> <BlogCard img={Paving} link='/industries/heavy-equipment/paving-companies/seo' catagory='Paving Companies' /></div>
       <div> <BlogCard img={Equipment} link='/industries/heavy-equipment/equipment-rental-companies/seo' catagory='Equipment Rentals' /></div>
       <div> <BlogCard img={Mining} link='/industries/heavy-equipment/mining-equipment-companies/seo' catagory='Mining Equipment' /></div>
       <div> <BlogCard img={Agricultural} link='/industries/heavy-equipment/agricultural-equipment-companies/seo' catagory='Agricultural Equipment' /></div>
       <div> <BlogCard img={Industrial} link='/industries/heavy-equipment/industrial-machinery/seo' catagory='Industrial Machinery' /></div>
       <div> <BlogCard img={MatraiHandling} link='/industries/heavy-equipment/material-handling-equipment/seo' catagory='Material Handling Equipment' /></div>
       <div> <BlogCard img={Power} link='/industries/heavy-equipment/power-generation-equipment/seo' catagory='Power Generaton Equipment' /></div>
       <div> <BlogCard img={HeavyTruck} link='/industries/heavy-equipment/heavy-truck-trailer/seo' catagory='Heavy Truck And Trailer sales' /></div>
      </div>
    </>
  )
}
