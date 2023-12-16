import React, { useState } from 'react'
import icon7 from '../assets/icon-7.png'
import { MdCall } from 'react-icons/md'
import arrow from '../assets/right-arrow.png'
import style from './servicedetails.module.css'
import Carousal from '../Carousal'
import BannerImage from '../assets/Untitled design/2.png'
import endImages2 from '../assets/SEO services/photo_2023-06-23_01-33-12.jpg'
import endImages1 from '../assets/SEO services/DigitalMarketing.jpg'
import SEO from '../assets/SEO services/SEO Services.jpg'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import { Link } from 'react-router-dom'
import form from '../assets/whatsappchat/form.pdf'
import newpdf from '../assets/whatsappchat/NewPdf.pdf'
import TrustedCompaniesLogo from '../Pages/TrustedCompaniesLogo'
import { Helmet } from 'react-helmet'


const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is a Luxury SEO agency and how does it differ from a regular SEO agency?',
        paragraph: 'A Luxury SEO agency that specializes in providing tailored search engine optimization services for luxury brands, focusing on affluent customers, exclusivity, and maintaining a premium brand image, distinguishing it from a regular SEO agency.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of hiring a Luxury SEO agency for luxury brands and businesses?',
        paragraph: `Hiring a Luxury SEO agency benefits luxury brands by leveraging their expertise in the luxury market, resulting in higher brand recognition, increased visibility, and enhanced online reputation among affluent consumers.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What specific strategies and techniques does a Luxury SEO agency employ to cater to the luxury market?',
        paragraph: `Specific strategies and techniques employed by a Luxury SEO agency to cater to the luxury market include creating high-quality and sophisticated content, conducting targeted keyword research for high-end and niche keywords, optimizing website elements for luxury-related keywords, managing brand reputation, and leveraging influencer collaborations and partnerships.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does a Luxury SEO agency help luxury brands improve their search engine rankings for high-end keywords?',
        paragraph: `A Luxury SEO agency helps luxury brands improve their search engine rankings for high-end keywords by implementing tailored SEO strategies that resonate with affluent consumers, increasing brand visibility in search engine results pages (SERPs), attracting targeted organic traffic, and driving conversions for luxury businesses.`
    }
]

export default function LuxarySEO() {
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
                <title>Drive Traffic and Leads: SEO for Luxury</title>
                <meta name="description" content="Our SEO services for Luxury drive targeted traffic and leads to boost your business. Get SEO Services in the Luxury." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/luxury-seo" />
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>SEO Services for Luxury</h1>
                {/* <p className={style.subtitle}>Sed do eiusmod tempor incididunt ut labore et when the musis dolore magna aliqua.</p> */}
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={endImages1} className={style.endImages1} alt="blog" />
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
                    <h2>Overview</h2>
                    <p>Welcome to NSP, your premium provider of Luxury SEO Services. We understand that a strong online presence in the world of luxury brands is essential for reaching discerning customers and establishing a prestigious image. At NSP, we specialize in delivering tailored SEO strategies that cater to the unique needs of luxury businesses. With our expertise in luxury SEO, we help luxury brands rise above the competition, increase visibility, and attract high-value customers who appreciate the finer things in life.</p>
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
                            <h4>Performance Analysis and Optimization</h4>
                        </div>
                        <p>We continuously monitor the performance of your SEO campaigns, analyzing key metrics and fine-tuning strategies to maximize results. Through data-driven insights, we identify areas for improvement and implement optimization techniques to enhance your website's search engine rankings, increase organic traffic, and drive conversions.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Customized SEO Strategies</h4>
                        </div>
                        <p>We understand that luxury brands require a customized approach to SEO. Our team of experts will work closely with you to develop a bespoke SEO strategy that aligns with your brand's unique values, target audience, and business goals. We employ advanced keyword research, competitor analysis, and industry insights to craft a strategy that maximizes your online visibility and drives qualified organic traffic.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>High-End Content Creation</h4>
                        </div>
                        <p> Luxury brands require unique content that reflects exclusivity and sophistication. Our team of skilled writers and creatives specializes in producing high-quality, engaging, and compelling content that resonates with your target audience. From captivating blog posts to visually stunning product descriptions, we ensure that your content showcases the luxury experience your brand offers.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Reputation Management</h4>
                        </div>
                        <p>Reputation is paramount in the luxury industry. We employ comprehensive reputation management techniques to monitor and protect your brand's online image. Through strategic online brand monitoring, review management, and proactive engagement, we safeguard your brand's reputation, ensuring it remains untarnished and highly regarded.</p>
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
                    <img src={SEO} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                    <img src={endImages2} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                </div>
                <div className={style.container2div8}>
                    <h3>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Online Visibility:</strong>Our Luxury SEO Services elevate your brand's visibility in search engine results, ensuring that your target audience discovers your luxury offerings when searching for relevant keywords. This increased visibility translates into higher organic traffic and more exposure to potential customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Targeted Traffic and Qualified Leads:</strong>We attract high-value customers actively searching for luxury products and services by employing advanced SEO techniques. We optimize your website to drive targeted traffic, resulting in qualified leads and increased conversion rates.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced Brand Authority and Prestige:</strong>Our tailored SEO strategies position your luxury brand as an authority in your niche. By consistently delivering valuable content, optimizing your website, and cultivating a positive online reputation, we enhance your brand's authority and prestige in the eyes of your target audience.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Long-Term Growth and ROI:</strong>Our Luxury SEO Services provide long-term benefits for your brand. By improving your organic search visibility and driving qualified traffic, we lay the foundation for sustainable growth and a strong return on investment. Investing in luxury SEO pays off by attracting affluent customers and driving revenue growth for your brand.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Elevate your luxury brand's online presence and capture the attention of high-value customers with our exclusive Luxury SEO Services. Trust NSP to deliver customized strategies, unique content, and measurable results that showcase the true essence of your luxury brand. Contact us today to learn more about how we can enhance your brand's visibility and success in the digital landscape.</span>
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
            <TrustedCompaniesLogo />
            <div className={style.FAQS}>
                <div >
                    <img className={style.faq} src={FAQ} alt="FAQ" />
                </div>
                <div className={style.wrapper}>
                    <h2 className={style.accordion_h2}>Frequently Asked Question</h2>
                    <div className={style.accordion}>
                        {data.map((element, i) => (
                            <div key={element.id}>
                                <div className={style.title_1} style={{ backgroundColor: 'white', height: '90px' }} onClick={() => { toggle(i) }}>
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
