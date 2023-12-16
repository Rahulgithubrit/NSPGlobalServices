import React, { useEffect } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
import Alteration from '../assets/Alteration services .png'
import style from './automotive.module.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import BlogCard from '../Pages/BlogCard'
import jewelaryStore from '../assets/Jewelry stores.png'
import Clothing from '../assets/Clothing rental.png'
import Shoe from '../assets/Shoe stores.png'
import Vintage from '../assets/Vintage stores.png'
import Second from '../assets/Secondhand stores.png'
import Beauty from '../assets/Beauty salons.png'
import BannerImage from '../assets/Automotive/fashion.png'
import { Helmet } from 'react-helmet';


export default function Fashion() {
  useEffect(function () {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Digital Marketing Services For Fashion Industries</title>
        <meta name="description" content="Transform your fashion brand's online presence with our expert digital marketing strategies. Discover how we can help you thrive in the fashion industry." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/fashion" />
      </Helmet>
      <div className={style.container1}>
        <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
        <h1 className={style.title}>Digital Marketing For Fashion Industries</h1>
        {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
      </div>
      <div className={style.container2}>
        <div> <BlogCard img={Vintage} link='/industries/fashion/vintage-stores/seo' catagory='Vintage Stores' /></div>
        <div> <BlogCard img={Second} link='/industries/fashion/secondhand-stores/seo' catagory='Secondhand Stores' /></div>
        <div> <BlogCard img={Alteration} link='/industries/fashion/consignment-shops' catagory='Consignment Shops' /></div>
        <div> <BlogCard img={Alteration} link='/industries/fashion/alteration-services/seo' catagory='Alteration Services' /></div>
        <div> <BlogCard img={Clothing} link='/industries/fashion/clothing-rental/seo' catagory='Clothing Rental' /></div>
        <div> <BlogCard img={Shoe} link='/industries/fashion/shoe-stores/seo' catagory='Shoe Stores' /></div>
        <div> <BlogCard img={Beauty} link='/industries/fashion/beauty-salons/seo' catagory='Beauty Salons' /></div>
        <div> <BlogCard img={jewelaryStore} link='/industries/fashion/jewellry-stores/seo' catagory='Jewelry Stores' /></div>
      </div>
    </>
  )
}
