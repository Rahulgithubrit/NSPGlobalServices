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
import BannerImage from '../assets/Automotive/Custom Logo Design.png'
import endImages2 from '../assets/Custom Logo Design-20230918T172358Z-001/Custom Logo Design/20230904_170929_0002.png'
import endImages1 from '../assets/Custom Logo Design-20230918T172358Z-001/Custom Logo Design/20230904_170929_0001.png'
import SEO from '../assets/Custom Logo Design-20230918T172358Z-001/Custom Logo Design/20230904_170929_0000.png'
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
        statement: 'What is custom logo design?',
        paragraph: 'Custom logo design is a specialized art form, tailored to convey the values of your business in an eye-catching and recognizable manner. A logo design agency such as LogoGround or purchase one online can help you create a unique, professional logo that accurately represents your company. Creative Business Logo offers a variety of services, from creating graphic and unique logos to developing branding and perfect logo designs.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is having a custom logo important for my business?',
        paragraph: `Having a custom logo is essential for your business because it’s the visual representation of your brand identity. It allows you to stand out from the competition and reach more potential customers. To create a unique logo, you can consider using Logo Ground or Logo Design Agency to purchase online or hire professionals such as Branding and Logo Design Companies or Creative Graphic Logo Designers who specialize in perfect logo designs.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does the logo design process work?',
        paragraph: `The logo design process involves designing a creative, unique, and professional logo based on your brand. You can purchase logos online from a creative company specializing in logo services and design.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can I provide input and feedback during the logo design process?',
        paragraph: `Absolutely! When choosing a logo design service provider, make sure to do your research and select one you can trust – preferably one with plenty of experience and knowledge of creative unique logo design. Companies like LogoMyWay offer professional logo design services for those looking to purchase a logo online.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What file formats will I receive for my custom logo?',
        paragraph: `When you purchase a custom logo online, you will receive a variety of file formats including JPEG, PNG, PDF and SVG. These logo files provide high-quality resolution for creative company logos and unique designs.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How long does it typically take to create a custom logo?',
        paragraph: `It typically takes 2 to 3 weeks to create a custom logo when you purchase online from a creative company. With the right creative logo design, this process can make your brand stand out and become more memorable!`
    }
]

export default function CustomLogoDesign() {
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
                <title>Professional Custom Logo Design Services | Brand Identity Experts</title>
                <meta name="description" content="our brand deserves a logo as unique as your business. Explore our custom logo design services and set yourself apart from the competition." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/custom-logo-design"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>Custom Logo Design Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Elevate Your Brand with a Custom Logo: Stand out from the crowd and make a lasting impression with a professionally designed custom logo</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/b2b-web-design" className={style.container2_atag}>B2B Website Dev </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/wordpress-web-design" className={style.container2_atag}>WordPress Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-redesign" className={style.container2_atag}>Website Redesign</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-maintenance" className={style.container2_atag}>Website Maintenance</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/b2c-web-design" className={style.container2_atag}>B2C Website Dev</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-optimization-services" className={style.container2_atag}>Website Optimization</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Welcome to NSP, where we specialize in exceptional Custom Logo Design services. A logo is the visual representation of your brand, and we understand its significance in establishing a strong and memorable identity for your business. With our team of skilled designers and a customer-centric approach, we are committed to creating unique and impactful logos that reflect your brand's values and resonate with your target audience.</p>
                    <p> Whether you're a startup looking for a logo that captures your vision or an established company needing a logo revamp, we are here to bring your brand to life.</p>
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
                            <h4>Tailored Design Approach</h4>
                        </div>
                        <p>Every business is unique and deserves a logo that reflects individuality. Our Custom Logo Design services are based on a tailored approach, where we take the time to understand your brand's personality, target audience, and industry dynamics. This enables us to create a distinctive, relevant logo that aligns with your business goals.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Experienced Designers</h4>
                        </div>
                        <p>Our team of experienced designers deeply understands design principles and trends. They have the expertise to translate your brand's essence into a visually appealing and memorable logo. With their creative prowess and attention to detail, they ensure that every logo element, from colors and typography to shapes and symbols, is meticulously crafted to leave a lasting impression.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Collaborative Process</h4>
                        </div>
                        <p>We believe in the power of collaboration and involve you throughout the logo design process. Our designers work closely with you, seeking your feedback and incorporating your ideas and suggestions. We understand that your input is valuable, and by fostering open communication, we ensure that the final logo design exceeds your expectations.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Timely Delivery</h4>
                        </div>
                        <p>We understand the importance of time in the business world. Our efficient workflow and streamlined processes enable us to deliver high-quality custom logo designs within the agreed-upon timelines. We value your time and strive to provide a seamless experience, ensuring you can confidently launch your brand.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Get Started on Your Logo Journey.</p>
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
                                <span><strong>Brand Identity:</strong>Our custom logo designs help you establish a unique brand identity that reflects your values, mission, and personality.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Professional Image:</strong>With our expertly crafted logos, your business gains a professional and credible image, instilling confidence in customers and clients.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Brand Recognition:</strong>A unique and memorable logo increases brand recognition and recall.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Competitive Advantage:</strong>By having a custom logo that stands out, you gain a competitive edge, attracting more customers and building a loyal following.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Experience the power of a custom logo design and unlock your brand's potential with our professional services. Contact us today to start creating a logo that represents the essence of your business and resonates with your audience.</span>
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
