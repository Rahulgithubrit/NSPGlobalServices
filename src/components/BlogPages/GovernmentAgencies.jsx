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
import Tourism from '../assets/Government agencies/Tourism Agency.png'
import Cultural from '../assets/Government agencies/Cultural Agency.png'
import Economic from '../assets/Government agencies/Economic Development.png'
import Public from '../assets/Government agencies/Public Health.png'
import Environment from '../assets/Government agencies/Environmental Agency.png'
import Government from '../assets/Government agencies/Government Education.png'
import PublicSafety from '../assets/Government agencies/Public Safety.png'
import SocialServices from '../assets/Government agencies/Social Services.png'
import Employment from '../assets/Government agencies/Employment Services.png'
import BannerImage from '../assets/Automotive/government agency.png'
import { Helmet } from 'react-helmet';

export default function GovernmentAgencies(props) {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
      return (
    
        <>
         <Helmet>
        <title>Strategic Digital Marketing for Government Agency</title>
        <meta name="description" content="Fuel your government agency brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/government-agency" />
      </Helmet>
          <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Government Agency</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
          <div className={style.container2}>
            <div> <BlogCard img={Tourism} link='/industries/government-agency/tourism/seo' catagory='Tourism Agency' /></div>
            <div> <BlogCard img={Cultural} link='/industries/government-agency/arts-cultural/seo' catagory='Cultural Agency' /></div>
            <div> <BlogCard img={Economic} link='/industries/government-agency/economic-development/seo' catagory='Economic Development' /></div>
            <div><BlogCard img={Public} link='/industries/nonprofits' catagory='Public Health' /></div>
            <div> <BlogCard img={Environment} link='/industries/government-agency/environment/seo' catagory='Environment Agency' /></div>
            <div> <BlogCard img={Government} link='/industries/government-agency/government-education' catagory='Government Education' /></div>
            <div> <BlogCard img={PublicSafety} link='/industries/government-agency/public-safety-seo' catagory='Public Safety' /></div>
            <div> <BlogCard img={SocialServices} link='/industries/government-agency/social-service' catagory='Social Service' /></div>
            <div> <BlogCard img={Employment} link='/industries/government-agency/employment-service' catagory='Employment Service' /></div>
          </div>
        </>
      )
}
