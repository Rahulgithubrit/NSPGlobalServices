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
import BannerImage from '../assets/Automotive/WordPress Web Design.png'
import endImages2 from '../assets/WordPress Web Design-20230918T172302Z-001/WordPress Web Design/19_20230901_194047_0002.png'
import endImages1 from '../assets/WordPress Web Design-20230918T172302Z-001/WordPress Web Design/18_20230901_194047_0001.png'
import SEO from '../assets/WordPress Web Design-20230918T172302Z-001/WordPress Web Design/17_20230901_194047_0000.png'
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
        statement: 'What is WordPress Web Design services?',
        paragraph: 'WordPress Web Design services are professional design and development solutions from experienced WordPress developers, designers and agencies. Solutions may include custom themes, website implementation, digital marketing strategies and more. With a reliable WordPress company in your corner, you can expect an optimized website that looks great on any device!'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why should I hire a professional for WordPress Web Design services?',
        paragraph: `Hiring a professional for WordPress Web Design services is essential to ensure your website is built with the highest standards in mind. With their expertise and knowledge, a WordPress Website Development Company can create the perfect design tailored to your specific needs, leverage their WordPress Website `
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How much does WordPress Web Design services typically cost?',
        paragraph: `Professional WordPress design and development services typically cost anywhere from $500-$15,000 depending on the complexity of the project. Web Design Agencies specializing in WordPress theme development usually charge hourly rates between $50-150/hour.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What factors should I consider when choosing a WordPress Web Design service provider?',
        paragraph: `When considering a WordPress Web Design service provider, it’s important to evaluate their experience with WordPress websites, their design capabilities and coding skills, the quality of the themes they use, brand alignment, and cost.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can I see examples of websites that the service provider has designed?',
        paragraph: `Yes! You can see examples of websites that the service provider has designed through our portfolio. We offer WordPress website design services, web development and themes, as well as a web design agency. `
    }
]

export default function WordpressWebDesign() {
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
                <title>WordPress Web Design Services | Create Stunning Websites</title>
                <meta name="description" content="Looking for top-notch WordPress web design services? Let us craft a website that not only looks great but also performs flawlessly." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/wordpress-web-design"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Wordpress Web Design Services</h1>
                <p className={style.subtitle}>Professional WordPress Web Design Services for Your Business.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/landing-pages-design" className={style.container2_atag}>Landing Pages Design</Link>
                        </li>
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
                            <Link to="/design-development/b2b-web-design" className={style.container2_atag}>B2B Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/ecommerce-web-design" className={style.container2_atag}>Ecommerce Website Dev</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>At NSP, our WordPress web design services specialize in creating custom-designed WordPress websites that help clients stand out from the competition. Our skilled WordPress website developers and designers work with you to create a website that aligns with your business goals and objectives. We offer many features, including responsive design, user-friendly navigation, and SEO optimization, ensuring your website stays current, relevant, and practical.</p>
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
                            <h4>Customized WordPress web design</h4>
                        </div>
                        <p>We tailor each WordPress website design to meet your specific requirements, ensuring a unique and personalized online presence.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Responsive design for all devices</h4>
                        </div>
                        <p>Our websites are built to provide a seamless user experience across desktops, tablets, and mobile devices, enhancing accessibility and engagement.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>User-friendly navigation</h4>
                        </div>
                        <p>We focus on creating intuitive navigation structures that allow visitors to explore and find the information they need, improving usability.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4> E-commerce capabilities and integration</h4>
                        </div>
                        <p>We can incorporate e-commerce functionality into your WordPress website, enabling online selling and seamless integration with third-party tools for a streamlined sales process.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Get a custom WordPress website design that fits your brand and attracts customers.</p>
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
                                <span><strong>Increased online presence for your business:</strong>Our WordPress web design services help boost your online visibility, attracting more visitors and potential customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved user experience for your customers:</strong>By prioritizing usability and responsive design, we ensure a positive and engaging experience for your website visitors.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Streamlined sales processes:</strong>With e-commerce capabilities and integrations, we enable smooth transactions and a seamless buying journey for your customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced brand image and reputation:</strong>Our custom-designed WordPress websites reflect your brand's identity, helping to establish a strong and professional online presence. This, in turn, boosts brand image and credibility.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Our WordPress web design services have been recognized and praised by industry experts and peers. As a trusted WordPress agency, we prioritize our client's needs and deliver reliable, practical solutions that drive results. We value open communication and collaboration, maintaining transparency throughout each stage of the design and development process. Our clients trust us to deliver high-quality WordPress websites that exceed their expectations and provide tangible business benefits.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download='Nsp' target='_blank'>Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} download='NpsMainPdf' target='_blank'>Download Word File</Link>
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
