import React, { useEffect,useState } from 'react'
// import blog from '../assets/blog-1-1.png'
// import service from '../assets/service-details-2.png'
import icon7 from '../assets/icon-7.png'
import { MdCall } from 'react-icons/md'
import arrow from '../assets/right-arrow.png'
import AOS from 'aos'
import "aos/dist/aos.css";
import style from './servicedetails.module.css'
import Carousal from '../Carousal'
import BannerImage from '../assets/Untitled design/2.png'
import endImages2 from '../assets/Quora Marketing-20231012T190421Z-001/Quora Marketing/20230829_190939_0000.png'
import endImages1 from '../assets/Quora Marketing-20231012T190421Z-001/Quora Marketing/20230829_190939_0001.png'
import SEO from '../assets/Quora Marketing-20231012T190421Z-001/Quora Marketing/20230829_190939_0002.png'
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
        statement: 'What is Quora Marketing?',
        paragraph: 'Quora Marketing is an effective way to reach target audiences. It allows you to ask questions and get answers from experts, build relationships with key influencers, and use a creative marketing strategy to showcase your brand. Benefits include reaching targeted audiences, creating powerful conversations & connections, increasing website traffic & sales, and working with a specialized Quora marketing agency for success.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does Quora Marketing work?',
        paragraph: `Quora Marketing is a powerful marketing strategy that enables businesses to ask questions and engage with potential customers. By using Quora, businesses can benefit from increased leads, improved brand awareness and better customer relationships. A good Quora Marketing Agency will help you create content strategies, optimize your presence on the platform, identify influencers and manage campaigns for long-term success.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using Quora for marketing?',
        paragraph: `The benefits of using Quora for marketing include increased brand awareness and visibility, access to a large audience, improved SEO rankings, referral traffic from key influencers, opportunities for customer engagement, and cost-effective campaigns.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I create a Quora marketing strategy?',
        paragraph: `Building an effective Quora marketing strategy requires understanding the power of questions, knowing why it's important, and leveraging the right tools to maximize success. With the help of a dedicated Quora marketing agency, you can boost visibility for your brand and deliver long-term results.`
    }
]

export default function QuaraMarketing() {
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
                <title>Quora Marketing Services: Drive Engagement and Conversions</title>
                <meta name="description" content="Supercharge your online presence with our Quora marketing services. Drive traffic, engage audiences, and boost conversions today." />
                <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services/quora-marketing"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Quora Marketing Services</h1>
                <p className={style.subtitle}>NSP - Your Go-To Quora Marketing Agency for Effective Results</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/ppc-management-services" className={style.container2_atag}>PPC Management </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/facebook-advertising" className={style.container2_atag}>Facebook Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/google-ads-marketing" className={style.container2_atag}>Google Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/instagram-advertising" className={style.container2_atag}>Instagram Ads </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/youtube-advertising" className={style.container2_atag}>YouTube Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/whatsapp-marketing" className={style.container2_atag}>Whatsapp Marketing</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Quora has emerged as a powerful platform for information-seeking and knowledge-sharing, with millions of monthly active users. At NSP, we recognize the significance of Quora marketing in building brand awareness and generating leads.</p>
                    <p>As a comprehensive marketing agency specializing in digital marketing services and web development, we take a detailed approach to understanding our client's brands, their target audience, and customer journeys. By gaining insights into how customers discover and choose their brands, we provide tailored marketing and advertising strategies that align with their goals and budget.</p>
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
                            <h4> Visually Appealing Ads</h4>
                        </div>
                        <p>Our team designs captivating ads for Quora that effectively capture attention and drive lead generation. By combining compelling text and eye-catching images, our ads maximize visibility on the platform. Whether you opt for image or text ads, we ensure seamless integration with the Quora interface and relevant content.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Proven Track Record</h4>
                        </div>
                        <p>With a track record of delivering impressive results, we have helped numerous clients boost their brand awareness and generate quality leads through our Quora marketing strategies. Our experienced marketers optimize Quora campaigns for maximum return on investment (ROI) and provide valuable insights for ongoing improvement.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Targeted Marketing Options</h4>
                        </div>
                        <p>Our Quora marketing services encompass sponsored question targeting, interest targeting, and the ability to sponsor specific questions. We leverage Quora's tailored email newsletters to display ads to engage audiences and generate high-quality leads. Additionally, we set up the Quora pixel on clients' websites to analyze campaign-driven web traffic, providing valuable insights into audience behavior and advertising impact.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Customized Approach</h4>
                        </div>
                        <p>By partnering with NSP, you can access a personalized Quora marketing approach that aligns with your specific goals and budget. Our agile and goal-oriented strategies are tailored to your brand's unique needs, ensuring maximum ROI and contributing to your business's growth.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Let’s discuss how NSP can straOverview</p>
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
                                <span><strong>Comprehensive Audience Reach:</strong>Our effective Quora marketing strategies enable your brand to reach and engage with your target audience at every customer journey stage. Maximizing brand awareness and visibility creates opportunities for quality lead generation and fosters business growth.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Transparent Communication:</strong>We prioritize transparent communication and maintain an open line of dialogue with our clients throughout the process. From the initial consultation to the delivery of results, we keep you informed and address any concerns promptly, ensuring a collaborative and productive partnership.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Innovative Solutions:</strong>With our experienced team of marketers and web developers, we offer innovative solutions tailored to your brand's unique requirements. We leverage our expertise to optimize your Quora campaigns, driving positive outcomes and delivering growth-oriented results.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Trusted Partnership:</strong> By partnering with NSP, you can trust us to enhance your Quora marketing initiatives and take your brand to new heights. We are committed to delivering effective results and maximizing ROI, ensuring that your investment in Quora marketing yields significant returns.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>Quora marketing is a powerful strategy for building brand awareness and generating leads. Partner with NSP, your trusted Quora marketing agency, to unlock the platform's potential and propel your brand's growth. Let's discuss how we can leverage Quora's capabilities to elevate your brand's presence.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download="Nsp" target='_blank'>Download PDF</Link>
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
