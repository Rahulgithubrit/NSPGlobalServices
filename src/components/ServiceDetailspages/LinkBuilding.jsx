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
        statement: 'What are link building services?',
        paragraph: 'Link building services are a core element of SEO. It involves the acquisition of web-based, inbound links to a website from other sites on the internet. Link building is a time consuming process and requires technical knowledge, so many businesses outsource this service by hiring an experienced link building agency.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is link building important for SEO?',
        paragraph: `Link building is an integral part of SEO and helps to increase traffic, improve search engine rankings, and build brand authority. It's a process that involves creating high-quality backlinks from other websites or online sources. Through link building, businesses can reach out to relevant audiences.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the different types of link building services available?',
        paragraph: `Link building services are vital tools to help in SEO and digital marketing. Depending on your requirements, there are a variety of types available, including link building for agency, back link service, and best link building service. Many agencies offer affordable link building services that provide high-quality backlinks.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do link building services acquire backlinks for my website?',
        paragraph: `Link building services are an invaluable tool for many agencies. They usually acquire backlinks by researching and contacting websites that offer relevant content to your website. By creating content that is useful for others, link building services can acquire high-quality backlinks with great ease. `
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What factors should I consider when choosing a link building service?',
        paragraph: `When choosing a link building service, it’s important to keep in mind the type of link building you’re looking for (what is link building?), and whether your needs align with what an agency or backlink service can provide. You should also consider their track record with other clients, their affordability, and the quality of their back links.`
    }
]

export default function LinkBuilding() {
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
                <title>Drive Traffic and Leads: SEO for Link Building</title>
                <meta name="description" content="Our SEO services for Link Building drive targeted traffic and leads to boost your business. Get SEO Services in the Link Building." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/link-building-services" />
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>SEO Services for Link Building</h1>
                <p className={style.subtitle}>Get Noticed Online with the Best Link Building Service.</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                    <img src={endImages1} className={style.endImages1} alt="blog" />
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
                            <Link to="/seo-services/local-seo" className={style.container2_atag}>Local SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/nationwide-seo" className={style.container2_atag}> Nationwide SEO </Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/international-seo" className={style.container2_atag}>International SEO</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>In today's digital landscape, having a strong online presence is crucial for businesses to succeed. An effective link-building strategy is essential to stand out among the competition and improve search engine rankings. Our link-building agency specializes in providing affordable and customized link-building services that help businesses gain visibility and credibility online.</p>
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
                            <h4>Affordable Link-Building Services</h4>
                        </div>
                        <p> Our link-building agency offers cost-effective solutions suitable for businesses of all sizes. We understand the importance of budget considerations and provide packages that meet your financial requirements without compromising quality.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Custom Link-Building Strategies</h4>
                        </div>
                        <p> We develop tailored link-building strategies for each client. With over 20 proven techniques, we create campaigns that align with your specific industry and target audience. This approach ensures that the backlinks we acquire are relevant, authoritative, and effective in boosting your website's visibility.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Expert Outreach Team</h4>
                        </div>
                        <p>Our agency has a dedicated outreach team with extensive experience building relationships with influential publishers. Through genuine and personalized outreach efforts, we establish connections and secure high-quality backlinks from authoritative websites in your industry. This manual approach emphasizes real relationships and earned trust.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Results-Driven Approach</h4>
                        </div>
                        <p>We prioritize the success of our clients' link-building campaigns. Setting measurable goals and tracking performance ensures that our efforts generate tangible results. Improved search engine rankings, increased organic traffic, and enhanced online visibility are some of the outcomes we aim to achieve.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Sign Up Now and Dominate Your Industry with our Affordable Link Building Services</p>
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
                                <span><strong>Improved Search Engine Rankings:</strong>Our link-building services contribute to higher search engine rankings for your website. Backlinks from authoritative websites signal to search engines that your content is valuable and relevant, leading to improved visibility in search results. This increased exposure drives organic traffic and boosted your online presence.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced Credibility and Trustworthiness:</strong>Backlinks act as endorsements from reputable websites, bolstering the credibility and trustworthiness of your site. Search engines perceive these endorsements as votes of confidence, which can positively influence your online reputation and brand image.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Organic Traffic:</strong>With improved search engine rankings, your website attracts more organic traffic. This traffic consists of highly targeted visitors actively searching for products or services related to your industry. As a result, you have a higher chance of converting these visitors into customers or clients.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Expert Guidance and Support:</strong>Our agency provides expert guidance throughout the link-building process. We offer comprehensive support, addressing any questions or concerns you may have. Additionally, we utilize engaging visuals to explain the strategies and benefits involved, ensuring you clearly understand the link-building process and its impact on your business.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>By leveraging our affordable services, customized strategies, expert outreach team, and results-driven approach, you can enjoy the benefits of improved search engine rankings, enhanced credibility, increased organic traffic, and expert support in optimizing your online presence.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} target='_blank' download='Nsp'>Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} target='_blank' download="NspMainPdf">Download Word File</Link>
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
