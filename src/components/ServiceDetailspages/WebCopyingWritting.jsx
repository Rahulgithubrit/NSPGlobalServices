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
import BannerImage from '../assets/Automotive/Web Copy Writing.png'
import endImages2 from '../assets/Web Copy Writing-20230918T172649Z-001/Web Copy Writing/21_20230908_175510_0002.png'
import endImages1 from '../assets/Web Copy Writing-20230918T172649Z-001/Web Copy Writing/20_20230908_175510_0001.png'
import SEO from '../assets/Web Copy Writing-20230918T172649Z-001/Web Copy Writing/19_20230908_175510_0000.png'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import { Link } from 'react-router-dom'
import form from '../assets/whatsappchat/form.pdf'
import newpdf from '../assets/whatsappchat/NewPdf.pdf'
import { Helmet } from 'react-helmet'
import TrustedCompaniesLogo from '../Pages/TrustedCompaniesLogo'


const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is web copywriting?',
        paragraph: 'Website copywriting is the creation of written content for webpages, such as websites, product pages and blog posts, by a content copywriter. It plays an important role in online marketing since it allows businesses to communicate their message clearly and effectively to their target audience.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: ' Why is effective web copywriting important for websites?',
        paragraph: `Effective web copywriting is vital for websites as it helps to captivate an audience, create and maintain brand personality, boost website performance, drive better conversions and increase online visibility. By employing the right copywriter who understands your goals and objectives, you can maximize the value of your content.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: ' How does web copywriting differ from other forms of writing?',
        paragraph: `Web copywriting is the art of creating promotional content for websites to engage readers and promote products. It requires a unique blend of creativity and strategy to develop effective copy that speaks directly to the target audience.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements of persuasive web copy?',
        paragraph: `Copywriting for web pages involves crafting persuasive content that is clear, concise, and engaging. Key elements include captivating headlines, benefit-oriented language, persuasive copywriting techniques such as the AIDA model (Attention-Interest-Desire-Action), storytelling and visuals`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I write compelling headlines and subheadings for web copy?',
        paragraph: `Copywriting is the process of crafting compelling content and copy for web pages. It's an artform, requiring creativity and technical skill to ensure your readers stay hooked and engaged. To create effective headlines and subheadings, use SEO-optimized words, catchy phrases, power words, storytelling techniques, persuasive copywriting techniques etc.`
    }
]

export default function WebCopyingWritting() {
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
                <title>Expert Website Copywriting Services - Copywriting for Client Growth</title>
                <meta name="description" content="Do you require effective web authoring services that meet the brief for your company's or organization's website? Hire online copywriters who are seasoned professionals in the field of website copywriting and layout to get results-driven web content." />
                <link rel="canonical" href="https://www.nspglobalservices.com/content-marketing-services/web-copy-writing" />
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Website Copywriting Services</h1>
                <p className={style.subtitle}>Transform Your Website with Compelling Web Copy: Don't let your website blend into the noise.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={endImages1} className={style.endImages1} alt="blog" />
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
                            <Link to="/content-marketing-services/guest-blogging" className={style.container2_atag}>Guest Blogging</Link>
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
                    <p>Welcome to NSP, your trusted provider of Web Copy Writing Services. It is crucial to have compelling and persuasive web copy that captures their attention and drives conversions.</p>
                    <p>At NSP, we specialize in crafting engaging and impactful web copy that effectively communicates your brand's message, showcases your unique value proposition, and encourages visitors to take action. With our expert web copywriters, we help you create a website that stands out, engages your audience, and maximizes your online success.</p>
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
                            <h4>Brand Messaging and Tone</h4>
                        </div>
                        <p>We understand the importance of maintaining a consistent brand voice across your website. Our skilled copywriters align the tone, style, and messaging of the web copy with your brand's identity, ensuring that every word reflects your unique personality, values, and goals.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Compelling Headlines and Taglines</h4>
                        </div>
                        <p>Capturing the attention of your visitors is essential. We create compelling headlines and taglines that instantly communicate the essence of your brand and pique curiosity, encouraging visitors to explore further and stay engaged with your website.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Clear and Concise Messaging</h4>
                        </div>
                        <p>We believe in the power of clarity and simplicity. Our copywriters deliver concise and easy-to-understand messaging that communicates your products' or services' key benefits and features. We cut through the noise and ensure your visitors quickly grasp your value.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Persuasive Call-to-Action (CTA)</h4>
                        </div>
                        <p>A strong call-to-action is vital for converting visitors into customers. We strategically place persuasive CTAs throughout your web copy, guiding visitors to take the desired action, whether purchasing, filling out a form, or contacting your business.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}> Get in touch with us now to get started on creating clear, concise, and compelling web copy that effectively communicates your brand's message and captivates your target audience.</p>
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
                                <span><strong>Increased Conversions:</strong>Our web copy is designed to drive conversions. By crafting persuasive and engaging content, we inspire visitors to take action, resulting in increased leads, sales, and business growth.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced User Experience:</strong>Clear and concise web copy improves the user experience. We create content that is easy to navigate, digest, and understand, making it effortless for visitors to find the information they need and positively interact with your website.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved Search Engine Rankings:</strong>Our SEO-friendly web copy helps boost your website's search engine rankings. By incorporating relevant keywords and optimizing on-page elements, we improve your website's visibility in search engine results, attracting more organic traffic.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Brand Differentiation:</strong>Our compelling web copy helps differentiate your brand from competitors. We highlight your unique selling points, benefits, and value proposition, positioning your brand as a preferred choice in the market and building a memorable brand identity.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Experience the benefits of our professional Web Copy Writing Services. Trust NSP to deliver captivating, clear, and persuasive web copy that effectively communicates your brand's message and drives conversions. Contact us today to discuss your web copywriting needs and how we can support your online success.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download='Nsp' target='_blank'>Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} download="NspMainPdf" target='_blank'>Download Word File</Link>
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
