import React, { useState } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
// import services from '../assets/SEO services/Services.jpg'
import icon7 from '../assets/icon-7.png'
import { MdCall } from 'react-icons/md'
// import service from '../assets/service-details-2.png'
import arrow from '../assets/right-arrow.png'
import style from './servicedetails.module.css'
import Carousal from '../Carousal'
import BannerImage from '../assets/Automotive/E-Commerce SEO.png'
import endImages1 from '../assets/Ecommerce/IMG-20230819-WA0001.jpg'
import endImages2 from '../assets/Ecommerce/2_20230818_002859_0001.png'
import endImages3 from '../assets/Ecommerce/3_20230818_002859_0002.png'
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
        statement: 'What is eCommerce SEO?',
        paragraph: 'Ecommerce SEO is the process of optimizing an ecommerce website for search engine visibility. It involves a range of strategic practices such as keyword research, on-page optimization, link building and technical SEO to improve organic rankings. In order to optimize your ecommerce store for search engines, you should focus on creating original content that’s tailored to customer needs, use relevant keywords in URLs and metadata, set up a blog with quality content related to your products and services, generate backlinks from other reliable websites and keep all images tagged properly.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is eCommerce SEO important for online businesses?',
        paragraph: `SEO for eCommerce websites is incredibly important for online businesses as it drives organic traffic to the website, increases visibility and rankings, boosts sales and strengthens brand credibility. It also helps optimize web pages, content and product descriptions; identify highly targeted keywords through keyword research; manage online reputation with technical SEO best practices; and use of effective tools to monitor progress.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements of successful eCommerce SEO?',
        paragraph: `Successful eCommerce SEO requires a robust strategy, keyword research, and technical optimization. Key elements of an effective SEO strategy include creating content focused on ecommerce products or services; optimizing product pages, category pages, and URL structures; using relevant keywords to generate organic traffic; gaining inbound links from reputable websites; and tracking analytics for continual improvement.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my eCommerce site for search engines?',
        paragraph: `Optimizing your eCommerce website for search engines requires a comprehensive strategy. Begin by conducting keyword research to uncover the best terms related to your products or services and use those in content, headings and meta tags. Use a site architecture that allows visitors to easily find what they're looking for, create unique product descriptions with optimized content and focus on technical SEO such as using structured data, establishing canonical URLs, speeding up page loading times, creating an XML sitemap and setting up an HTTPS connection.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some common eCommerce SEO mistakes to avoid?',
        paragraph: `Common mistakes to avoid for successful eCommerce SEO include not having a strategy, failing to perform keyword research, inadequate technical SEO, improper URL structure, neglecting product and category pages optimization, using insufficient content and off-site promotion techniques.`
    }
]

export default function EcommerceSEO() {
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
                <title>E-Commerce SEO | Best E-Commerce SEO Company</title>
                <meta name="description" content="NSP is the best ecommerce SEO agency that can help you get your e-commerce website ranked at the top of Google. We are Ecommerce SEO specialists with extensive experience and can assist you in achieving top positions on Google SERPs." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/ecommerce-seo"/>
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>E-Commerce SEO Services</h1>
                <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/international-seo" className={style.container2_atag}>International SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/shopify-seo" className={style.container2_atag}>Shopify SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/franchise-seo" className={style.container2_atag}>Franchise SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/on-page-seo" className={style.container2_atag}>On-Page SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/google-analytics-services" className={style.container2_atag}>Google Analytics services</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>In the highly competitive e-commerce industry, search engine optimization (SEO) plays a crucial role in driving traffic, increasing visibility, and maximizing conversions. At NSP, we offer comprehensive e-commerce SEO services that help businesses achieve sustainable growth and profitability. We conduct extensive keyword research, optimize product and category pages, improve URL structures, and create high-quality content tailored to the target audience.</p>
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
                            <h4>Comprehensive Website Audit and SEO Assessment</h4>
                        </div>
                        <p>Our SEO strategists conduct a thorough evaluation of your e-commerce site, analyzing its design infrastructure and content to enhance aesthetics and performance. This includes providing a free website audit report to identify areas for improvement.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Keyword Research and Rankings</h4>
                        </div>
                        <p>We perform an in-depth study of your competitors and industry to identify marketing opportunities. Our focus is on "conversion keywords" that drive leads and maximize conversions, boosting your website's visibility and organic traffic.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Compelling Product Descriptions and Web Copies</h4>
                        </div>
                        <p> Our team of skilled writers creates engaging product descriptions and web copies that captivate visitors' attention and entice them to make purchases. This enhances your product visibility and drives more sales.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Blogging, Guest Posting, and Social Profile Building</h4>
                        </div>
                        <p>We develop keyword-rich blogs and guest posts to direct traffic to your e-commerce store. Additionally, we offer social profile-building services to enhance your brand presence on social media platforms, further expanding your reach and engagement.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Transform Your Ecommerce Site Into a High-Traffic, High-Authority, and Revenue-Generating Online Platform. Get a Free Website Audit Report Today!</p>
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
                    <img src={endImages2} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                    <img src={endImages3} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                </div>
                <div className={style.container2div8}>
                    <h3>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Traffic and Engagement:</strong>By implementing effective e-commerce SEO strategies, we help drive organic traffic to your website, resulting in increased checkouts, sales, and overall engagement with your target audience.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved Brand Image and Awareness:</strong>Our SEO services enhance your website's visibility, making your brand more recognizable to a broader audience. This leads to increased brand awareness and improved online reputation.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Customized Strategies for Long-Term Success:</strong>We utilize white-hat SEO techniques and customize our strategies to align with your specific business goals. This ensures long-term success and sustainable growth for your e-commerce store.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Expert Guidance and Support:</strong>Whether you're a beginner or an experienced e-commerce business, our services cater to businesses of all sizes and levels of experience. We provide comprehensive guidance and support to help you navigate the complexities of e-commerce SEO.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>E-commerce SEO is crucial for the success of your online store in a competitive marketplace. With NSP's e-commerce SEO services, you can optimize your website for higher visibility, attract targeted traffic, and increase conversions. Our comprehensive approach, experienced team, and tailored strategies ensure that your e-commerce business thrives and achieves its growth potential. Contact us today to learn more about our e-commerce SEO services and how we can contribute to the success of your business.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} target='_blank' download='Nsp' to={form}>Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} target='_blank' download='NspMainPdf'>Download Word File</Link>
                    </div>
                </div>
                <div className={style.container2div10}>
                    <h3 className={style.container2div10_hthree}>Performance Highlights</h3>
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
                    {/* <p className={style.container4_para2}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. when the musics over turnoff the light</p> */}
                </div>
            </div>
            <div className={style.carousel}>
                <Carousal num={3} />
            </div>
            {/* carosel end */}
            <TrustedCompaniesLogo/>
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
