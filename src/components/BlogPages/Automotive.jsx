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
import AutoRepaire from '../assets/Auto repair.png'
import AutomotiveDealership from '../assets/Automotive dealers.png'
import AutoParts from '../assets/Auto parts.png'
import TruckCompanies from '../assets/Truck companies.png'
import CarDealer from '../assets/Car dealers.png'
import MoterCylcle from '../assets/Motorcycle dealers.png'
import BannerImage from '../assets/Automotive/20230726_200021_0001.png'
import { Helmet } from 'react-helmet';

export default function Automotive(props) {
  useEffect(function () {
    AOS.init({ duration: 2000 });
  }, []);
  return (

    <>
    <Helmet>
                <title>Digital Marketing Services In Automobile Industry</title>
                <meta name="description" content="Drive success in the automotive industry with our tailored digital marketing services. Boost visibility and sales today!" />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/automotive"/>
            </Helmet>
      <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services In Automobile Industry</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
        <div> <BlogCard img={AutoRepaire} link='/industries/automotive/auto-repair-services/seo' catagory='Auto Repairs' /></div>
        <div> <BlogCard img={AutoParts} link='/industries/automotive/auto-parts-retailers/seo' catagory='Auto Service' /></div>
        <div><BlogCard img={MoterCylcle} link='/industries/automotive/motorcycle-dealers/seo' catagory='Motorcycle Dealers' /></div>
        <div> <BlogCard img={TruckCompanies} link='/industries/automotive/truck-companies/seo' catagory='Truck And Trailer Campanies' /></div>
        <div> <BlogCard img={AutomotiveDealership} link='/industries/automotive/automotive-dealers/seo' catagory='Automotive DealerShip' /></div>
        <div> <BlogCard img={CarDealer} link='/industries/automotive/car-dealers/seo' catagory='Car Dealer' /></div>
      </div>
    </>
  )
}
