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
import BannerImage from '../assets/Automotive/Whatsapp Marketing.png'
import endImages2 from '../assets/Whatsapp Marketing-20230918T172123Z-001/Whatsapp Marketing/19_20230830_172718_0002.png'
import endImages1 from '../assets/Whatsapp Marketing-20230918T172123Z-001/Whatsapp Marketing/18_20230830_172718_0001.png'
import SEO from '../assets/Whatsapp Marketing-20230918T172123Z-001/Whatsapp Marketing/17_20230830_172718_0000.png'
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
        statement: 'What is WhatsApp Marketing?',
        paragraph: 'WhatsApp Marketing is the process of using bulk messaging services and specialized tools to send massive amounts of relevant messages to target audiences on the popular messaging platform. A WhatsApp marketing agency or a bulk WhatsApp service provider will use various software and tools such as WA Bulk Message Sender, WhatsApp Multiple Message Senders, and create personalized marketing messages for maximum engagement.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does WhatsApp Marketing work?',
        paragraph: `WhatsApp Marketing is a powerful tool that can help businesses reach their goals. It involves the use of bulk Whatsapp messages sent to targeted customers through an agency or service provider. This makes it easier to send multiple messages, increase visibility, and improve engagement with potential customers.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of using WhatsApp for marketing?',
        paragraph: `WhatsApp provides a powerful marketing platform that offers numerous benefits, such as sending bulk messages to large audiences quickly and affordably with its multiple message sender feature, targeting specific groups or individuals for custom messaging campaigns, expanding visibility of your brand or service, and utilizing various automation tools.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Is WhatsApp Marketing suitable for all types of businesses?',
        paragraph: `Yes, WhatsApp Marketing is suitable for all types of businesses. With bulk messaging services, agencies to manage the messages, multiple message sending capabilities and more - it is a great tool for reaching out to customers quickly and efficiently.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I build a WhatsApp marketing strategy?',
        paragraph: `A successful WhatsApp marketing strategy requires finding a reliable service provider who can deliver bulk messages to your target audience, create engaging messages, and track results. Ensure you work with an experienced WhatsApp marketing agency to get the most out of your campaigns.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Can I send promotional messages to customers on WhatsApp?',
        paragraph: `Yes, you can send promotional messages to customers via WhatsApp with the help of bulk WhatsApp marketing services. Such services allow businesses to send personalized and automated messages over a secure platform for maximum customer engagement.`
    }
]

export default function WhatsappMarketing() {
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
                <title>WhatsApp Marketing Services | Boost Your Business with Messaging</title>
                <meta name="description" content="Our WhatsApp marketing services drive engagement and conversions. Reach your audience where they are – on their phones." />
                <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services/whatsapp-marketing"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>WhatsApp Marketing Services</h1>
                <p className={style.subtitle}>Connect with your target audience in the most impeccable way with our WhatsApp marketing services.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/tiktok-advertising" className={style.container2_atag}>Tiktok Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/twitter-marketing" className={style.container2_atag}> Twitter Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/linkedin-marketing" className={style.container2_atag}>LinkedIn Paid Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/google-ads-marketing" className={style.container2_atag}>Google Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/facebook-advertising" className={style.container2_atag}>Facebook Ads</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/ppc-services/instagram-advertising" className={style.container2_atag}>Instagram Ads</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>WhatsApp has emerged as a powerful marketing tool with a vast user base of over 2 billion worldwide.WhatsApp marketing has become a crucial strategy for businesses to capture their target audience's attention and drive growth.</p>
                    <p>Our WhatsApp marketing agency specializes in providing effective and engaging services that help businesses expand their reach and connect with potential customers.From bulk messaging to engaging content creation, we offer comprehensive solutions to leverage the potential of WhatsApp for marketing purposes.</p>
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
                            <h4>Effective Message Design-</h4>
                        </div>
                        <p>Our WhatsApp marketing agency specializes in crafting highly effective messages to captivate your audience. We create compelling content that grabs their attention and encourages engagement. By tailoring the messages to resonate with your target customers, we ensure that your offerings are presented in the most persuasive way possible.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Extensive Research</h4>
                        </div>
                        <p>Before launching any campaign, we conduct thorough research to identify potential leads for your services. By analyzing industry-specific data and insights, we can precisely target the right audience for your business. This personalized approach helps establish a strong connection with your recipients and increases the likelihood of conversions.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Reach a Larger Consumer Base</h4>
                        </div>
                        <p>With WhatsApp's massive user base of over 2 billion active users, we can help you reach a larger audience faster than traditional marketing methods. By leveraging the platform's popularity, we expand your business's visibility and attract potential WhatsApp customers.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Rich-Media Presentations</h4>
                        </div>
                        <p>We enhance your WhatsApp campaigns with visually appealing and interactive content. Our team utilizes rich-media elements such as images, videos, and catalogs to showcase your products or services confidently. By creating an immersive and memorable experience for your audience, we ensure that your brand stands out and leaves a lasting impression.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Try Our WhatsApp Bulk Marketing Service Today</p>
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
                                <span><strong>Empower Business Growth:</strong>Our WhatsApp marketing services are designed to drive sales and revenue growth for your business. By leveraging the power of WhatsApp, we help you expand your customer base, increase brand awareness, and strengthen your market presence. This empowers your business to grow and outperform competitors in your industry.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Reach a Larger Audience in Less Time:</strong>Our targeted messaging and efficient techniques help you connect with a broader audience in less time. Our bulk messaging capabilities allow you to simultaneously send multiple messages to a large contact list, saving valuable time and effort. This ensures that your message reaches as many potential customers as possible, maximizing your reach and impact.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Cost-Effective Marketing Solution:</strong>Our WhatsApp marketing services offer a cost-effective solution with a high return on investment. Compared to traditional marketing channels, WhatsApp marketing delivers better results at a fraction of the cost.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Positive Impact on Audience Engagement:</strong>We enhance audience engagement with your brand by delivering compelling and relevant content. Our rich-media presentations captivate your audience, encouraging interaction and fostering trust. This leads to stronger customer relationships, increased loyalty, and improved long-term engagement with your brand.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>As a reputable WhatsApp marketing agency, we prioritize transparency, reliability, and customer satisfaction. Our track record of delivering innovative and results-driven strategies speaks for itself. Experience the benefits firsthand by partnering with us and unlocking the power of WhatsApp marketing.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Contact us today to harness the potential of WhatsApp marketing and elevate your business to new heights.</span>
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
