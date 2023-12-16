import React from 'react'
import style from '../../LandingPages/blog.module.css'
import BannerImage from '../../assets/Untitled design/3.png'
import fashion from '../../assets/Fashion.png'
import BlogCard from '../../Pages/BlogCard'

function DesignandDevelopmentSubpage() {
  return (
    <>
    <div className={style.container1}>
        <img loading='lazy' src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>Design & Development</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
      <div>   <BlogCard img={fashion} link='/design-development/b2b-web-design' catagory='B2B Web Design' /></div>
      <div>   <BlogCard img={fashion} link='/design-development/b2c-web-design' catagory='B2C Web Design' /></div>
      <div>   <BlogCard img={fashion} link='/design-development/ecommerce-web-design' catagory='Ecommerce Web Design' /></div>
      <div>   <BlogCard img={fashion} link='/esign-development/wordpress-web-design' catagory='WordPress Web Design' /></div>
      <div>   <BlogCard img={fashion} link='/design-development/shopify-web-design' catagory='Shopify Web Design' /></div>
      <div>   <BlogCard img={fashion} link='/design-development/responsive-web-design' catagory='Responsive Web Design' /></div>
      <div>   <BlogCard img={fashion} link='/design-development/landing-pages-design' catagory='Landing Pages Design' /></div>
      <div>   <BlogCard img={fashion} link='/design-development/custom-logo-design' catagory='Custom Logo Design' /></div>
      <div>   <BlogCard img={fashion} link='/design-development/website-maintenance' catagory='Website Maintenance' /></div>
      <div>   <BlogCard img={fashion} link='/design-development/website-hosting' catagory='Website Hosting' /></div>
      <div>   <BlogCard img={fashion} link='/design-development/website-optimization-services' catagory='Website Optimization Services' /></div>
      <div>   <BlogCard img={fashion} link='/design-development/website-redesign' catagory='Website Redesign' /></div>
      </div>
   </>
  )
}

export default DesignandDevelopmentSubpage
