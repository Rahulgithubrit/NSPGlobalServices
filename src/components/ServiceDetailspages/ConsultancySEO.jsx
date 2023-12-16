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
import BannerImage from '../assets/Untitled design/2.png'
import endImages2 from '../assets/Seo constancy-20230918T171805Z-001/Seo constancy/15_20230823_184857_0001.png'
import endImages1 from '../assets/Seo constancy-20230918T171805Z-001/Seo constancy/16_20230823_184857_0002.png'
import SEO from '../assets/Seo constancy-20230918T171805Z-001/Seo constancy/14_20230823_184857_0000.png'
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
        statement: 'What is SEO consultancy?',
        paragraph: 'SEO Consultancy is a type of internet marketing consulting where an expert provides services and strategies that are designed to help increase the chances of a website appearing higher in search engine results. It involves researching relevant keywords, link building, optimizing content and developing online presence as part of an overall backlink strategy.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is SEO important for businesses?',
        paragraph: `SEO (Search Engine Optimization) is an essential tool for businesses as it helps to improve their visibility and rankings in search engine results, resulting in increased website traffic. SEO consulting services provide advice on topics such as developing a keyword strategy, creating backlinks, optimizing website content and user experience, ensuring mobile friendliness of websites and engaging local audiences. `
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can SEO consultancy help my business?',
        paragraph: `SEO consulting services can help your business maximize the results from its digital marketing strategies. A professional SEO consultant can provide website audits and analysis, keyword research, backlink strategy consulting, on-page optimization, content marketing and more. Working with a top SEO expert gives you access to specialized knowledge and expertise to ensure that your business gets an edge in highly competitive digital markets.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How much does SEO consultancy cost?',
        paragraph: `SEO Consultancy costs depend on a variety of factors including the size and scope of your business, the level of competition you face, the complexity of your website, and other related services such as keyword research, backlink strategy consulting, copywriting or content marketing. Generally speaking, rates for an experienced SEO consultant/expert will range from $100 to upwards up $300 per hour but can be higher if additional specialized services such as best seo expert or top seo experts are needed.`
    }
]

export default function ConsultancySEO() {
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
        <title>SEO Consultants Services to Increase Your Organic Traffic</title>
            <meta name="description" content='Hire the top SEO consultant Services that provide the greatest SEO services to assist your business in growing. Outsource your SEO to the best SEO company - NSP.' />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/seo-consultancy"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>SEO Consultants Services</h1>
                <p className={style.subtitle}>Boost Your ROI with Award-winning SEO Consultancy Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img  src={endImages2} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-audits" className={style.container2_atag}>SEO Audits</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/ecommerce-seo" className={style.container2_atag}>eCommerce SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/shopify-seo" className={style.container2_atag}>Shopify SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/franchise-seo" className={style.container2_atag}>Franchise SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/on-page-seo" className={style.container2_atag}>On-Page SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>NSP is a leading SEO consultancy offering comprehensive services to help businesses improve their online visibility, drive high-value traffic, and achieve their marketing goals. Our award-winning SEO consultants provide tailored solutions, from ad-hoc consultancy to ongoing support, to ensure optimal results and return on investment (ROI).</p>
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
                            <h4> Customized Approach</h4>
                        </div>
                        <p>We take a personalized approach to SEO consultancy, understanding your specific needs and preferences. Whether you require a one-time SEO audit, training and coaching, or ongoing support, our experts tailor the services to match your objectives and budget.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Expertise and Multichannel Strategies</h4>
                        </div>
                        <p>With our extensive experience in SEO, internet marketing, and digital PR, we bring joined-up thinking and leverage the latest trends and tools to maximize your online visibility and brand awareness. We employ data-driven analysis and holistic frameworks to develop strategies that deliver results across multiple channels.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Comprehensive Services</h4>
                        </div>
                        <p>Our SEO consultancy services cover various vital areas to address your needs and goals. From conducting detailed SEO audits and providing customized training to offering one-off consultancy sessions and ongoing support, we have the expertise to enhance your SEO performance and ROI.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Transparent Pricing and Deliverables</h4>
                        </div>
                        <p>We believe in transparency and upfront communication. Our pricing models are affordable and flexible, designed to suit businesses of all sizes. We clearly outline our fees and deliverables, ensuring you know exactly what to expect from our SEO consultancy services.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Speak with Our Award-winning SEO Specialists Today!</p>
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
                    <img  src={endImages1} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                    <img  src={SEO} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                </div>
                <div className={style.container2div8}>
                    <h3>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Enhanced Rankings and Organic Traffic:</strong>By leveraging our expertise and tailored strategies, you can expect improved search engine rankings and increased organic traffic to your website. This leads to higher click-through rates, conversions, and revenue growth.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Improved Website Performance:</strong>Our SEO consultancy services focus on optimizing your website's technical aspects, backlink strategy, and content to enhance its performance and user experience. This results in better search engine rankings, increased engagement, and improved website authority.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Customized Training and Support:</strong>We provide comprehensive SEO training and coaching to equip you and your team with the necessary skills and knowledge. Our experts guide you through the best practices, techniques, and tools, enabling you to implement effective SEO strategies independently.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Measurable Results and ROI:</strong>Our data-driven approach ensures that the progress and success of your SEO campaigns are measurable. We provide clear-cut reports, metrics, and analysis, allowing you to track the effectiveness of our services and witness the tangible results and return on investment.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>By partnering with NSP for your SEO consultancy needs, you can access industry-leading expertise, customized strategies, and a results-oriented approach. We aim to help you improve your rankings, drive high-value traffic, and achieve long-term success in the ever-evolving digital landscape. Contact our award-winning SEO specialists today and unlock the full potential of your online presence.</span>
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
                    <p className={style.container4_para1}>Testimonialss</p>
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
