import React, { useEffect ,useState} from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
// import service from '../assets/service-details-2.png'
// import blog from '../assets/blog-1-1.png'
import icon7 from '../assets/icon-7.png'
import { MdCall } from 'react-icons/md'
import arrow from '../assets/right-arrow.png'
import AOS from 'aos'
import "aos/dist/aos.css";
import style from './servicedetails.module.css'
import Carousal from '../Carousal'
import BannerImage from '../assets/Automotive/LinkedIn Marketing.png'
import endImages2 from '../assets/LinkedIn Marketing-20230918T172036Z-001/LinkedIn Marketing/19_20230828_160536_0002.png'
import endImages1 from '../assets/LinkedIn Marketing-20230918T172036Z-001/LinkedIn Marketing/18_20230828_160536_0001.png'
import SEO from '../assets/LinkedIn Marketing-20230918T172036Z-001/LinkedIn Marketing/17_20230828_160535_0000.png'
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
        statement: 'What is LinkedIn Marketing?',
        paragraph: 'LinkedIn Marketing is a suite of services offered by agencies and marketers that can help businesses reach their target customers through digital marketing strategies tailored for LinkedIn. It includes LinkedIn Ads, content creation, targeting, segmentation and more to help businesses build better relationships with potential customers.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does LinkedIn Marketing work?',
        paragraph: `LinkedIn Marketing provides a unique set of services to leverage business-to-business (B2B) marketing efforts. A specialized LinkedIn Marketing Agency can boost brand recognition, drive traffic to websites, and generate leads by tailored campaigns across digital marketing channels like LinkedIn Ads and organic networking on the platform.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using LinkedIn for marketing?',
        paragraph: `LinkedIn is one of the most powerful marketing tools and provides numerous benefits, such as increasing brand awareness, boosting reach & engagement, generating leads & sales opportunities, pinpoint targeting, automated campaigns, and much more. `
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I create a LinkedIn marketing strategy?',
        paragraph: `Developing a successful LinkedIn marketing strategy involves leveraging the platform's powerful targeting capabilities, utilizing services from an experienced LinkedIn marketing agency, and optimizing for digital marketing objectives.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What types of content work best for LinkedIn marketing?',
        paragraph: `When it comes to LinkedIn marketing, content that is highly engaging and relevant to B2B audiences is the key. Digital marketers should focus on creating high-quality, informative posts that help potential customers understand their product or service offering in order to drive greater business prospects.`
    }
]

export default function LinkedInMarketing() {
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
                <title>LinkedIn Marketing Services | Expert B2B Strategies</title>
                <meta name="description" content="Drive B2B success with our LinkedIn marketing expertise. We offer professional services and expert B2B strategies for your brand." />
                <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services/linkedin-marketing"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>LinkedIn Marketing Services</h1>
                <p className={style.subtitle} id={style.titleblack}>LinkedIn Marketing Services: Boost Your B2B Business with Insight-Driven Marketing Strategies.</p>
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
                            <Link to="/ppc-services/whatsapp-marketing" className={style.container2_atag}>Whatsapp Marketing</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/tiktok-advertising" className={style.container2_atag}>Tiktok Ads</Link>
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
                    <p>Elevate your B2B business with our LinkedIn marketing services. We specialize in creating customized marketing strategies that align with your goals and objectives, leveraging the power of one of the largest professional platforms to drive lasting success. With data-driven insights, tailored audience targeting, and a professional appeal, our LinkedIn marketing agency can give you a competitive advantage and establish a strong brand presence on this popular platform.</p>
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
                            <h4>Insight-Driven Strategies</h4>
                        </div>
                        <p>We utilize data-driven insights to identify your target audience and craft personalized marketing strategies that resonate with them.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Tailored Audience Targeting</h4>
                        </div>
                        <p>Our LinkedIn marketing services offer granular targeting options to reach decision-makers in specific industries and regions or target specialized interests for maximum impact.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Scalability</h4>
                        </div>
                        <p> LinkedIn presents unparalleled opportunities for B2B marketing, and we can help you harness the platform's full potential to drive engagement, growth, and interest in your business.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Professional Appeal</h4>
                        </div>
                        <p>LinkedIn is the ideal platform to showcase your business's expertise and establish credibility in your industry. Our LinkedIn marketing agency will help position your brand as a thought leader.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Schedule your free consultation today and take the first step towards optimizing your LinkedIn presence.</p>
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
                                <span><strong>Competitive Advantage:</strong>Our LinkedIn marketing services give you an edge over your rivals, helping you establish a strong brand presence on one of the world's most popular professional platforms.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Advanced Targeting Options:</strong> With LinkedIn's vast data-rich environment, you can target audiences based on job title, function, industry, and location, ensuring your messaging reaches the right people.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Content Marketing Opportunities:</strong>LinkedIn offers various content marketing options, allowing you to promote your content to a highly engaged audience and drive brand awareness.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Lead Generation:</strong>LinkedIn provides tools for lead generation, including sponsored InMail, lead gen forms, and LinkedIn Sales Navigator, helping you capture valuable leads for your B2B business.</span>
                            </div>
                        </li>
                        <li>
                            <strong>Trust Signal:</strong>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>In-house Creative Team:</strong>Our experienced creative team will craft visually compelling content aligned with your brand's unique voice.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Dedicated Account Managers:</strong>A dedicated account manager will collaborate closely with you to strategize, execute, and optimize your LinkedIn marketing efforts.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Transparent Approach:</strong>We keep you informed at every stage of the marketing process, providing regular updates and detailed reports.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Expertise and Proven Results:</strong>With years of industry knowledge and experience, our agency has helped clients improve B2B lead generation, conversion rates, and brand awareness through our expert LinkedIn marketing services.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>LinkedIn offers exceptional opportunities for B2B companies to connect with their ideal audience and achieve success. By partnering with our LinkedIn marketing agency, you can leverage the platform's full potential, drive engagement, and build lasting connections using compelling, insight-driven marketing strategies.</span>
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
