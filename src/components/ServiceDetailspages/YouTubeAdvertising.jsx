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
import BannerImage from '../assets/Automotive/YouTube Advertising.png'
import endImages2 from '../assets/YouTube Advertising-20230918T171959Z-001/YouTube Advertising/19_20230826_164517_0002.png'
import endImages1 from '../assets/YouTube Advertising-20230918T171959Z-001/YouTube Advertising/18_20230826_164517_0001.png'
import SEO from '../assets/YouTube Advertising-20230918T171959Z-001/YouTube Advertising/17_20230826_164517_0000.png'
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
        statement: 'What is YouTube Advertising?',
        paragraph: `YouTube Advertising is a form of digital marketing that can help businesses increase their reach and visibility. It involves leveraging the power of YouTube's vast network to create impactful ad campaigns that target audiences across different demographics. A good Youtube agency or growth agency can provide full services including strategic planning, creative production, media buying, analytics measurement & optimization and more to maximize your ROI.`
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does YouTube Advertising work?',
        paragraph: `YouTube Advertising works with the help of a Youtube Agency, Growth Agency or Marketing Services that create an effective digital marketing strategy to promote your product and reach new audiences. By utilizing TV ad making companies, you can give powerful advertisements on YouTube and maximize your ROI.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using YouTube Advertising for marketing?',
        paragraph: `YouTube Advertising offers great marketing potential with the ability to target specific audiences and access in-depth analytics. Working with a Youtube Marketing Agency or Youtube Growth Agency can help you take full advantage of YouTube's extensive advertising services, marketing capabilities, and digital media expertise for maximum success.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I create a YouTube ad campaign?',
        paragraph: `Creating a successful YouTube ad campaign requires strategy and expertise. Consider working with a specialized Youtube marketing agency or digital marketing specialists to develop an effective plan tailored to your goals, leveraging their knowledge of the platform, SEO, content creation and TV ad making companies.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What types of YouTube ads are available?',
        paragraph: `YouTube ads come in many different forms, including skippable and non-skippable video ads, display ads, overlay ads, bumper ads, sponsored cards and more. With the help of a YouTube marketing agency or growth agency like ours you can get the full range of services for your YouTube marketing needs.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: ' Can I target specific audiences with my YouTube ads?',
        paragraph: `Yes, you can target specific audiences with your YouTube ads by hiring a Youtube marketing agency that offers services such as digital marketing and TV ad making. They can help you maximize the reach of your campaigns by using detailed audience targeting which resonates with your target customer base.`
    }
]

export default function YouTubeAdvertising() {
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
                <title>YouTube Advertising Services | Drive Results with Our Expert Team</title>
                <meta name="description" content="NSP, as a full-service YouTube advertising agency, can supply everything your company needs to advertise on YouTube, from campaign creation to ad creation." />
                <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services/youtube-advertising"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>YouTube Advertising Services</h1>
                <p className={style.subtitle} id={style.titleblack}>YouTube Advertising Agency - Target Your Most Valuable.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/google-ads-marketing" className={style.container2_atag}>Google Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/ppc-management-services" className={style.container2_atag}>PPC Management </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/pinterest-marketing" className={style.container2_atag}>Pinterest Marketing</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/quora-marketing" className={style.container2_atag}>Quora Marketing</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/whatsapp-marketing" className={style.container2_atag}>Whatsapp Marketing</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/tiktok-advertising" className={style.container2_atag}>Tiktok Ads</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>YouTube is the world's second-largest search engine, with over 2 billion monthly active users. As a result, it's an incredibly powerful platform for businesses looking to promote their products or services to a wide and engaged audience. However, standing out from the competition can be challenging.</p>
                    <p>That's where NSP, a YouTube advertising agency, comes in. With over a decade of experience in digital marketing and video production, we specialize in creating custom YouTube advertising campaigns that deliver a high return on investment for businesses. From video production to media buying and campaign optimization, we offer comprehensive online video advertising solutions tailored to your needs.</p>
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
                            <h4>Expertise and Experience</h4>
                        </div>
                        <p>Our team of professional marketing specialists brings extensive knowledge and experience in digital marketing and video production, ensuring the creation of effective YouTube advertising campaigns.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Customization and Flexibility</h4>
                        </div>
                        <p>Each business has unique requirements. That's why we offer customized YouTube advertising solutions that cater to your specific goals and budget.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Comprehensive Approach</h4>
                        </div>
                        <p>Our tried and tested approach to YouTube advertising covers all aspects, including discovery and research, strategy and planning, content production, audience targeting, creative optimization, and scaling. This comprehensive approach ensures steady and consistent brand growth.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Engaging Visuals</h4>
                        </div>
                        <p>We emphasize the importance of captivating visuals in YouTube advertising. With our in-house creative team, we provide end-to-end video production services that deliver visually stunning and audience-centric video ads.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Customers with Video Advertising on YouTubeReady to unleash the power of YouTube advertising? Get in touch with us now.</p>
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
                                <span><strong>Measurable Results:</strong>Our custom-made YouTube advertising campaigns are designed to deliver measurable results. We focus on achieving your objectives, whether increasing brand awareness, driving website traffic, or generating leads, and provide transparent reporting and insights to track your campaign's success.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Affordable and Agile:</strong>We offer an affordable and agile business model suitable for businesses of all sizes. With a small core team of marketing specialists and access to top freelance marketers and videographers, we provide cost-effective solutions without compromising quality.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong> Optimization and Growth:</strong>Our expertise in YouTube advertising allows us to optimize your campaigns for maximum impact. Continuously monitoring and refining your strategy ensures steady and consistent brand growth over time.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Trusted and Certified:</strong> We have a proven track record of successful campaigns as a trusted YouTube advertising agency. We have received industry recognition, media features, and certifications as Google partners, solidifying our expertise in YouTube advertising.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>In conclusion, NSP is the YouTube advertising agency you can rely on to help your business achieve its goals through effective and measurable YouTube advertising campaigns. With our skilled team of marketing specialists, comprehensive approach, engaging visuals, and track record of success, we are here to unleash the power of YouTube advertising for your business. Contact us today to get started.</span>
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
