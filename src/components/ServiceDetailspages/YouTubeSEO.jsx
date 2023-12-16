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
import BannerImage from '../assets/Automotive/YouTube SEO.png'
import endImages2 from '../assets/YouTube SEO/12_20230821_193358_0001.png'
import SEO from '../assets/YouTube SEO/11_20230821_193358_0000.png'
import endImages1 from '../assets/YouTube SEO/13_20230821_193358_0002.png'
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
        statement: 'What is YouTube SEO?',
        paragraph: 'YouTube SEO is a process of optimizing both on-page and off-page elements to make your YouTube videos more visible in the organic search results. This includes using techniques such as setting titles, tags, descriptions, and other relevant transcripts; promotion of content; building relationships with influencers; conducting keyword research for further optimization; implementing backlinks to improve ranking among other strategies.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why is YouTube SEO important?',
        paragraph: `YouTube SEO is an essential part of getting your content seen. It involves optimizing the relevant keywords that people may search for to find your video or channel, as well as ensuring your videos are optimized and have a good user engagement rate. `
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How is YouTube SEO different from traditional SEO?',
        paragraph: `YouTube SEO is different from traditional SEO because it involves optimizing for the algorithms of a search engine, YouTube's own. It also requires factors specific to video content, such as including relevant keywords in titles and descriptions, using thumbnails that are aesthetically pleasing and eye-catching, increasing watch time by creating longer videos with subtitles & transcripts, promoting on social media channels to gain followers & channel subscribers, etc. `
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are some best practices for YouTube SEO?',
        paragraph: `When it comes to YouTube SEO, there are some key best practices you'll want to keep in mind. Start by optimizing your channel — use relevant keywords, include an interesting and informative description, be sure to optimize titles and descriptions for each video on the channel. Additionally, create consistent content with engaging videos based off of keyword research, link back to other videos or channels as much as possible and leverage playlists for ranking purposes. Finally, don’t forget about tagging; use important search engine optimization tags in order to get more organic reach for your channel or video. Utilizing all of these strategies can help to substantially improve your YouTube rankings and gain a larger viewership!`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How can I optimize my video titles and descriptions for YouTube SEO?',
        paragraph: `Optimizing your YouTube video titles and descriptions for SEO is key to improving your ranking in search results. Start by including relevant keywords within the title, description, and tags that are related to your content. Additionally, utilizing backlinks to other videos or external sources can also help increase visibility with search engine algorithms. Finally, make sure you're consistently creating quality content and engaging with viewers on a regular basis | this will set you up for success!`
    }
]

export default function YouTubeSEO() {
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
        <title>Expert YouTube SEO Company | Rank Higher and Grow Your Channel</title>
            <meta name="description" content='NSP provides affordable YouTube SEO Services online. Our YouTube optimisation services assist your company (and its channel) in increasing views, likes, comments, and subscribers while also increasing brand awareness.' />
            <link rel="canonical" href="https://www.nspglobalservices.com/seo-services/youtube-seo"/>
        </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title} id={style.titleblack}>YouTube SEO Services</h1>
                <p className={style.subtitle} id={style.titleblack}>Maximize Your Reach with Powerful YouTube SEO Services</p>
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/international-seo" className={style.container2_atag}>International SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/seo-consultancy" className={style.container2_atag}>SEO Consultancy</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/shopify-seo" className={style.container2_atag}>Shopify SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/on-page-seo" className={style.container2_atag}>On-Page SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/technical-seo" className={style.container2_atag}>Technical SEO</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/seo-services/link-building-services" className={style.container2_atag}>Link Building Services</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>YouTube is undeniably one of the most popular social media platforms, with a user base of over 2 billion active monthly users worldwide. Amid this cut-throat competition, optimizing your videos for YouTube search engine optimization (SEO) is crucial to cut through the noise and get your content noticed.</p>
                    <p>In the highly competitive world of online video content, optimizing your videos for YouTube search engine optimization (SEO) is essential to stand out and gain visibility. Our YouTube SEO services provide a comprehensive solution to all your video optimization needs, saving you time and effort while maximizing your reach and engagement. Our YouTube SEO services offer a turn-key solution, handling all aspects of video optimization. This allows you to focus on other essential elements of your business while we optimize your videos.</p>
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
                            <h4>Comprehensive Video Optimization</h4>
                        </div>
                        <p>Our team covers all aspects of video optimization, including keyword research and optimizing video thumbnails, titles, descriptions, and tags. We leave no stone unturned to ensure your videos rank higher in YouTube search results.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Video Production Services</h4>
                        </div>
                        <p> We offer video production services to help you create engaging and compelling videos for your channel. Quality content plays a vital role in attracting and retaining viewers.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4> Comprehensive Video Optimization</h4>
                        </div>
                        <p>We conduct in-depth keyword research to identify target keywords and optimize your video content accordingly. This includes optimizing video thumbnails, titles, descriptions, and tags to increase visibility and click-through rates.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Data-driven Analysis and Reporting</h4>
                        </div>
                        <p>This allows you to make informed decisions, understand audience behaviour, and refine your video marketing approach.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Are you prepared to elevate your YouTube channel to new heights?Let’s chat.</p>
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
                                <span><strong>Expanded Outreach:</strong>This expands your outreach and helps you engage with a broader community. We have a dedicated team specializing in various aspects of video optimization. With their expertise, you can expect significant improvements in your channel's visibility, reach, and engagement.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Engagement:</strong>Optimized videos increase engagement, including increased views, likes, comments, and subscriptions. This boosts your channel's credibility and encourages further interaction.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved Brand Image and Awareness:</strong>Successful YouTube SEO services increase your visibility to a broader audience, enhancing your brand image and awareness. It also drives traffic to your website, further strengthening your online presence.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><storng>Transparent Reporting and Analytics:</storng>We provide comprehensive reporting on our efforts and results, keeping you informed about the progress and growth of your YouTube channel. This transparency allows you to track the effectiveness of our services.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Conclution:</strong>With our YouTube SEO services, you can unlock the full potential of your YouTube channel. Our experienced team of experts will optimize your videos, improve visibility, and drive engagement. Whether it's keyword research, video production, or channel optimization, we have you covered. Contact us today for a free consultation and take your YouTube presence to new heights.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} target='_blank' download='Nsp'>Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} target='_blank' download='NspMainPdf'>Download Word File</Link>
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
