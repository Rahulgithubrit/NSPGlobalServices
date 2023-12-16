import React from 'react'
import style from '../../LandingPages/blog.module.css'
import BannerImage from '../../assets/Untitled design/3.png'
import fashion from '../../assets/Fashion.png'
import BlogCard from '../../Pages/BlogCard'

function ContentMarketingSubpage() {
  return (
    <>
    <div className={style.container1}>
        <img loading='lazy' src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>Content Marketing</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
      <div>   <BlogCard img={fashion} link='/content-marketing-services/seo-content-writing' catagory='SEO Content Writing' /></div>
      <div>   <BlogCard img={fashion} link='/content-marketing-services/product-descriptions' catagory='Product Descriptions' /></div>
      <div>   <BlogCard img={fashion} link='/content-marketing-services/guest-blogging' catagory='Guest Blogging' /></div>
      <div>   <BlogCard img={fashion} link='/content-marketing-services/web-copy-writing' catagory='Web Copy Writing' /></div>
      <div>   <BlogCard img={fashion} link='/content-marketing-services/blog-writing' catagory='Blog Writing' /></div>
      </div>
   </>
  )
}

export default ContentMarketingSubpage
