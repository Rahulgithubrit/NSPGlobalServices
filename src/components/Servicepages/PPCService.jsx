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
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';

const data = [
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How is the success of a PPC campaign measured?',
        paragraph: `The success of a PPC (Pay-Per-Click) campaign can be measured in several ways. These include identifying goals aligned with your business objectives and setting measurable KPIs to track performance. Key metrics to consider include impression share, click through rate (CTR), cost per acquisition, cost per click (CPC), quality score, and return on ad spending (ROAS). Additionally, you can use analytics tools to further monitor progress and optimize campaigns based on user engagement or market trends.`
    }, {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I choose a PPC service provider?',
        paragraph: `Choosing the right PPC service provider is not a task you should take lightly. The first step in choosing your provider involves understanding what exactly PPC is - Pay Per Click (PPC) is an online advertising model used to direct traffic to websites where advertisers pay when their ad is clicked. When selecting a PPC service provider, consider factors such as experience in the industry, customer reviews and testimonials, and specific services offered. Talk to multiple potential providers before settling on one to make sure they are capable of delivering on their promises and that they understand your marketing goals.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is PPC advertising?',
        paragraph: 'PPC (Pay-Per-Click) is an online advertising model used to drive traffic to websites, in which advertisers pay a fee each time their ad is clicked. It is a form of digital marketing where you can create campaign ads and display them on search engine platforms like Google, Bing, and Yahoo!, as well as other sites like social media networks. The advertiser will pay for each click made on the ad. PPC campaigns are tailored for different audiences based on your budget and desired goal outcomes; from driving website visits and leads to sales or material downloads etc. With PPC services such as Keyword Research, Ad Copywriting, Landing Page Optimization & Retargeting available through specialized PPC agencies or individual freelancers; it has become an important part of any business’s online presence today!'
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are PPC services?',
        paragraph: `PPC (Pay-Per-Click) is a form of digital marketing where advertisers pay a fee each time their ad is clicked. It's an effective way to drive traffic to your website and generate leads quickly. PPC services can include creating ads, running campaigns, setting budgets and bidding strategies, monitoring results and optimizing campaigns. Furthermore, they provide features such as keyword research, A/B testing, targeting audiences at different stages of the customer journey and remarketing to further optimize campaigns for better results.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why do I need PPC services?',
        paragraph: `PPC (Pay-Per-Click) services provide a way for businesses to advertise their products and services with targeted keywords, in order to target the right audience. Through this method of digital marketing, companies can control how much they spend on each click, thus enabling them to optimize their campaigns based on results. PPC services also enable businesses to track impressions and conversions, as well as manage bids and budgeting plans online. As such, PPC services are an invaluable tool when it comes to driving leads and sales online. `
    },
    {
        id: 6,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What platforms are used for PPC advertising?',
        paragraph: `PPC (Pay Per Click) advertising is a digital marketing strategy where advertisers pay for each click on their ads. Popular platforms used for PPC advertising are Google Ads, Microsoft Advertising and Facebook Ads. They offer great targeting options and advertise both search results and website content. Other companies that provide PPC services include Yahoo Ads, LinkedIn Ads, Quora Ads, Bing Ads and Amazon Advertising among many others. These platforms offer various options to customize campaigns through detailed targeting criteria to ensure efficient delivery of ads with maximum returns on investment.`
    }
]

