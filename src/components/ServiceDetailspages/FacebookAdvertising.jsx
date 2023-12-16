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
import BannerImage from '../assets/Automotive/Facebook Advertising.png'
import endImages2 from '../assets/Facebook Advertising-20230918T171924Z-001/Facebook Advertising/19_20230825_203649_0002.png'
import endImages1 from '../assets/Facebook Advertising-20230918T171924Z-001/Facebook Advertising/18_20230825_203649_0001.png'
import SEO from '../assets/Facebook Advertising-20230918T171924Z-001/Facebook Advertising/17_20230825_203649_0000.png'
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
        statement: 'What is Facebook Advertising?',
        paragraph: 'Facebook Advertising is a service offered by the social media platform which enables businesses to advertise their services and products. It has various features such as boosting posts, creating targeted campaigns, and running ads. With the help of a certified Facebook Ads expert or agency, you can utilize these services to reach your desired goals with ease.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does Facebook Advertising work?',
        paragraph: `Facebook Advertising involves creating tailored ads to target a specific audience. Utilizing the right combination of Facebook services, an expert can craft campaigns that deliver real results. By leveraging powerful tools and techniques like ad targeting and retargeting, a quality Facebook Ad Agency can create effective offers and yield successful outcomes.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using Facebook Advertising for marketing?',
        paragraph: `Facebook Ad Services offer numerous benefits for marketing, such as higher visibility and reach, improved targeting, access to more engagement options, and increased efficiency in ad spend. `
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I create a Facebook ad campaign?',
        paragraph: `Creating a Facebook ad campaign can seem daunting, but you don’t have to go it alone. Consider enlisting the help of an experienced Facebook ad agency that specializes in creating strategies and campaigns for services such as yours.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What targeting options are available for Facebook ads?',
        paragraph: `With Facebook Ads, you can target potential customers based on interests, location, age, gender and more. Leverage the power of Facebook Ads to grow your business with services from experienced Facebook ad agencies!`
    }
]

export default function FacebookAdvertising() {
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
                <title>"Facebook Advertising Services: Maximize Your Social Reach</title>
                <meta name="description" content="NSP provides Facebook ad and PPC management services to assist your business in fully utilising Facebook. Our Facebook Advertising Services drive results." />
                <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services/facebook-advertising"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>FaceBook Advertising Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Maximise Your Advertising Potential with Our Full-Service Facebook Ads Agency.</p>
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
                            <Link to="/ppc-services/instagram-advertising" className={style.container2_atag}>Instagram Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/youtube-advertising" className={style.container2_atag}>YouTube Ads</Link>
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
                    <p>If you want to enhance your advertising efforts on Facebook, our full-service Facebook Ads agency is here to help. With our experienced team of professionals, we provide comprehensive Facebook ad services to maximize your advertising potential and deliver tangible results. Whether you aim to increase brand awareness, engage with your target audience, or drive eCommerce sales, we have you covered.</p>
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
                            <h4>Expertise</h4>
                        </div>
                        <p>Our team comprises Facebook ads experts with extensive knowledge of the platform and how to leverage it effectively. We utilize data-driven strategies, advanced analytics tools, and precise targeting techniques to identify the right audience for your business and optimize conversions.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Customized Approach</h4>
                        </div>
                        <p>We understand that each business has unique requirements. Therefore, we tailor our Facebook ad services to suit your needs, ensuring your campaigns are highly targeted and yield optimal results.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Creative Excellence</h4>
                        </div>
                        <p>Our in-house creative team is dedicated to producing captivating visuals that make an impact. From attention-grabbing images to scroll-stopping videos and animations, we bring your brand to life and capture your audience's attention.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4> Enhanced Targeting</h4>
                        </div>
                        <p>We ensure your ads reach the right audience by employing advanced targeting techniques. This precise targeting increases the likelihood of conversions and maximizes your return on investment (ROI).</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Discover the power of Facebook advertising with our cutting-edge agency today.</p>
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
                                <span><strong> Experience:</strong>With years of experience, our team has successfully executed Facebook ad campaigns across various industries. We bring this expertise to the table, enabling us to deliver results-driven campaigns tailored to your business objectives.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Customer Support:</strong>We value excellent customer service and support. Our dedicated account managers work closely with you throughout the process, providing personalized assistance and ensuring your campaigns run smoothly and cost-effectively.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Cost Efficiency:</strong>We believe in optimizing your ad spend for maximum impact. Our strategies aim to minimize wastage and ensure that every penny of your budget is utilized effectively to generate meaningful results.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Transparent Reporting:</strong>We maintain transparency throughout the process by providing regular insights and updates. You will be kept informed about the progress of your campaigns, enabling you to track performance and make informed decisions.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>Our Facebook ad agency offers comprehensive services to elevate your advertising efforts on the platform. With our expertise, customized approach, creative excellence, and dedicated support, we empower your business to achieve exceptional results on Facebook. Connect with our expert team today and experience the transformative impact of our Facebook ad services on your business.</span>
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
