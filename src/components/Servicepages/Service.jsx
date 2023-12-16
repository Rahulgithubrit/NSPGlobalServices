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
// import Accordation from '../Accordation'
import BannerImage from '../assets/Untitled design/3.png'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';

const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is design and development?',
        paragraph: `Design and development is the process of creating and managing a website or application; from concept to execution. Web design services (UI/UX) focus on the look, feel, and overall user experience. Website design services often involve scoping out what functionalities will be needed for the project as well as programming of applications, such as HTML5 or CSS. Website Development Services are typically oriented towards coding, configuring, deploying the project specifications and testing it for functionality. Professional web development services involve customizing websites with innovative strategies that align with specific business objectives like increasing ROI or brand reach. Customize web development involves building a site tailored to your organization's needs taking into consideration factors like target audience & search engine optimization. When searching for a best website development company/website design and development company/web design &development agency - ensure they provide high-quality tailor-made solutions that meet your individual requirements while offering invaluable advice along the way!`
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the different types of design and development services?',
        paragraph: `Design and development services encompass a range of activities, from corporate website development to customize web development. Professional web development services involve strategising, designing, developing and integrating solutions that result in the best user-experience possible. This involves using various technologies such as HTML5, CSS3 and JavaScript for designing & building interactive websites. Moreover, organizations can look towards web design & website design & development companies to help them achieve their desired results by providing comprehensive custom web development services. Additionally, developers should be well versed with topics such as responsive web design or what is website design & development in order to create the best website experience for users.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is design and development important for businesses?',
        paragraph: `Design and development are essential for businesses to maintain a competitive edge, create an attractive website, provide an excellent user experience, and build customer loyalty. A good website design improves usability, brand recognition, and accessibility. Development complements the design with back-end programming that enables the website to function properly. With professional web development services such as those provided by a best website development agency or a web development agency, you can ensure that your business benefits from optimized websites and web applications tailored to their needs. This will help them reach more customers as well as maximize their ROI through effective strategies like custom webdevelopment services, corporate website development ,web development solutions etc `
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I choose a design and development service provider?',
        paragraph: `When choosing a design and development service provider, it is important to consider the company's portfolio of services, expertise in your industry, pricing structure, customer reviews and testimonials. Additionally you should ask about their web design services, website design services and website development services to determine if they can handle custom web development for complex projects. Ask about their corporate websites portfolio to get an idea of what sort of strategy they use for web design & development services. Lastly make sure that you know what kind of website maintenance and support with customize web development solutions is included in their package.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is the difference between web design and web development?',
        paragraph: `Web design and web development are two essential components of a successful website. Web design, while also referred to as UX or UI design, involves building the look and feel of a website using graphic elements like images, fonts, colors and templates. On the other hand, web development consists of coding languages such as HTML/CSS and JavaScript that power the frontend (client-facing) side of a site; as well as backend technologies such as databases on the server which store information required by the site's functionalities. Professional web developers use various strategies - often in collaboration with web designers - to create feature-rich websites that meet client needs. To get the best result from these services you should go for experienced website design & development company or services provider like us – Best Website Development Company offering custom web development services, corporate website developments along with professional designing & developing solutions tailored specifically to your business goals.`
    },
    {
        id: 5,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is UI/UX design?',
        paragraph: `UI/UX design is the practice of creating user interfaces and user experiences that are both functional and intuitive. It combines aspects of visual design, web development, user experience (UX) research, interaction design, content strategy and usability testing to create products that provide an engaging and meaningful experience for users. Professional website design & development services companies use a variety of strategies to ensure their clients’ websites meet their business goals. These include custom web development services, corporate website development, website coding best practices and recent trends in web technologies such as Responsive Design. By leveraging these strategies, businesses can build top-notch websites with a good user interface / experience that will attract visitors from all over the globe.`
    },
    {
        id: 6,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is responsive design?',
        paragraph: `Responsive design is an approach to web development that focuses on creating websites which provide an optimal user experience, regardless of the device used to browse them. It ensures your website's appearance and functionality adjusts automatically based on the size of the device or screen being used, whether it be a laptop, tablet or mobile phone. The key techniques used in responsive design include adaptive layouts and media queries. A professional website design and development services will use these strategies when designing your website to ensure your visitors have an optimal viewing experience on any device they are using. This makes engaging with potential customers easier and more efficient for both parties.`
    },
    {
        id: 7,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is agile development?',
        paragraph: `Agile development is a methodology of software development that emphasizes incremental delivery, collaboration among cross-functional teams and self-organization. It facilitates an iterative approach to solving complex problems and encourages an agile workflow with a focus on flexibility and speed. Agile web design focuses on responding quickly to the needs of users, while ensuring high quality products through regular testing. Professional web development services include website design services such as customizing website layouts, creating color schemes and typography, adding visuals or videos; website development services such as coding HTML/CSS, writing frontend code in JavaScript & jQuery; corporate website development such as hosting websites on specific platforms or building custom frameworks ;and customize web development such as developing ecommerce sites or integrating third-party APIs.`
    },
    {
        id: 8,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What is a CMS?',
        paragraph: `A CMS (Content Management System) is a software application used to create, manage and modify digital content. It enables organizations to build feature-rich websites quickly and cost-effectively, while providing users with an intuitive user experience. Whether you’re looking for website design services or web development services from the best website development company, custom web development services from a website design & development company, or corporate website development strategies—a CMS simplifies the process. With customizable template designs and easy editing tools, businesses can enjoy full control over their content without needing detailed coding knowledge. Professional web development services companies offer comprehensive custom Web Development Services such as website design & development solutions, web design and developement agency services as well as comprehensive customize web devlopment packages at affordable rates - all tailored to meet your specific needs.`
    }
]
export default function Service() {
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
        <title>Professional Website Design & Development Services</title>
            <meta name="description" content="Our website design and development team specializes in creating custom, responsive websites. Explore our professional services and enhance your online brand." />
            <link rel="canonical" href="https://www.nspglobalservices.com/design-development"></link>
        </Helmet>
            <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(2px)', display:'flex',justifyContent:'center' }} alt="" />
                <h1 className={style.title}>Website Design & Development Services</h1>
                <p className={style.subtitle}>We specialize in providing top-notch website design and development services.</p>
            </div>
            {/* service end */}
            <div className={style.container2}>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img  src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>Digital Marketing</h2>
                        <p className={style.container2_para}>Our team of seasoned experts combines strategic thinking, innovative techniques, and advanced analytics to deliver outstanding results. From optimizing your website for higher visibility to devising engaging social media campaigns, we tailor our approach to your unique business needs.</p>
                        <Link to='/contact' className={style.container2_atag}><GoChevronRight />Read More</Link>
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img  src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>PPC Advertising</h2>
                        <p className={style.container2_para}>Supercharge your online growth with our results-driven PPC advertising services. Our team of skilled marketers will craft tailored campaigns, leveraging paid media platforms to maximize your brand's visibility and drive high-quality traffic to your website. Get ready to dominate the digital landscape and achieve your business goals with our expert PPC strategies.</p>
                        <Link to='/contact' className={style.container2_atag}><GoChevronRight />Read More</Link>
                    </div>
                </div>
                <div className={style.container2_1}>
                    <div className={style.container2_div}>
                        <img  src={icon_3} alt='icon' />
                        <h2 className={style.container2_htwo}>Creative Agency</h2>
                        <p className={style.container2_para}>Ignite your brand's creativity with our exceptional creative services. Our team of skilled professionals will breathe life into your ideas, delivering captivating designs, compelling content, and innovative strategies that will leave a lasting impression. Step into the spotlight and set your brand apart with our tailored creative solutions.</p>
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
                        <h6>Define Objectives</h6>
                        <p className={style.container3_para2}>We schedule a consultation to understand your business goals, target audience, and competition.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>2</div>
                        <h6>Wireframe Creation</h6>
                        <p className={style.container3_para2}>Our web design team creates a wireframe to plan out the site structure and functionality.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>3</div>
                        <h6>Design and Development</h6>
                        <p className={style.container3_para2}>Our web development team brings the website to life with custom web development services, incorporating the latest design trends and technology.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>4</div>
                        <h6>Testing and Launch</h6>
                        <p className={style.container3_para2}>We test the website to ensure all features are working smoothly before launching.</p>
                    </div>
                    <div className={style.process}>
                        <div className={style.number}>5</div>
                        <h6>Ongoing Support</h6>
                        <p className={style.container3_para2}>We provide ongoing support and maintenance to ensure your website is running optimally.</p>
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
                                <span className={style.list_contents}>150 keyphrases optimized</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>30 pages optimized</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>6 content, outreach, UX, or CRO assets per quarter</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Responsive Design</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Turnaround 3 Days</span>
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
                                <span className={style.list_contents}>200 keyphrases optimized</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>40 pages optimized</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>12 content, outreach, UX, or CRO assets per quarter</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Turnaround 4 Days</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Responsive Design</span>
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
                                <span className={style.list_contents}>300 keyphrases optimized</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>60 pages optimized</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>24 content, outreach, UX, or CRO assets per quarter</span>
                            </li>
                            <li className={style.list_items}>
                                <img src={check} alt='check' className={style.check_img} />
                                <span className={style.list_contents}>Turnaround 7 Days</span>
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
                    <img  className={style.faq} src={FAQ} alt="FAQ" />
                </div>
                <div className={style.wrapper}>
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
            </div>
        </>
    )
}
