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
        statement: 'What is GA4 (Google Analytics 4) migration?',
        paragraph: 'Google Analytics 4 (GA4) migration is the process of transitioning from Universal Analytics to GA4 for digital marketing purposes. It can involve using a GA4 migration checklist, creating a GA4 migration plan, and utilizing a variety of GA4 setup and migration tools to ensure successful implementation.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: ' Why should I consider migrating to GA4?',
        paragraph: `Google Analytics 4 (GA4) is the evolution of Universal Analytics and offers multiple advantages for digital marketing professionals. It includes more advanced features, better data accuracy, and improved tracking capabilities which are essential for good decision-making when it comes to running effective campaigns. `
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How is GA4 different from Universal Analytics?',
        paragraph: `Google Analytics 4 (GA4) is the successor of Universal Analytics, designed to help businesses capture and analyze data in a more efficient way. With features such as multi-platform support, increased reliability and an enhanced user experience, GA4 is the perfect solution for managing digital marketing campaigns & understanding customer behavior. `
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What data will be migrated during the GA4 migration process?',
        paragraph: `During GA4 migration, a broad range of data will be migrated from Google Universal Analytics (GA) to the new Analytics 4 platform. This includes user properties and events, custom dimensions and metrics, e-commerce data, funnels & cohorts as well as remarketing audiences and more.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I start the GA4 migration for my website?',
        paragraph: `The best way to migrate from Universal Analytics to Google Analytics 4 (GA4) is by following the GA4 migration checklist, utilizing a migration plan and/or leveraging a specialized GA4 migration tool. This ensures a smooth transition while keeping your digital marketing analytics on track.`
    }
]

export default function GA4Analytics() {
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
                <title>Drive Traffic and Leads: SEO for GA4 Migration</title>
                <meta name="description" content="Our SEO services for GA4 Migration drive targeted traffic and leads to boost your business. Get SEO Services in the GA4 Migration." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/ga4-migration" />
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>SEO Services for GA4 Migration</h1>
                <p className={style.subtitle}> Migrate to Google Analytics 4 and Transform Your Business</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-keywords-research" className={style.container2_atag}>SEO Keywords Research</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/link-building-services" className={style.container2_atag}>Link Building </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/backlink-audit" className={style.container2_atag}>Backlink Audit </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-audits" className={style.container2_atag}>SEO Audits</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/google-analytics-services" className={style.container2_atag}>Google Analytics</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Google Analytics 4 is a revolutionary tracking solution that provides a new way to understand and analyze visitor behaviour on your website. Using event and session-based tracking, Google Analytics 4 offers enhanced insights into how visitors interact with your site. It's time to upgrade your tracking methods and gain a comprehensive understanding of how people are using your website today.</p>
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
                            <h4>Universal Analytics to GA4 Migration</h4>
                        </div>
                        <p>Switch from Universal Analytics to Google Analytics 4 and unlock the benefits. Our migration checklist ensures a swift and accurate transfer of your data. We provide a migration plan and tools to facilitate a seamless transition.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Transform Your Business</h4>
                        </div>
                        <p>Google Analytics 4 empowers you to track the success of your website and make informed decisions that can drive transformative changes to your business. With precise data and insights into visitor behaviour, you can optimize your website's performance and increase your return on investment (ROI).</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Early Preparation</h4>
                        </div>
                        <p>Preparing for the migration to Google Analytics 4 is crucial now. On July 1st, 2023, Google Universal Analytics (UA) will become obsolete, losing valuable website data. By taking proactive steps, you can stay ahead of the curve and ensure a continuous flow of essential data.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Our Expert Assistance</h4>
                        </div>
                        <p>We offer comprehensive guidance and support to prepare you for the Google Analytics account migration. Our experienced team will ensure a smooth transition and provide insights on leveraging the latest features in Google Analytics 4 to maximize the potential of your data.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Reimagine Your Tracking with GA4</p>
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
                                <span><strong>Enhanced Analysis Techniques with GA4 Explorations:</strong>Dive deep into user behaviour data with GA4 Explorations. Create custom segments, explore machine learning insights, and test hypotheses to identify trends and optimize your landing pages based on accurate insights.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Advanced Machine Learning and Predictive Modeling:</strong>Leverage GA4's built-in machine learning capabilities to gain precise and comprehensive insights into user behaviour. Predictive modelling lets you anticipate user needs and adjust content and messaging in real-time for improved engagement.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Privacy-Centric Data Model:</strong>GA4 prioritizes privacy by design. It collects and analyzes data while ensuring compliance with privacy regulations like GDPR. Adjust data retention settings, utilize Google's Consent Mode, and easily manage data deletion requests while extracting valuable insights from user behaviour data.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>our Phases of Implementation:</strong>Follow a structured process for optimizing your landing page with user behaviour data. This includes initial planning/discovery, architecture and implementation, quality assurance, and deployment. You can achieve optimal performance by addressing key variables such as design, messaging, and user experience.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>In summary, Google Analytics 4 offers a range of powerful features and approaches to optimize your landing pages and transform your business. With advanced analysis techniques, machine learning capabilities, privacy-centric design, and a systematic implementation process, GA4 empowers you to make data-driven decisions and unlock the full potential of your website data.<br />Take the Leap to GA4 and Unlock the Potential of Your Data!
                                </span>
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
