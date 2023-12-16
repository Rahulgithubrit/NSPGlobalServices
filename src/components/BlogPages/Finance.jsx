import React, { useEffect } from 'react'
// import img1 from '../assets/sha/pe-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
import style from './automotive.module.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import BlogCard from '../Pages/BlogCard'
import AccoutintingFirms from '../assets/Accounting firms.png'
import CPA from '../assets/CPA Firms.png'
import CreditServices from '../assets/Credit Services.png'
import CreditUnions from '../assets/Credit Unions.png'
import LoanOffer from '../assets/Loan Officer.png'
import WealthManegement from '../assets/Wealth Management Companies.png'
import FinencialAdvisors from '../assets/Financial advisors.png'
import BannerImage from '../assets/Automotive/20230726_200021_0003.png'
import { Helmet } from 'react-helmet';


export default function Finance() {
  useEffect(function () {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Drive Growth with Our Financial Services Digital Marketing Expertise</title>
        <meta name="description" content="Boost your financial services brand with our expert digital marketing agency. Drive growth, maximize ROI, and outshine the competition." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/finance" />
      </Helmet>
         <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Financial Services Digital Marketing Agency</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
        <div> <BlogCard img={AccoutintingFirms} link='/industries/finance/accountants/seo' catagory='Accounting Firms' /></div>
        {/* <div onClick={() => { navigate('/banks') }}> <BlogCard img={Fashion} catagory='Banks' /></div> */}
        <div> <BlogCard img={CPA} link='/industries/finance/cpa-firms/seo' catagory='CPA Firms' /></div>
        <div><BlogCard img={CreditServices} link='/industries/finance/credit-services/seo' catagory='Credit Services' /></div>
        <div><BlogCard img={CreditUnions} link='/industries/finance/credit-unions/seo' catagory='Credit Unions' /></div>
        <div><BlogCard img={LoanOffer} link='/industries/finance/loan-officer/seo' catagory='Loan Officer' /></div>
        <div> <BlogCard img={WealthManegement} link='/industries/finance/wealth-management/seo' catagory='Wealth Manegement Campanies' /></div>
        <div> <BlogCard img={FinencialAdvisors} link='/industries/finance/financial-advisors/seo' catagory='Financial Advisors' /></div>
      </div>
    </>
  )
}
