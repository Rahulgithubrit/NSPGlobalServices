import React from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
import style from './blog.module.css'
import "aos/dist/aos.css";
import BlogCard from '../Pages/BlogCard'
import fashion from '../assets/Fashion.png'
import Automotive from '../assets/Automotive .png'
import Education from '../assets/Education.png'
import Finance from '../assets/Finance.png'
import Food from '../assets/Food & Beverage.png'
import Frenchise from '../assets/Franchises.png'
import LogisticsAndTransportation from '../assets/Logistics & Transportation services.png'
import Recreation from '../assets/Recreation And Entertainment/Recreation & Entertainment.png'
import RealEstate from '../assets/Real Estate/Real Estate.png'
import Professional from '../assets/Professional Services/Professional Services.png'
import Legal from '../assets/Legal/Legal .png'
import Manufacturing from '../assets/Manufacturing/Manufacturing.png'
import GovernmentAgencies from '../assets/Government agencies/Government agencies.png'
import LocalCosumer from '../assets/Local Consumer Services/Local Consumer Services.png'
import Retail from '../assets/Retail & Ecommerce/Retail & Ecommerce.png'
import TourismAndHospitality from '../assets/Tourism & Hospitality/Tourism & Hospitality.png'
import Fitness from '../assets/fitness/Fitness.png'
import Tech from '../assets/Technology/Technology.png'
import HeavyEquipment from '../assets/Heavy Equipment (1)/Heavy Equipment.png'
import HomeAndRepair from '../assets/Home & Repair/Home & Repair.png'
import HealthCare from '../assets/Healthcare/Healthcare .png'
import Industrial from '../assets/Industrial/Industrial.png'
import Insurance from '../assets/Insurance (1)/Insurance.png'
import BannerImage from '../assets/Automotive/20230726_200021_0000.png'
import { Helmet } from 'react-helmet';


export default function Blog() {
  return (
    <>
      <Helmet>
        <title>NSP: Elevating Digital Marketing for B2B & B2C Industries</title>
        <meta name="description" content="NSP provides digital marketing services to a wide range of sectors in both B2B and B2C markets. Find out how we can help your company expand by clicking here!" />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries" />
      </Helmet>
      <div className={style.container1}>
        <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>Industries</h1>
        {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
        <div>   <BlogCard img={fashion} link='/industries/fashion' catagory='Fashion' /></div>
        <div>   <BlogCard img={Automotive} link='/industries/automotive' catagory='Automotive' /></div>
        <div>   <BlogCard img={Education} link='/industries/education' catagory='Education' /></div>
        <div>   <BlogCard img={Finance} link='/industries/finance' catagory='Finance' /></div>
        <div>   <BlogCard img={Food} link='/industries/food-beverage' catagory='Food & Beverages' /></div>
        <div>   <BlogCard img={Frenchise} link='/industries/franchises' catagory='Franchises' /></div>
        <div>   <BlogCard img={HeavyEquipment} link='/industries/heavy-equipment' catagory='Heavy Equipment' /></div>
        <div>   <BlogCard img={LogisticsAndTransportation} link='/industries/logistics' catagory='Logistics & Transportation' /></div>
        <div>   <BlogCard img={Industrial} link='/industries/industrial' catagory='Industrial' /></div>
        <div>   <BlogCard img={HomeAndRepair} link='/industries/home-repair' catagory='Home & Repair' /></div>
        <div>   <BlogCard img={Insurance} link='/industries/insurance' catagory='Insurance' /></div>
        <div>   <BlogCard img={Legal} link='/industries/legal' catagory='Legal' /></div>
        <div>   <BlogCard img={LocalCosumer} link='/industries/local-consumer' catagory='Local Consumer Services' /></div>
        <div>   <BlogCard img={HealthCare} link='/industries/medical-health' catagory='Medical & Health' /></div>
        <div>   <BlogCard img={Fitness} link='/industries/fitness' catagory='Fitness' /></div>
        <div>   <BlogCard img={Professional} link='/industries/professional-services' catagory='Professional Services' /></div>
        <div>   <BlogCard img={RealEstate} link='/industries/real-estate' catagory='Real Estate' /></div>
        <div>   <BlogCard img={Recreation} link='/industries/recreation' catagory='Recreation & Entertainment' /></div>
        <div>   <BlogCard img={Retail} link='/industries/retail-ecommerce' catagory='Retail & Ecommerce' /></div>
        <div>   <BlogCard img={Tech} link='/industries/technology' catagory='Tech' /></div>
        <div>   <BlogCard img={TourismAndHospitality} link='/industries/tourism-hospitality' catagory='Tourism & Hospitality' /></div>
        <div>   <BlogCard img={Manufacturing} link='/industries/manufacturing' catagory='Manufacturing' /></div>
        <div>   <BlogCard img={GovernmentAgencies} link='/industries/government-agency' catagory='Government Agency' /></div>
      </div>
    </>
  )
}
