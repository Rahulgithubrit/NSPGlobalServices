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
import BannerImage from '../assets/Automotive/Website Hosting.png'
import endImages2 from '../assets/Website Hosting-20230918T172424Z-001/Website Hosting/21_20230905_181352_0002.png'
import endImages1 from '../assets/Website Hosting-20230918T172424Z-001/Website Hosting/20_20230905_181352_0001.png'
import SEO from '../assets/Website Hosting-20230918T172424Z-001/Website Hosting/19_20230905_181352_0000.png'
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
        statement: 'What is website hosting?',
        paragraph: 'Website hosting is the process of making a website accessible online. Host sites provide domain and hosting services to businesses, offering shared web hosting plans, server providers, domains for hosting services, and more. Business web hosting and domain packages can be tailored to businesses specific needs.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why do I need website hosting for my website?',
        paragraph: `Website hosting is essential to keeping your website up and running. It refers to the services that a domain and hosting service provider, such as a business shared hosting server provider, offers which includes web hosting and domain services, business web hosting plans, shared website hosting service & packages, best shared web hosting plans etc., to ensure your site meets all content delivery requirements.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What types of website hosting options are available?',
        paragraph: `There are many website hosting options available such as host site, domain and hosting services, business shared hosting, server provider, domain hosting services, business web hosting, web hosting and domain ,hosting plans etc. Also available are shared website hosting service providers that offer best shared hosting plans like buy hosted plan and shared webhosting packages.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What factors should I consider when choosing a website hosting service?',
        paragraph: `When choosing a website hosting service,  wconsider the host site, server provider, type of hosting plans and services offered (business shared hosting or web domain hosting, etc.), website security features, uptime guarantee & support provided by the web hosting company.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How much does website hosting typically cost?',
        paragraph: `Website hosting typically costs vary depending on type and service provider. Business shared hosting (including domain and hosting services) can range from $5 - $15 a month, while server providers provide dedicated plans for more complex businesses starting at $100 per month. Web hosting companies offer web hosting services with different plans for website hosting and domain, shared web hosting service, website hosting plans, shared website hosting, best shared hostings plans etc.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can website hosting services handle high traffic volumes?',
        paragraph: `Website hosting services vary in terms of the traffic they can handle. Business shared hosting is one of the most common website hosting options, and is typically used for smaller-scale websites or those just starting out. For bigger businesses, web domain hosting services, business web hosting and shared web hosting are more suitable due to features such as more storage space and greater uptime reliability.`
    }
]

export default function WebsiteHosting() {
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
                <title>Web Hosting | Lightning Fast Hosting & One Click Setup</title>
                <meta name="description" content="NSP's offers best Web Hosting services to ensure that your website remains operational. With a promise of 99.9% uptime and award-winning 24/7 tech support!" />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/website-hosting"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>WebSite Hosting services</h1>
                <p className={style.subtitle}>Take your online presence to the next level with our website hosting services.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
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
                            <Link to="/design-development/website-optimization-services" className={style.container2_atag}>Website Optimization </Link>
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
                    <h2>OverView</h2>
                    <p>Welcome to NSP, your trusted, reliable, and efficient Website Hosting Services provider. We understand that a robust hosting infrastructure is essential for your online presence. With our state-of-the-art servers and customer-centric approach, we are committed to delivering high-performance hosting solutions that ensure your website is secure, accessible, and always available.</p>
                    <p>Whether you're a small business or a large enterprise, we have the expertise to meet your hosting needs and provide you with a seamless online experience.</p>
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
                            <h4>Powerful and Scalable Infrastructure</h4>
                        </div>
                        <p>Our hosting services are built on a robust infrastructure to handle high traffic volumes and ensure optimal performance. We can accommodate your growing needs with scalable resources, allowing your website to handle increased traffic and user demands.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Robust Security Measures</h4>
                        </div>
                        <p>We take website security seriously and implement industry-leading security measures to protect your data and sensitive information. From firewalls and malware scanning to secure data centers and SSL certificates, we ensure your website and visitors are safe from online threats.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>High Uptime and Reliability</h4>
                        </div>
                        <p>We understand the importance of having your website accessible to visitors at all times. Our reliable hosting solutions and redundant infrastructure guarantee high uptime, minimizing any potential downtime that could impact your online presence and business operations.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Expert Technical Support</h4>
                        </div>
                        <p>Our dedicated support team is available round the clock to assist you with any hosting-related queries or issues. Whether you need help with server configuration, troubleshooting, or advice on optimizing your website's performance, our experts are ready to provide timely and knowledgeable support.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Transform Your Website Into a High-Performing Machine.</p>
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
                                <span><strong>Enhanced Website Performance:</strong>Our hosting services ensure fast loading times and optimal website performance, providing visitors with a smooth and seamless browsing experience.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved SEO Rankings:</strong>A fast and reliable website is favored by search engines, leading to higher search rankings. Our hosting services help optimize your website's performance, contributing to improved SEO rankings and increased online visibility.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Peace of Mind:</strong>With our secure hosting infrastructure and robust backup solutions, you can have peace of mind knowing that your website and data are protected, backed up, and easily recoverable in case of any unforeseen events.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Time and Cost Savings:</strong>By outsourcing your hosting needs to us, you save valuable time and resources that can be better utilized to grow your business. We handle the technical aspects of hosting, allowing you to focus on your core activities.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Experience the benefits of our reliable and high-performance Website Hosting Services. Trust NSP to provide a secure and scalable hosting solution that ensures your website is always accessible to your audience. Contact us today to learn more about our hosting packages and how we can support your online success.</span>
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
