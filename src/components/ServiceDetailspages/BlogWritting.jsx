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
import BannerImage from '../assets/Automotive/Blog Writing.png'
import endImages2 from '../assets/Blog Writing-20230918T172704Z-001/Blog Writing/21_20230908_175703_0002.png'
import endImages1 from '../assets/Blog Writing-20230918T172704Z-001/Blog Writing/20_20230908_175703_0001.png'
import SEO from '../assets/Blog Writing-20230918T172704Z-001/Blog Writing/19_20230908_175703_0000.png'
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
        statement: 'What is blog writing?',
        paragraph: 'Blog Writing is the art of creating engaging and informative blog posts that provide valuable information to readers. It involves research, crafting a unique topic angle, utilizing persuasive writing styles, and leveraging professional writing services to create blog post content that engages an audience.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is blog writing important for businesses and individuals?',
        paragraph: `Writing blogs is an important part of today's digital marketing strategy. Professional writing services provide businesses with blog post content writing tailored to engage readers and reach specific online audiences.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How does blog writing differ from other forms of writing?',
        paragraph: `Blog writing differs from other forms of writing in that it typically employs a more informal, conversational tone and often involves creating original content based on research. Professional writing services provide blog post content to help businesses create effective, engaging blog pieces for their readers.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the key elements of a successful blog post?',
        paragraph: `A successful blog post requires strong SEO, engaging content, relevant topics and targeted keywords. Working with experienced blog writing services can help you create compelling and optimized content that will attract more readers.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I come up with engaging and relevant blog topics?',
        paragraph: `Brainstorming is the first step to coming up with engaging and relevant blog topics. Check out blog writing services or consider how-to guides on writing blogs. Utilize research tools, set relevant keywords, and craft quality content that resonates with your audience.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is the ideal length for a blog post?',
        paragraph: `The amount of time it takes for local SEO to produce results depends on your goals, the size of your business, and the competitivenThe ideal length for a blog post varies depending on the topic and writing style, but it typically ranges from 500 to 1,500 words. Using effective SEO practices and quality content are key when hiring professional blog writing services or crafting your own post. `
    }
]

export default function BlogWritting() {
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
                <title>Professional Article & Blog Writing Services</title>
                <meta name="description" content="Get interesting articles and blogs that provide your consumers with useful information and advice. See what NSP can do for you." />
                <link rel="canonical" href="https://www.nspglobalservices.com/content-marketing-services/blog-writing"/>
            </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>Blog Writing Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Ignite Your Blog with Captivating Content: Take your blog to the next level with our professional Blog Writing Services.</p>
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
                            <Link to="/content-marketing-services/guest-blogging" className={style.container2_atag}>Guest Blogging</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/web-copy-writing" className={style.container2_atag}>Web Content</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services" className={style.container2_atag}>Content Marketing</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Welcome to NSP, your trusted provider of Blog Writing Services. In the digital era, maintaining an active and engaging blog is essential for attracting and engaging your target audience, establishing thought leadership, and driving organic traffic to your website.</p>
                    <p>At NSP, we specialize in creating high-quality, informative blog content that resonates with your readers, adds value to their lives, and helps you achieve your content marketing goals.</p>
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
                        <p>Our experienced writers conduct in-depth research on your target audience. By understanding their demographics, interests, pain points, and preferences, we create blog content that addresses their needs, interests, and challenges, ensuring maximum relevance and engagement.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Engaging and Informative Content</h4>
                        </div>
                        <p>A successful blog captures the attention and interest of readers. Our skilled writers craft engaging and informative blog articles that provide valuable insights, practical tips, or thought-provoking content. We aim to educate, inspire, entertain, and engage the readers, establishing your brand as a trusted source of information in your industry.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>SEO Optimization</h4>
                        </div>
                        <p>We understand the importance of optimizing your blog content for search engines. Our writers incorporate relevant keywords, meta tags, and other SEO best practices to ensure your blog posts are search-engine friendly. Improving your search-engine rankings, we help drive organic traffic to your blog and increase your online visibility.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Consistent Content Strategy</h4>
                        </div>
                        <p>With our expert blog writers, we help you develop a blog strategy, craft compelling articles, and consistently deliver engaging content that captivates your audience. Whether you need weekly, bi-weekly, or monthly blog posts, we ensure a consistent publishing schedule that keeps your audience engaged and your brand top-of-mind. We also assist with topic ideation, content planning, and editorial calendar management.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Start Creating Compelling Blog Content: Don't let your blog fall flat.Get started on creating high-quality, informative, and captivating blog articles by contacting us now.</p>
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
                                <span><strong>Increased Website Traffic:</strong>Our blog writing services are designed to drive organic traffic to your website. By creating informative and engaging blog articles, we attract your target audience, encourage repeat visits, and increase the likelihood of conversions.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Improved Search Engine Rankings:</strong>Our SEO-optimized blog content helps improve your website's search engine rankings. By incorporating relevant keywords, meta tags, and other on-page optimization techniques, we enhance your visibility in search engine results, attracting more organic traffic.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Establishing Thought Leadership:</strong>Well-crafted blog content positions your brand as a thought leader in your industry. By sharing valuable insights, industry trends, and expert opinions, we help you establish authority and credibility, gaining the trust & loyalty of your audience.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span><strong>Increased Audience Engagement:</strong>Engaging blog content sparks conversation, encourages social sharing, and fosters a sense of community. By delivering compelling articles, we enhance audience engagement, encourage comments and discussions, and build a loyal community around your brand.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Experience the benefits of our professional Blog Writing Services. Trust NSP to deliver high-quality, engaging, and SEO-optimized blog content that helps you connect with your target audience, drive website traffic, and establish thought leadership in your industry. Contact us today to discuss your blog writing needs and how we can support your content marketing goals.</span>
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
