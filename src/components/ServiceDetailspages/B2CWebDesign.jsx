import React, { useEffect, useState } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
// import service from '../assets/service-details-2.png'
// import blog from '../assets/blog-1-1.png'
import icon7 from '../assets/icon-7.png'
import { MdCall } from 'react-icons/md'
import arrow from '../assets/right-arrow.png'
import AOS from 'aos'
import "aos/dist/aos.css";
import style from './servicedetails.module.css'
import Carousal from '../Carousal'
import BannerImage from '../assets/Automotive/B2C Web Design.png'
import endImages2 from '../assets/B2C Web Design-20230918T172208Z-001/B2C Web Design/20230831_170459_0002.png'
import endImages1 from '../assets/B2C Web Design-20230918T172208Z-001/B2C Web Design/20230831_170459_0001.png'
import SEO from '../assets/B2C Web Design-20230918T172208Z-001/B2C Web Design/20230831_170459_0000.png'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import {Link} from 'react-router-dom'
import form from '../assets/whatsappchat/form.pdf'
import { Helmet } from 'react-helmet'
import TrustedCompaniesLogo from '../Pages/TrustedCompaniesLogo'


const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is B2C web design?',
        paragraph: 'B2C web design is the process of creating websites specifically tailored to business-to-consumer (B2C) interactions. It involves both strategic and creative elements that address customer needs, such as products and services, pricing and promotions, user experience, interaction design, website layout and more. B2B web page design is similar but focuses more on business-to-business relationships.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How is B2C web design different from B2B web design?',
        paragraph: `B2C web design focuses on providing an engaging experience with the goal of converting customers, while B2B web design focuses more on presenting an authoritative image to attract potential business partners. Both require different approaches and strategies to reach their respective audiences.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements of a successful B2C website?',
        paragraph: `A successful B2C website needs feature-rich content, attractive visuals, intuitive navigation and user experience design, effective use of SEO strategies for visibility and traffic generation across multiple channels. It should also be able to support a strong B2B business website as well as a seamless transition from B2B to B2C sites.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can B2C web design enhance user experience and drive conversions?',
        paragraph: `B2C web design enhances user experience, drives up conversions and boosts business growth by using features such as strategic visuals, clear navigation layout and logical pathways. Designers must understand that a b2c website needs to be tailored to the individual customer's needs while also addressing the requirements of a b2b business.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: ' How can I create a seamless and intuitive navigation system for my B2C website?',
        paragraph: `To create a seamless and intuitive navigation system for your B2C website, consider focusing on user experience elements such as designing efficient menus, simplifying URLs, integrating with search engine optimization guidelines, consolidating multiple pages into one to reduce loading times and including clear CTA signals.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Should I prioritize mobile responsiveness in B2C web design?',
        paragraph: `Absolutely! With the increase in mobile devices, B2B and B2C sites should prioritize mobile responsiveness when redesigning websites to ensure a more accessible and user-friendly experience. This is even more critical for business transactions.`
    },
    {
        id: 6,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What role does branding and visual appeal play in B2C web design?',
        paragraph: `Branding and visual appeal are key components of successful B2C web design. B2B sites must be designed in a way that appeals to their target demographics, emphasizing the company's mission statement and identity. `
    }
]

export default function B2CWebDesign() {
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
                <title>Expert B2C Web Design Services | Create Stunning Websites</title>
                <meta name="description" content="Maximize your ROI with a B2C web design agency that understands your business goals. Explore our revenue-centric approach today." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/b2c-web-design"/>
            </Helmet>
            <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>B2C Web Design Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Transform Your B2C Business with Superior Website Design & Development Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-redesign" className={style.container2_atag}>Website Redesign</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-maintenance" className={style.container2_atag}>Website Maintenance</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-optimization-services" className={style.container2_atag}>Website Optimization</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/ecommerce-web-design" className={style.container2_atag}>Ecommerce Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/responsive-web-design" className={style.container2_atag}>Responsive Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/landing-pages-design" className={style.container2_atag}>Landing Pages Design</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>At NSP, we offer comprehensive B2C website design and development services that are tailored to meet your business requirements. We understand the importance of a visually appealing, fast, and user-friendly website in today's competitive landscape.</p>
                    <p>Whether you need a new website or want to enhance your existing one, our experienced team is dedicated to delivering customized solutions that drive conversion rates and foster sales growth.</p>
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
                            <h4>Customized Web Design Solutions</h4>
                        </div>
                        <p>We specialize in creating bespoke web design solutions for B2C and B2B businesses, ensuring your website aligns with your unique needs and brand identity.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Conversion-Driven Designs</h4>
                        </div>
                        <p>Our team blends visually appealing design elements with an intuitive user interface, optimizing your website for increased conversions and sales growth.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Premium E-commerce Solutions</h4>
                        </div>
                        <p>We offer robust e-commerce solutions that enable seamless online transactions, enhancing your customer's shopping experience and maximizing your online potential.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Streamlined Project Management</h4>
                        </div>
                        <p>With our efficient project management process, we ensure clear communication, timely delivery, and attention to detail, regardless of the project's complexity.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Upgrade Your Brand's Online Presence - Partner with us for a visually appealing and modern website!</p>
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
                                <span><strong>Visually Stunning Websites:</strong>Our web design solutions create visually stunning websites that captivate visitors, leaving a lasting impression and encouraging them to explore further.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>User-Friendly and Responsive Designs:</strong>We prioritize user experience by developing responsive websites that adapt seamlessly to different devices, providing a consistent and user-friendly interface.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Improved Performance and Faster Loading Times:</strong>Our optimized design techniques and efficient coding practices contribute to improved website performance and faster loading times, reducing bounce rates and keeping visitors engaged.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Increased Leads and Sales Growth:</strong>Through conversion rate optimization and tailored design elements, we help drive more leads and facilitate sales growth, maximizing your online revenue potential.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>We understand that trust is essential in building successful business partnerships. That's why we provide dedicated project managers who ensure effective communication throughout the project. We also offer a 100% satisfaction guarantee, affordable and transparent pricing, and a team of experienced professionals dedicated to delivering top-notch web design solutions. With our proven experience and a track record of happy clients across various industries, we invite you to partner with us and take your B2C website design to the next level.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download='Nsp' target='_blank' >Download PDF</Link>
                        <Link className={style.container2div9_atag} to="/">Download Word File</Link>
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
