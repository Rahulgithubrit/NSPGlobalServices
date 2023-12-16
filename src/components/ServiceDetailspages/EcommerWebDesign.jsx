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
import BannerImage from '../assets/Automotive/Ecommerce Web Design.png'
import endImages2 from '../assets/Ecommerce Web Design-20230918T172230Z-001/Ecommerce Web Design/20230901_191424_0002.png'
import endImages1 from '../assets/Ecommerce Web Design-20230918T172230Z-001/Ecommerce Web Design/20230901_191424_0001.png'
import SEO from '../assets/Ecommerce Web Design-20230918T172230Z-001/Ecommerce Web Design/20230901_191424_0000.png'
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
        statement: 'What is ecommerce web design?',
        paragraph: 'Ecommerce website design is the practice of creating an attractive and professional online store. It involves designing the layout, graphics, inventory management system, shopping cart options, payment processes, and customer service options needed to provide a successful digital commerce experience for customers.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How is ecommerce web design different from other types of web design?',
        paragraph: `Ecommerce web design is a specialised field of web design, focusing on creating professional ecommerce websites for new and existing businesses. It involves elements such as the best online store website design, best ecommerce homepage layouts, and the overall best online store design services.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements of a successful ecommerce website?',
        paragraph: `Having a professional ecommerce website design is essential for success. It should include the best online store website design, homepage layouts, and services. When creating a new ecommerce website, you should focus on having the best online store design, user-friendly navigation and clear product presentation to make sure customers keep coming back!`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can ecommerce web design enhance the user shopping experience?',
        paragraph: `Ecommerce website design can enhance the user shopping experience by delivering a seamless, intuitive design that creates an enjoyable and productive browsing experience. From creating attractive ecommerce homepages to providing online services, the best designs boost customer satisfaction and loyalty.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What features and functionality should be included in an ecommerce website?',
        paragraph: `An ecommerce website should have a professional design, intuitive user experience, secure payments and checkout process, easy product search/filtering options, quality product images & descriptions and customer support. Additionally, features such as loyalty programs, personalized recommendations and reviews are essential for creating an engaging shopping experience.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How long does it take for Local SEO to produce results?',
        paragraph: `The amount of time it takes for local SEO to produce results depends on your goals, the size of your business, and the competitiveness of your industry. Generally speaking, results from a well-conceived and executed strategy can be seen in three to six months when partnering with an experienced grow local seo agency or local seo company which provides comprehensive services such as seo companies near me, seo agency near me and/or a seo expert near me. In addition, employing best practices for local SEO for small businesses is especially important given its competitive landscape.`
    }
]

export default function EcommerWebDesign() {
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
                <title>Ecommerce Web Design Services | Create Your Online Store</title>
                <meta name="description" content="Our eCommerce web design services empower businesses to create stunning online stores that convert visitors into customers. Explore our solutions today." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/ecommerce-web-design"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Ecommerce Web Design Services</h1>
                <p className={style.subtitle} >Our premium ecommerce web design services can help take your online business to the next level.</p>
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
                            <Link to="/design-development/b2b-web-design" className={style.container2_atag}>B2B Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/wordpress-web-design" className={style.container2_atag}>WordPress Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-redesign" className={style.container2_atag}> Website Redesign</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Ecommerce has become an integral part of the retail landscape, and a professional e-commerce website design is crucial for the success of any online business. Our e-commerce web design agency specializes in creating visually stunning and conversion-driven websites that boost sales, attract new customers, and build brand loyalty.</p>
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
                            <h4>Customized Solutions</h4>
                        </div>
                        <p>Our expert e-commerce web designers deliver tailored solutions to meet your specific business needs, whether you're launching a new website or revamping an existing one.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Responsive Design</h4>
                        </div>
                        <p>We ensure your website looks great on any device by adopting a mobile- and web-first approach, providing a seamless user experience.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Customer-centric UI/UX Design</h4>
                        </div>
                        <p>Our designs prioritize smooth navigation and a user-friendly checkout process, enhancing customer satisfaction and increasing conversions.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>SEO-compliant Elements</h4>
                        </div>
                        <p>We incorporate design elements optimized for search engines, increasing your website's visibility and organic traffic.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Need a quick ecommerce website turnaround? We've got you covered.</p>
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
                                <span><strong>Maximize Online Potential:</strong>Our ecommerce web design services help you unlock your online potential, attracting new customers and building brand loyalty through visually stunning designs.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Search Engine Optimization:</strong>By optimizing your ecommerce website, we improve its visibility in search engine rankings, driving organic traffic and increasing your online presence.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Streamlined Development Process:</strong>We follow a streamlined development process, ensuring quick turnaround times without compromising quality.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong> Enhanced Sales and Conversions:</strong>Through landing page optimization, we create a seamless checkout process that boosts sales and increases customer satisfaction.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Our experienced team of ecommerce web designers has a proven track record of maximizing sales on online platforms. We leverage the latest technology and design conventions to deliver the best ecommerce home page layouts. Additionally, a dedicated project manager ensures timely website launches. With our 100% satisfaction guarantee, we work tirelessly until you are delighted with your e-commerce website design.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>In conclusion, a professional e-commerce website design is essential for succeeding in the competitive ecommerce landscape. Our ecommerce web design agency offers fully responsive website design solutions with customized designs and superior UI/UX elements, ensuring your online success.</span>
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
