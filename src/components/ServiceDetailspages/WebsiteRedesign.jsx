import React, { useEffect,useState } from 'react'
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
import BannerImage from '../assets/Automotive/Website Redesign.png'
import endImages2 from '../assets/Website Redesign-20230918T172453Z-001/Website Redesign/20230906_200415_0002.png'
import endImages1 from '../assets/Website Redesign-20230918T172453Z-001/Website Redesign/20230906_200415_0001.png'
import SEO from '../assets/Website Redesign-20230918T172453Z-001/Website Redesign/20230906_200415_0000.png'
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
        statement: 'What is website redesign?',
        paragraph: 'Website redesign is an essential step to revitalize your website, making it look and feel more modern. It involves a revamp of the existing web design, services page design and other aspects like website optimization agency, full service website development and website making services. Depending on the complexity of the redesign project, cost can vary but with a professional team in place you can be sure of quality results.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why should I consider redesigning my website?',
        paragraph: `Website redesign is a perfect way to increase user engagement, modernize the look of your website, and stay competitive. With services like web redesign, design revamp, and website optimization from top agencies at competitive costs, you can ensure maximum ROI on any website redesign project.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How often should a website be redesigned?',
        paragraph: `Website redesign services should be utilized regularly, depending on the size and complexity of the website. Website revamps should occur to keep up with technology trends, design redesign for improved functionality, website re-launching for optimization purposes and a periodic assessment from a web services agency to ensure website needs are met.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key steps involved in the website redesign process?',
        paragraph: `To redesign your website, find a reliable website redesign services provider. Ask for quotes on cost and services offered. Revamp your web design with the help of a web services agency or an optimization agency to make sure it meets the latest standards. Calculate the overall website redesign cost and you're ready to go!`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can I retain my existing content during a website redesign?',
        paragraph: `Yes, you can retain your existing content during a website redesign if you use the right web services. Websites like Squarespace offer easy-to-use tools to keep your content safe and secure as you design a new site.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How long does it typically take to complete a website redesign?',
        paragraph: `It typically takes 6-8 weeks to complete a website redesign, depending on the complexity of web services and websites.`
    }
]

export default function WebsiteRedesign() {
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
                <title>Website Redesign Services | Enhance User Experience & Conversions</title>
                <meta name="description" content="From rebranding strategy to web design, development, and marketing, we can help you reimagine and build your online presence. Explore the services we offer for website redesign." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/website-redesign"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>Website Redesign Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Reimagine Your Digital Experience with Our Website Redesign Services</p>
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
                            <Link to="/design-development/shopify-web-design" className={style.container2_atag}> Shopify Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/b2b-web-design" className={style.container2_atag}>B2B Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/wordpress-web-design" className={style.container2_atag}>WordPress Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-maintenance" className={style.container2_atag}>Website Maintenance</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/b2c-web-design" className={style.container2_atag}>B2C Website Dev </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>In today's digital age, a website is often the first point of contact for potential customers. A modern, visually appealing, and user-friendly website can make all the difference in converting leads into loyal customers.</p>
                    <p>At NSP, we offer website redesign services that go beyond a mere facelift. Our team of experts combines research, design, development, and marketing to provide a comprehensive website revamp that stands out from the competition.</p>
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
                            <h4>Custom UX & UI Design</h4>
                        </div>
                        <p>We tailor the user experience and interface design to align perfectly with your brand and target audience, ensuring an engaging and intuitive browsing experience.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Search & Conversion Optimization</h4>
                        </div>
                        <p>Our team employs optimization techniques to drive qualified traffic to your website and increase conversions and sales. We focus on maximizing your website's visibility and impact.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>End-To-End Development</h4>
                        </div>
                        <p>Our experienced professionals handle every aspect of website development from concept to launch and beyond. We offer seamless content migration and integrate user-friendly content management systems.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Full-Service Website Development</h4>
                        </div>
                        <p>We provide comprehensive website development solutions, including eCommerce functionality, custom features, and captivating animations, to elevate your online presence and captivate visitors.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Elevate your online presence with a website redesign tailored to your business needs.</p>
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
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced User Experience:</strong>Our redesign services focus on improving user engagement and reducing bounce rates by creating a visually appealing and user-friendly interface that keeps visitors engaged.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Conversions and Sales:</strong>By optimizing the design and employing effective marketing strategies, we help boost your conversion rates and drive more sales for your business.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Competitive Advantage:</strong>With a unique and visually appealing website, your brand can stand out and make a lasting impression on your target audience.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Future-Proof Design:</strong>We ensure that your redesigned website adapts to evolving digital trends and technologies, providing a sustainable online presence that can withstand the test of time.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>At NSP, we are committed to delivering exceptional results that exceed our client's expectations. Our team of experts brings years of experience and a proven track record of successful website redesign projects. We value transparency and collaboration, ensuring you are involved in every process step, from strategy to launch and beyond. Our tailored website development solutions are designed to meet your specific business needs and goals. As a result, we have earned the trust and loyalty of our clients, who often return for ongoing website maintenance and updates.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download='Nsp' target='_blank'>Download PDF</Link>
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
                                <div className={style.title_1} style={{ backgroundColor: 'white',height:'90px' }} onClick={() => { toggle(i) }}>
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
