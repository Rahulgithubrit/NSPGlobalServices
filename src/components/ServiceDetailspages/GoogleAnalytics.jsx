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
import BannerImage from '../assets/Untitled design/2.png'
import endImages2 from '../assets/SEO services/photo_2023-06-23_01-33-12.jpg'
import endImages1 from '../assets/SEO services/DigitalMarketing.jpg'
import SEO from '../assets/SEO services/SEO Services.jpg'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import { Link } from 'react-router-dom'
import form from '../assets/whatsappchat/form.pdf'
import newpdf from '../assets/whatsappchat/NewPdf.pdf'
import TrustedCompaniesLogo from '../Pages/TrustedCompaniesLogo'
import { Helmet } from 'react-helmet'



const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is Google Analytics?',
        paragraph: 'Google Analytics is the go-to tool for digital marketers. It’s a powerful, comprehensive data gathering tool that provides valuable and actionable insights into your website performance, traffic sources, user behavior and more—allowing you to make informed decisions when it comes to optimizing your marketing efforts.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does Google Analytics work?',
        paragraph: `Google Analytics is a powerful, sophisticated tool used in digital marketing to track website visitor activity and performance. It gives marketers insights into who their visitors are, where they’re coming from, what pages they’re viewing, how they interact with the site and more.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using Google Analytics for my website?',
        paragraph: `With Google Analytics, you can gain access to a range of valuable tools and insights that can help you understand how visitors interact with your website. It allows you to measure key marketing performance indicators, gain customer insights and optimize the effectiveness of your digital campaigns.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Is Google Analytics a free service?',
        paragraph: `Yes, Google Analytics is a free service that provides insights into the effectiveness of digital marketing campaigns. It enables you to measure website traffic and user behavior, allowing businesses to optimize their strategies for maximum success. A Google Analytics expert can help you unlock the full potential of this powerful tool and turn your digital marketing efforts into tangible results.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I set up Google Analytics for my website?',
        paragraph: `Setting up Google Analytics for your website is critical to success in digital marketing. Google Analytics allows you to track, measure, and report on your website's visitor activity and provides valuable data about user behavior which can be used to better develop strategies for growing your business.`
    }
]

export default function GoogleAnalytics() {
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
                <title>Drive Traffic and Leads: SEO for Google Analytics</title>
                <meta name="description" content="Our SEO services for Google Analytics drive targeted traffic and leads to boost your business. Get SEO Services in the Google Analytics." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/google-analytics-services" />
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>SEO Services for Google Analytics</h1>
                <p className={style.subtitle}>Maximize Your Digital Marketing Efforts with Our Google Analytics Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/on-page-seo" className={style.container2_atag}>On-Page SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-keywords-research" className={style.container2_atag}>SEO Keywords Research</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/franchise-seo" className={style.container2_atag}>Franchise SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/celebrity-seo" className={style.container2_atag}>Celebrity SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/luxury seo" className={style.container2_atag}>Luxury SEO</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>In today's digital landscape, where data holds immense value, Google Analytics plays a pivotal role in understanding customer behaviour and optimizing marketing strategies. Our Google Analytics services are designed to empower businesses of all sizes, from small enterprises to Fortune 500 companies, with actionable insights and expert support. With our team of skilled analysts, we ensure that you harness the full potential of Google Analytics and make informed decisions to drive your marketing campaigns to success.</p>
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
                            <h4>Expert Google Analytics Support</h4>
                        </div>
                        <p>Our team possesses extensive knowledge of the Google stack, enabling us to assist you in setting up GA 4 and resolving any data-related issues. We are your go-to resource for navigating the complexities of Google Analytics, ensuring seamless implementation and utilization.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Comprehensive Training Programs</h4>
                        </div>
                        <p>We offer tailored training sessions to cater to your specific needs, regardless of your proficiency level. Our training covers Google Analytics, Google Tag Manager, and Google Data Studio, equipping you with the skills to leverage these tools effectively and make data-driven decisions.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Data Strategy Solutions</h4>
                        </div>
                        <p>With our expertise in data integration and analysis, we can help you combine multiple data sources, create data warehouses, and merge data streams. This comprehensive approach provides a holistic view of your customers' behaviour, enabling you to develop effective data strategies.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Data Insight and Reporting</h4>
                        </div>
                        <p>We deliver custom dashboards and detailed reports highlighting key performance metrics for your website and app. These insights identify areas for improvement and optimization, empowering you to refine your marketing campaigns and maximize their impact.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Get in touch with our team of Google Analytics experts today and unlock the true potential of your data!</p>
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
                                <span><strong>Unleash Your Data's Potential:</strong>Our Google Analytics services empower you to unlock the true potential of your data. By understanding customer behaviour and analyzing performance metrics, you can make informed decisions that drive your business forward.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Tailored Training for Success:</strong>Our comprehensive training programs equip you with the knowledge and skills to navigate Google Analytics and related tools. This empowers you to use these platforms to optimize your campaigns and achieve maximum return on investment.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Holistic Data-driven Strategies:</strong>With our expertise in data strategy, we help you integrate and analyze data from various sources, enabling a comprehensive understanding of customer behaviour. This holistic approach allows you to develop effective strategies that align with your business objectives.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Actionable Insights and Optimization:</strong>Our custom dashboards and in-depth reporting provide actionable insights into your website and app performance. By identifying areas for improvement and optimization, we help you refine your campaigns and achieve better results.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>Our Google Analytics services provide you with the expertise, training, and insights needed to harness the power of data and elevate your digital marketing efforts. Contact us today to unlock the full potential of your data and drive your business towards success.</span>
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
