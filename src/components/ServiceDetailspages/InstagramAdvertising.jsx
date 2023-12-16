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
import BannerImage from '../assets/Automotive/Instagram Advertising.png'
import endImages2 from '../assets/Instagram Advertising-20230918T171942Z-001/Instagram Advertising/20230826_164124_0002.png'
import endImages1 from '../assets/Instagram Advertising-20230918T171942Z-001/Instagram Advertising/20230826_164124_0001.png'
import SEO from '../assets/Instagram Advertising-20230918T171942Z-001/Instagram Advertising/20230826_164124_0000.png'
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
        statement: 'What is Instagram Advertising?',
        paragraph: 'Instagram Advertising is a method of paying for ads directly on the platform, which can reach a broader demographic. To get started, one must create an ad account with an Ads Manager and create an ad campaign by selecting goals, targeting audiences, writing content and setting up budgets. '
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does Instagram Advertising work?',
        paragraph: `Instagram Ads are managed through their Ads Manager platform, which allows you to create and manage campaigns for free. You can use their Ad Cost Calculator to get an estimate on how much your monthly budget should be, and track the performance of your ads. `
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using Instagram Advertising for marketing?',
        paragraph: `Instagram Advertising offers tremendous benefits to business owners. With the help of an Instagram Ads Manager and a cost calculator, you can easily strategize how to advertise on Instagram - either for free or with a set budget per month.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I create an Instagram ad campaign?',
        paragraph: `Creating an Instagram ad campaign is easy with the Ads Manager. Use it to target specific audiences, control budgets and monitor results. Learn the basics for free on Insta - all you need to get started is a plan!`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What targeting options are available for Instagram ads?',
        paragraph: `With the Instagram Ads Manager, users can target their ads to reach users based on age, gender, location, interests and more. Free advertising on Instagram can also be achieved with organic content creation and promotions.`
    }
]

export default function InstagramAdvertising() {
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
                <title>Instagram Advertising Services | Drive Results with Our Expert Team</title>
                <meta name="description" content="Our Instagram advertising services deliver measurable results. Grow your brand, reach new audiences, and boost ROI." />
                <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services/instagram-advertising"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>Instagram Advertising Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Unlock the Power of Instagram Ads</p>
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
                            <Link to="/ppc-services/instagram-advertising" className={style.container2_atag}>Instagram Ads </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/linkedin-marketing" className={style.container2_atag}> LinkedIn Paid Ads</Link>
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
                    <p>Welcome to our leading Instagram Advertising Agency, where we specialize in helping businesses grow their brand and boost sales through effective Instagram advertising campaigns. With our experienced team of marketers and advertising specialists, we offer comprehensive services to enhance your Instagram presence and drive targeted traffic and conversions.</p>
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
                            <h4>Expert Team</h4>
                        </div>
                        <p>Our team consists of experienced marketers and advertising specialists who understand the intricacies of the Instagram platform. We have the knowledge and expertise to optimize your campaigns and achieve your goals effectively.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Targeted Campaigns</h4>
                        </div>
                        <p>We develop tailored Instagram advertising campaigns targeting your desired audience. By understanding your audience's interests and behavior, we create compelling content and ads that resonate with them, maximizing campaign effectiveness.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Website Traffic Generation</h4>
                        </div>
                        <p> Our Instagram Advertising services focus on driving quality traffic to your website. Through strategic Instagram Shopping Ads and custom campaigns, we help increase your website visits and improve your return on investment (ROI).</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Cost-Effectiveness</h4>
                        </div>
                        <p>We work within your budget to deliver impactful Instagram advertising campaigns. Our team leverages industry insights and data to provide cost-effective solutions that deliver results while optimizing your advertising spend.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Want to drive growth through Instagram advertising? Let us help you achieve that.</p>
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
                                <span><strong>Expanded Reach:</strong>With over a billion monthly active users on Instagram, our advertising services enable you to reach a large audience and expand your brand's visibility. We help you tap into this vast user base and connect with potential customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Website Traffic:</strong>We drive more traffic to your website by implementing effective Instagram advertising strategies. We help you attract users interested in your products or services by engaging ads and optimizing campaigns.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Measurable Results:</strong>We believe in transparency and accountability. Our team tracks and analyzes the performance of your Instagram campaigns using tools like Google Analytics, providing you with actionable insights and measurable results. This data-driven approach allows us to refine and optimize your campaigns over time.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Strategic Process:</strong>Our three-step process ensures the success of your Instagram advertising campaigns. We conduct thorough research and analysis to develop a customized strategy. We then create compelling campaigns aligned with your goals and regularly analyze and optimize their performance to maximize results.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution</strong>Our Instagram Advertising Agency offers comprehensive services to help your business thrive on the platform. By leveraging our expertise, you can reach your target audience effectively, drive website traffic, achieve measurable results, and take your Instagram advertising to new heights. Contact us today for a consultation and unlock the full potential of Instagram Advertising Services.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} target='_blank' download='Nsp'>Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} target='_blank' download='NspMainPdf'>Download Word File</Link>
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
