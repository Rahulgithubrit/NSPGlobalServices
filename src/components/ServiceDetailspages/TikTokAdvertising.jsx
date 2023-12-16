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
import BannerImage from '../assets/Automotive/Tiktok Advertising.png'
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
        statement: 'What are TikTok Advertising Services and how do they help businesses?',
        paragraph: 'TikTok Advertising Services are specialized solutions offered by TikTok to help businesses promote their products or services, reaching a broad audience, and driving brand awareness, engagement, and conversions.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does TikTok Advertising Services differ from other social media advertising platforms?',
        paragraph: `TikTok Advertising Services differ from other social media platforms by leveraging its unique user base, short-form video format, and creative opportunities, enabling businesses to engage with a young and highly engaged demographic through immersive ad experiences.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the various types of TikTok ad formats available through TikTok Advertising Services?',
        paragraph: `The various TikTok ad formats available through TikTok Advertising Services include In-Feed Ads, Brand Takeover Ads, TopView Ads, and Branded Effects, providing businesses diverse options to deliver engaging and interactive brand messages.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can businesses target their desired audience using TikTok Advertising Services?',
        paragraph: `Businesses can target their desired audience using TikTok Advertising Services through demographic, interest-based, behavioral, and custom audience targeting based on user engagement or interactions with the brand.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the costs associated with TikTok Advertising Services, and how are they determined?',
        paragraph: `The costs associated with TikTok Advertising Services vary depending on factors such as the ad format, targeting options, campaign objectives, and bidding strategy chosen by the advertiser, with advertisers having control over their spending through budget settings and bid adjustments.`
    }
]

export default function TikTokAdvertising() {
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
                <title>TikTok Advertising Services | Ignite Your Brand's Success</title>
                <meta name="description" content="Supercharge your brand's reach with TikTok advertising services. Target your audience and boost conversions today." />
                <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services/tiktok-advertising"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>TikTok Advertsing Services</h1>
                <p className={style.subtitle}>Sed do eiusmod tempor incididunt ut labore et when the musis dolore magna aliqua.</p>
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
                            <Link to="/ppc-services/ppc-management-services" className={style.container2_atag}>PPC Management</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/facebook-advertising" className={style.container2_atag}>Facebook Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/instagram-advertising" className={style.container2_atag}>Instagram Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/youtube-advertising" className={style.container2_atag}>YouTube Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/tiktok-advertising" className={style.container2_atag}>Tiktok Ads</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Welcome to NSP, your premier provider of TikTok Advertising Services. With the rapid rise of TikTok as a popular social media platform, we understand its immense potential for businesses to reach and engage their target audience. At NSP, we specialize in leveraging the power of TikTok to create compelling advertising campaigns that drive brand awareness, increase reach, and generate meaningful results. Whether you're a small startup or a well-established brand, we are here to help you maximize your advertising impact on TikTok.</p>
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
                            <h4>Strategic Campaign Planning</h4>
                        </div>
                        <p>Our experts will work closely with you to develop a comprehensive advertising strategy tailored to your business objectives. We conduct thorough research and analysis to identify your target audience, refine messaging, and determine the most effective ad formats and placements on TikTok.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Creative Ad Creation</h4>
                        </div>
                        <p>We believe in creativity's power to capture TikTok users' attention. Our talented designers and content creators will craft visually stunning and engaging ads that align with your brand identity and resonate with the TikTok community, ensuring maximum impact and user engagement.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Precise Targeting Capabilities</h4>
                        </div>
                        <p>TikTok offers advanced targeting options to reach specific demographics, interests, and behaviors. We utilize these capabilities to precisely target your ideal audience, ensuring that your ads are seen by the right people who are most likely to engage with your brand and convert into customers.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Performance Tracking and Optimization</h4>
                        </div>
                        <p>We understand the importance of monitoring the performance of your TikTok advertising campaigns. We provide detailed analytics and insights, allowing you to track key metrics and measure the effectiveness of your ads. Our team will continuously optimize your campaigns to maximize results and ensure you get the best return on your advertising investment.</p>
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
                                <span><strong>IIncreased Brand Awareness:</strong>Advertising on TikTok enables you to reach a vast and highly engaged audience, increasing brand visibility and awareness among your target market. By capturing the attention of TikTok users, you can establish your brand presence and create a lasting impression.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced User Engagement:</strong>TikTok is known for its highly interactive and engaging content. With our TikTok Advertising Services, we create captivating ads that resonate with users, encouraging them to like, share, and interact with your brand, fostering a deeper level of engagement.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Targeted Reach:</strong>We ensure that the most relevant audience sees your ads by leveraging TikTok's precise targeting capabilities. This results in higher quality leads and increased chances of conversion, ultimately driving business growth and maximizing your advertising ROI.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Data-Driven Insights:</strong>With our comprehensive analytics and reporting, you gain valuable insights into the performance of your TikTok advertising campaigns. This data empowers you to make informed decisions, optimize your strategies, and refine your targeting for future campaigns, ensuring continuous improvement and success.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Unlock the potential of TikTok as a powerful advertising platform with our expert TikTok Advertising Services. Let NSP help you create impactful campaigns that resonate with your audience, increase brand awareness, and drive tangible results. Contact us today to learn how we can elevate your brand's presence on TikTok.</span>
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
