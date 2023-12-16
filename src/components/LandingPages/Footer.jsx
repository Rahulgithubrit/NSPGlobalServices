import React from 'react'
import style from './footer.module.css'
import bgimg1 from '../assets/shape-one (1).png'
import bgimg2 from '../assets/shape-two (1).png'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io5'
import { FaInstagramSquare, FaYoutube } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Footer() {
    
    return (
        <>
            <div className={style.footer}>

                <img src={bgimg1}  className={style.bgimg1} alt="" />
                <div className={style.footer_top}>
                    <div>
                        <form action="https://formsubmit.co/nspglobalservices@gmail.com" method="POST" className={style.footer_form}>
                            <input className={style.footer_input} placeholder='Your website url' name="email" required type="text" />
                            <button type='submit' className={style.footer_btn}>Receive a No-Cost Audit Report</button>
                        </form>
                    </div>
                </div>
                <div className={style.footer_row}>
                    <div className={style.footer_div2}>
                        <h5 className={style.footer_div2_hone}>Types Of Service</h5>
                        <ul >
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services">OutSourcing SEO Service</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/ppc-services">Digital Advertising Campaigns</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services/nationwide-seo">Nationwide SEO</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services/ga4-migration">GA4 Migration</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services/celebrity-seo">Celebrity SEO</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services/luxury-seo">Luxury SEO</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services/link-building-services">Link Building Services</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services/seo-keywords-research">SEO Competitor Analysis</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services/seo-audits">SEO Audit & Analysis</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services/international-seo">International SEO</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services/google-analytics-services">Google Analytics services</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.footer_div2}>
                        <h5 className={style.footer_div2_hone}>Industries We Serve</h5>
                        <ul >
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/recreation">Recreation & Entertainment</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                {/* <Link className={style.footer_div2_atag} to="/industries/professional-services">Professional Services</Link> */}
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/franchises">Franchises</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/fitness">Fitness</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/home-repair">Home & Repair</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/professional-services">Professional Services</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="seo-services">SaaS SEO Services</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/insurance">Insurance</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/local-consumer">Local Consumer Services</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/government-agency">Government Agencies</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/tourism-hospitality">Tourism & Hospitality</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/foods-beverage">Food & Beverage</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/heavy-equipment">Heavy Equipment</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.footer_div2}>
                        <h5 className={style.footer_div2_hone}>Quick Links</h5>
                        <ul >
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/about">About us</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="https://nspglobalservices.com/blogs/">Blog</Link>
                            </li>
                            {/* <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="">History</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="">Support</Link>
                            </li> */}
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/contact-us">Contact</Link>
                            </li>
                            {/* <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="">Refund</Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className={style.footer_div2}>
                        <h5 className={style.footer_div2_hone}>Tools</h5>
                        <ul >
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/recration">Recreation & Entertainment</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/professional-services">Professional Services</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/fitness">Fitness</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/home-repair">Home & Repair</Link>
                            </li>
                            
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/seo-services">SaaS SEO Services</Link>
                            </li>
                            <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="/industries/insurance">Insurance</Link>
                            </li>
                            {/* <li className={style.footer_div2_li}>
                                <Link className={style.footer_div2_atag} to="">Life Science</Link>
                            </li> */}
                           
                        </ul>
                    </div>
                    <div className={style.footer_div4}>
                        <div className={style.footer_div4_div1}><Link to="https://www.twitter.com" alt='twitter' target='_blank'><AiFillTwitterCircle style={{ color: 'white', cursor: 'pointer' }} size={30} /></Link><Link to="https://www.facebook.com/NSPGlobalServices" alt='facebook' target='_blank'><IoLogoFacebook style={{ color: 'white', cursor: 'pointer' }} size={30} /></Link><Link to="https://www.instagram.com/nspglobalservices/"  alt='instagram' target='_blank'><FaInstagramSquare style={{ color: 'white', cursor: 'pointer', borderRadius: '18px' }} size={30} /></Link><Link to="https://www.youtube.com/channel/UC4wKp8QpucRLEx77xS5JuLw" alt='youtube' target='_blank'><FaYoutube style={{ color: 'white', cursor: 'pointer', borderRadius: '18px' }} size={30} /></Link><Link to="https://www.linkedin.com/company/nsp-global-services/?originalSubdomain=in" alt='linkedin' target='_blank'><BsLinkedin style={{ color: 'white', cursor: 'pointer', borderRadius: '10px' }} size={25} /></Link></div>
                        <div className={style.atag_div}><Link to="/terms-condition" className={style.footer_div4_atag}>Terms & Condition</Link><Link className={style.footer_div4_atag} to="/privacy-policy">Privacy Policy</Link></div>
                    </div>
                </div>
                <img src={bgimg2} className={style.bgimg2} alt="" />
            </div>
        </>
    )
}
