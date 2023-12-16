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
import BannerImage from '../assets/Automotive/WordPress SEO.png'
import endImages2 from '../assets/Wordpress SEO/10_20230819_220017_0001.png'
import endImages1 from '../assets/Wordpress SEO/11_20230819_220017_0002.png'
import SEO from '../assets/Wordpress SEO/9_20230819_220016_0000.png'
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
        statement: 'What is WordPress SEO?',
        paragraph: 'WordPress SEO is a combination of strategies and techniques that involve optimizing the content and coding of your website for search engine exposure. Whether you’re an expert or just getting started, you can create best-practice-compliant content and improve your site’s ranking with helpful plugins such as Yoast SEO, All in One SEO Pack, The SEO Framework, SEOPress, Rank Math & Squirrly.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is SEO important for my WordPress website?',
        paragraph: `SEO (Search Engine Optimization) is an important factor for your WordPress website because it helps you to rank higher in the search engine results pages, increase visibility and ultimately drive more organic traffic to your site.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the main factors that affect SEO for WordPress websites?',
        paragraph: `There are several key factors that affect SEO on WordPress websites. A great starting point is to ensure your website follows basic best practices, such as using a responsive design, having an optimized navigation menu, and integrating keywords into content. Additionally, installing a WordPress SEO plugin can help improve the site's overall search engine rankings by providing access to various tools like optimization checklists and automatic XML sitemaps.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my WordPress website for SEO?',
        paragraph: `Optimizing a WordPress website for SEO doesn't have to be difficult. Begin by making sure your website is properly indexed, use appropriate keywords and meta tags, include backlinks and optimize images; these are key steps all WordPress sites must take. To help make the process easier, you can also use an expert SEO plugin or tool for automation.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the best SEO practices for WordPress websites?',
        paragraph: `Optimizing your WordPress website for SEO requires attention to key factors such as using keywords, optimizing titles and descriptions, enabling social sharing and other forms of link building, optimizing images and content formatting. Additionally, installing a reliable SEO plugin like Yoast can help automate the process while expert SEOs may help bring more advanced processes into play.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How long does it take to see results from WordPress SEO?',
        paragraph: `It depends on a variety of factors, including the website's current SEO score. Generally speaking, though, with the right strategies and tools like expert SEO WordPress plugins and automatic WordPress SEO optimization techniques, you can start to see improvements in your website's SERP within 3-4 months. `
    }
]

export default function WordpressSEO() {
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
        <title>WordPress SEO Services | Increase Traffic, Rankings, and ROI</title>
            <meta name="description" content='Our WordPress SEO consultant specializes in optimizing your website for search engines. Boost rankings, traffic, and conversions with our expert guidance.' />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/wordpress-seo"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>WordPress SEO Services</h1>
                <p className={style.subtitle}>Get Your WordPress Website Ranking with our Expert SEO Services</p>
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
                            <Link to="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/shopify-seo" className={style.container2_atag}>Shopify SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/international-seo" className={style.container2_atag}>International SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/franchise-seo" className={style.container2_atag}>Franchise SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/luxury-seo" className={style.container2_atag}>Luxury SEO	</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>WordPress offers numerous advantages for website owners as the most popular Content Management System (CMS) in the world. However, more than simply having a WordPress site is required to ensure its visibility on search engines.</p>
                    <p>That's where our WordPress SEO specialists come in. We go beyond the basics and provide custom-tailored SEO services to optimize your site for optimal search engine results. With our expertise, we can help you achieve improved rankings, increased traffic, enhanced user experience, robust engagement on social media, and a customized SEO strategy tailored to your specific business goals.</p>
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
                            <h4>Improved Rankings and Visibility</h4>
                        </div>
                        <p>Our expertise in WordPress SEO can significantly improve your website's search engine rankings, increasing its visibility. This leads to more organic traffic, greater brand awareness, and a higher chance of online success.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Increased Traffic and Conversions</h4>
                        </div>
                        <p>With improved search rankings, your website attracts more potential customers, increasing traffic. This boost in traffic can lead to higher sales and conversions, maximizing your business's growth potential.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Enhanced User Experience</h4>
                        </div>
                        <p>We optimize your WordPress site for a better user experience. By improving its speed, usability, and navigation, we ensure visitors have a seamless and enjoyable browsing experience. This boosts engagement and encourages users to take desired actions on your website.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Robust Engagement and Social Media Impact</h4>
                        </div>
                        <p>Our WordPress SEO services maximize the impact of your social media presence. By optimizing your website for social sharing and engagement, you increase the likelihood of receiving social media recommendations. This drives more traffic, boosts engagement, and enhances your brand's credibility in the online space.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Claim Your FREE WordPress SEO Audit Today</p>
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
                                <span><strong>Keyword Research:</strong>We conduct in-depth keyword research to identify the most effective keywords and phrases relevant to your business and target audience. This helps optimize your content and increase its visibility in search engine results.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Content Optimization:</strong>We work closely with your team to develop high-quality, SEO-optimized content that aligns with the identified keywords. This includes optimizing titles, meta descriptions, header tags, and internal linking structures to improve your site's visibility and ranking potential.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Off-Page Optimization:</strong>We implement a comprehensive off-page optimization strategy to enhance your site's authority and reputation. This involves building high-quality backlinks, fostering social media engagement, and increasing your brand's visibility through online channels.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Analytics and Reporting:</strong>We use advanced analytics tools to monitor your site's performance. This allows us to track progress, identify areas for improvement, and make data-driven decisions to refine the SEO strategy. Regular reporting keeps you informed about the results and effectiveness of our efforts.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>If you're looking to boost your WordPress website, our WordPress SEO packages are what you need. You will receive detailed analytics and reports regularly to monitor progress and results. We offer bespoke packages and prioritize specific goals concerning your website. So why wait? Book a FREE consultation today and let us help your WordPress website to reach new heights.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download='Nsp' target='_blank'>Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} download='NpsMainPdf' target='_blank'>Download Word File</Link>
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
