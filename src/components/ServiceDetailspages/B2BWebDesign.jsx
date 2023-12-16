import React, { useEffect, useState } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
// import blog from '../assets/blog-1-1.png'
// import service from '../assets/service-details-2.png'
import icon7 from '../assets/icon-7.png'
import { MdCall } from 'react-icons/md'
import arrow from '../assets/right-arrow.png'
import AOS from 'aos'
import "aos/dist/aos.css";
import style from './servicedetails.module.css'
import Carousal from '../Carousal'
import BannerImage from '../assets/Automotive/B2B Web Design.png'
import endImages2 from '../assets/B2B Web Design-20230918T172156Z-001/B2B Web Design/19_20230831_170232_0002.png'
import endImages1 from '../assets/B2B Web Design-20230918T172156Z-001/B2B Web Design/18_20230831_170232_0001.png'
import SEO from '../assets/B2B Web Design-20230918T172156Z-001/B2B Web Design/17_20230831_170232_0000.png'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import {Link} from 'react-router-dom'
import form from '../assets/whatsappchat/form.pdf'
import newpdf from '../assets/whatsappchat/NewPdf.pdf'
import { Helmet } from 'react-helmet'
import TrustedCompaniesLogo from '../Pages/TrustedCompaniesLogo'


const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is B2B web design?',
        paragraph: 'B2B web design is the process of creating websites tailored to the specific goals and needs of businesses. It involves implementation of website strategy, modern graphic design, B2C/B2B best practices and designing a website that meets client needs as well as their budget.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How is B2B web design different from B2C web design?',
        paragraph: `The fundamental difference between B2B and B2C web design is that the latter focuses more on visual appeal and user experience, whereas the former requires a clear strategy for best modern website design, as well as robust content with market-specific language and graphics for b2b graphic design.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key considerations in B2B web design?',
        paragraph: `When designing a B2B website, focus on understanding target audiences, creating an effective user experience, researching competitors' websites, utilizing SEO best practices and consulting with experts. Consider key elements such as content strategy and layout when deciding between B2B or B2C design. `
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can B2B web design help in generating leads and conversions?',
        paragraph: `B2B web design helps generate leads & conversions by creating a unique user experience with purposeful content, strategizing the website structure & navigation, and redesigning layouts to fit individual business needs. It's essential for businesses to create best b2b websites that vary from b2c for maximum impact.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What elements should be included in a B2B website?',
        paragraph: `A successful B2B website needs to include a well-thought out strategy, compelling content, and an appealing design. It should also be SEO optimized and tailored to both B2B and B2C audiences. When redesigning, make sure to consider the user experience as well as all elements of the site's design for maximum impact.`
    }
]

