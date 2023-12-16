import React, { useEffect, useState } from 'react'
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
import endImages2 from '../assets/SEO services/photo_2023-06-23_01-33-12.jpg'
import endImages1 from '../assets/SEO services/DigitalMarketing.jpg'
import SEO from '../assets/SEO services/SEO Services.jpg'
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
        statement: 'What is Nationwide SEO?',
        paragraph: 'Nationwide SEO is a strategy that helps businesses reach the highest possible ranking in both local and national search engine result pages (SERPs). It involves optimizing content, researching competitor analysis, creating effective outreach campaigns and a tailored SEO strategy for each business. This includes evaluating its existing web traffic, competitor rankings, services packages offered by an SEO agency/expert, pricing models and targeted marketing campaigns to maximize organic search visibility. With the help of Nationwide SEO services, businesses can achieve their desired national online presence and web traffic in an effective manner.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is Nationwide SEO important for businesses with a national or global audience?',
        paragraph: `Nationwide SEO is a key component for businesses seeking to reach a global or national audience, as it helps build visibility in all geographic regions. Through National Seo Services, companies can create tailored campaigns and web traffic, competitor analysis, rankings, marketing strategies and packages that are optimized for the national market. The right partnership with a national seo agency or expert will help give businesses the competitive edge they need to stand out online.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements of successful Nationwide SEO?',
        paragraph: `Having a comprehensive National SEO Campaign is the key to successful Nationwide SEO. To truly maximize success, your strategy should include relevant keyword research, competitor analysis and national rankings tracking. Furthermore, investing in national SEO packages with an expert and/or agency will help you develop effective strategies for optimizing content and marketing your website nationally. Finally, be sure to factor in cost when selecting the best National SEO company or agency for your needs.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my website for Nationwide SEO?',
        paragraph: `To optimize your website for Nationwide SEO, the first step is to conduct a comprehensive National Seo Competitor Analysis. This will help you understand where you rank in comparison to other websites and what strategies are effective at driving national web traffic. Next, devise a custom National Seo strategy specific to your website that includes best practices such as keyword research, content creation, link building and local citation submissions. Lastly, partner with an experienced national seo company or agency who can provide packages for both on-page and off-page optimization services plus any additional marketing needs you may have at a competitive pricing point.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some common Nationwide SEO mistakes to avoid?',
        paragraph: `When undertaking a Nationwide SEO campaign, one of the most common mistakes is to rely solely on keyword placement while neglecting content quality. Additionally, it's important to have a comprehensive understanding of the latest national SEO trends and hiring an experienced national SEO expert can help you create better content, manage national SEO pricing effectively and develop effective national SEO marketing strategies. Furthermore, having a clear goal in mind when outsourcing your national search engine optimization services will provide greater clarity and precision with regards to outcome measurement.`
    }
]

export default function NationwideSEO() {
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
        <title>Best Nationwide SEO Agency | Rank Higher Nationwide</title>
            <meta name="description" content='Drive nationwide traffic and sales with our expert SEO services. Trust our experienced team to help you dominate search results across the nation.' />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/nationwide-seo"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Nationwide SEO Services</h1>
                <p className={style.subtitle}>Boost Your National Rankings and Drive More Conversions</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Digital Marketing</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Search Engine Optimization</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Social Media Marketing</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Web Design & Development</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Business Strategy & Planning</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="" className={style.container2_atag}>Critical Analysis</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Ready to expand your business nationwide and dominate your industry? Contact us now to schedule a consultation!</h2>
                    <p>Are you struggling to reach customers across the country? Are your competitors winning in the race to rank at the top of national search results? It's time to take your marketing strategy to the next level with nationwide SEO services.</p>
                    <p>At our national SEO agency, we specialize in creating customized campaigns tailored to your business's specific needs and goals. Whether you're looking to increase national web traffic, boost your national rankings, or outperform your competitors, we have the expertise and tools to make it happen.</p>
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
                            <h4>Enterprise Competitor Analysis</h4>
                        </div>
                        <p>We perform an in-depth analysis of your competitors' SEO strategies to identify new national marketing opportunities and stay ahead of the game.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Demographic Analysis</h4>
                        </div>
                        <p>We help you reach your target audience across the country by identifying regional similarities and targeting similar consumers in different regions.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Hyper-Local SEO Marketing</h4>
                        </div>
                        <p>Using geo-fencing technology, we target ads toward specific locations you want to target in your campaign.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Conversion Rate Optimization</h4>
                        </div>
                        <p>Our team uses a powerful combination of short and long-tailed region-specific keywords to enhance your website's conversion rate.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Pabore et dolor mod tempor inci didunt ut labore et dolore magna aliqua nim veniam strud </p>
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
                                <span>Generate more local traffic in the country you're targeting.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Rank higher on Google SERPs in every area where your products and services are available.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Build a loyal audience base and secure your bottom line</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Gain unique insights into region-specific keywords and tailor your services accordingly.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Experience increased sales and conversions, which lead to a better bottom line</span>
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
                        <span className={style.container2div10_span1}>95%</span>
                        <span className={style.container2div10_span2}>Increased Success Rate Per Month</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>95%</span>
                        <span className={style.container2div10_span2}>Increased Success Rate Per Month</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>95%</span>
                        <span className={style.container2div10_span2}>Increased Success Rate Per Month</span>
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
