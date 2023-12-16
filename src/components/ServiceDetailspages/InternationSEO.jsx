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
import { Link } from 'react-router-dom'
import form from '../assets/whatsappchat/form.pdf'
import newpdf from '../assets/whatsappchat/NewPdf.pdf'
import TrustedCompaniesLogo from '../Pages/TrustedCompaniesLogo'
import { Helmet } from 'react-helmet'


const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is International SEO?',
        paragraph: 'International SEO is a digital marketing practice focusing on optimizing websites and content around relevant, targeted keywords so they can be shown in search engine results pages (SERPs) to users outside the website’s country of origin.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is International SEO important?',
        paragraph: `International SEO is important as it helps your business reach customers outside of its home country. The most effective way to internationalize your SEO practices is to hire an International SEO agency or expert who can create a comprehensive plan tailored for your needs.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How is International SEO different from traditional SEO?',
        paragraph: `International SEO is different from traditional SEO because it requires a special set of skills and knowledge in order to truly understand the international audience. Companies that specialize in international SEO should utilize global keyword research, local link building strategies, cross-border content marketing tactics, & multi-lingual campaigns tailored to each country.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some best practices for International SEO?',
        paragraph: `When it comes to international SEO, there are a few best practices to keep in mind. From ensuring that your website is correctly indexed for any language and targeted market, working with an international SEO expert or agency for localised strategies tailored for each country you’re targeting, and finding the right global SEO company to get the job done.`
    }
    ,
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my website for multiple languages and regions?',
        paragraph: `When it comes to optimizing your website for multiple languages and regions, you need to work with the world's best SEO company or one of the biggest SEO agencies. They will have International SEO Experts who can help create a tailored International SEO plan and strategies that are tailored to your business needs.`
    }
]

export default function InternationSEO() {
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
                <title>Drive Traffic and Leads: SEO for International Website</title>
                <meta name="description" content="Our SEO services for International Website drive targeted traffic and leads to boost your business. Get SEO Services in the International Website." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/international-seo" />
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>SEO Services for International Website</h1>
                <p className={style.subtitle}>Boost Your Business Growth with Effective International SEO Strategies.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-consultancy" className={style.container2_atag}>SEO Consultancy</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/ecommerce-seo" className={style.container2_atag}>eCommerce SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/franchise-seo" className={style.container2_atag}>Franchise SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-audits" className={style.container2_atag}>SEO Audits</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/celebrity-seo" className={style.container2_atag}>Celebrity SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/shopify-seo" className={style.container2_atag}>Shopify SEO</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>NSP Agency is a leading international SEO agency specializing in helping businesses expand globally through effective international SEO strategies. With a team of experienced multilingual SEO experts and a full-service approach, we tailor our services to meet the unique needs of businesses of all sizes.</p>
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
                            <h4>Experienced International SEO Experts</h4>
                        </div>
                        <p>Our team comprises multilingual SEO specialists with expertise in over 71 languages, allowing us to deliver customized international SEO strategies to reach your target audience worldwide.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4> Full-Service Approach</h4>
                        </div>
                        <p> From Technical SEO to On-Page SEO, Off-Page SEO, and Content Marketing, we cover all aspects of international SEO to ensure comprehensive optimization.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Localized Keyword Research</h4>
                        </div>
                        <p>Our native SEO specialists conduct detailed keyword research specific to each target market, ensuring your content is relevant and optimized for local search intent.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Multilingual Content Creation</h4>
                        </div>
                        <p>Our in-house team of multilingual copywriters creates content tailored to each local language and culture, maintaining the right tone of voice for your brand.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Contact us today to create a tailored international SEO strategy that will elevate your business to the next level!</p>
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
                                <span><strong>Global Reach and Increased Traffic:</strong>By optimizing your website for different regions, you can expand your reach, attract a broader audience, and increase traffic to your site.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Better Conversion and Sales:</strong>Targeting specific markets through international SEO strategies helps you connect with your target audience, improve conversion rates, and generate more sales.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Cost-Effective and Scalable:</strong>Partnering with an international SEO agency like NSP provides access to the latest tools and technologies, making it a cost-effective solution in the long run. Additionally, our services can be easily scaled to meet your growing business needs.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Proven Results and Expertise:</strong>NSP Agency has a track record of delivering successful international SEO projects and has been recognized as one of the world's best SEO companies, providing you with the assurance of reliable expertise and results.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>Expanding your business globally requires effective international SEO strategies, and NSP Agency is here to help. With our experienced team, comprehensive approach, and a focus on delivering results, we can optimize your website for different regions, increase your visibility, and drive growth. Contact us today to unlock your international SEO potential and take your business to the next level.</span>
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
