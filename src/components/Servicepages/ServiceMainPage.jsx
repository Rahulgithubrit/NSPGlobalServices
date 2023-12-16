import React from 'react'
import style from '../LandingPages/blog.module.css'
import BlogCard from '../Pages/BlogCard'
import SEO from '../assets/Technical seo-20230918T171634Z-001/Technical seo/SAVE_20230823_240738.jpg'
import PPC from '../assets/Twitter Marketing-20230918T172021Z-001/Twitter Marketing/19_20230828_160304_0002.png'
import Design from '../assets/B2B Web Design-20230918T172156Z-001/B2B Web Design/17_20230831_170232_0000.png'
import fashion from '../assets/Product Descriptions-20230918T172525Z-001/Product Descriptions/20230907_172715_0002.png'
import BannerImage from '../assets/Untitled design/3.png'
import { Helmet } from 'react-helmet'

function ServiceMainPage() {
  return (
   <>
    <Helmet>
        <title>Digital Marketing Services & Expert Online Marketing Solutions</title>
            <meta name="description" content="Our digital marketing services and online marketing solutions are tailored to your needs. Unleash the power of the internet with our expertise." />
            <link rel="canonical" href="https://www.nspglobalservices.com/services"></link>
        </Helmet>
    <div className={style.container1}>
        <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>Services</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
      <div>   <BlogCard img={SEO} link='/seo-services' catagory='SEO Services' /></div>
      <div>   <BlogCard img={PPC} link='/ppc-services' catagory='PPC Services' /></div>
      <div>   <BlogCard img={fashion} link='/content-marketing-services' catagory='Content Marketing'  /></div>
      <div>   <BlogCard img={Design} link='/design-development' catagory='Design & Development' /></div>
      </div>
   </>
  )
}

export default ServiceMainPage;

