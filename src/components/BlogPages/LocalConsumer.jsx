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
import Assisted from '../assets/Local Consumer Services/Assisted and Senior Living.png'
import Auctioner from '../assets/Local Consumer Services/Auctioneers.png'
import Catering from '../assets/Local Consumer Services/Catering.png'
import Florist from '../assets/Local Consumer Services/Florists.png'
import Funarel from '../assets/Local Consumer Services/Funeral Homes.png'
import Janitors from '../assets/Local Consumer Services/Janitors.png'
import Private from '../assets/Local Consumer Services/Private Investigators.png'
import Storage from '../assets/Local Consumer Services/Storage Facilities.png'
import RvDealer from '../assets/Recreation And Entertainment/RV Dealers.png'
import Vaterinarians from '../assets/Local Consumer Services/Veterinarians.png'
import EventPlanner from '../assets/Local Consumer Services/Wedding & Event Planners.png'
import BannerImage from '../assets/Automotive/local consumer.png'
import { Helmet } from 'react-helmet';

export default function LocalConsumer() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
     <Helmet>
        <title>Strategic Digital Marketing for Local Consumer</title>
        <meta name="description" content="Fuel your Local Consumer brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/local-consumer" />
      </Helmet>
     <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Local Consumer</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
        <div> <BlogCard img={Assisted} link='/industries/local-consumer/assisted-senior-living' catagory='Assisted & Senior Living' /></div>
        <div> <BlogCard img={Auctioner} link='/industries/local-consumer/auctioneers/seo' catagory='Auctioneers' /></div>
        <div> <BlogCard img={Catering} link='/industries/local-consumer/catering/seo' catagory='Catering' /></div>
        <div><BlogCard img={EventPlanner} link='/industries/local-consumer/event-planner' catagory='Event Planners' /></div>
        <div> <BlogCard img={Florist} link='/industries/local-consumer/florist/seo' catagory='Florist' /></div>
        <div> <BlogCard img={Funarel} link='/industries/local-consumer/funeral-homes/seo' catagory='Funeral Homes' /></div>
        <div> <BlogCard img={Vaterinarians} link='/industries/local-consumer/veterinarians/seo' catagory='Vaterinarians' /></div>
        <div> <BlogCard img={Janitors} link='/industries/local-consumer/janitors/seo' catagory='Janitors' /></div>
        <div> <BlogCard img={Private} link='/industries/local-consumer/private-investigators/seo' catagory='Private Investigation' /></div>
        <div> <BlogCard img={Storage} link='/industries/local-consumer/storage-facilities/seo' catagory='Storage Facilities' /></div>
        <div> <BlogCard img={RvDealer} link='/industries/local-consumer/driving-school' catagory='RV Dealers' /></div>
      </div>
    </>
  )
}
