import React, { useState} from 'react'
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
import BannerImage from '../assets/Untitled design/2.png'
import endImages2 from '../assets/Shopify SEO/8_20230819_214227_0007.png'
import endImages1 from '../assets/Shopify SEO/7_20230819_214227_0006.png'
import SEO from '../assets/Shopify SEO/9_20230819_214227_0008.png'
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
        statement: 'What is Shopify SEO?',
        paragraph: 'Shopify SEO is the process of optimizing your online store so that it can be found by customers and search engines. A successful Shopify SEO strategy should include a comprehensive checklist which includes elements like keyword research & targeting, content optimization and link building. '
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is SEO important for my Shopify store?',
        paragraph: `SEO is vital for any Shopify store, as it can help optimize the website and content to make sure potential customers can find and use the store. A thorough Shopify SEO checklist should include keyword research, page optimization, link building, content structure, etc.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the main factors that affect SEO for Shopify stores?',
        paragraph: `When optimizing SEO for Shopify stores, there are several key factors to consider. These include creating optimized content, making sure your site is fast and mobile-friendly, researching relevant keywords, and improving link building strategies. Furthermore, utilizing a shopify seo checklist or working with an experienced shopify seo consultant can be of great help for achieving optimal results.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my Shopify store for SEO?',
        paragraph: `Optimizing your Shopify store for SEO can be a daunting task, but there are simple steps you can take to ensure that it's ready for search engine optimization. Start by creating a Shopify SEO checklist which includes items like optimizing product titles and descriptions, setting up page redirects when necessary, utilizing alt-tags on images, researching relevant keywords related to your business, and hiring an experienced Shopify SEO agency or consultant if needed. `
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the best SEO practices for Shopify stores?',
        paragraph: `To ensure SEO success for your Shopify store, follow these best practices: create unique titles and meta descriptions; write compelling product descriptions; target long-tail keywords; optimize images' file names and ALT tags; build quality backlinks from reputable websites; and ensure a fast loading website.`
    }
]

export default function ShopifySEO() {
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
        <title>Shopify SEO Services | Boost Your E-commerce Store's Visibility</title>
            <meta name="description" content='Drive more traffic and sales with our expert Shopify SEO services. Let us optimize your online store for higher rankings and profitability.' />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/shopify-seo"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Shopify SEO Services</h1>
                <p className={style.subtitle}>Achieve Optimal E-Commerce Success with Premier SEO Consulting Services.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/ecommerce-seo" className={style.container2_atag}>eCommerce SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/international-seo" className={style.container2_atag}>International SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-consultancy" className={style.container2_atag}>SEO Consultancy</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/on-page-seo" className={style.container2_atag}>On-Page SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-audits" className={style.container2_atag}>SEO Audits</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>If you're looking to gain a competitive edge in the world of e-commerce, search engine optimization (SEO) consulting is the solution you need. With expert guidance from experienced SEO consultants, you'll have the tools you need to take your business's search rankings to new heights and generate increased revenue.</p>
                    <p>At NSP, we specialize in providing top-tier Shopify SEO services that are tailored to each individual client's business goals and target audience. From a comprehensive SEO analysis to a custom-fit backlink strategy, we have the expertise to optimize your site and increase organic traffic.</p>
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
                            <h4>Custom-fit strategy</h4>
                        </div>
                        <p>We develop a bespoke SEO strategy that aligns with your specific business objectives and target audience. Understanding your unique needs allows us to create a tailored approach that maximizes your SEO potential.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Data-driven analysis</h4>
                        </div>
                        <p>Our thorough analysis of your website and competitors provides the necessary data to drive success. We examine vital metrics, keyword research, and industry trends to identify opportunities and create effective strategies.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Top-tier expertise</h4>
                        </div>
                        <p>With years of experience and a team of SEO experts, we deliver exceptional performance and ROI. Our consultants stay up-to-date with the latest SEO techniques and industry best practices, ensuring you receive cutting-edge solutions.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Improved website performance</h4>
                        </div>
                        <p>Our strong backlink strategy and optimized site speed enhance your website's performance and user experience. Building high-quality backlinks and optimizing technical aspects, we help your site load faster, rank higher, and provide a seamless browsing experience.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Take Your Business to New Heights with Expert SEO Consulting Today!</p>
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
                                <span><strong>Increased organic traffic:</strong>Our SEO services attract more organic traffic to your website, leading to higher click-through rates and conversions. By optimizing your site's visibility in search engines, we drive targeted traffic that is more likely to convert into customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved search rankings:</strong>With our expertise, we help improve your search rankings and visibility. By implementing strategic on-page and off-page optimizations, we enhance your site's relevance and authority, making it more likely to appear at the top of search engine results.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced user experience:</strong> Our strategies focus on improving site speed, usability, and navigation, resulting in a better user experience. A well-optimized website ranks higher, engages visitors, encourages longer stays, and facilitates easy conversions.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Tangible results and ROI:</strong>Through engaging visuals and clear-cut reports, we demonstrate how our SEO consulting services drive actual results and ROI for your business. We provide detailed analytics, tracking the progress of your SEO campaign and showcasing the positive impact on your website's performance and revenue.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>We are a leading marketing agency with years of experience delivering top-tier Shopify SEO services.Our experienced consultants have a well-established history of delivering outstanding results for our clients, and we are confident in our ability to achieve the same for you.
                                    Contact us today to learn more about our Shopify SEO consulting services and how they can benefit your e-commerce business. With our help, you'll be poised to take your online sales to new heights.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download='Nsp' target='_blank'>Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} download='NspMianPdf' target='_blank'>Download Word File</Link>
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
