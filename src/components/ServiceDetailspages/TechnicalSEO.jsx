import React, { useEffect ,useState} from 'react'
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
import BannerImage from '../assets/Automotive/Technical SEO.png'
import endImages2 from '../assets/Technical seo-20230918T171634Z-001/Technical seo/SAVE_20230823_240738.jpg'
import endImages1 from '../assets/Technical seo-20230918T171634Z-001/Technical seo/SAVE_20230823_240732.jpg'
import SEO from '../assets/Technical seo-20230918T171634Z-001/Technical seo/SAVE_20230823_240728.jpg'
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
        statement: 'What is Technical SEO?',
        paragraph: 'Technical SEO is a type of search engine optimization (SEO) that focuses on the technical aspects of a website in order to help it rank higher in search results. It involves improving a website’s infrastructure, analyzing and fixing errors, optimizing site speed and performance, creating content silos for crawlers, managing redirects and broken links, making sure the site is mobile-friendly, and more.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is Technical SEO important for website optimization?',
        paragraph: `Technical SEO is a set of strategies and techniques used to optimize a website for search engines. It includes optimizing HTML code, content, meta tags, image labels and other elements that are invisible to the user but visible to search engines. Additionally, it involves creating an XML sitemap and configuring robots.txt files that help search engine bots crawl websites more effectively.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some key components of Technical SEO?',
        paragraph: `Technical SEO is the process of optimizing a website in order to make its content more visible and accessible to search engines. It involves auditing a website’s structure and code, conducting keyword research, creating content that's optimized for search engine users, optimizing page speed and loading times, ensuring all images are optimized with proper labeling and alt text, setting up redirects for broken links or pages that have been moved/deleted, implementing an XML sitemap for crawlers to access important pages quickly, among other tasks.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does website speed affect Technical SEO?',
        paragraph: `Website speed is an important factor to consider when performing a Technical SEO audit. faster loading sites will rank higher in search engine results and also help to improve user experience. The quality of your website's code, HTML tags, image alt attributes & other backend settings can all affect it's loading speeds - so make sure to take these into account during your Technical SEO audit.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is the role of XML sitemaps in Technical SEO?',
        paragraph: `XML Sitemaps can provide search engine crawlers with information about the structure of your website, helping them crawl and index it better. Additionally, they provide a place to list out all the URLs you want to be crawled and indexed which allows for quick and thorough site audits ensuring that your on-page optimization is up to date. Therefore, XML sitemaps play an essential role when conducting a Technical SEO audit or review.`
    }
]

export default function TechnicalSEO() {
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
        <title>Technical SEO Services & Consultant for Improved Website Performance</title>
            <meta name="description" content='Better technical SEO from an expert technical SEO agency & consultant - NSP. Our technical SEO services will increase traffic, leads, and sales. Check out our plans and prices right now!' />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/technical-seo"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>Technical SEO Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Boost Your SEO Performance with NSP Technical SEO Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/on-page-seo" className={style.container2_atag}>On-Page SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/backlink-audit" className={style.container2_atag}>Backlink Audit </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/google-analytics-services" className={style.container2_atag}>Google Analytics</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/franchise-seo" className={style.container2_atag}>Franchise SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/celebrity-seo" className={style.container2_atag}>Celebrity SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/luxury-seo" className={style.container2_atag}>Luxury SEO</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>In today's competitive digital landscape, it's essential to stay ahead by implementing the latest technical on-page SEO tactics. Technical SEO is optimizing your website to ensure it is structured effectively for users and search engines. However, juggling technical optimization with your core business responsibilities can be challenging. That's where our experienced team of technical SEO consultants comes in.</p>
                    <p>We provide expert assistance and support, allowing you to focus on your primary business operations while maximizing your website's profitability.
                        NSP offers comprehensive technical SEO services to help businesses optimize their websites for improved search engine visibility and user experience. Our team of experts focuses on the technical aspects of SEO to ensure that your website is technically sound and performs at its best.
                    </p>
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
                            <h4>Website Audit and Optimization</h4>
                        </div>
                        <p>We perform a thorough technical audit of your website to identify any issues affecting its performance. We optimize meta tags, header tags, URL structure, and site speed to improve search engine rankings and user experience.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Mobile Optimization</h4>
                        </div>
                        <p>With the increasing use of mobile devices, we ensure your website is fully optimized for mobile responsiveness. We optimize your site's design, layout, and functionality to provide a seamless experience for mobile users.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Site Structure and Navigation</h4>
                        </div>
                        <p>We analyze and optimize your website's structure and navigation to make it easier for search engines to crawl and index your content. We ensure your site has a clear hierarchy, logical organization, and user-friendly URLs.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Schema Markup Implementation</h4>
                        </div>
                        <p>We implement schema markup, a structured data markup language, to provide search engines with additional information about your website's content. This helps search engines understand your content better and may result in rich snippets in search results.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Get Results with NSP SEO Services Today.</p>
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
                                <span><strong>Improved Search Engine Rankings:</strong>Our technical SEO strategies help improve your website's visibility in search engine results. By optimizing various technical aspects, we increase the chances of your site ranking higher for relevant keywords, driving more organic traffic to your website.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced User Experience:</strong>A technically optimized website provides a better user experience. With improved site speed, mobile responsiveness, and easy navigation, visitors are likelier to stay on your site longer, engage with your content, and convert into customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Organic Traffic:</strong>By optimizing your website's technical aspects, we attract more organic traffic from search engines. As your website becomes more visible and ranks higher in search results, you'll experience a steady increase in targeted traffic, resulting in more potential customers and leads.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Competitive Advantage:</strong>Investing in technical SEO gives you a competitive edge in the digital landscape. When your website is technically optimized, you stand out from competitors who may overlook these crucial factors. This can lead to higher online authority, brand credibility, and a stronger online presence.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>With NSP's technical SEO services, you can unlock the full potential of your website, improve search engine rankings, enhance user experience, and gain a competitive advantage in the online marketplace.<br />
                                    By choosing NSP for your technical SEO needs, you can trust that our experts will deliver sustainable results. We offer a money-back guarantee on all our technical SEO services, giving you peace of mind and assurance that you are investing in a reliable and trustworthy provider.
                                </span>
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
