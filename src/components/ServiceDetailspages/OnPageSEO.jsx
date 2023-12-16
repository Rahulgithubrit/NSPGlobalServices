import React, { useState } from 'react'
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
import style from './servicedetails.module.css'
import Carousal from '../Carousal'
import BannerImage from '../assets/Automotive/On-Page SEO.png'
import endImages2 from '../assets/On-page SEO/10_20230821_193107_0000.png'
import endImages1 from '../assets/On-page SEO/11_20230821_193107_0001.png'
import SEO from '../assets/On-page SEO/12_20230821_193107_0002.png'
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
        statement: 'What is on-page SEO?',
        paragraph: `On-page SEO refers to the practice of optimizing individual web pages in order to improve a website's search engine rankings. It involves focusing on both technical aspects, such as its structure and content, as well as off-page factors like link building and social media promotion.`
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is on-page SEO important for my website?',
        paragraph: `On-page SEO is an important part of digital marketing and search engine optimization. It consists of several activities that improve a website’s visibility in Google and other search engines, such as optimizing the content for keywords, creating optimized title tags, making use of meta descriptions, using URL structures according to SEO best practices, etc. `
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the main elements of on-page SEO?',
        paragraph: `On-page SEO is an important strategy for digital marketing, and it refers to the process of optimizing individual webpages in order to improve a website's search engine ranking. It includes activities such as optimizing titles and meta descriptions, increasing keyword density, checking your site structure and content quality, using tags appropriately, building backlinks, developing a sitemap, writing optimized content and implementing Google Search Engine Optimisation (SEO). `
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my website for on-page SEO?',
        paragraph: `How can I optimize my website for on-page SEO?
        Optimizing your website for on-page SEO is key to any search engine optimization strategy. On-page SEO involves optimizing individual web pages in order to make them more visible and relevant to both users and search engines. Techniques include creating keyword rich titles, meta descriptions, alt tags, internal links, schema markup and more.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the best practices for on-page SEO?',
        paragraph: `On-page SEO involves optimizing the content and code of a web page to ensure that it is visible in search engines. This can include optimizing titles, meta descriptions, headings and body text for target keywords; improving mobile usability; adding alt tags to images; providing internal links between pages, etc. `
    }
]

export default function OnPageSEO() {
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
        <title>Expert On-Page SEO Services | Drive Revenue Through Search</title>
            <meta name="description" content="Our expert on-page SEO services are designed to boost your website's visibility, rankings, and revenue. Discover how we can drive success for your business." />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/on-page-seo"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>On-Page SEO Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Boost Your Revenue with On-Page SEO Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/link-building-services" className={style.container2_atag}>Link Building Services</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-audits" className={style.container2_atag}>SEO Audits </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/shopify-seo" className={style.container2_atag}> Shopify SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/international-seo" className={style.container2_atag}> International SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/franchise-seo" className={style.container2_atag}>Franchise SEO </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/luxury-seo" className={style.container2_atag}>Luxury SEO	</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>On-page optimization is a crucial aspect of a successful SEO strategy. It involves implementing keyword research, content optimization, and site architecture to improve your website's visibility and search engine rankings. Focusing on on-page SEO can enhance your website's performance and attract more organic traffic.</p>
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
                            <h4> Keyword Research</h4>
                        </div>
                        <p> Conduct thorough keyword research to identify the phrases and terms your target audience is searching for. This helps you optimize your content with relevant keywords and improve its visibility in search results.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Content Optimization</h4>
                        </div>
                        <p>Ensure your website's content provides value to your audience while incorporating targeted keywords and phrases. By optimizing your content, you can improve its relevance and increase its chances of ranking higher in search engine results.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Site Architecture</h4>
                        </div>
                        <p>Create an intuitive and user-friendly structure that makes it easy for visitors to navigate your website. A well-organized site architecture enhances the user experience and helps search engine spiders crawl and index your pages effectively.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Technical Optimization</h4>
                        </div>
                        <p>Optimize your website's technical aspects, including speed, mobile-friendliness, and search engine compatibility. A technically optimized website performs better in search rankings and provides a seamless user experience.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Contact us today to create a customized on-page SEO strategy that drives revenue for your business.</p>
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
                                <span><strong>Increased Organic Traffic:</strong>By implementing on-page SEO practices, you can attract more organic traffic from search engines. Optimized content and improved search rankings make it easier for users to discover your website.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved Search Rankings:</strong> On-page SEO contributes to better search engine rankings, enhancing your website's visibility and increasing its chances of appearing in top search results. Higher rankings lead to more exposure and organic traffic.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Higher Conversion Rates:</strong>You can increase conversion rates by creating valuable and informative content that resonates with your audience. Engaging content that addresses the needs and interests of visitors helps convert them into leads and customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Brand Visibility:</strong>On-page SEO enhances your brand visibility through improved search rankings and increased organic traffic. It allows your brand to be seen by a wider audience, increasing brand recognition and credibility.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>Invest in our comprehensive on-page SEO services to enhance your website's performance, increase organic traffic, and improve search rankings. Contact us now to get started and see the results of our efforts firsthand.</span>
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
