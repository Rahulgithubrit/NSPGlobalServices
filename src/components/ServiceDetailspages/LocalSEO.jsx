import React, {useState } from 'react'
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
import BannerImage from '../assets/Automotive/Local SEO.png'
import endImages2 from '../assets/Local SEO/4_20230819_001407_0000.png'
import endImages1 from '../assets/Local SEO/5_20230819_001407_0001.png'
import SEO from '../assets/Local SEO/6_20230819_001407_0002.png'
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
        statement: 'What is Local SEO?',
        paragraph: 'Local SEO is an effective form of search engine optimization (SEO) that helps local businesses, such as restaurants, cafes, fashion stores or salons, to be visible in local online searches. It involves making sure your website is optimized for searches related to “local search engine” and other keywords like “what is local seo”, “google local search optimization” or “local effective SEO strategy involves incorporating relevant content based on popular queries to improve website visibility in search results.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is Local SEO important for local businesses?',
        paragraph: `Local SEO is an important tool for local businesses, as it helps them to increase visibility and grow in their local area. It enables businesses to target a specific region or area through the use of targeted keywords, content and services that are optimised for local search engine results. This allows them to rank higher locally and attract more customers. A good local SEO agency or company can help small businesses strengthen their online presence while building relationships with potential customers in the local area - something no other form of marketing can do.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements of successful Local SEO?',
        paragraph: `Local SEO involves optimizing a business website to appear higher on local search engine results, and can be a powerful tool for small businesses. It is crucial to have accurate and consistent listings across multiple platforms, gain positive customer reviews, develop quality local content, build backlinks from reputable sources, optimize meta-titles and descriptions, conduct keyword research related to the services offered in your area, ensure mobile friendly pages, monitor online reputation management activities and take advantage of Google My Business optimization.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my website for Local SEO?',
        paragraph: `Optimizing your website for Local SEO is an important process. To get started, make sure to have a local SEO strategy in place and research keywords that are relevant to your business and location. Additionally, make sure you're listed on all major search engines, like Google My Business and Bing Maps. A good seo agency near me can also help you with creating content aimed at local consumers, setting up geo-targeting on custom campaigns, and building citations & linking them back to your website—all critical elements of a successful local SEO strategy.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some common Local SEO mistakes to avoid?',
        paragraph: `Local SEO mistakes to avoid include not optimizing for local keywords, failing to claim directory listings and business profiles, overlooking negative reviews, lacking a local presence on social media networks, mismanaging citations & NAP consistency, and not investing in a professional SEO expert or agency near you. Investing in the right local SEO strategy from an affordable local SEO service can help your small business appear higher in the search engine results leading to increased visibility and more customers.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How long does it take for Local SEO to produce results?',
        paragraph: `The amount of time it takes for local SEO to produce results depends on your goals, the size of your business, and the competitiveness of your industry. Generally speaking, results from a well-conceived and executed strategy can be seen in three to six months when partnering with an experienced grow local seo agency or local seo company which provides comprehensive services such as seo companies near me, seo agency near me and/or a seo expert near me. In addition, employing best practices for local SEO for small businesses is especially important given its competitive landscape.`
    }
]

export default function LocalSEO() {
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
            <title>Best Local SEO Services That Drive Customers to Your Doorstep</title>
            <meta name="description" content='Get the best Local SEO Services from the leading local seo agency (NSP). If you are looking for the best "local seo services near me," NSP is the way to go.' />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/local-seo"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}> Local SEO Services</h1>
                {/* <p className={style.subtitle} id={style.titleblack}>Sed do eiusmod tempor incididunt ut labore et when the musis dolore magna aliqua.</p> */}
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Digital Marketing</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Search Engine Optimization</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Social Media Marketing</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Web Design & Development</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Business Strategy & Planning</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Critical Analysis</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p> Expanding the business and brand at the local level is now made easy with the help of local SEO. Local SEO will help you rank in your locality so that when people around you searches any keyword related to your business they will find you at the top. Building an online presence of a local business can be difficult as they are not unaware of this, which is why they lack customers that can easily be gained through local SEO, With the help of NSP Global Services' expertise, we can easily help you to build an online presence by implementing relevant keywords, local SEO, content marketing strategy, and more at an affordable price.</p>
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
                            <h4>Increased Online Visibility</h4>
                        </div>
                        <p>With Local SEO we can help you establish an online presence in your area so that you remain at the top of lists when people look for pertinent services.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Targeted Traffic</h4>
                        </div>
                        <p>Local SEO mostly only brings traffic that is likely to convert because they are the ones that looked for your services and are looking for the right one, so they are easy to convert into customers.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Increased Brand Awareness</h4>
                        </div>
                        <p>Through Local SEO, you can establish your brand at the local level and become the trusted and most preferred brand/business in your locality that will leave a great impact on your business.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Competitive Advantage</h4>
                        </div>
                        <p>With the help of local SEO, you are already one step ahead of other local competitors as when local people will search for something relatable, your website will appear at the top rather than theirs, which will ultimately lead to your benefit.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Pabore et dolor mod tempor inci didunt ut labore et dolore magna aliqua nim veniam strud </p>
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
                                <span>Local SEO will make your search engine ranking better in local queries.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>When you’re on the top of the search page, you’ll probably have the highest conversion rates in your local areas.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Local SEO will create awareness of your brand in your local area.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>With the help of local SEO, you’ll get higher conversion rates and will be trusted as an authentic and reliable source.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>The only option to make yourself stand out in your local area is with the implementation of local SEO and that’s what we are having expertise in, so, what are you waiting for? Contact us now!</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download='Nsp' target='_blank'>Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} download="NspMainPdf" target='_blank'>Download Word File</Link>
                    </div>
                </div>
                <div className={style.container2div10}>
                    <h3 className={style.container2div10_hthree}>Neat Outcome</h3>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>95%</span>
                        <span className={style.container2div10_span2}>Increased Success Rate Per Month</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>95%</span>
                        <span className={style.container2div10_span2}>Increased Success Rate Per Month</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>95%</span>
                        <span className={style.container2div10_span2}>Increased Success Rate Per Month</span>
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