export default function PPCService() {
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
            <title>Results-Driven PPC Services | Drive Sales Effectively</title>
            <meta name="description" content="Maximize ROI with NSP's expert PPC management. Accelerate your sales and lead generation efforts—get a free quote!." />
            <link rel="canonical" href="https://www.nspglobalservices.com/ppc-services"/>
        </Helmet>
            <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)', display:'flex',justifyContent:'center' }} alt="" />
                <h1 className={style.title}>Sales-Driven PPC Services: Strategies for Success</h1>
                <p className={style.subtitle}>PPC Marketing Services: Unlocking Your Business's Potential</p>
            </div>
            {/* service end */}
            <div className={style.container2}>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img  src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>Digital Marketing</h2>
                        <p className={style.container2_para}>Supercharge your business growth with our cutting-edge digital marketing strategies. From crafting compelling content to implementing result-driven SEO techniques, we offer a full suite of services to boost your online presence, increase brand awareness, and drive qualified leads. With our expertise and a data-centric approach, we'll help you navigate the digital landscape and achieve exceptional marketing ROI.</p>
                        <Link to='/contact' className={style.container2_atag}><GoChevronRight />Read More</Link>
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img  src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>Website Development</h2>
                        <p className={style.container2_para}>Get ready to elevate your digital presence and engage your audience like never before.Stand out from the crowd with our professional website development services. Our team of experienced designers and developers will collaborate closely with you. Contact us today to embark on your website development journey with us.</p>
                        <Link to='/contact' className={style.container2_atag}><GoChevronRight />Read More</Link>
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img  src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>SEO Advertising</h2>
                        <p className={style.container2_para}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <Link to='/contact' className={style.container2_atag}><GoChevronRight />Read More</Link>
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img  src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>Creative Agency</h2>
                        <p className={style.container2_para}>Unlock your brand's creative potential with our innovative and strategic creative services. Our talented team of designers, writers, and strategists will collaborate closely with you to bring your vision to life. From stunning visual designs to compelling content, we'll help you make a lasting impact and stand out in today's competitive landscape.</p>
                        <Link to='/contact' className={style.container2_atag}><GoChevronRight />Read More</Link>
                    </div>
                </div>
            </div>
            {/*detail Section end  */}
            <div className={style.container3_PPC}>
                <div className={style.container3_div1}>
                    <p className={style.container3_para1}>PROCESS</p>
                    <h2 className={style.container3_hone}>How We Work to Bring the Best</h2>
                    <p className={style.container3_para2}>Ut enim ad minim veniam, quis nostrud exercitation ullamco labor is tetur adipisicing elit, sed do eiusmod</p>
                </div>
                <div className={style.container3_div2}>
                    <div className={style.process}>
                        <div className={style.number}>1</div>
                        <h6>Superior Tools and Analytics</h6>
                        <p className={style.container3_para2}>We use advanced analytics tools to monitor and track your campaign's performance in real-time. This allows us to make data-driven decisions and optimize your campaign for maximum ROI.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>2</div>
                        <h6>Guaranteed Results</h6>
                        <p className={style.container3_para2}>Our PPC campaigns are designed to generate fast results and drive targeted traffic to your website. We guarantee to deliver results that will exceed your expectations. </p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>3</div>
                        <h6>Data-Driven Optimizations</h6>
                        <p className={style.container3_para2}>We conduct ongoing A/B testing and use data-driven optimization techniques to make sure your campaign is always performing at its best.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>4</div>
                        <h6>Comprehensive Reporting</h6>
                        <p className={style.container3_para2}>We provide weekly and monthly campaign reporting and analysis to keep you informed about your campaign's progress.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>5</div>
                        <h6>Industry-Leading Specialists</h6>
                        <p className={style.container3_para2}> Our team of certified Google Ads experts has the skills and expertise to create a customized PPC campaign that will drive results for your business..</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>6</div>
                        <h6>Customer-Centric Service</h6>
                        <p className={style.container3_para2}>We offer dedicated account managers to oversee your campaign and provide 24/7 customer support to ensure your satisfaction..</p>
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
                            <h5 className={style.container4_hfive}>Package 2</h5>
                            <div className={style.pricing_value}>
                                <span className={style.value}>$149</span>
                                <span className={style.month}>/month</span>
                            </div>
                            <p className={style.container4_para3}>Entry Level PPC Manegement</p>
                        </div>
                        <ul>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>$100 – $5,000/month ad spend (paid to networks)</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>2,000 keywords</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>No Setup Fees</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Creation Of Ad Copy</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>24/7 priority support</span>
                            </li>
                        </ul>
                        <Link to='/contact' className={style.signup_btn}>Signup Now</Link>
                    </div>
                    <div className={style.pricing}>
                        <div className={style.pricing_rate}>
                            <h5 className={style.container4_hfive}>Package 2</h5>
                            <div className={style.pricing_value}>
                                <span className={style.value}>$299</span>
                                <span className={style.month}>/month</span>
                            </div>
                            <p className={style.container4_para3}>Small Business PPC Manegement</p>
                        </div>
                        <ul>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>$5,000 – $30,000/month ad spend (paid to networks)</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>10,000 keywords</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Google Text Ad</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>No Setup Fees</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Google PPC Network</span>
                            </li>
                        </ul>
                        <Link to='/contact' className={style.signup_btn}>Signup Now</Link>
                    </div>
                    <div className={style.pricing}>
                        <div className={style.pricing_rate}>
                            <h5 className={style.container4_hfive}>Package 3</h5>
                            <div className={style.pricing_value}>
                                <span className={style.value}>$499</span>
                                <span className={style.month}>/month</span>
                            </div>
                            <p className={style.container4_para3}>Advance PPC Manegement</p>
                        </div>
                        <ul>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>$30,001+/monthly ad spend (paid to networks)</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>10,000 keywords</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Text & Display Ad's</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>No Setup Fees</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Google Ad Compaign</span>
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
                        <img  className={style.faq} src={FAQ} alt="FAQ" />
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
