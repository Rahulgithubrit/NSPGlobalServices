import React, { useEffect, useState } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
import style from './service.module.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import icon_3 from '../assets/icon-3.png';
import { GoChevronRight } from 'react-icons/go'
import check from '../assets/check.png'
import Carousal from '../Carousal'
import BannerImage from '../assets/Untitled design/3.png'
// import Accordation from '../Accordation'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How long does it take to see results from SEO services?',
        paragraph: `SEO results typically take anywhere from 4 to 6 months for most businesses, depending on the competitiveness of their industry and keywords being targeted. An experienced SEO agency or professional can help you determine an ideal timeline for achieving desired results. The success of any SEO campaign is generally determined by a combination of factors such as the website's domain authority & quality score, competition in SERPs (Search Engine Result Pages), industry standards etc.`
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why do you need SEO services?',
        paragraph: `Search engine optimization (SEO) services are essential for any business looking to succeed online and increase their visibility in the search results. With SEO, businesses can improve their website’s ranking on major search engines such as Google and Bing, allowing them to reach more people who may be interested in the products or services they offer.Professional SEO services are an investment into your business's future success; they ensure that you stay ahead of competition by improving your online presence through strategies like creating high-quality content & engaging with customers through social media platforms. `
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is SEO?',
        paragraph: 'Search engine optimization (SEO) refers to the techniques employed to enhance website traffic organically by improving its visibility on search engine results pages. The primary goal of SEO is to augment both the quality and quantity of website visitors.'
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are SEO services?',
        paragraph: 'Firstly there are two main categories – On-page SEO which refers to optimizing aspects directly related with webpages themselves such as content quality, title tags , meta descriptions , images alt tags etc., and off-page SEO which includes link building activity such as blog commenting/guest posting , press release syndication etc.'
    },


    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How much do SEO services cost?',
        paragraph: `Generally packages offered by most agencies are one time setup fee + monthly maintenance service cost following completion of the initial setup phase until desired goals achieved although this varies from organization to another .    Ultimately each business has its own unique needs but by leveraging combination reliable techniques it's possible to increase online visibility and gain ROI .`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do you choose an SEO services provider?',
        paragraph: `Choosing the right SEO provider is essential for achieving desired results from search engine optimization (SEO) efforts. Before doing so, one should have a basic understanding of what SEO entails, including on page off page seo services, keyword research, technical audits and more. When it comes to selecting an SEO agency or expert, factors such as experience in the field and track record should be taken into account. Additionally, looking at the various packages offered can make the selection process easier by allowing you to compare costs and services being provided. Lastly, before engaging any service provider it is important to understand exactly what they will provide in terms of deliverables/outcomes associated with their monthly SEO packages as well as its duration.`
    }
]
export default function SEOService() {
    useEffect(function () {
        AOS.init({ duration: 1000 });
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
                <title>#1 SEO Management Team | Expert SEO Services for Your Success</title>
                <meta name="description" content="SEO services that mean business. NSP's proven track record is your assurance of lead and sales growth." />
                <link rel="canonical" href="https://www.nspglobalservices.com/seo-services"/>
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)', display: 'flex', justifyContent: 'center' }} alt="" />
                <h1 className={style.title}>SEO Services for Revenue Growth</h1>
                <p className={style.subtitle}>Search Engine Optimization (SEO): Affordable Seo Services</p>
            </div>
            {/* service end */}
            <div className={style.container2}>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>Digital Marketing</h2>
                        <p className={style.container2_paraSEO}>Looking to boost your online presence?From optimizing your website for higher search engine rankings to executing effective social media campaigns, we provide strategic and data-driven approaches to maximize your online visibility, attract targeted audiences, and drive conversions. Trust our team of experts to elevate your brand.</p>
                        <Link to='/contact-us' className={style.container2_atag}><GoChevronRight />Read More</Link>
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>Website & Development</h2>
                        <p className={style.container2_paraSEO}>NSP offers you unbeatable website development services that will make your online presence shine. Our team of skilled professionals will bring your ideas to life, creating a visually stunning and highly functional website that grabs attention and drives real results.</p>
                        <Link to='/contact-us' className={style.container2_atag}><GoChevronRight />Read More</Link>
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>PPC Advertising</h2>
                        <p className={style.container2_paraSEO}>Experience the power of targeted advertising and take your business to new heights in the digital realm.Our dedicated team will strategize, optimize, and manage your campaigns across various platforms, ensuring maximum reach and conversions</p>
                        <Link to='/contact-us' className={style.container2_atag}><GoChevronRight />Read More</Link>
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>Google Analytics</h2>
                        <p className={style.container2_paraSEO}>Gain valuable insights into your website's performance and audience behavior with our expert Google Analytics services. Our team of analytics professionals will help you harness the power of data, providing in-depth reports and analysis to optimize. Make informed decisions and unlock your website's full potential with our comprehensive Google Analytics solutions.</p>
                        <Link to='/contact-us' className={style.container2_atag}><GoChevronRight />Read More</Link>
                    </div>
                </div>
            </div>
            {/*detail Section end  */}
            <div className={style.container3}>
                <div className={style.container3_div1}>
                    <p className={style.container3_para1}>PROCESS</p>
                    <h2 className={style.container3_hone}>How We Work to Bring the Best</h2>
                    <p className={style.container3_para2}>Ut enim ad minim veniam, quis nostrud exercitation ullamco labor is tetur adipisicing elit, sed do eiusmod</p>
                </div>
                <div className={style.container3_div2}>
                    <div className={style.process}>
                        <div className={style.number}>1</div>
                        <h6>Relevant keywords</h6>
                        <p className={style.container3_para2}>Seo is just a game of keywords, giving the high reach keywords is not the masterstroke but giving the keywords that make your reach high is the masterstroke here and that’s what NSP Global Services does. </p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>2</div>
                        <h6>Competitor analysis</h6>
                        <p className={style.container3_para2}>The best way to improve is by seeing and implementing the tactics used by your competitors that are successful in your field/niche and that’s why NSP Global Services keep an eye on your competitor, analyse it and then implement it on your brand.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>3</div>
                        <h6>Link building</h6>
                        <p className={style.container3_para2}>Connecting one web page to the another to improve the reach of your target audience can only be done through link building in Seo.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>4</div>
                        <h6>Content creation</h6>
                        <p className={style.container3_para2}>The next step of seo is writing and optimising the best content for your brand, that is non plagiarised, update and able to rank in the form of blogs, articles etc.</p>
                    </div>
                </div>
            </div>
            {/* process end */}
            <div >
                <div className={style.container4_div}>
                    <p className={style.container4_para1}>Pricing Plans</p>
                    <h2 className={style.container4_hone}>Pick A Plan that Suits</h2>
                    {/* <p className={style.container4_para2}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. when the musics over turnoff the light</p> */}
                </div>
                <div className={style.pricing_card}>
                    <div className={style.pricing}>
                        <div className={style.pricing_rate}>
                            <h5 className={style.container4_hfive}>TEMPLATED</h5>
                            <div className={style.pricing_value}>
                                <span className={style.value}>$299</span>
                                <span className={style.month}>/month</span>
                            </div>
                            <p className={style.container4_para3}>Great for Individuals & Startups!</p>
                        </div>
                        <ul>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>up to 10 Keywords</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Keyword Research</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Competitior Analysis</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Individual Consultant</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>SEO Guarantee</span>
                            </li>
                        </ul>
                        <Link to='/contact' className={style.signup_btn}>Signup Now</Link>
                    </div>
                    <div className={style.pricing}>
                        <div className={style.pricing_rate}>
                            <h5 className={style.container4_hfive}>STANDARD</h5>
                            <div className={style.pricing_value}>
                                <span className={style.value}>$499</span>
                                <span className={style.month}>/month</span>
                            </div>
                            <p className={style.container4_para3}>Most Popular by New Businesses!</p>
                        </div>
                        <ul>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Up To 20 Keyword</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Blog optimisation</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Keyword Monitoring</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Regular Reporting On ROI</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Full Team Of SEO & Subject Matter Expert</span>
                            </li>
                        </ul>
                        <Link to='/contact' className={style.signup_btn}>Signup Now</Link>
                    </div>
                    <div className={style.pricing}>
                        <div className={style.pricing_rate}>
                            <h5 className={style.container4_hfive}>PROFESSIONAL</h5>
                            <div className={style.pricing_value}>
                                <span className={style.value}>$999</span>
                                <span className={style.month}>/month</span>
                            </div>
                            <p className={style.container4_para3}>Great for Small Businesses!</p>
                        </div>
                        <ul>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Up To 50 Keyword</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Monthly Reporting</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Technical SEO</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>One Time Website Redesign</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>24/7 priority support</span>
                            </li>
                        </ul>
                        <Link to='/contact' className={style.signup_btn}>Signup Now</Link>
                    </div>

                </div>
            </div>
            {/* pricing end */}
            <div className={style.container7}>
                <div className={style.container7_text}>
                    <p className={style.container7_para}>We Are Hear For You</p>
                    <h2 className={style.container7_htwo}>Let’s Get Back to Work</h2>
                    <p className={style.container7_subtitle}>Reach out to us today, and Let's start crafting your success story together.</p>
                </div>
                <div className={style.container7_btndiv}>
                    <Link to='/contact' className={style.container7_btn}>Read More</Link>
                </div>
            </div>
            {/* container 7 end */}
            <div className={style.container5}>
                <div className={style.container5_div}>
                    <p className={style.container4_para1}>Testimonials</p>
                    <h2 className={style.container4_hone}>Client Voices</h2>
                    <p className={style.container4_para2}>Discover what our satisfied clients have to say about their experiences with us, and why they trust us to fuel their digital success.</p>
                </div>
            </div>
            <div className={style.carousel}>
                <Carousal num={3} />
            </div>
            {/* carousel end */}
            <div>
                <div className={style.container6}>
                    <div className={style.container5_div}>
                        <p className={style.container4_para1}>Frequently Asked Questions</p>
                        <h2 className={style.container4_hone}>All that Need to Know</h2>
                    </div>
                </div>
                <div className={style.FAQS}>
                    <div >
                        <img className={style.faq} src={FAQ} alt="FAQ" />
                    </div>
                    <div className={style.wrapper}>
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
            </div>
        </>
    )
}