export default function B2BWebDesign() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
    }, []);
    const [selection, setSelection] = useState(null)
    const toggle = (i) => {
        if (selection === i) {
            return setSelection(null)
        }
        setSelection(i)
    }
    return (
        <>
        <Helmet>
                <title>B2B Web Design Services | Crafting Digital Solutions for Businesses</title>
                <meta name="description" content="Professional B2B website design to help you communicate your brand effectively. Explore our services now." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/b2b-web-design"/>
            </Helmet>
            <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>B2B Web Design Services</h1>
                <p className={style.subtitle}>Drive Your B2B Business Forward with Our Exceptional Web Design Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/landing-pages-design" className={style.container2_atag}>Landing Pages Design</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/shopify-web-design" className={style.container2_atag}>Shopify Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-hosting" className={style.container2_atag}>Website Hosting</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/custom-logo-design" className={style.container2_atag}>Custom Logo Design</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/b2b-web-design" className={style.container2_atag}>B2B Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/wordpress-web-design" className={style.container2_atag}>WordPress Website Dev</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>If you're a B2B business looking to expand your digital presence, our web design agency is here to help. We specialize in creating custom websites optimized for search engines and designed to generate leads. From redesigning your existing website to building a bespoke one from scratch, our dedicated team will tailor the website to your precise business needs.</p>
                </div>
                <div className={style.container2div4}>
                    <h4 className={style.container2div4_hfour}>Get A Quote</h4>
                    <form action="https://formsubmit.co/nspglobalservices@gmail.com" method="POST" className={style.container2div4_form}>
                        <input placeholder='Your Name' name='name' required className={style.container2div4_input} type="text" />
                        <input placeholder='Your email' name='email' required className={style.container2div4_input} type="text" />
                        <textarea name="text" required className={style.container2div4_textarea} id="" cols="30" rows="10"></textarea>
                        <input type="hidden" name="_template" value="table"></input>
                        <button type='submit' className={style.container2div4_btn}>Submit Now</button>
                    </form>
                </div>
                <div className={style.container2div5}>
                    <h2 className={style.container2div5_hone}>Key Factors</h2>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Customized B2B web design</h4>
                        </div>
                        <p>We create websites tailored to your B2B business requirements, ensuring a unique online presence.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>User-friendly experience</h4>
                        </div>
                        <p>Our UX and UI design experts focus on delivering a seamless and intuitive browsing experience for your website visitors, making it easy for them to find the information they need and take desired actions.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Smart SEO strategies</h4>
                        </div>
                        <p>We employ advanced SEO techniques to improve your website's visibility in search engine rankings, driving organic traffic and attracting relevant leads.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Compelling graphic design</h4>
                        </div>
                        <p>Our expert designers use advanced graphic design techniques to create visually stunning websites that capture the attention of your target audience and leave a lasting impression.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Boost Your Leads with Our Customized B2B Web Design Services.</p>
                    <div className={style.container2div6_icons}>
                        <div className={style.container2div6_icon}>
                            <MdCall />
                        </div>
                        <div>
                            <span>Call Us</span>
                            <p>+123 456 7890</p>
                        </div>
                    </div>
                </div>
                <div className={style.container2div7}>
                    <img  src={SEO} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                    <img  src={endImages2} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                </div>
                <div className={style.container2div8}>
                    <h3>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Increased online visibility:</strong>Our B2B web design services help enhance your digital presence, making it easier for potential clients to find and engage with your business.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Boost leads and conversions:</strong>By focusing on user experience and incorporating effective call-to-action elements, we optimize your website for lead generation and improve conversion rates.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Tailored website for your business:</strong>We understand that each B2B business is unique, and we create a website that aligns perfectly with your brand, values, and offerings.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Stand out in the competitive market:</strong>Our visually appealing and professionally designed websites give you a competitive edge, helping you stand out and establish credibility.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>With our dedicated team of professionals, we ensure the timely delivery of your website while providing exceptional customer service. We have a proven track record of helping B2B businesses expand their digital presence and achieve their goals, as showcased in our client Testimonialss and case studies.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Our web design agency is your ideal partner for taking your B2B business to new heights. Let us create a unique and effective website that boosts your online presence, generates leads, and drives growth. Contact us now to get started on your B2B web design journey.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download='Nsp' target='_blank' >Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} download='NspMainPdf' target='_blank'>Download Word File</Link>
                    </div>
                </div>
                <div className={style.container2div10}>
                    <h3 className={style.container2div10_hthree}>Neat Outcome</h3>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>5350%</span>
                        <span className={style.container2div10_span2}>Increase in website traffic</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>223%</span>
                        <span className={style.container2div10_span2}>Increase in conversion rates</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>325%</span>
                        <span className={style.container2div10_span2}>Increase in leads generation</span>
                    </div>
                </div>
            </div>
            {/* container 2 end */}
            <div className={style.container5}>
                <div className={style.container5_div}>
                    <p className={style.container4_para1}>Testimonials</p>
                    <h2 className={style.container4_hone}>What People Say</h2>
                    <p className={style.container4_para2}></p>
                </div>
            </div>
            <div className={style.carousel}>
                <Carousal num={3} />
            </div>
            {/* carosel end */}
            <TrustedCompaniesLogo/>
            <div className={style.FAQS}>
                <div >
                    <img  className={style.faq} src={FAQ} alt="FAQ" />
                </div>
                <div className={style.wrapper}>
                    <h2 className={style.accordion_h2}>Frequently Asked Question</h2>
                    <div className={style.accordion}>
                        {data.map((element, i) => (
                            <div key={element.id}>
                                <div className={style.title_1} style={{ backgroundColor: 'white', height: '90px' }} onClick={() => { toggle(i) }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', gridGap: '8px' }}>{element.icon}<h2 className={style.accodion_h2}>{element.statement}</h2></div>
                                </div>
                                <div className={selection === i ? `${style.contain} ${style.show}` : `${style.contain}`}>
                                    <p className={style.container_accordion_ptag}>  {element.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
