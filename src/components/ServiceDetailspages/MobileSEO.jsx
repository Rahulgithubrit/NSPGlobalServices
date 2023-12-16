import React, { useState } from 'react'
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
import style from './servicedetails.module.css'
import Carousal from '../Carousal'
import BannerImage from '../assets/Automotive/Mobile SEO.png'
import endImages2 from '../assets/Mobile SEO/20230819_001854_0001.png'
import endImages1 from '../assets/Mobile SEO/20230819_001854_0000.png'
import SEO from '../assets/Mobile SEO/20230819_001854_0002.png'
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
        statement: 'What is Mobile SEO?',
        paragraph: `Mobile SEO focuses on optimizing websites to deliver a seamless and engaging experience for users accessing them from mobile devices. This includes making sure that the content is properly structured, improving navigation and page loading speed, and creating site designs that are optimized for smaller screens. Additionally, Google evaluates sites for its mobile-optimized criteria to help determine whether webpages appear in mobile search results. To increase visibility on Google's Mobile Search Results, ensure your site meets all the requirements of a mobile-optimized page by optimizing titles, meta descriptions, images and other content.`
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is Mobile SEO important?',
        paragraph: `Mobile SEO is important because it is essential to optimize your website for mobile devices. Google indexes web pages and ranks them according to their mobile optimization, making sure that only the most optimized and user-friendly sites appear in the top search results on mobile devices. To ensure that your website is optimized for both desktop and mobile searches, use practices such as responsive design and optimize page speed, create relevant content, properly format text size, page titles etc., use alternative image formats like WebP or JPEG 2000 that are supported by all browsers, as well as analyze user behaviour through demographics and usage reports.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How is Mobile SEO different from Desktop SEO?',
        paragraph: `Mobile SEO is different from desktop SEO because it requires additional optimization techniques such as creating Google Mobile Optimized Pages, making sure that the website and its HTML code are mobile-friendly, and improving the loading speeds of mobile pages to appear higher in Google's mobile search results. These optimizations help websites improve their visibility in mobile search results and make them more competitive when people search for related topics on mobile devices.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some best practices for Mobile SEO?',
        paragraph: `Mobile SEO is all about optimizing your website for users on smartphones and tablets so that they get the best user experience and can easily find your page in Google's mobile search results. There are several key areas to focus on - ensure your site is mobile-friendly, create content specifically designed for devices, optimize page titles & descriptions, use relevant keywords, speed up loading time and monitor mobile rankings. Following these best practices will keep you ahead of the competition in Google's mobile search results.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: `How does Google's Mobile-first indexing affect Mobile SEO?`,
        paragraph: `Mobile-first indexing is a change that Google has implemented in order to improve mobile search results. It means that when crawling websites, Google looks at the mobile version of a page instead of its desktop version as the primary source of information. This will mean improved relevancy, better click-through rates on mobile searches, and an increased focus on optimizing content for mobile, benchmarked through metrics such as page speed and user experience. Consequently, SEOs must now make sure their sites are optimized for both desktop and mobile devices if they want to rank higher in Google’s SERPs for both kinds of searches.`
    }
]

export default function MobileSEO() {
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
        <title>Mobile SEO Services | Best Mobile SEO Services Agency</title>
            <meta name="description" content='NSP is the top mobile search engine optimisation agency, offering professional mobile SEO services. We assist you in optimising your website in order to get more visits and money. Contact our Mobile SEO specialists right away.' />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/mobile-seo"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>Mobile SEO Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Boost Your Mobile SEO and Page Speed with Our Bespoke Services</p>
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
                    <h2> Claim Your FREE Mobile SEO Audit Today and Catapult Your Mobile Rankings to the Top!</h2>
                    <p>Mobile SEO has become an increasingly critical aspect of digital marketing and web development. With more people accessing the internet via mobile devices than ever before, optimizing for mobile is no longer a matter of convenience but a necessity.</p>
                    <p>At NSP, we offer bespoke mobile SEO optimization services designed to improve the visibility and ranking of your website on mobiles and tablets. Our team of experts will work with you to conduct a comprehensive mobile SEO audit, identify areas for improvement, and implement effective solutions to boost your mobile traffic and conversions.</p>
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
                            <h4>Improved Mobile User Experience</h4>
                        </div>
                        <p>Our mobile SEO services are designed to optimize your website for mobile audiences, ensuring a smooth and seamless user experience across different mobile devices. By improving the mobile experience, we increase the chances of visitors staying on your site, engaging with your content, and ultimately converting.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Increased Mobile Traffic and Conversions</h4>
                        </div>
                        <p>With more and more users searching for content via their mobile devices, optimizing your site for mobile can help increase your mobile traffic and conversions. Our mobile SEO services ensure that your website is fully optimized for mobile search, making it easier for potential customers to find you and take action.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Staying Ahead of the Competition</h4>
                        </div>
                        <p>As mobile SEO becomes increasingly important, staying ahead of the competition is crucial. Our mobile SEO services are designed to help you outdo your competitors by improving your rankings in Google's mobile search results. By staying ahead of the pack, we help you attract more visitors, generate more leads, and increase your revenue.</p>
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
                    <h3>Highlight Key Features and Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Our mobile SEO services are tailored to meet your specific needs.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span> We offer a comprehensive mobile SEO audit that includes mobile tracking, content, speed, user experience, and assessing crawling, indexing, and configuration signaling.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span> Our bespoke mobile search engine optimization strategy ensures that your visitors have an excellent experience on the mobile version of your site.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>With our mobile SEO services, you can improve your website's mobile search engine rankings, boost visibility, increase conversions, and grow your business.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Our team of mobile SEO experts is ready to answer any questions you may have and help you optimize your site for the mobile-first world.</span>
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
