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
import BannerImage from '../assets/Automotive/Google Ads Marketing.png'
import endImages2 from '../assets/Google Ads Marketing-20230918T171845Z-001/Google Ads Marketing/18_20230824_180256_0002.png'
import endImages1 from '../assets/Google Ads Marketing-20230918T171845Z-001/Google Ads Marketing/17_20230824_180256_0001.png'
import SEO from '../assets/Google Ads Marketing-20230918T171845Z-001/Google Ads Marketing/16_20230824_180256_0000.png'
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
        statement: 'What is Google Ads?',
        paragraph: 'Google Ads is a powerful online advertising platform that works by placing text and display ads on the Google search engine results page (SERP). Advertisers set up campaigns with personalized keywords, location targeting, budgeting options, ad text and creative choices. Using these tools correctly can create effective google ads for any campaign.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does Google Ads work?',
        paragraph: `Google Ads is a type of PPC advertising platform that allows you to create ads and bid on keywords in order to drive traffic to your website. It includes features like search ads, display ads, video campaigns, app install campaigns, shopping ads, and remarketing campaigns.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using Google Ads for marketing?',
        paragraph: `Google Ads (formerly known as AdWords) offers a powerful tool for businesses to reach their target audience at the right time. The platform can be used to create effective campaigns around selected keywords and phrases, allowing companies to optimize ad spend and get maximum visibility in search engine results.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How much does it cost to advertise on Google Ads?',
        paragraph: `Google Ads can be a cost-effective way to promote your business online. You just have to create effective campaigns, set up keyword research and target the audience correctly with search ads, display ads or shopping ads. `
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I set up a Google Ads campaign?',
        paragraph: `Setting up a Google Ads campaign is more than just picking your keywords and budget. To create an effective strategy, you need to research the right keywords, understand auction dynamics, implement targeting options, set up conversion tracking and optimize with data-driven insights. `
    }
]

export default function GoogleAdMarketing() {
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
                <title>Expert Google Ads Marketing Services for Results</title>
                <meta name="description" content="NSP provides full Google Ads Campaign Management services, including campaign setup, maintenance, and optimisation." />
                <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services/google-ads-marketing"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>Google Ad Marketing Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Dominate Your Online Presence With Our Results-Driven Google Ads Marketing Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/facebook-advertising" className={style.container2_atag}>Facebook Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/ppc-management-services" className={style.container2_atag}>PPC Management </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/instagram-advertising" className={style.container2_atag}>Instagram Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/youtube-advertising" className={style.container2_atag}>YouTube Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/twitter-marketing" className={style.container2_atag}>Twitter Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/linkedin-marketing" className={style.container2_atag}>LinkedIn Paid Ads</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>In today's digital era, having a robust online presence is crucial for business success. With Google receiving over 5.6 billion searches per day, it is vital to implement effective Google Ads marketing strategies to ensure high visibility and attract potential customers.</p>
                    <p>Our Google Ads agency specializes in creating customized campaigns that enhance online visibility and drive business growth. Our team of certified Google Ads experts excels in creating captivating advertisement campaigns, grabbing viewers' attention, and generating website traffic.</p>
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
                            <img  src={icon7} alt="icon" />
                            <h4>Strategy and Techniques</h4>
                        </div>
                        <p>Our Google Ads marketing service is built on proven advertising strategies and techniques that consistently deliver outstanding results for our clients. We employ various tactics, including headline optimization, comprehensive keyword research, precise audience targeting, persuasive ad copywriting, and advanced analytics tools. By utilizing these strategies, we ensure that your ad campaigns are compelling, targeted, and optimized for maximum performance.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Google Ads</h4>
                        </div>
                        <p>Understanding the Platform: Google Ads, formerly known as Google AdWords, is a powerful online advertising platform developed by Google. It allows businesses to display ads to users actively searching for products or services related to their business. By leveraging the pay-per-click model, businesses only pay when their ads are clicked, ensuring cost-effectiveness and a higher return on investment. This platform offers versatile ad formats, including search, display, shopping, and video ads, catering to various advertising goals and objectives.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Functionality of Google Ads</h4>
                        </div>
                        <p>Google Ads analyzes users' search terms and displays relevant ads that match their search intent. This targeted approach lets businesses immediately connect with their desired audience, resulting in higher click-through rates, increased conversions, and improved ROI. Whether you aim to capture users actively searching for specific products or target potential customers across websites and apps, Google Ads offers a range of ad types to suit your advertising objectives.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Google Ads for Beginners</h4>
                        </div>
                        <p>If you're new to Google Ads, our agency provides comprehensive support to help you navigate and succeed on the platform. We guide you through defining clear advertising goals, creating a well-aligned campaign strategy, conducting in-depth keyword research, and continuously monitoring and optimizing your campaigns. Our expertise and guidance ensure that you quickly grasp the essentials of Google Ads and effectively utilize its features to drive results for your business.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Book Your Free Google Ads Audit Today and Start Maximizing Your ROI with Our Expert Team!</p>
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
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Enhanced Reach and Visibility:</strong>By leveraging our Google Ads marketing services, you can significantly improve your reach and visibility among your target audience. We ensure your ads are displayed to the right people at the right time, increasing brand visibility and attracting potential customers. You can optimize your advertising budget and achieve better results with improved click-through rates and conversions.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Increased Return on Investment (ROI):</strong>Our expertise in ad creation, targeting techniques, and optimization enables us to deliver a higher return on investment for your Google Ads campaigns. By continuously monitoring and analyzing campaign performance, we make data-driven decisions to maximize your ROI. Our focus on driving results ensures that your advertising budget is effectively utilized and positively impacts your bottom line.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Brand Awareness and Loyalty:</strong>Our customized ad campaigns help you build brand awareness and loyalty among your target audience. Compelling ad copy, impactful visuals, and strategic targeting create a strong brand presence. By consistently reaching your audience with engaging ads, you can create a lasting impression and foster loyalty towards your brand.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Expert Guidance and Support:</strong>Our dedicated team of certified professionals is committed to your success. We provide comprehensive Google Ads audits to identify areas for improvement in your existing campaigns. Our experts offer bespoke ad creation, advanced targeting techniques, detailed reporting and analysis, and pricing models that prioritize your ROI. With our exceptional customer support, you can rely on us to guide you through every step of your Google Ads journey.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>Partnering with our award-winning Google Ads agency brings numerous advantages to your business. Our expertise in strategy and techniques, deep understanding of the Google Ads platform, tailored campaigns for beginners, and the benefits of enhanced reach, increased ROI, brand awareness, and expert guidance ensure your success in the competitive digital landscape. Get started with our expert team today and unlock the potential of Google Ads to drive remarkable results for your business.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} target='_blank' download="Nsp">Download PDF</Link>
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
