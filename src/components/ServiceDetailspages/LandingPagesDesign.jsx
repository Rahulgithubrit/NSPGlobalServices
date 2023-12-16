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
import BannerImage from '../assets/Automotive/Landing Pages Design.png'
import endImages2 from '../assets/Landing Pages Design-20230918T172342Z-001/Landing Pages Design/21_20230904_170747_0002.png'
import endImages1 from '../assets/Landing Pages Design-20230918T172342Z-001/Landing Pages Design/20_20230904_170747_0001.png'
import SEO from '../assets/Landing Pages Design-20230918T172342Z-001/Landing Pages Design/19_20230904_170747_0000.png'
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
        statement: 'What is a landing page?',
        paragraph: 'A landing page is a standalone web page designed specifically to encourage a visitor to take action, such as signing up for a newsletter or making an online purchase. Landing page design services help improve the performance of these pages by utilizing expert techniques such as website landing page design, landing page design, and services page design. '
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why are landing pages important for my marketing campaigns?',
        paragraph: `Landing pages are essential for successful marketing campaigns because they help capture visitor attention and improve conversions. With the help of a professional landing page design service, you can create an effective page that is tailored to your specific needs and includes components like unique content, appealing visuals, and clear calls-to-action.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What elements should be included in a well-designed landing page?',
        paragraph: `A great landing page should include a headline, clear description of the service being offered, attractive design, CTA (call-to-action) button, and contact information. Web designers can help create an effective and user-friendly landing page that captures leads!`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can a professionally designed landing page improve conversion rates?',
        paragraph: `A professionally designed landing page can dramatically improve conversion rates by helping to capture visitor data, providing an intuitive user experience, and creating an aesthetically pleasing visual design. With the right services and web design landing page, you can make a real impact on your bottom line.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can I customize the design of my landing page to match my brand?',
        paragraph: `Absolutely! With the right landing page service provider, you can customize your landing page design to match your brand and create a powerful visual impact.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Should a landing page have navigation menus?',
        paragraph: `Yes, a landing page should have navigation menus. Navigation menus are useful in helping visitors find information quickly and efficiently, increasing conversion rates and user engagement. They also help search engines better catalog the site's content and provide better ranking results.`
    }
]

export default function LandingPagesDesign() {
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
                <title>Landing Page Design Services to Increase Conversions</title>
                <meta name="description" content="Attract, engage, and succeed with our professionally crafted landing pages. Our designs teams provide intelligent UX and high-fidelity UI designs." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/landing-pages-design"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Landing Page Design Services</h1>
                <p className={style.subtitle}>Don't let your ad spend go to waste - maximize your ROI with our landing page services.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/shopify-web-design" className={style.container2_atag}>Shopify Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-hosting" className={style.container2_atag}>Website Hosting</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/custom-logo-design" className={style.container2_atag}>Custom Logo Design</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/b2b-web-design" className={style.container2_atag}>B2B Website Dev </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/wordpress-web-design" className={style.container2_atag}>WordPress Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-redesign" className={style.container2_atag}>Website Redesign </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Do you need help attracting and converting leads with your current landing pages? Our landing page design services are here to help! We specialize in creating customized landing pages that align with your business goals and target audience. .Over five years of experience serving 300+ clients, including businesses, agencies, and entrepreneurs.</p>
                    <p>We implement the best design, copywriting, and optimization practices to ensure outstanding performance.You will get complete ownership of design assets, code files, and login credentials, providing peace of mind and flexibility.With a holistic optimization approach, we ensure maximum return on investment (ROI) and minimize your cost per lead.We are committed to creating stunning, conversion-focused landing pages that drive results. Let us help you optimize your landing pages for success!</p>
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
                            <h4>Customized Design</h4>
                        </div>
                        <p>Our expert designers create unique landing pages that stand out and capture your brand's style, using essential brand elements like colours, logos, and typography.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>A/B Testing and Form Integrations</h4>
                        </div>
                        <p>We implement A/B testing to optimize your landing page's performance and seamlessly integrate forms with your existing marketing tools or customer relationship management (CRM) system for easy lead tracking and management.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Speed and Conversion Optimization</h4>
                        </div>
                        <p>We optimize your landing page for fast loading times, improving user experience and meeting Google's ranking criteria. We also consider user journeys, avatars, and objections to create persuasive triggers that boost your conversion rate.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Mobile-Friendly Design</h4>
                        </div>
                        <p>Our landing pages are designed to look great on all devices and platforms, ensuring a seamless user experience for mobile users.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Say goodbye to mediocre landing pages and hello to exceptional results with our web design experts.</p>
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
                                <span><strong>Increased Conversions:</strong>Our customized landing pages are designed to maximize conversions, helping you generate more leads and improve your overall conversion rate.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Cost Efficiency:</strong>By optimizing your landing pages for better performance, we help you minimize your cost per lead, maximizing your ROI from paid advertising campaigns.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Brand Reputation:</strong>Our high-quality, custom landing pages enhance your brand's reputation, showcasing professionalism and engaging visuals that leave a lasting impression on visitors.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Ownership and Access:</strong>You'll have full ownership of all design assets, code files, and login credentials, giving you complete control and the ability to make future updates as needed.</span>
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
