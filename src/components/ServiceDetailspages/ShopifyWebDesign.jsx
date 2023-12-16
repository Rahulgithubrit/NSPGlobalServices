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
import BannerImage from '../assets/Automotive/Shopify Web Design.png'
import endImages2 from '../assets/Shopify Web Design-20230918T172313Z-001/Shopify Web Design/20230902_142937_0002.png'
import endImages1 from '../assets/Shopify Web Design-20230918T172313Z-001/Shopify Web Design/20230902_142937_0001.png'
import SEO from '../assets/Shopify Web Design-20230918T172313Z-001/Shopify Web Design/20230902_142937_0000.png'
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
        statement: 'What is Shopify web design?',
        paragraph: 'Shopify web design is a service dedicated to creating bespoke, high-performance websites for businesses. It involves shopify website development, web designers experienced in how to design a shopify website as well as shopify website builder and developers to create an ideal platform.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can Shopify web design services benefit my business?',
        paragraph: `Shopify web design services can help your business expand online. From web development and design, to website building and branding, Shopify has all the tools you need to create a successful website that caters to your target market. `
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What features can be included in a Shopify web design?',
        paragraph: `When designing a Shopify website, make sure to include features such as an easy-to-navigate interface, product pages optimized for mobile viewing, cost information, customer reviews and social media integration. You can hire experts in Shopify web design and development or take advantage of the platform's powerful website builder.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How much does Shopify web design services cost?',
        paragraph: `Shopify website design and development services usually cost anywhere from $1,000 - $5,000 depending on complexity of the project and expertise level of the web designer/developer. For smaller projects, utilizing a Shopify Website Builder is often an affordable option.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can Shopify web design services help with mobile responsiveness?',
        paragraph: `Absolutely! Shopify web design services are specifically designed to make sure your website is mobile responsive. With the help of experienced Shopify web developers, you can create a fully-customized website that looks good and works perfectly across all devices.`
    }
]

export default function ShopifyWebDesign() {
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
                <title>Professional Shopify Web Design | Responsive & Stylish Stores</title>
                <meta name="description" content="NSP - The ultimate destination for Shopify website design. Let us transform your ideas into a high-conversion reality." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/shopify-web-design"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Shopify Web Design Services</h1>
                <p className={style.subtitle}>Revamp Your eCommerce Game with Professional Shopify Web Design Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-hosting" className={style.container2_atag}>Website Hosting</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/b2b-web-design" className={style.container2_atag}>B2B Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/wordpress-web-design" className={style.container2_atag}>WordPress Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/b2c-web-design" className={style.container2_atag}>B2C Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/ecommerce-web-design" className={style.container2_atag}>Ecommerce Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/responsive-web-design" className={style.container2_atag}>Responsive Website Dev</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>If you're looking to create a standout online store or need help attracting and retaining customers on your existing Shopify website, our Shopify web design services are here to help. Our team of experienced and highly skilled Shopify web designers, developers, and marketers will collaborate with you to build a custom-built, visually stunning, and user-friendly Shopify website that turns visitors into loyal customers.</p>
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
                            <h4>Experienced Shopify Developers</h4>
                        </div>
                        <p>Our team consists of skilled Shopify developers with expertise in creating exceptional online stores.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Custom-Built/Theme-based Store</h4>
                        </div>
                        <p>We offer custom-built websites and theme-based designs to suit your specific requirements and brand aesthetics.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Shopify Migration and App Integrations</h4>
                        </div>
                        <p>Our team can handle the process seamlessly if you want to migrate your existing website to Shopify or integrate third-party apps.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Visual Design that Aligns with Your Brand</h4>
                        </div>
                        <p>We prioritize creating visually attractive designs that align with your brand identity and effectively showcase your products.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Ready to grow your business? Partner with our Shopify website builder team for unparalleled results!</p>
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
                                <span><strong>Impressive eCommerce Sales Figures:</strong>Our Shopify web design services aim to drive impressive sales figures and maximize your online store's revenue potential.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Website Traffic and Engagement:</strong>With our visually appealing and user-friendly design, we help attract more website traffic and increase user engagement.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved User Experience:</strong>By focusing on user-friendly design and navigation, we create an enjoyable browsing experience for your customers, enhancing their satisfaction and encouraging repeat visits.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Greater Customer Trust and Loyalty:</strong>A professionally designed Shopify website instils trust and credibility in your brand, fostering customer loyalty and repeat purchases.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Brand Recognition and Credibility:</strong>A visually stunning and well-designed online store elevates your brand's recognition and establishes credibility in the competitive eCommerce landscape.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Our team of expert Shopify web designers take a collaborative approach, understanding your business, target audience, and goals to create tailored solutions. The quality of our work speaks for itself, and we are dedicated to the success of your eCommerce business.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Partner with us today and experience the difference our Shopify web design services can make to your online store. Contact us now to start building a successful and visually captivating Shopify website.</span>
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
