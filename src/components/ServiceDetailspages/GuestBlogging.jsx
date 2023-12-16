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
import BannerImage from '../assets/Automotive/Guest Blogging.png'
import endImages2 from '../assets/Guest blogging-20230918T172541Z-001/Guest blogging/21_20230908_175115_0002.png'
import endImages1 from '../assets/Guest blogging-20230918T172541Z-001/Guest blogging/20_20230908_175115_0001.png'
import SEO from '../assets/Guest blogging-20230918T172541Z-001/Guest blogging/19_20230908_175115_0000.png'
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
        statement: 'What is guest blogging?',
        paragraph: 'Guest blogging is a form of content marketing where bloggers create content to post on other websites, usually in exchange for exposure or payment. Services such as guest post outreach and paid guest posting are used to help businesses reach their target audience. Other guest post services include SEO-driven free and paid guest posting sites, blog posting sites, free guest blogging websites, and even a marketplace for these services.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is guest blogging important for content marketing?',
        paragraph: `Guest blogging is a powerful content marketing technique that can help build brand awareness, increase website traffic, and improve SEO rankings. It involves writing content to be published on another website or blog, using specialized guest post services such as outreach service, paid post or free websites. Additionally, there are also other platforms like the marketplace for blog posting sites which offer a range of solutions to get the most out of your guest blogging efforts.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does guest blogging benefit both the guest blogger and the host website?',
        paragraph: `Guest blogging is a powerful tool that can benefit both the guest blogger and the host website. Through guest post outreach services, guest blogging services and SEO guest post, the linkable asset of both parties increases significantly. In addition, free guest posting websites, free guest posting sites, free blog posting sites and others available in the market help to extend reach further.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I find guest blogging opportunities in my niche?',
        paragraph: `Finding guest blogging opportunities can be a challenging task, but utilizing a service such as a guest post outreach service, guest blogging services, and SEO guest post websites can provide you with cost effective and efficient methods to land your desired blog posts. Additionally, researching free guest posting websites and exploring the various options in the market place will serve you well.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What should I consider when selecting websites for guest blogging?',
        paragraph: `When selecting websites for guest blogging, consider factors including SEO performance, free submission sites, and reputable marketplaces. Before guest posting on any website, research the relevancy of its content and audience to ensure your post reaches its desired impact.`
    }
]

export default function GuestBlogging() {
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
                <title>Premium Guest Posting Services, Guest Blogging Packages, Blogger Outreach Services</title>
                <meta name="description" content="Our premium guest posting services and blogger outreach solutions drive real results. Discover the power of quality backlinks." />
                <link rel="canonical" href="https://www.nspglobalservices.com/content-marketing-services/guest-blogging"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Guest Posting Services</h1>
                {/* <p className={style.subtitle}>Sed do eiusmod tempor incididunt ut labore et when the musis dolore magna aliqua.</p> */}
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/seo-content-writing" className={style.container2_atag}>SEO Content</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/product-descriptions" className={style.container2_atag}>Product Descriptions</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/web-copy-writing" className={style.container2_atag}>Web Content</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/blog-writing" className={style.container2_atag}>Blog Post</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services" className={style.container2_atag}>Content Marketing</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Welcome to NSP, your trusted provider of Guest Post Blog Writing Services. Guest blogging is a powerful strategy that allows you to expand your online reach, build brand authority, and attract new audiences.</p>
                    <p>At NSP, we specialize in creating high-quality, engaging, and informative guest blog posts that effectively communicate your message and provide value to readers. With our expert blog writers and extensive network of reputable websites, we help you secure guest blogging opportunities that amplify your brand's visibility and drive targeted traffic to your website.</p>
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
                            <h4>Targeted Audience Research</h4>
                        </div>
                        <p>Our experienced writers conduct thorough research on the target audience of the guest blog platform. By understanding their interests, preferences, and pain points, we tailor the content to resonate with the readers, ensuring that your message effectively connects with the audience.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Compelling and Informative Content</h4>
                        </div>
                        <p>We pride ourselves on delivering engaging and informative guest blog posts. Our skilled writers craft well-researched articles that provide valuable insights, practical tips, or thought-provoking content, positioning you as an authority in your industry and capturing the readers' interest.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Brand Alignment and Voice</h4>
                        </div>
                        <p>We align the guest blog posts' tone, style, and messaging with your brand's identity and voice. By maintaining consistency in your brand messaging, we ensure that the guest posts seamlessly integrate with your overall marketing efforts and reinforce your brand's image and values.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Targeted Outreach and Placement</h4>
                        </div>
                        <p>Besides writing high-quality content, we handle the outreach and placement process. Our team identifies and contacts authoritative websites relevant to your industry to secure guest blogging opportunities. </p>
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
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Increased Brand Exposure:</strong>Our Guest Post Blogging Services enable you to reach a wider audience beyond your platforms. By leveraging guest blogging opportunities on reputable websites, we increase your brand's exposure and introduce your business to new potential customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Enhanced Brand Authority:</strong>You establish your brand as a thought leader and industry expert by consistently delivering valuable and informative content through guest blog posts. This enhances your brand's authority and credibility, attracting more trust and loyalty from your target audience.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Targeted Traffic and Lead Generation:</strong>Our guest blog posts are strategically crafted to drive targeted traffic to your website. By providing valuable content that resonates with the readers, we attract relevant and engaged visitors who are more likely to convert into leads or customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>SEO Benefits:</strong>Guest blogging is vital in search engine optimization. By securing backlinks to your website from reputable sources, you improve your website's authority and increase its chances of ranking higher in search engine results. This leads to improved organic visibility and more opportunities for organic traffic.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Experience the benefits of our professional Guest Post Blog Writing Services.Contact us today to discuss your guest blogging needs and how we can support your online success.</span>
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
