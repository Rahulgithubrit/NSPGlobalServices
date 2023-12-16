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
import SolarEnergy from '../assets/Industrial/Safety Products.png'
import RenewableEnergy from '../assets/Industrial/Renewable Energy.png'
import OilandGas from '../assets/Industrial/Oil & Gas.png'
import Mining from '../assets/Industrial/Mining.png'
import Maintance from '../assets/Industrial/Maintenance & Repair.png'
import Machinry from '../assets/Industrial/Machinery & Tools.png'
import Lumber from '../assets/Industrial/Lumber.png'
import IndustrialEquipment from '../assets/Industrial/Industrial Equipment.png'
import IndustrialAutomation from '../assets/Industrial/Industrial Automation.png'
import Cabinate from '../assets/Industrial/Cabinet Manufacturing.png'
import SafetyProduct from '../assets/Industrial/Safety Products.png'
import IndustrialSupplies from '../assets/Industrial/Industrial Supplies.png'
import Refrigeration from '../assets/Industrial/Refrigeration.jpg'
import Environment from '../assets/Industrial/Environmental Engineering.png'
import Plating from '../assets/Industrial/Plating.jpg'
import Sustainable from '../assets/Industrial/Sustainable Agriculture.png'
// import Torquise from '../assets/Industrial/Turquoise Blue Promotional Service Illustration Facebook Post.png'
import WasteManegement from '../assets/Industrial/Waste Management.png'
import WellDrilling from '../assets/Industrial/Well-Drilling.png'
import BannerImage from '../assets/Automotive/industrial.png'
import { Helmet } from 'react-helmet';

export default function Industrial() {
  useEffect(function () {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Strategic Digital Marketing for Industrial Companies</title>
        <meta name="description" content="Fuel your industrial companies success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/industrial-companies" />
      </Helmet>
      <div className={style.container1}>
        <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>Digital Marketing Services for Industrial Companies</h1>
        {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
        <div> <BlogCard img={SolarEnergy} link='/industries/industrial/solar-energy' catagory='Solar Energy' /></div>
        <div> <BlogCard img={RenewableEnergy} link='/industries/industrial/renewable-energy' catagory='Renewable Energy' /></div>
        <div> <BlogCard img={Refrigeration} link='/industries/industrial/refrigeration' catagory='Refrigeration' /></div>
        <div><BlogCard img={Lumber} link='/industries/industrial/lumber-companies/seo' catagory='Lumber' /></div>
        <div> <BlogCard img={Mining} link='/industries/industrial/mining-companies' catagory='Mining' /></div>
        <div> <BlogCard img={OilandGas} link='/industries/industrial/oil-gas-companies' catagory='Oil & Gas' /></div>
        <div> <BlogCard img={Plating} link='/industries/industrial/plating' catagory='Plating' /></div>
        <div> <BlogCard img={WellDrilling} link='/industries/industrial/well-drilling-companies' catagory='Well-Drilling' /></div>
        <div> <BlogCard img={Cabinate} link='/industries/industrial/cabinet-manufacturing-companies/seo' catagory='Cabinet Manufacturing' /></div>
        <div> <BlogCard img={IndustrialEquipment} link='/industries/industrial/industrial-equipment-manufacturers' catagory='Indusrial Equipment' /></div>
        <div> <BlogCard img={Machinry} link='/industries/industrial/machinery-manufacturers' catagory='Machinery & Tools' /></div>
        <div> <BlogCard img={IndustrialAutomation} link='/industries/industrial/industrial-automation-companies' catagory='Industrial Automation' /></div>
        <div> <BlogCard img={IndustrialSupplies} link='/industries/industrial/industrial-supplies' catagory='Industrial Supplies' /></div>
        <div> <BlogCard img={Maintance} link='/industries/industrial-companies' catagory='Maintenance & Repair' /></div>
        <div> <BlogCard img={SafetyProduct} link='/industries/industrial/safety-products-manufacturers' catagory='Safety Product' /></div>
        <div> <BlogCard img={WasteManegement} link='/industries/industrial/waste-management-companies' catagory='Waste Product' /></div>
        <div> <BlogCard img={Environment} link='/industries/industrial/environmental-engineering' catagory='Environmental Engineering' /></div>
        <div> <BlogCard img={Sustainable} link='/industries/industrial/sustainable-agriculture' catagory='Sustainable Agriculture' /></div>
      </div>
    </>
  )
}
