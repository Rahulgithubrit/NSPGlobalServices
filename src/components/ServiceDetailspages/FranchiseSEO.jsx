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
import BannerImage from '../assets/Automotive/Franchise SEO.png'
import endImages2 from '../assets/Franchise seo-20230918T171706Z-001/Franchise seo/SAVE_20230823_240645.jpg'
import endImages1 from '../assets/Franchise seo-20230918T171706Z-001/Franchise seo/SAVE_20230823_240641.jpg'
import SEO from '../assets/Franchise seo-20230918T171706Z-001/Franchise seo/SAVE_20230823_240637.jpg'
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
        statement: 'What is franchise SEO?',
        paragraph: 'Franchise SEO is an ongoing marketing process to help a franchise business increase their visibility in search engine results. It includes services such as keyword optimization, content creation, link building and more that are tailored to the needs of each franchise location.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is franchise SEO important for my business?',
        paragraph: `Franchise SEO is essential for your business as it helps you to drive more traffic and create better brand awareness across all your franchise locations. A good franchise SEO company offers specialized services tailored specifically for franchises, with packages for optimized marketing and optimization services.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does franchise SEO differ from regular SEO?',
        paragraph: `Franchise SEO strategies differ from conventional SEO since they are designed to help franchisors drive local, regional and national traffic. Franchise SEO services include targeted campaigns tailored to the needs of each individual franchise as well as packages that help all franchises succeed through a combination of digital marketing, website optimization and search engine optimization (SEO).`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: ' What are the key elements of a successful franchise SEO strategy?',
        paragraph: `An effective franchise SEO strategy should include a knowledgeable and professional SEO company, comprehensive marketing plans tailored to the specific needs of the franchise, services that support brand identity and business objectives, applicable packages for optimization, and strategic optimization programs for franchises.`
    }
]

export default function FranchiseSEO() {
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
        <title>Franchise SEO Services: Increase the Visibility of Your Brand</title>
            <meta name="description" content='Our franchise SEO services drive local success. Boost rankings, attract customers, and grow your franchise network today.' />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/franchise-seo"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>Franchise SEO Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Franchise SEO Services to Boost Your Business Growth and Sales</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/celebrity-seo" className={style.container2_atag}>Celebrity SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/luxury-seo" className={style.container2_atag}>Luxury SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/ecommerce-seo" className={style.container2_atag}> eCommerce SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/small-business-seo" className={style.container2_atag}>Small Business SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/local-seo" className={style.container2_atag}>Local SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/nationwide-seo" className={style.container2_atag}>Nationwide SEO</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>As a leading franchise SEO company, we understand franchisors' and franchisees' unique challenges and goals in today's competitive digital landscape. With a comprehensive and customized approach, we optimize various elements of your online presence, including website structure, content, and local listings, to ensure maximum visibility in search engine results. By partnering with us, you can expect a team of experienced professionals dedicated to delivering results and improving your franchise's online reputation and brand authority.</p>
                    <p>Franchise SEO offers numerous benefits, such as increased online visibility, targeted traffic, improved brand authority, and higher conversion rates. Our franchise SEO services are the ideal solution if you want to boost your franchise business's online presence and drive more sales and leads. Contact us today to discuss your franchise SEO needs and unlock the full potential of your online presence.</p>
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
                            <h4>Tailored SEO Strategies</h4>
                        </div>
                        <p>We understand the unique needs of franchisors and franchisees. Our experts develop customized SEO strategies specifically designed to address the challenges faced by franchise businesses, ensuring maximum impact and results.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Complete SEO Coverage</h4>
                        </div>
                        <p>Our services encompass all aspects of SEO, including on-page optimization, technical code auditing, off-page optimization, and local listing management.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Expertise and Knowledge</h4>
                        </div>
                        <p> Our team comprises seasoned professionals with extensive experience in franchise marketing, SEO, and digital marketing. With their expertise, we ensure that your SEO campaigns are executed flawlessly and yield outstanding results.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Proven Track Record</h4>
                        </div>
                        <p>We take pride in our track record of success. Numerous satisfied franchise clients from various industries have benefited from our services, witnessing substantial improvements in online visibility, customer engagement, and revenue growth.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Ready to Dominate the Franchise Market with Our Professional SEO Services? Request a Free Custom Strategy from Our Experts Now!</p>
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
                                <span><strong> Dominate Search Engine Rankings:</strong>Our franchise SEO services are aimed at helping you achieve top rankings in search engine results. By optimizing your website, content, and online presence, we ensure that your brand stands out among competitors and attracts more organic traffic.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Increased Organic Traffic:</strong>With improved visibility and search engine rankings, you can expect a significant increase in organic traffic to your franchise website. This targeted traffic translates into higher-quality leads and a greater opportunity for conversions.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Enhanced Online Reputation and Brand Authority:</strong>Our SEO strategies improve visibility and enhance your franchise business's online reputation and brand authority. A strong online presence establishes trust and credibility, making customers more likely to choose your franchise over competitors.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Transparent Reporting and Analytics:</strong>We believe in transparency and provide real-time reporting and analytics through our Insite dashboard. You'll have access to comprehensive data and insights, allowing you to track the progress of your SEO campaigns and measure their impact on your business.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>If you want to boost your franchise business's online visibility, generate quality leads, and establish market dominance, our franchise SEO services are the ideal solution. Please request a free custom strategy from our experts today and experience the difference our innovative SEO campaigns can make for your franchise.</span>
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
