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
import BannerImage from '../assets/Automotive/Small Business SEO.png'
import endImages2 from '../assets/SEO services/photo_2023-06-23_01-33-12.jpg'
import endImages1 from '../assets/SEO services/DigitalMarketing.jpg'
import SEO from '../assets/SEO services/SEO Services.jpg'
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
        statement: 'What is Small Business SEO?',
        paragraph: 'Small Business SEO is an organic marketing strategy that improves the visibility of small businesses online, helping them reach their target audience more efficiently. It typically involves optimizing the website for relevant keywords and phrases, incorporating local SEO to show up on local searches, creating quality content and link building strategies to improve domain authority, and implementing various techniques like page speed optimization. Small business owners can also benefit from using specialized tools such as a/b testing or heatmaps in order to see where people are clicking when they visit their website. Ultimately, it’s important for small businesses to invest in a comprehensive SEO plan that encompasses all of these tactics, positioning them ahead of their competition.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is Small Business SEO important for local businesses?',
        paragraph: `Small Business SEO (Search Engine Optimization) is essential for local businesses as it helps customers easily find your business online by optimizing your website's visibility in search engine rankings. Local SEO specifically includes tactics to help small businesses appear higher on Google searches, attract more customers using geo-targeted keywords, and optimize their online profiles on directories such as Yelp or Facebook. It also offers multiple benefits like improving brand presence, increasing website traffic and user engagement, providing valuable insights into customer behaviour, etc. Utilizing a combination of the best small business SEO services with a well-crafted SEO checklist will have an exponential impact on the success of any local business.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements of successful Small Business SEO?',
        paragraph: `Small Business SEO is critical for any company looking to rank higher in search engine results. Local SEO for small businesses, such as optimizing website content for local searches, should be at the top of the list. Providing quality and relevant content, leveraging white hat techniques like link building, and staying current on best practices through professional small business SEO services are key elements necessary to success. Additionally, creating a comprehensive small business SEO checklist provides structure and guidance while reaping the benefits associated with having customers find your business online.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my small business website for search engines?',
        paragraph: `Optimizing your small business website for search engines is essential as it can help you gain visibility, increase your customer base and boost revenue. When planning out a local SEO strategy, consider creating content that appeals to the kind of people who'd be interested in what you have to offer. Hire an experienced Small Business SEO Services provider who will analyze and improve your website's visibility on SERPs. Also incorporate a checklist of important elements such as link building, keyword research, page optimization, etc., for best results.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some common Small Business SEO mistakes to avoid?',
        paragraph: `Small Business SEO (Search Engine Optimization) is a critical part of success in any business. Unfortunately, there are common mistakes that can be made when it comes to SEO optimization. These include not utilizing local SEO for small businesses, neglecting the importance of using small business SEO services, not understanding the benefits of SEO for small businesses, skipping over creating a comprehensive small business SEO checklist and failing to utilize best practices for small business SEO strategies. Getting professional advice on how to avoid these mistakes could save your company time and money in the long run.`
    }
]

export default function SmallBussinesSEO() {
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
        <title>Small Business SEO Services: Rank Higher, Sell More</title>
            <meta name="description" content='Our Small Business SEO services drive results. Gain visibility, attract customers, and thrive online with tailored strategies.' />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/small-business-seo"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>Small Business SEO Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Improve Your Business Visibility with Small Business SEO Services.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services" className={style.container2_atag}>SEO Service</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services" className={style.container2_atag}>PPC Service</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/local-seo" className={style.container2_atag}>Local SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/nationwide-seo" className={style.container2_atag}>NationWide SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/mobile-seo" className={style.container2_atag}>Mobile SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-keywords-research" className={style.container2_atag}>Keyword SEO</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Clear and Concise Headline: Boost Your Small Business with Professional SEO Services</h2>
                    <p>Search engine optimization is the basic thing you need to build an online presence of your brand. With the help of NSP Global Services, a search engine optimization company.</p>
                    <p>You can master this fundamental yet very complex thing. We will help you by giving you the keywords that are relevant to your business, that will make your reach even wider than before, drive more traffic to your website, rank your website on the google, generate more leads and even more than that. SEO solutions are nothing, but a ladder to reach at the top of the Google’s ranking. By using SEO, NSP Global Services will make a better image of your website, brand, business and will walk with you at every step of success..</p>
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
                            <h4>Website Audit & SEO Assessment</h4>
                        </div>
                        <p>Are you eager to elevate your small business to new heights? If yes, then you need to make sure that your website is visible to people searching for the products or services that you offer. With our small business SEO services, we can help you in this regard by conducting a website audit and an SEO assessment to ensure that your website is well optimized for the search engines.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>SEO Keyword Research and Rankings</h4>
                        </div>
                        <p>If you want to ensure that your website is visible to potential customers, you need to have your website optimized for the right keywords. Our SEO experts will conduct a comprehensive keyword research and analyze the rankings of your keywords on leading search engines such as Google, Yahoo, and Bing. With this data, we can help you devise an effective SEO strategy to help your website rank higher.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Content Creation & Marketing</h4>
                        </div>
                        <p>Content is one of the most important factors in SEO, so it’s important to ensure that the content on your website is well-written and SEO-optimized. Our team of expert writers will create high-quality content that is optimized for search engines and appeals to your potential customers. We will also help you market this content to get more traction and visibility.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Videos/Infographics</h4>
                        </div>
                        <p>Videos and infographics are one of the most effective ways to promote your business, as it’s a visual way of conveying your message to potential customers. Our team of graphic designers and video editors can create stunning visuals that can help you get more conversions and sales.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Request a free SEO consultation </p>
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
                    <h3>Benefit of SEO for Small Business:</h3>
                    <ul className={style.container2div8_ul}>
                        <li className={style.container2div8_li1} >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhance Your Online Visibility: </strong>With the right combination of on-page and off-page SEO, you can rank higher on search engine result pages (SERPs) and get more clicks and traffic. The more visible you are, the more potential customers you can attract to your site.</span>
                            </div>
                        </li>
                        <li className={style.container2div8_li1}>
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Build Credibility and Brand Authority: </strong>Establishing a strong online presence through SEO also helps build credibility and authority in your industry. This builds trust with your customers, who are more likely to buy from a business they feel confident in.</span>
                            </div>
                        </li>
                        <li className={style.container2div8_li1}>
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Target Local Customers: </strong>Local SEO is critical for small businesses, as it targets customers in your local area who are searching for products or services like yours. By optimizing for regional keywords and creating local citations, our small business SEO services help you attract local customers and grow your business.</span>
                            </div>
                        </li>
                        <li className={style.container2div8_li1}>
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong> Maximize Your ROI: </strong>SEO is a long-term, sustainable investment in your online marketing efforts, with a strong possibility of providing outsized returns in terms of lead generation and sales.</span>
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
