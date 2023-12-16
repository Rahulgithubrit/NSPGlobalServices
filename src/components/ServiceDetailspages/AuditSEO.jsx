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
        statement: 'What is an SEO audit?',
        paragraph: 'An SEO audit is a comprehensive evaluation of your website with the aim of improving its performance. It involves an analysis of both technical and non-technical aspects such as site structure, content optimization, internal linking, keyword research, competitive analysis and more.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is an SEO audit important for my website?',
        paragraph: `A website audit or SEO audit is a process of thorough analysis and evaluation of a website to identify areas where improvements can be made in terms of content, performance, usability and technical aspects. This includes carrying out an effective website audit report which assesses everything from the overall structure to the number and quality of incoming links, loading time, compliance with standards, search engine optimization (SEO) techniques used on the site etc. `
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What does an SEO audit involve?',
        paragraph: `An SEO audit is a detailed evaluation of all the elements that affect a website's performance in search engine results. It involves looking at both technical factors and content-based factors, such as meta tags, keyword optimization, quality links, page loading speed, URLs structure, site architecture, mobile friendliness and more. It also includes analysis of off-page factors such as link building practices and social media visibility.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How often should I conduct an SEO audit for my website?',
        paragraph: `It is recommended to conduct an SEO audit for your website every 3-6 months, as it is essential to understand what changes have been made, spot any areas of improvement and identify if there are any components that need to be addressed.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can I perform an SEO audit myself, or do I need to hire a professional?',
        paragraph: `You can perform an SEO audit yourself, but hiring a professional might be more advantageous. Doing so requires knowledge of what a website audit is, how to conduct an SEO audit, and which site audit tool or seo audit template to use such as Google Search Console or other tools like Moz  Pro & Ahrefs.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements analyzed in an SEO audit?',
        paragraph: `An SEO audit is a comprehensive analysis of a website's performance in regards to search engine optimization and rankings. The key elements analyzed include content, technical factors, backlinks, SERP visibility and traffic trends. Additionally, site audits use tools such as Google Search Console and an SEO audit template to pinpoint areas for improvement.`
    },
    {
        id: 6,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What role does branding and visual appeal play in B2C web design?',
        paragraph: `Branding and visual appeal are key components of successful B2C web design. B2B sites must be designed in a way that appeals to their target demographics, emphasizing the company's mission statement and identity. `
    }
]

export default function AuditSEO() {
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
                <title>Drive Traffic and Leads: SEO for Website Audit</title>
                <meta name="description" content="Our SEO services for Website Audit drive targeted traffic and leads to boost your business. Get SEO Services in the Website Audit." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/seo-audits" />
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>SEO Services for Website Audit</h1>
                <p className={style.subtitle}>Boost Your Online Visibility with Comprehensive SEO Audit Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/youtube-seo" className={style.container2_atag}>YouTube SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/mobile seo" className={style.container2_atag}>Mobile SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-consultancy" className={style.container2_atag}>SEO Consultancy</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/shopify-seo" className={style.container2_atag}>Shopify SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/wordpress-seo" className={style.container2_atag}>WordPress SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/google-analytics-services" className={style.container2_atag}> Google Analytics </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Is your website optimized for search engines? Our company offers top-notch SEO auditing services to help you take your website performance to the next level. A website audit is a detailed and thorough analysis of a website's performance, structure, and content to identify issues and areas that can be improved to enhance the user's experience and increase its online visibility. Our comprehensive audit covers technical aspects, on-page optimization, user experience, and more.</p>
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
                            <h4>Technical Analysis</h4>
                        </div>
                        <p>We conduct a thorough examination of your website's technical elements, including website speed, mobile-friendliness, crawlability, and indexing. By addressing technical issues, we ensure that search engines can effectively crawl and index your site, improving its visibility.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>On-Page Optimization</h4>
                        </div>
                        <p>Our experts analyze your website's content, structure, metadata, and keyword usage to ensure it aligns with SEO best practices. By optimizing on-page elements, we help search engines understand your website's relevance and improve its rankings.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>User Experience Evaluation</h4>
                        </div>
                        <p>We assess the user experience factors of your website, including navigation, accessibility, and website speed. By enhancing user experience, we aim to increase engagement, reduce bounce rates, and improve conversions.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Backlink Profile Analysis</h4>
                        </div>
                        <p>We review your website's backlink profile to identify high-quality, authoritative, and potentially toxic or low-quality links. By optimizing your backlink profile, we enhance your website's credibility and visibility in search engine rankings.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Take Your Website's Performance to the Next Level with Our SEO Auditing Services Today!</p>
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
                                <span><strong>Enhanced Visibility:</strong>Our SEO audit uncovers opportunities to improve your website's visibility in search engine results. By addressing technical issues, optimizing content, and improving user experience, we help you climb the rankings and attract more organic traffic.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved User Experience:</strong>By optimizing your website's structure, navigation, and load times, we enhance the overall user experience. This increases engagement, longer visit durations, and improved conversion rates.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Targeted Optimization:</strong>Our audit provides valuable insights into your website's performance and areas for improvement. We ensure that your website aligns with search engine algorithms and user expectations by targeting specific aspects such as keywords, metadata, and content relevancy.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Actionable Recommendations:</strong>Our audit report analyses your website's strengths, weaknesses, and optimization opportunities. We offer clear recommendations and prioritize action items, empowering you to make informed decisions and implement effective SEO strategies.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>Our SEO auditing services help you unlock the full potential of your website by optimizing its technical aspects, content, and user experience. You can maximize your website's performance and drive long-term success with enhanced visibility, improved user engagement, and actionable recommendations. Contact us today to take your SEO efforts to the next level and achieve your digital marketing goals.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} target='_blank' download='Nsp' >Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} target='_blank' download='NspMainPdf'>Download Word File</Link>
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
