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
import BannerImage from '../assets/Automotive/Responsive Web Design.png'
import endImages2 from '../assets/Responsive Web Design-20230918T172329Z-001/Responsive Web Design/20230902_143506_0002.png'
import endImages1 from '../assets/Responsive Web Design-20230918T172329Z-001/Responsive Web Design/20230902_143506_0001.png'
import SEO from '../assets/Responsive Web Design-20230918T172329Z-001/Responsive Web Design/20230902_143506_0000.png'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import { Link } from 'react-router-dom'
import form from '../assets/whatsappchat/form.pdf'
import newpdf from '../assets/whatsappchat/NewPdf.pdf'
import { Helmet } from 'react-helmet'
import TrustedCompaniesLogo from '../Pages/TrustedCompaniesLogo'


const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is responsive web design?',
        paragraph: 'Responsive Web Design (RWD) is a design approach that enables websites to provide an optimal viewing experience across multiple devices and screen sizes. It involves creating flexible layouts, images and text that respond to the user’s device or browser. Professional website design services specialize in RWD, providing best-in-class digital solutions with cutting edge technology.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is responsive web design important for my business?',
        paragraph: `Responsive web design is essential for businesses as it allows a website to be optimised for any device, ensuring the highest quality user experience regardless of the device being used. A professional-grade responsive web design services provider can create and maintain a website which is tailored to help grow your business.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does responsive web design work?',
        paragraph: `Responsive web design (RWD) is a service offered by companies to ensure that websites are optimized for different screen sizes. This allows users to access content from any device with ease as the website will adjust its layout accordingly. Responsive web design services, company, and best responsive web design solutions can be found from reliable web development companies.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using responsive web design services?',
        paragraph: `Responsive web design services offer many beneficial features. A responsive web design company will provide you with the best user experience, allowing viewers to view your website on any device. Moreover, it provides a faster and more efficient mobile browsing experience as well as enabling better SEO profit rate.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: `How can responsive web design improve my website's user experience?`,
        paragraph: `Responsive web design services offered by a reliable and experienced company can greatly improve your website's user experience. It optimizes the content of your website for different screen sizes, ensuring that users have an improved viewing experience across devices, as well as providing better navigation options.`
    }
]

export default function ResponsiveWebDesign() {
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
                <title>Responsive Web Design Services | Mobile-Friendly Websites</title>
                <meta name="description" content="Professional responsive web design agency at your service. We create websites that captivate audiences, no matter how they access your site." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/responsive-web-design" />
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Responsive Web Design Services</h1>
                {/* <p className={style.subtitle}>Responsive Web Design Services: Building a Mobile-First Experience.</p> */}
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={endImages1} className={style.endImages1} alt="blog" />
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
                    <p>In today's digital age, it's no secret that having a mobile-friendly website is imperative to standing out from the competition. With 53% of today's global website traffic originating from mobile devices, it's crucial to ensure your website is responsive and easily accessible from any device.At NSP, we specialize in responsive web design services that prioritize user experience, increase conversions, and drive revenue. With our experienced UI and UX designers, we create a mobile-first experience that resonates with your target audience.</p>
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
                            <img src={icon7} alt="icon" />
                            <h4>Mobile-First Approach</h4>
                        </div>
                        <p>We design and develop websites with a mobile-first mindset, ensuring optimal user experience on all devices.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Experienced UI and UX Design Teams</h4>
                        </div>
                        <p>Our skilled designers understand the importance of visual appeal and usability, creating intuitive and engaging interfaces.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>SEO and WCAG2 Compliance</h4>
                        </div>
                        <p>We prioritize adherence to SEO best practices and accessibility guidelines, improving your website's visibility and inclusivity.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Agile Development</h4>
                        </div>
                        <p>Our web design and development services guarantee a responsive and adaptable website that performs seamlessly across various devices.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Partner with a responsive web design company that can bring your vision to life.</p>
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
                    <img src={SEO} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                    <img src={endImages2} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                </div>
                <div className={style.container2div8}>
                    <h3>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced User Experience:</strong>Our responsive design ensures a smooth and enjoyable browsing experience, keeping users engaged and increasing their time on your website.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Web Traffic and Rankings:</strong>By meeting mobile-friendly standards, your website attracts more traffic and improves search engine rankings.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Boosted Conversion Rates:</strong>Our conversion-driven approach optimizes user journeys and intuitive navigation, resulting in higher conversion rates.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Industry-Specific Design:</strong>We tailor our responsive web design services to cater to the unique needs of different industries, including eCommerce, B2B, and B2C.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Partner with us, the responsive web design company that can elevate your online presence. Contact us today for a free consultation, and let us transform your website into a mobile-friendly powerhouse.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download="Nsp" target='_blank'>Download PDF</Link>
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
            <TrustedCompaniesLogo />
            <div className={style.FAQS}>
                <div >
                    <img className={style.faq} src={FAQ} alt="FAQ" />
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
