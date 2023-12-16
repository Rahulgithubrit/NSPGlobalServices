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
import CloudComputing from '../assets/Technology/Cloud Computing Companies.png'
import CloudStorage from '../assets/Technology/Cloud storage providers.png'
import AI from '../assets/Technology/Artificial intelligence (AI) companies.png'
import Software from '../assets/Technology/Software.png'
import TechCompanies from '../assets/Technology/Tech Companies.png'
import Robotics from '../assets/Technology/Robotics.png'
import ComputerRepairing from '../assets/Technology/Computer Repair Shops.png'
import CyberSecurity from '../assets/Technology/Cybersecurity companies.png'
import DataAnalutics from '../assets/Technology/Data analytics companies.png'
import DigitalCompanies from '../assets/Technology/Digital marketing agencies.png'
import ItConsustant from '../assets/Technology/IT consulting firms.png'
import MobileApp from '../assets/Technology/Mobile app developers.png'
import Telecommunication from '../assets/Technology/Telecommunications.png'
import VedioGame from '../assets/Technology/Video game companies.png'
import BannerImage from '../assets/Automotive/tech.png'
import { Helmet } from 'react-helmet';

export default function Tech() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <Helmet>
                <title>Expert Digital Marketing Services for Technology Industries</title>
                <meta name="description" content="Our digital marketing services are tailored for the tech industry, driving growth, and innovation." />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/technology" />
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Technology Industries</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
            <div className={style.container2}>
                <div> <BlogCard img={CloudComputing} link='/industries/technology/cloud-computing' catagory='Cloud Computing Companies' /></div>
                <div> <BlogCard img={Software} link='/industries/technology/software' catagory='Software' /></div>
                <div> <BlogCard img={TechCompanies} link='/industries/technology/technology-companies' catagory='Tech Companies' /></div>
                <div><BlogCard img={Telecommunication} link='/industries/technology/tele-communication' catagory='telecommunications' /></div>
                <div> <BlogCard img={Robotics} link='/industries/technology/robotics' catagory='Robotics' /></div>
                <div> <BlogCard img={ComputerRepairing} link='/industries/technology/computer-repair' catagory='Computer Repair Shops' /></div>
                <div> <BlogCard img={CyberSecurity} link='/industries/technology/cyber-security' catagory='Cybersecurity Companies' /></div>
                <div> <BlogCard img={AI} link='/industries/technology/artificial-intelligence' catagory='Artificial intelligence(AI) Companies' /></div>
                <div> <BlogCard img={DataAnalutics} link='/industries/technology/data-analytics' catagory='Data Analytics Companies' /></div>
                <div> <BlogCard img={VedioGame} link='/industries/technology/video-game-companies' catagory='Video Game Companies' /></div>
                <div> <BlogCard img={MobileApp} link='/industries/technology/mobile-app-development-company' catagory='Mobile App Developer' /></div>
                <div> <BlogCard img={DigitalCompanies} link='/industries/technology/digital-marketing' catagory='Digital Marketing Agencies' /></div>
                <div> <BlogCard img={CloudStorage} link='/industries/technology/cloud-storage' catagory='Cloud Storage Providers' /></div>
                <div> <BlogCard img={ItConsustant} link='/industries/technology/it-consulting-firms' catagory='IT Consulting Firms' /></div>
            </div>
        </>
    )
}
