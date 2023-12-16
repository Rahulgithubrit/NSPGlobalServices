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
import BannerImage from '../assets/Automotive/Twitter Marketing.png'
import endImages2 from '../assets/Twitter Marketing-20230918T172021Z-001/Twitter Marketing/19_20230828_160304_0002.png'
import endImages1 from '../assets/Twitter Marketing-20230918T172021Z-001/Twitter Marketing/18_20230828_160304_0001.png'
import SEO from '../assets/Twitter Marketing-20230918T172021Z-001/Twitter Marketing/17_20230828_160304_0000.png'
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
        statement: 'What is Twitter Marketing?',
        paragraph: 'Twitter Marketing is the use of Twitter to promote a business, product, or service. It involves creating a strategic plan and crafting effective tweets to attract and engage an audience. It can be done by hiring a Twitter marketing agency or through executing campaigns independently with the right tools and approaches.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does Twitter Marketing work?',
        paragraph: `Twitter marketing is an effective strategy to reach more people, build relationships and promote your brand. Effective tweets should include engaging content such as videos, images, polls and links that provide added value. Some great examples of successful Twitter marketing campaigns are Pepsi's #LiveForNow campaign or Old Spice's #SmellLikeaManMan campaign.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using Twitter for marketing?',
        paragraph: `Twitter can be a powerful tool for marketing due to its high engagement rates, ability to reach large audiences, and use of effective tweets. With strategic hashtags and clever content, businesses can foster relationships with customers, while utilizing targeted ads to find more leads. #TwitterMarketing`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I create a Twitter marketing strategy?',
        paragraph: `Creating an effective Twitter marketing strategy involves crafting well-targeted, informative tweets that include a clear call-to-action. Share value-added content and use strategically placed hashtags to reach new audiences. Utilize analytics regularly to ensure your efforts are yielding desired results.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What types of content work best for Twitter marketing?',
        paragraph: `Effective tweets for marketing should contain a combination of relevant and intriguing content, visuals, hashtags, and calls-to-action. Stay mindful of brand voice and posting frequency to ensure maximum reach.`
    }
]

export default function TwitterAdvertising() {
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
                <title>Twitter Advertising Services | Boost Your Audience Growth</title>
                <meta name="description" content="Our Twitter advertising services are tailored to help you grow your audience. Reach new heights with expert strategies." />
                <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services/twitter-marketing"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Twitter Marketing Services</h1>
                <p className={style.subtitle}>Twitter Marketing Services: Boost Your Brand's Online Presence and Engagement</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/pinterest-marketing" className={style.container2_atag}>Pinterest Marketing</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/quora-marketing" className={style.container2_atag}>Quora Marketing</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/whatsapp-marketing" className={style.container2_atag}>Whatsapp Marketing </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/tiktok-advertising" className={style.container2_atag}>Tiktok Ads </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/facebook-advertising" className={style.container2_atag}>Facebook Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/instagram-advertising" className={style.container2_atag}>Instagram Ads</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Are you seeking to boost your brand's online presence and effectively engage with your target audience? Look no further! Our Twitter Marketing Services are specifically designed to take your brand's visibility to the next level using tailored and expert strategies.</p>
                    <p>We understand that social media marketing, particularly Twitter marketing, can be daunting, but our team is here to simplify the process for you. With our comprehensive Twitter marketing strategies, we'll help you drive engagement, increase followers, and establish a strong online presence.</p>
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
                            <h4>Effective Tweets for Marketing</h4>
                        </div>
                        <p> Crafting compelling tweets is the backbone of any successful Twitter marketing strategy. Our team has compiled various tips and tricks to help you create great tweets. This includes using engaging visuals such as images, videos, and GIFs to capture your audience's attention. Additionally, leveraging hashtags relevant to your content helps improve tweet visibility and reach. Keeping tweets concise and impactful within the character limit ensures your message resonates with your audience. Lastly, actively engaging with your audience through responses to mentions and messages fosters a sense of community and encourages further interaction.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Twitter Marketing Agency</h4>
                        </div>
                        <p>Choosing our Twitter marketing agency guarantees exceptional service and outstanding results. Our strength lies in developing customized Twitter marketing strategies tailored to your business needs, ensuring you receive the best possible results. Our team comprises certified Twitter Ads experts with the expertise to create and optimize campaigns aligned with your business goals, driving maximum return on investment. We believe in transparency and accountability, so our reporting provides valuable insights into your Twitter performance, including engagement metrics and follower growth.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>BStrategic Content Creation</h4>
                        </div>
                        <p>Our team of skilled content creators understands the power of compelling content in driving engagement. We specialize in developing informative, entertaining, and share-worthy content. From informative tweets to entertaining posts, we optimize your content to maximize engagement, thereby enhancing the effectiveness of your Twitter marketing strategy.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Engaging Visuals and User-Friendly Design</h4>
                        </div>
                        <p>We recognize the significant impact that visuals can have on Twitter's marketing success. Our team of designers excels at creating engaging visuals, such as eye-catching infographics and custom images that capture your audience's attention. Moreover, we prioritize user-friendly design, ensuring your audience can easily engage with your brand. We create intuitive, optimized, visually appealing landing pages for a seamless user experience. Our Twitter marketing services are specifically designed to enhance your conversion rates through clear paths to action and compelling call-to-action.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Contact Us Today to Amplify Your Twitter Presence and Drive Meaningful Conversions!</p>
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
                                <span><strong>Drive Engagement:</strong> With our expert Twitter marketing strategies, we aim to drive engagement by facilitating meaningful conversations and interactions with your audience. You can strengthen customer relationships and build a loyal community around your brand by fostering engagement.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increase Followers:</strong> Our proven tactics attract relevant followers genuinely interested in your industry, products, or services. By employing strategies that resonate with your target audience, we help you expand your follower base, increasing your brand's reach and influence.
                                </span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Boost Visibility with Hashtags:</strong>Incorporating a well-planned hashtag strategy into your tweets helps improve their visibility and reach. By leveraging relevant hashtags, we ensure that your tweets reach a wider audience, increasing the chances of attracting new followers and potential customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Gain Valuable Insights:</strong>Our comprehensive approach includes follower analysis, social listening, and detailed analytics and reporting. We gain valuable insights into audience preferences, trends, and growth opportunities by analyzing your followers and listening to social media conversations. Our reporting provides actionable data, enabling you to refine your Twitter marketing strategy and achieve better results.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>Take advantage of the tremendous marketing potential that Twitter offers. Contact us today to discuss your Twitter marketing needs and unlock the full power of this dynamic platform. Let us create a Twitter marketing strategy that leaves a lasting impact on your audience, driving engagement, increasing followers, and propelling your brand's online presence to new heights.</span>
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
