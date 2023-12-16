import React, { useEffect } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
import BannerImage from '../assets/Ecommerce/20230818_001243_0001.png'
import style from './contact.module.css'
import { HiLocationMarker } from 'react-icons/hi'
import AOS from 'aos'
import "aos/dist/aos.css";
import Toolsnames from '../Pages/Toolsnames'
import { Helmet } from 'react-helmet'

export default function Contact() {
    useEffect(function () {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
         <Helmet>
                <title>Contact NSP for Expert Digital Marketing Services</title>
                <meta name="description" content="Ready to boost your online presence? Contact our digital marketing experts today for tailored solutions and expert advice." />
                <link rel="canonical" href="https://www.nspglobalservices.com/contact-us"/>
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage}   style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h2 className={style.title} id={style.titleblack} >Contact us</h2>
                {/* <p className={style.subtitle} id={style.titleblack}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
            {/* contact us end */}
            <div className={style.container2}>
                <div className={style.contact}>
                    <h1 className={style.contact_para}>Contact Us</h1>
                    <h2 className={style.contact_hone}>We Want to Hear from You</h2>
                    <p className={style.contact_para1}>Are you eager to elevate your business to new heights? Look no further! Our digital marketing agency specializes in crafting strategic campaigns tailored to your needs. With our expertise in social media, SEO, Paid Advertising, and content creation, we can help you increase brand exposure and drive more traffic to your website. Say goodbye to ineffective marketing strategies and hello to results-driven solutions. Let us take your business from good to great - contact us today!</p>
                    {/* <li className={style.container2_li}>
                        <div className={style.icons}>
                            <HiLocationMarker size={30} style={{ color: ' #7153d9' }} />
                        </div>
                        <div className={style.location}>
                            <h3>Address</h3>
                            <span>20, Bordeshi, New York, Dhaka</span>
                        </div>
                    </li> */}
                    <li className={style.container2_li}>
                        <div className={style.icons}>
                            <HiLocationMarker size={30} style={{ color: ' #7153d9' }} />
                        </div>
                        <div className={style.location}>
                            <h3>Email Address</h3>
                            <span><a href="mailto:info@nspglobalservices.com" rel='noreferrer' className={style.Email} target='_blank' style={{textDecoration:'none'}} >info@nspglobalservices.com</a></span>
                        </div>
                    </li>
                    {/* <li className={style.container2_li}>
                        <div className={style.icons}>
                            <HiPhone size={30} style={{ color: ' #7153d9' }} />
                        </div>
                        <div className={style.location}>
                            <h3>Phone Number</h3>
                            <span>+91 97172 44643</span>
                        </div>
                    </li> */}
                </div>
                <div className={style.form}>
                    <form action="https://formsubmit.co/nspglobalservices@gmail.com" method="POST">
                        <h2>Write a Message</h2>
                        <input type="text" placeholder='name' name="name" required alt='input'/>
                        <input type="text" placeholder='email' name="email" required alt='input'/>
                        <input type="text" placeholder='phone' name="phone" required alt='input'/>
                        <textarea name="message" required cols="30" rows="10" placeholder='Write your comment here' alt='input'></textarea>
                        <input type="hidden" name="_template" value="table"></input>
                        <button type='submit' className={style.form_atag} >Submit Now</button>
                    </form>
                </div>
            </div>
            <Toolsnames/>
        </>
    )
}
