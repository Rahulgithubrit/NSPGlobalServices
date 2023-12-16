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
import BannerImage from '../assets/Automotive/Website Optimization Services (1).png'
import endImages2 from '../assets/Website Optimization Services folder-20230918T172436Z-001/Website Optimization Services folder/21_20230906_194704_0002.png'
import endImages1 from '../assets/Website Optimization Services folder-20230918T172436Z-001/Website Optimization Services folder/20_20230906_194704_0001.png'
import SEO from '../assets/Website Optimization Services folder-20230918T172436Z-001/Website Optimization Services folder/19_20230906_194704_0000.png'
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
        statement: 'What is website optimization?',
        paragraph: `Website optimization is the process of using tools, techniques and strategies to make website structure, speed, navigation menu and content more efficient and user-friendly. This also involves improving visibility of websites on search engine results pages with SEO techniques as well as maintaining a dynamic 'whats new' section for regular updates. Professional help from experienced web optimisation agency or website seo company can further improve results.`
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is website optimization important for my website?',
        paragraph: `Website optimization is essential for success and involves the use of various tools like website speed optimization, website structure and navigation menu optimization, a whats new section on website, creative media design, improved navigability and SEO by professional web optimisation agencies.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What aspects of my website can be optimized?',
        paragraph: `Optimizing your website includes utilizing website optimization tools, speeding up loading time, optimizing the structure and navigation menu, improving site navigation and enlisting a website SEO company or web optimisation agency.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: `How can website optimization services improve my website's performance?`,
        paragraph: `Website optimization services can help you improve your website's performance by utilizing website optimization tools, optimizing website speed and structure, improving navigation menu and SEO. An experienced web optimisation agency can maximize your potential.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can website optimization services help with search engine optimization (SEO)?',
        paragraph: `Absolutely! Website optimization services - from website speed optimization to improving navigation, structure and navigation menu optimization - are essential for a successful SEO campaign. A professional web optimisation agency can ensure that your website is optimized for improved SEO results.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How long does it take to see results from website optimization efforts?',
        paragraph: `It depends on the complexity of your website and the optimization tools you use. On average, you can see results from website speed, structure and navigation menu optimization in a few weeks to several months, depending on which web optimisation agency and SEO company services you choose.`
    },
    {
        id: 6,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can website optimization services help with mobile responsiveness?',
        paragraph: `Yes, website optimization services can certainly help with mobile responsiveness. Using an experienced web optimisation agency and incorporating website optimization tools, speed optimization, and structure & navigation menu optimization all contribute to improved website navigation for a better user experience on mobile.`
    }
]

export default function WebsiteoptimizationService() {
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
                <title>Expert Website Optimization Services | Boost Your Online Performance</title>
                <meta name="description" content="Elevate your online presence with our expert website optimization service. We enhance user experience and SEO, ensuring your website's success." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/website-optimization-services"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Expert Website Optimization Services</h1>
                <p className={style.subtitle}>Improve Your Website's Performance with Our Website Optimization Services.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/b2b-web-design" className={style.container2_atag}>B2B Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/wordpress-web-design" className={style.container2_atag}>WordPress Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-redesign" className={style.container2_atag}>Website Redesign </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-maintenance" className={style.container2_atag}>Website Maintenance</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/b2c-web-design" className={style.container2_atag}>B2C Website Dev </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/shopify-web-design" className={style.container2_atag}>Shopify Website Dev</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>OverView</h2>
                    <p>In today's competitive online landscape, having a user-friendly and high-performing website is paramount to the success of your business. Website optimization services can help you achieve a website that performs well and provides a great user experience. With optimization, you can improve website speed, navigation, and overall performance to increase user engagement and boost your search engine rankings.</p>
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
                            <h4>Website Optimization Tools</h4>
                        </div>
                        <p>Utilize popular website optimization tools like Google PageSpeed Insights, GTMetrix, and Pingdom to analyze your website's speed, identify performance bottlenecks, and receive recommendations for improvement.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Website Optimization Agency</h4>
                        </div>
                        <p>Partner with a website optimization agency to receive expert assistance in auditing, analyzing, and optimizing your website. Their experienced team can create a custom optimization strategy and implement changes that enhance your website's performance.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Website Speed Optimization</h4>
                        </div>
                        <p> Improve your website's loading speed to prevent high bounce rates and increase user engagement. Website speed optimization ensures visitors can access your content quickly, leading to higher conversion rates and improved search engine rankings.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Website Structure and Navigation Menu Optimization</h4>
                        </div>
                        <p>Enhance your website's structure and navigation menu to provide users with a seamless browsing experience. Clear labelling, hierarchical pages, and user-friendly navigation help visitors find the information they need efficiently, benefiting user experience and search engine optimization.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Reach Your Business Goals with a Fully Optimized Website</p>
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
                                <span><strong>Enhanced User Experience:</strong>By optimizing your website's performance, you provide visitors with a seamless and efficient browsing experience, reducing bounce rates and increasing user engagement.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Conversions and Revenue:</strong>Improved website performance, including faster loading times and intuitive navigation, leads to higher conversion rates and increased revenue for your business.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Competitive Advantage:</strong>With a well-optimized website, you gain a competitive edge by providing a superior user experience and ranking higher in search engine results, making your brand more visible to potential customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Customized Optimization Plans:</strong>Website optimization services offer tailored strategies to address your business needs and goals, ensuring that the optimization efforts align with your objectives and deliver optimal results.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Our website optimization services have garnered praise from satisfied clients who have witnessed significant improvements in search engine rankings and website traffic. Their Testimonialss and social proof serve as trust signals, demonstrating the effectiveness and credibility of our optimization techniques. Partnering with our experienced team ensures you receive a comprehensive website audit, a customized optimization plan, and proven strategies to enhance your website's performance and user experience.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} target='_blank' download='Nsp'>Download PDF</Link>
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
