import React, { useEffect,useState } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
// import service from '../assets/service-details-2.png'
// import blog from '../assets/blog-1-1.png'
import icon7 from '../assets/icon-7.png'
import { MdCall } from 'react-icons/md'
import arrow from '../assets/right-arrow.png'
import AOS from 'aos'
import "aos/dist/aos.css";
import style from './servicedetails.module.css'
import Carousal from '../Carousal'
import BannerImage from '../assets/Automotive/Backlink Audit.png'
import endImages2 from '../assets/Backlink Audit-20230918T171821Z-001/Backlink Audit/18_20230824_180026_0002.png'
import endImages1 from '../assets/Backlink Audit-20230918T171821Z-001/Backlink Audit/17_20230824_180026_0001.png'
import SEO from '../assets/Backlink Audit-20230918T171821Z-001/Backlink Audit/16_20230824_180026_0000.png'
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
        statement: 'What is a backlink audit?',
        paragraph: 'A backlink audit is an important component of any SEO (Search Engine Optimization) strategy. It involves analyzing your backlink profile and website to identify any toxic or spammy links, as well as optimizing the quality of existing inbound links and identifying gaps in your link building efforts. This can be done manually using a link building audit tool or through automated services that scan and analyze the entire backlink profile.'
    },
    { 
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is a backlink audit important for SEO?',
        paragraph: `A backlink audit is an essential part of any SEO, as it helps you understand the strength and nature of your website’s backlink profile. It enables you to detect and eliminate potentially toxic links, build more natural backlinks, increase your domain authority score, monitor link building campaigns progress, and boosts overall SEO performance.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I conduct a backlink audit?',
        paragraph: `An SEO link audit involves the comprehensive analysis of your backlink profile to identify potential toxic and low-quality links. Additionally, it includes a website and backlink audit which aims to review existing link placements and uncover new opportunities for website promotion.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key metrics to consider when evaluating backlinks?',
        paragraph: `A backlink audit is an important part of a successful SEO strategy, and it involves assessing the quality of a website's backlinks. An audit should include analyzing the link profile for potentially toxic links, tracking new and lost backlinks over time, and organizing them into different relevant categories.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I identify and remove toxic or spammy backlinks?',
        paragraph: `When it comes to identifying and removing toxic or spammy backlinks, a thorough SEO audit of your website's backlink profile is essential. A seo link audit and a backlink profile audit can help you identify any potentially harmful links as well as inaccurate information in your backlink portfolio.`
    }
]

export default function Backlink() {
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
                <title>Backlink Audit Experts: Your Path to Quality Links</title>
                <meta name="description" content="Our SEO professionals at NSP Online offer Backlink Audit and Toxic Link Removal Services with proven outcomes. 100% Money-Back Guarantee." />
                <link rel="canonical" href="https://wwww.nspglobalservices.com/seo-services/backlink-audit"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>Backlink Audit Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Maximize Your SEO Potential with Our Comprehensive Backlink Audit Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/on-page-seo" className={style.container2_atag}>On-Page SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-keywords-research" className={style.container2_atag}>SEO Keywords Research</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/youtube-seo" className={style.container2_atag}>YouTube SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/ecommerce-seo" className={style.container2_atag}>eCommerce SEO </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/small-business-seo" className={style.container2_atag}>Small Business SEO</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h1>Overview</h1>
                    <p>If you want to enhance your website's search engine ranking and address any issues with your backlink profile, our backlink audit services are here to help. Our SEO experts will thoroughly analyze your backlink profile, identify missing backlinks, remove penalty-prone ones, and update your campaign to ensure SEO success.</p>
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
                    <h1 className={style.container2div5_hone}>Key Factors</h1>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Detailed Analysis</h4>
                        </div>
                        <p>Our backlink audit provides invaluable insights and analysis for every SEO campaign. We review each link's quality, relevance, and authority, distinguishing between high-quality and poor-quality links.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Customized Strategy</h4>
                        </div>
                        <p> Based on factors such as technical audit, backlink data, domain type, link type, anchor text, and disavowing sites, we develop a tailored backlink analysis strategy unique to your business. We compare your data with your competitors to give you a competitive edge.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>In-depth Profiling</h4>
                        </div>
                        <p>Our backlink audit includes an in-depth analysis of your backlink profile, enabling you to understand your website's link profile better. We identify the right backlinks to enhance your website's credibility and visibility while recommending the removal or disavowal of low-quality links.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Comprehensive Packages</h4>
                        </div>
                        <p>Our backlink audit service packages offer a range of essential features, including link detox & disavow, GSC, AHREF's & SEM Rush data, Domain Authority Score, Page Authority Score, Source URL, Source Page Title, Source Domain, Target URL, Anchor Type, Link Type, Follow/No Follow, Toxic Score, Moz Spam Score, Link detox & Disavow document, and TLD Type. These packages are built upon the foundation of your analysis to deliver optimal results.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Book a call with our expert SEO team and take control of your backlink profile today!</p>
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
                                <span><strong>Enhanced SEO Knowledge:</strong>Our backlink audit services provide in-depth knowledge of backlink SEO, empowering you to make informed decisions and take control of your website's rankings.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Dedicated Account Manager:</strong>You'll have a dedicated account manager who will guide you through the entire backlink audit process, ensuring your needs are met, and questions are answered.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Improved Rankings and Traffic:</strong>By identifying and removing toxic links, our audit helps improve your search engine rankings, boost your domain authority, and increase organic traffic to your website.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Expertise and Experience:</strong>Our team consists of experienced and certified SEO experts providing backlink audit services for years. You can trust their expertise to deliver comprehensive and effective results.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>In conclusion, conducting a thorough backlink audit is crucial for improving your website's search engine rankings. Identifying and removing toxic links can enhance your domain authority, increase organic traffic, and improve your website performance. Don't hesitate to contact our expert SEO team today to discuss your options and improve your backlink profile for higher rankings.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download="Nsp" target='_blank' >Download PDF</Link>
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
                    <h1 className={style.container4_hone}>What People Say</h1>
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
                    <h1 className={style.accordion_h1}>Frequently Asked Question</h1>
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
