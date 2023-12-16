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
import BannerImage from '../assets/Automotive/SEO Content Writing.png'
import endImages2 from '../assets/SEO Content Writing-20230918T172509Z-001/SEO Content Writing/21_20230907_172125_0002.png'
import endImages1 from '../assets/SEO Content Writing-20230918T172509Z-001/SEO Content Writing/20_20230907_172125_0001.png'
import SEO from '../assets/SEO Content Writing-20230918T172509Z-001/SEO Content Writing/19_20230907_172125_0000.png'
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
        statement: 'What is SEO content writing?',
        paragraph: 'Content Writing is a type of Digital Marketing that uses words to create a compelling story. It includes Website Content Writing, Advertising Content Writing & Marketing Content Writer services in order to attract target audiences and convert them into customers. It also involves creating unique and quality content for your website as well as developing best content writing services to enhance visibility in Search Engines.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is SEO content writing important for websites?',
        paragraph: `SEO content writing is an essential part of digital marketing, as it helps websites rank higher in search engine results. It also provides website readers with valuable, informative content that can be used to advertise services and products. Content writing services can help businesses create quality content that could result in increased website traffic and website conversions.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does SEO content writing help in improving search engine rankings?',
        paragraph: `SEO content writing helps improve search engine rankings by creating keyword-rich, optimized content that is engaging and informative which increases website visibility. This can be done through website content writing services, digital marketing content writing, advertisement content writing and hiring a professional content agency.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements of effective SEO content writing?',
        paragraph: `Content writing for SEO is the practice of creating content that uses keywords and phrases in a way that maximizes its visibility on search engine results pages. This includes optimizing titles, tags, URLs, imagery and more. To start a content writing agency, you'll need an understanding of SEO principles as well as excellent written communication skills.`
    }
]

export default function SEOContentWritting() {
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
                <title>SEO Content Writing Services: Reliable, Focused, and Effective</title>
                <meta name="description" content="Professional SEO content writing services might help your website's reputation. Contact NSP for the best SEO content writing services." />
                <link rel="canonical" href="https://www.nspglobalservices.com/content-marketing-services/seo-content-writing"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>SEO Content Writing Services</h1>
                <p className={style.subtitle}>Sed do eiusmod tempor incididunt ut labore et when the musis dolore magna aliqua.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/product-descriptions" className={style.container2_atag}>Product Descriptions</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/guest-blogging" className={style.container2_atag}>Guest Blogging</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/web-copy-writing" className={style.container2_atag}>Web Content</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/blog-writing" className={style.container2_atag}>Blog Posts</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services" className={style.container2_atag}>Content Marketing</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Welcome to NSP, your trusted provider of SEO Content Writing Services. In the digital age, creating high-quality and optimized content is essential for attracting organic traffic, engaging your audience, and ranking higher in search engine results.</p>
                    <p>At NSP, we specialize in crafting compelling and SEO-friendly content that captivates readers and enhances your online visibility. Whether you need blog posts, website copy, product descriptions, or any other type of content, our experienced SEO content writers are here to help you achieve your goals.</p>
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
                            <h4>Keyword Research and Optimization</h4>
                        </div>
                        <p>We conduct in-depth keyword research to identify relevant and high-ranking keywords in your industry. By strategically incorporating these keywords into your content, we ensure your website is optimized for search engines.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Compelling and Engaging Content</h4>
                        </div>
                        <p>Our talented content writers are skilled in creating content that engages readers and keeps them returning for more. We craft informative, persuasive, and entertaining content that resonates with your target audience, establishing your brand as an authority in your niche.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Original and Unique Content</h4>
                        </div>
                        <p>We understand the importance of originality in the digital landscape. Our content writers produce unique and plagiarism-free content tailored to your specific requirements. We ensure that every piece of content we create is well-researched, original, and adds value to your audience.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>On-Page Optimization</h4>
                        </div>
                        <p>Besides creating compelling content, we optimize your website's on-page elements, including meta tags, headings, and URL structures. By ensuring these elements are properly optimized, we enhance your website's visibility and improve its chances of ranking higher in search engine results.</p>
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
                                <span><strong>Improved Search Engine Rankings:</strong>Our SEO Content Writing Services are designed to boost your website's search engine rankings. Incorporating relevant keywords and optimizing on-page elements, we help you increase your visibility, attract more organic traffic, and outrank your competitors.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Organic Traffic:</strong>SEO-friendly content drives organic traffic to your website. By creating valuable and optimized content, we attract your target audience, encourage them to spend more time on your website, and increase the likelihood of conversions.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced User Experience:</strong>Engaging and informative content appeals to search engines and provides value to your readers. Delivering high-quality content enhances the user experience, keeping visitors engaged and encouraging them to explore more of your website.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Brand Authority and Trust:</strong>Well-crafted content establishes your brand as a trusted authority in your industry. By consistently delivering valuable and informative content, we help you build credibility, gain trust from your audience, and establish long-lasting relationships with your customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Experience the benefits of our professional SEO Content Writing Services. Trust NSP to deliver captivating, optimized, original content that helps you stand out in the digital landscape. </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download="Nsp" target='_blank'>Download PDF</Link>
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
