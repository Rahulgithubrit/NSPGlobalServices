import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import './navbar1.css'
import {IoReorderThreeOutline} from 'react-icons/io5'
import {HiXMark} from "react-icons/hi2"

export default function Navbar1() {
    const [toggle, setToggle] = useState(true)
    const togglebtn =()=>{
        setToggle(!toggle)
    }
    const scrollpage = ()=>{
        if(window.screenY>=500){
            setToggle(false)
        }
        else
        {
            setToggle(true)
        }
    }
    window.addEventListener('scroll',scrollpage);
    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className="logo"><Link to="/"><img  src={logo} className='logo_img' alt='logo' /></Link></div>
                    <div className='divbtn'><button onClick={togglebtn} className='btnn'>{toggle?< IoReorderThreeOutline size={45}  className='togglebtn'/>:< HiXMark size={45}  className='togglebtnx'/>}</button></div>
                   
                    {/* <input type="radio" name="slider" alt='slider' id="menu-btn" />
                    <input type="radio" name="slider" alt='slider' id="close-btn" /> */}
                    <ul className={toggle?"nav-links":" active"}>
                        {/* <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label> */}
                     
                        {/* <li>
                            <Link to="" className="desktop-item">Dropdown Menu</Link>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">Dropdown Menu</label>
                            <ul className="drop-menu">
                                <li><Link to="">Drop menu 1</Link></li>
                                <li><Link to="">Drop menu 2</Link></li>
                                <li><Link to="">Drop menu 3</Link></li>
                                <li><Link to="">Drop menu 4</Link></li>
                            </ul>
                        </li> */}
                        <li>
                            <Link to="/services" className="desktop-item">Services</Link>
                            <input type="checkbox" />
                            <label htmlFor="showMega" className="mobile-item">Services</label>
                            <div className="mega-box">
                                <div className="content">
                                    <div className="row">
                                        <header><Link to="/seo-services">SEO Services</Link></header>
                                        <ul className="mega-links">
                                            <li><Link to="/seo-services/ecommerce-seo">E-Commerce SEO</Link></li>
                                            <li><Link to="/seo-services/local-seo">Local SEO</Link></li>
                                            <li><Link to="/seo-services/mobile-seo">Mobile SEO</Link></li>
                                            <li><Link to="/seo-services/shopify-seo">Shopify SEO</Link></li>
                                            <li><Link to="/seo-services/wordpress-seo">WordPress SEO</Link></li>
                                            <li><Link to="/seo-services/youtube-seo">YouTube SEO</Link></li>
                                            <li><Link to="/seo-services/on-page-seo">On-Page SEO</Link></li>
                                            <li><Link to="/seo-services/technical-seo">Technical SEO</Link></li>
                                            <li><Link to="/seo-services/franchise-seo">Franchise SEO</Link></li>
                                            <li><Link to="/seo-services/small-business-seo">Small Business SEO</Link></li>      
                                            <li><Link to="/seo-services/seo-consultancy">SEO Consultancy</Link></li> 
                                            <li><Link to="/seo-services/backlink-audit">Backlink Audit</Link></li>
                                            {/* 
                                            <li><Link to="/luxaryseo">Luxury SEO</Link></li>
                                            <li><Link to="/auditseo">SEO Audits</Link></li>
                                            <li><Link to="/celebrityseo">Celebrity SEO</Link></li>
                                            <li><Link to="/keywordresearchseo">SEO Keywords Research</Link></li>
                                            <li><Link to="/nationwideseo">Nationwide SEO</Link></li>
                                            <li><Link to="/internationalseo">International SEO</Link></li>
                                            <li><Link to="/ga4analytics">GA4 Migration</Link></li> */}
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header><Link to="/ppc-services">PPC Services</Link></header>
                                        <ul className="mega-links">
                                            <li><Link to="/ppc-services/google-ads-marketing">Google Ads Marketing</Link></li>
                                            <li><Link to="/ppc-services/ppc-management-services">PPC Management Services</Link></li>
                                            <li><Link to="/ppc-services/facebook-advertising">Facebook Advertising</Link></li>
                                            <li><Link to="/ppc-services/instagram-advertising">Instagram Advertising</Link></li>
                                            <li><Link to="/ppc-services/youtube-advertising">YouTube Advertising</Link></li>
                                            <li><Link to="/ppc-services/twitter-marketing">Twitter Marketing</Link></li>
                                            <li><Link to="/ppc-services/linkedin-marketing">LinkedIn Marketing</Link></li>
                                            <li><Link to="/ppc-services/pinterest-marketing">Pinterest Marketing</Link></li>
                                            <li><Link to="/ppc-services/quora-marketing">Quora Marketing</Link></li>
                                            <li><Link to="/ppc-services/whatsapp-marketing">Whatsapp Marketing</Link></li>
                                            <li><Link to="/ppc-services/tiktok-advertising">Tiktok Advertising</Link></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header><Link to="/design-development">Design & Development</Link></header>
                                        <ul className="mega-links">
                                            <li><Link to="/design-development/b2b-web-design">B2B Web Design</Link></li>
                                            <li><Link to="/design-development/b2c-web-design">B2C Web Design</Link></li>
                                            <li><Link to="/design-development/ecommerce-web-design">Ecommerce Web Design</Link></li>
                                            <li><Link to="/design-development/wordpress-web-design">WordPress Web Design</Link></li>
                                            <li><Link to="/design-development/shopify-web-design">Shopify Web Design</Link></li>
                                            <li><Link to="/design-development/responsive-web-design">Responsive Web Design</Link></li>
                                            <li><Link to="/design-development/landing-pages-design">Landing Pages Design</Link></li>
                                            <li><Link to="/design-development/custom-logo-design">Custom Logo Design</Link></li>
                                            <li><Link to="/design-development/website-maintenance">Website Maintenance</Link></li>
                                            <li><Link to="/design-development/website-hosting">Website Hosting</Link></li>
                                            <li><Link to="/design-development/website-optimization-services">Website Optimization Services</Link></li>
                                            <li><Link to="/design-development/website-redesign">Website Redesign</Link></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header><Link to="/content-marketing-services">Content Marketing</Link></header>
                                        <ul className="mega-links">
                                            <li><Link to="/content-marketing-services/seo-content-writing">SEO Content Writing</Link></li>
                                            <li><Link to="/content-marketing-services/product-descriptions">Product Descriptions</Link></li>
                                            <li><Link to="/content-marketing-services/guest-blogging">Guest Blogging</Link></li>
                                            <li><Link to="/content-marketing-services/web-copy-writing">Web Copy Writing</Link></li>
                                            <li><Link to="/content-marketing-services/blog-writing">Blog Writing</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='serviceslinks' ><Link to="/seo-services-blog">SEO Services</Link></li>
                        <li className='serviceslinks'><Link to="/ppc-services-blog">PPC Services</Link></li>
                        <li className='serviceslinks'><Link to="/design-development-services-blog">Design & Development</Link></li>
                        <li className='serviceslinks'><Link to="/content-marketing-blog">Content Marketing</Link></li>
                        <li>
                            <Link to="/industries" className="desktop-item">Industry</Link>
                            <input type="checkbox"  />
                            <div className="mega-box">
                                <div className="content">
                                    <div className="row">
                                        <ul className="links">
                                            <li className='li-items'><Link to="/industries/fashion">Fashion</Link></li>
                                            <li className='li-items'><Link to="/industries/automotive">Automotive </Link></li>
                                            <li className='li-items'><Link to="/industries/education">Education</Link></li>
                                            <li className='li-items'><Link to="/industries/finance">Finance</Link></li>
                                            <li className='li-items'><Link to="/industries/franchises"> Franchises</Link></li>
                                            <li className='li-items'><Link to="/industries/insurance">Insurance</Link></li>
                                            <li className='li-items'><Link to="/industries/legal">Legal </Link></li>
                                            <li className='li-items'><Link to="/industries/manufacturing">Manufacturing</Link></li>
                                            <li className='li-items'><Link to="/industries/technology">Technology</Link></li>
                                            <li className='li-items'><Link to="/industries/fitness">Fitness</Link></li>
                                            <li className='li-items'><Link to="/industries/industrial">Industrial</Link></li>
                                            <li className='li-items'><Link to="/industries/medical-health">Healthcare </Link></li>
                                            <li className='li-items'><Link to="/industries/food-beverage">Food & Beverage</Link></li>
                                            <li className='li-items'><Link to="/industries/heavy-equipment">Heavy Equipment</Link></li>
                                            <li className='li-items'><Link to="/industries/real-estate">Real Estate</Link></li>
                                            {/* <li className='li-items'><Link to="/professionalservices">Professional Services</Link></li>
                                            <li className='li-items'><Link to="/governmentagency">Government agencies</Link></li>
                                            <li className='li-items'><Link to="/localconsumer">Local Consumer Services</Link></li> */}
                                            <li className='li-items'><Link to="/industries/tourism-hospitality">Tourism {/*& Hospitality*/ } </Link></li>
                                            <li className='li-items'><Link to="/industries/retail-ecommerce">Retail{/*& & Ecommerce*/ } </Link></li>
                                            <li className='li-items'><Link to="/industries/home-repair">Home & Repair</Link></li>
                                            <li className='li-items'><Link to="/industries/recreation">Recreation{/*& Entertainment*/ } </Link></li>
                                            <li className='li-items'><Link to="/industries/logistics">Logistics {/* & Transportation services*/ }</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                </div>
            </nav>
        </>
    )
}
