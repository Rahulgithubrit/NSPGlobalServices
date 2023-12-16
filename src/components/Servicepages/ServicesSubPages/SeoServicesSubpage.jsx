import React from 'react'
import style from '../../LandingPages/blog.module.css'
import BannerImage from '../../assets/Untitled design/3.png'
import fashion from '../../assets/Fashion.png'
import BlogCard from '../../Pages/BlogCard'

function SeoServicesSubpage() {
  return (
    <>
    <div className={style.container1}>
        <img loading='lazy' src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>SEO Services</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
      <div>   <BlogCard img={fashion} link='/seo-services/ecommerce-seo' catagory='Ecommerce SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/local-seo' catagory='Local SEO' /></div>
      <div>   <BlogCard img={fashion} link='seo-services/mobile-seo' catagory='Mobile SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/shopify-seo' catagory='Shopify SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/wordpress-seo' catagory='WordPress SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/youtube-seo' catagory='YouTube SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/on-page-seo' catagory='On-Page SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/technical-seo' catagory='Technical SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/franchise-seo' catagory='Franchise SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/small-business-seo' catagory='Small Business SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/seo-consultancy' catagory='SEO Consultancy' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/nationwide-seo' catagory='NationWide SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/international-seo' catagory='International SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/luxury-seo' catagory='Luxury SEo' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/celebrity-seo' catagory='Celebrity SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/ga4-migration' catagory='GA4 Migration' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/seo-audits' catagory='Audit SEO' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/google-analytics-services' catagory='Google Analytics Services' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/link-building-services' catagory='Link Building Services' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/seo-keywords-research' catagory='Seo Keyword Research' /></div>
      <div>   <BlogCard img={fashion} link='/seo-services/backlink-audit' catagory='Backlink Audit' /></div>
      
      </div>
   </>
  )
}

export default SeoServicesSubpage
