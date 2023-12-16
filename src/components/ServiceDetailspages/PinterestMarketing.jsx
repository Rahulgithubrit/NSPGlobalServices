import React, { useEffect, useState } from 'react'
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
import BannerImage from '../assets/Untitled design/2.png'
import endImages2 from '../assets/Pinterest Marketing-20230918T172050Z-001/Pinterest Marketing/20230829_190407_0002.png'
import endImages1 from '../assets/Pinterest Marketing-20230918T172050Z-001/Pinterest Marketing/20230829_190407_0001.png'
import SEO from '../assets/Pinterest Marketing-20230918T172050Z-001/Pinterest Marketing/20230829_190407_0000.png'
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
        statement: ' What is Pinterest Marketing?',
        paragraph: 'Pinterest Marketing involves various services to help businesses grow their online presence. This includes pinterest management, pinterest marketing manager, pinterest advertising, and pin design services. You may also be charged for these services depending on your needs and budget.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does Pinterest Marketing work?',
        paragraph: `Pinterest marketing is the process of creating visuals, content and ad campaigns to promote a brand's products or services. It includes using Pinterest Advertising Services to increase visibility on the platform, hiring a Pinterest Marketing Manager to strategize campaigns, utilizing Pinterest Pin Design Services for creative visuals, as well as determining how much to charge for a comprehensivePinterest Management Service.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using Pinterest for marketing?',
        paragraph: `Pinterest can be an invaluable marketing tool with the right management services. With expert pin design services and strategic account management, you can reach a vast audience and drive valuable ROI. To get started, consider hiring a pinterest marketing team to determine how much to charge for their services.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I create a Pinterest marketing strategy?',
        paragraph: `To create an effective Pinterest marketing strategy, invest in professional Pinterest management services. Consider what to charge for the service, develop an eye-catching pin design, and engage with your audience.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What types of content work best for Pinterest marketing?',
        paragraph: `Content that works best for Pinterest marketing is visual, engaging, and targeted. To charge for Pinterest management services, consider the amount of time each task will take to complete and research what other professionals in your industry charge. Additionally, offering a professional pin design service can increase revenue.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'how much to charge for pinterest management?',
        paragraph: `The cost of Pinterest Management and Pin Design Services varies greatly depending on the services required. Generally, the fee is based on a monthly retainer or a flat rate per pin design. Consider budgeting between $500-$3,000 per month to ensure quality Pinterest management and pin design services.`
    }
]

export default function PinterestMarketing() {
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
                <title>Pinterest Marketing Services | Drive Growth and Engagement</title>
                <meta name="description" content="Boost Your Brand with Expert Pinterest Marketing Services - Drive Traffic, Engagement, and Conversions Today!" />
                <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services/pinterest-marketing"/>
            </Helmet>
            <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Pinterest Marketing Services | Drive Growth and Engagement</h1>
                <p className={style.subtitle}>Dominate Your Vertical with Top-Notch Pinterest Advertising Agency</p>
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
                    <p>At our Pinterest Advertising Agency, we provide tailored solutions to help your brand excel on this influential social platform. Our dedicated team of experts crafts precise strategies, targeting, and creativity using analytics and proven methodologies. With a focus on customization, creativity, and knowledge, we are committed to driving your success on Pinterest.</p>
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
                            <h4>Comprehensive Pinterest Advertising Services</h4>
                        </div>
                        <p>We offer a full range of services, from strategy development to campaign execution, ensuring a holistic approach to maximize results.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Specialized Pinterest Pin Design</h4>
                        </div>
                        <p>Our experienced team collaborates with you to create visually appealing and on-brand pins that captivate your target audience.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Full-Funnel Growth Strategies</h4>
                        </div>
                        <p>Beyond advertising, we nurture customers, increase brand awareness, and enhance the buying experience.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Measurable ROI</h4>
                        </div>
                        <p>Our data-driven approach enables us to deliver measurable results and optimize campaigns for optimal performance.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Let’s skyrocket your ROI with Pinterest Advertising services today!</p>
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
                                <span><strong>Enhanced Brand Visibility:</strong>Our tailored Pinterest marketing services increase brand exposure and attract a wider audience.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Engaging Visuals:</strong>Our high-quality, aspirational pin designs capture attention and effectively showcase your products and services.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Value-Added Content:</strong>We create rich and meaningful content that adds value to your customers, establishing your brand as a trusted authority.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Flexible Pricing Options:</strong>Our responsive and flexible pricing options cater to businesses of all sizes and budgets, ensuring accessibility.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution</strong>At our Pinterest Advertising Agency, we prioritize transparency, ethical practices, and client satisfaction. Our track record of success across various industries is a testament to our expertise. With clear pricing, customized solutions, and a data-driven creative approach, we have helped numerous businesses thrive on Pinterest.<br />In conclusion, our Pinterest Advertising Agency offers customized strategies, visually appealing designs, and comprehensive services to drive your brand's success on Pinterest. Experience measurable results, enhanced brand visibility, and engaging content by partnering with us. Contact us today to elevate your Pinterest marketing efforts to new heights.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Don’t wait any longer to harness the power of Pinterest Advertising. Contact us today and let our top-notch Pinterest Advertising Agency elevate your brand to new heights.</span>
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
                                <div className={style.title_1} style={{ backgroundColor: 'white', height: '90px' }} onClick={() => { toggle(i) }}>
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
