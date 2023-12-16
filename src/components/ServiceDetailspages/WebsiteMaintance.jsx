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
import BannerImage from '../assets/Automotive/Website Maintenance.png'
import endImages2 from '../assets/Website Maintenance-20230918T172628Z-001/Website Maintenance/21_20230905_180953_0002.png'
import endImages1 from '../assets/Website Maintenance-20230918T172628Z-001/Website Maintenance/20_20230905_180953_0001.png'
import SEO from '../assets/Website Maintenance-20230918T172628Z-001/Website Maintenance/19_20230905_180953_0000.png'
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
        statement: 'What is website maintenance?',
        paragraph: `Website maintenance is the process of keeping a website up-to-date and running properly. It includes acti
        What tasks arevities such as managing content, reviewing analytics, monitoring performance, and implementing security updates. Website maintenance services can include web maintenance, ecommerce maintenance packages, website under maintenance tools, and website maintenance packages.`
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is website maintenance important for my website?',
        paragraph: `Website maintenance is an essential part of running a successful website. Regularly updating content, fixing bugs, and creating backups are just some of the tasks involved with website maintenance services. Web upkeep helps to ensure your site runs smoothly, optimize performance and keeps users engaged on the site.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is typically included in website maintenance services?',
        paragraph: `Website maintenance services generally include website updates, security patches and scans, bug fixes, backups and restores, ecommerce support and performance enhancements. Maintenance packages can also provide domain name registration/renewal and ongoing hosting services.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How often should I perform website maintenance?',
        paragraph: `Website maintenance should be done regularly to keep websites functioning optimally. To ensure this, you can enlist website maintenance services to handle all aspects of web maintenance such as site updates, security patching, and ecommerce maintenance packages. For the best results, consider opting for a comprehensive website maintenance package.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: `Can website maintenance services help improve my website's security?`,
        paragraph: `Absolutely! Website maintenance services can significantly improve the security of your website. Such services include web maintenance, site maintenance, eCommerce maintenance packages and more. These services can help keep your website safe from common online threats such as malware and hacking.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can website maintenance services help with website performance optimization?',
        paragraph: `Absolutely! Website maintenance services can have a considerable impact on website performance optimization. Through comprehensive web maintenance, site maintenance, ecommerce maintenance packages and more, businesses are able to maintain their websites effectively for optimal performance`
    },
    {
        id: 6,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How much does website maintenance services usually cost?',
        paragraph: `The cost of website maintenance services can vary significantly depending on the complexity of the project and the level of support needed. For basic packages, web maintenance can start as low as $50/month while more complex ecommerce maintenance packages can cost anywhere from $500 to $5,000 per month.`
    }
]

export default function WebsiteMaintance() {
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
                <title>Website Maintenance Services by Experts</title>
                <meta name="description" content="We offer full website maintenance services, including minor content changes, bug fixes, troubleshooting, essential security updates, SSL installation, and more." />
                <link rel="canonical" href="https://www.nspglobalservices.com/design-development/website-maintenance"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Website Maintenance Services</h1>
                <p className={style.subtitle}>Boost Your Website Performance with Website Maintenance Services</p>
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
                            <Link to="/design-development/wordpress-web-design" className={style.container2_atag}>WordPress Website Dev </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/design-development/website-redesign" className={style.container2_atag}>Website Redesign </Link>
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
                    <h2>OverView:</h2>
                    <p>Welcome to NSP; we specialize in providing comprehensive Website Maintenance Services. We understand that a well-maintained website is crucial for the success of your online presence. With our team of skilled professionals and a client-focused approach, we are committed to keeping your website running smoothly, secure, and up-to-date.</p>
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
                            <h4>Proactive Website Monitoring</h4>
                        </div>
                        <p>We proactively monitor your website to identify and address any issues before they impact your site's performance or user experience. By regularly checking for errors, broken links, and other technical issues, we can keep your website functioning optimally and minimize any downtime.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Regular Content Updates</h4>
                        </div>
                        <p>Our team can assist you in making regular updates, whether adding new products or services, updating pricing information, or refreshing your blog. Ensuring your content is up-to-date, we help you engage your audience and maintain a vibrant online presence.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Security and Backup</h4>
                        </div>
                        <p>Website security is a top priority in today's digital landscape. We implement robust security measures to protect your website from cyber threats and unauthorized access. Additionally, we regularly back up your website data to ensure your valuable information is safe and can be quickly restored.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Software and Plugin Updates</h4>
                        </div>
                        <p>To ensure optimal performance and security, we keep your website's software, plugins, and themes up-to-date. By staying current with the latest versions and patches, we mitigate the risk of vulnerabilities and compatibility issues, ensuring your website runs smoothly and securely.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Contact us today to discuss your website maintenance needs.</p>
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
                                <span><strong>Peace of Mind:</strong>With our Website Maintenance Services, you can have peace of mind knowing that your website is being regularly monitored, updated, and secured, allowing you to focus on your core business activities.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced User Experience</strong>By regularly maintaining and updating your website, we create a seamless and user-friendly experience for your visitors. This includes ensuring fast loading times, fixing broken links, and optimizing your site's overall performance</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved SEO Performance:</strong>A well-maintained website positively impacts your search engine rankings. Our services help optimize your website for search engines, ensuring it meets the latest SEO guidelines and increasing your chances of being discovered by your target audience.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Cost and Time Savings:</strong>Outsourcing your website maintenance to us saves you valuable time and resources. Instead of spending hours troubleshooting technical issues or learning complex website management tasks, you can rely on our expertise, allowing you to focus on growing your business and serving your customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Experience the benefits of professional website maintenance, and let us take care of the technical aspects so that you can maximize the potential of your online presence. Contact us today to learn more about our Website Maintenance Services and how we can support your business.</span>
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
