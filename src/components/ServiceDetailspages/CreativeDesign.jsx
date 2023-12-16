import React, { useEffect } from 'react'
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
import BannerImage from '../assets/Untitled design/2.png'
import endImages2 from '../assets/SEO services/photo_2023-06-23_01-33-12.jpg'
import endImages1 from '../assets/SEO services/DigitalMarketing.jpg'
import SEO from '../assets/SEO services/SEO Services.jpg'
import style from './servicedetails.module.css'
import {Link} from 'react-router-dom'
import form from '../assets/whatsappchat/form.pdf'
import newpdf from '../assets/whatsappchat/NewPdf.pdf'
import { Helmet } from 'react-helmet'

export default function CreativeDesign() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
         <Helmet>
        <title>Elevate Your Brand with Our Expert Creative Design Services</title>
        <meta name="description" content="Explore a world of design possibilities with our expert creative services. From concept to execution, we turn ideas into captivating visuals that resonate with your audience." />
        <link rel="canonical" href="https://www.nspglobalservices.com/creative-design" />
      </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Creative Design</h1>
                {/* <p className={style.subtitle}>Sed do eiusmod tempor incididunt ut labore et when the musis dolore magna aliqua.</p> */}
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
                    <h1>Overview</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
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
                    <h1 className={style.container2div5_hone}>Key Factors</h1>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Business Automation</h4>
                        </div>
                        <p>Duis aute irure dolor in reprehenderit in voluptate orro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Business Automation</h4>
                        </div>
                        <p>Duis aute irure dolor in reprehenderit in voluptate orro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Business Automation</h4>
                        </div>
                        <p>Duis aute irure dolor in reprehenderit in voluptate orro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img  src={icon7} alt="icon" />
                            <h4>Business Automation</h4>
                        </div>
                        <p>Duis aute irure dolor in reprehenderit in voluptate orro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia</p>
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
                    <h3>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img  src={arrow} alt="arrow" />
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</span>
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
        </>
    )
}
