import React from 'react'
import style from '../../LandingPages/blog.module.css'
import BannerImage from '../../assets/Untitled design/3.png'
import fashion from '../../assets/Fashion.png'
import BlogCard from '../../Pages/BlogCard'

function PPCServicesSubpage() {
  return (
    <>
    <div className={style.container1}>
        <img loading='lazy' src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>PPC Services</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
      <div>   <BlogCard img={fashion} link='/ppc-services/google-ads-marketing' catagory='Google ADS Marketing' /></div>
      <div>   <BlogCard img={fashion} link='/ppc-services/ppc-management-services' catagory='PPC Management Services' /></div>
      <div>   <BlogCard img={fashion} link='/ppc-services/facebook-advertising' catagory='Facebook Advertising' /></div>
      <div>   <BlogCard img={fashion} link='/ppc-services/instagram-advertising' catagory='Instagram Advertising' /></div>
      <div>   <BlogCard img={fashion} link='/ppc-services/youtube-advertising' catagory='YouTube Advertising' /></div>
      <div>   <BlogCard img={fashion} link='/ppc-services/twitter-marketing' catagory='Twitter Marketing' /></div>
      <div>   <BlogCard img={fashion} link='/ppc-services/linkedin-marketing' catagory='LinkedIn Marketing' /></div>
      <div>   <BlogCard img={fashion} link='/ppc-services/pinterest-marketing' catagory='Pinterest Marketing' /></div>
      <div>   <BlogCard img={fashion} link='/ppc-services/quora-marketing' catagory='Quora Marketing' /></div>
      <div>   <BlogCard img={fashion} link='/ppc-services/whatsapp-marketing' catagory='Whatsapp Marketing' /></div>
      <div>   <BlogCard img={fashion} link='/ppc-services/tiktok-advertising' catagory='Tiktok Advertising' /></div>
      </div>
   </>
  )
}

export default PPCServicesSubpage
