import React, { useEffect, useState } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
import style from './about.module.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import img_one from '../assets/shape-one.png'
import img_two from '../assets/shape-two.png'
import icon1 from '../assets/icon-1.png'
import icon2 from '../assets/icon-2.png'
import about from '../assets/about.png'
import about_video from '../assets/about-video.png'
import { BsPlayFill /*, BsFacebook, BsWhatsapp, BsInstagram, BsTwitter*/ } from 'react-icons/bs'
import Accordation from '../Accordation'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
// import team1 from '../assets/team-1.png'
// import team2 from '../assets/team-2.png'
// import team3 from '../assets/team-3.png'
// import team4 from '../assets/team-4.png'
// import { } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/Untitled design/1.png'
import { Helmet } from 'react-helmet';

export default function About() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
    }, []);
    const [counter, setCounter] = useState(false)
    return (
        <>
       <Helmet>
                <title>About NSP: Your Trusted Digital Marketing Partner</title>
                <meta name="description" content="Discover NSP, a leading digital marketing agency dedicated to propelling your brand to new heights. Learn about our passion, expertise, and the team behind our success." />
                <link rel="canonical" href="https://www.nspglobalservices.com/about"/>
            </Helmet>
        <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(1px)' }} alt="" />
                <h1 className={style.title}>About Us</h1>
                <p className={style.subtitle}>Our team is always committed to success - both individually and collectively.</p>
            </div>
            {/* About end */}
            <div className={style.About_container_2} >
            <div className={style.container2}>
                <div className={style.container2_1}>
                    <div className={style.img_one} >
                        <img src={img_one} className={style.Image_one}  alt='icons' />
                    </div>
                    <div className={style.img_two}>
                        <img src={img_two} className={style.Image_Two}  alt='icons' />
                    </div>
                    <div className={style.about} data-aos="zoom-in-down" data-aos-offset="200">
                        <img src={about}  className={style.about_img} alt='icons' />
                    </div>
                    <div className={style.iconsone} data-aos="flip-left" data-aos-duration="2000" data-aos-offset="200">
                        <div className={style.icon1}>
                            <img src={icon1}  alt='icons' />
                        </div>
                    </div>
                    <div className={style.iconstwo} data-aos="flip-right" data-aos-duration="2000" data-aos-offset="200">
                        <div className={style.icon2}>
                            <img src={icon2}  alt='icons' />
                        </div>
                    </div>
                    <div className={style.circle} data-aos="flip-up" data-aos-duration="200" data-aos-offset="100">
                        <span className={style.circle_number}>23</span>
                        <span className={style.circle_text}>Years in the <br /> Success</span>
                    </div>
                </div>
            </div>
            <div className={style.paragraphs} data-aos="fade-up" data-aos-offset="200">
                <h1 className={style.hone}>
                    We Work to Ensure Your Success
                </h1>
                <h3 className={style.hthree}>
                We are reliable and consistent with our deadlines, consistently meeting or exceeding expectations.
                </h3>
                <h4 className={style.hfour}>
                We comprise a collective of committed individuals united by a common purpose: to deliver cutting-edge digital marketing solutions empowered by technology, enabling businesses to unleash their utmost potential. Our ardor for this dynamic realm resonates profoundly, fueling our sense of accomplishment with each endeavor.
                </h4>
                <Link to='/contact' className={style.btn}>Read More</Link>
            </div>
            </div>
            
            {/* icons and images section end */}
            <div className={style.container3} >
                <div className={style.progress} data-aos="zoom-in-right" data-aos-offset="100">
                    <h1 className={style.container3_hone}>We Work to Help You Grow</h1>
                    <h2 className={style.container3_htwo}>Whether SEO optimization or social media management, we pour our hearts into every task. We genuinely believe in the power of digital marketing and its ability to transform businesses - and this belief drives us forward every day.</h2>
                </div>
                <div className={style.progress_area}>
                    <p className={style.progress_title}>Website Development</p>
                    <div className={style.progress_range}><div className={style.progress_range_value} ></div></div>
                    <span className={style.progress_number}>78%</span>
                    <p className={style.progress_title}>Digital Marketing</p>
                    <div className={style.progress_range}><div className={style.progress_range_value} style={{ width: '88%' }}></div></div>
                    <span className={style.progress_number}>88%</span>
                    <p className={style.progress_title}>Search Engine Optimization</p>
                    <div className={style.progress_range}><div className={style.progress_range_value} tyle={{ width: '65%' }}></div></div>
                    <span className={style.progress_number}>65%</span>
                </div>
            </div>
            {/* progress part end */}
            <div className={style.container4}>
                <div className={style.container4_img}>
                    <img src={about_video}  alt='about_video' />
                </div>
                <div className={style.video_btn}>
                    <a href='https://player.vimeo.com/video/172601404?autoplay=1'><BsPlayFill color='white' size={50} /></a>
                </div>
                <div className={style.title_div}>
                    <h2 className={style.container4_subtitle}>We Work to Help You Grow</h2>
                    <p className={style.container4_para}>At NSP, we believe every business deserves the opportunity to succeed online. That's why we strive to deliver exceptional services that cater to each client's unique needs.  </p>
                </div>
                <div className={style.accordation}>
                    <Accordation />
                </div>
            </div>
            {/* accordion end */}
            <div>
                <div className={style.container5}>
                    <ScrollTrigger onEnter={() => { setCounter(true) }} onExit={() => { setCounter(false) }} >
                        <div className={style.container5_div1} data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
                            {counter && <CountUp className={style.count_number} start={0} end={120} duration={1} delay={0} />}
                            <span className={style.plus}>+</span>
                            <p className={style.container5_ptag}>Total <br /> Countries</p>
                        </div>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={() => { setCounter(true) }} onExit={() => { setCounter(false) }} >
                        <div className={style.container5_div1} data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
                            {counter && <CountUp className={style.count_number} start={0} end={200} duration={1} delay={0} />}
                            <span className={style.plus}>+</span>
                            <p className={style.container5_ptag}>WorldWide <br />Companies</p>
                        </div>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={() => { setCounter(true) }} onExit={() => { setCounter(false) }} >
                        <div className={style.container5_div1} data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
                            {counter && <CountUp className={style.count_number} start={0} end={50} duration={1} delay={0} />}
                            <p className={style.k}> K</p>
                            <span className={style.plus}>+</span>
                            <p className={style.container5_ptag}>Yearly<br />Revinew</p>
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
            {/* counting end */}
            {/* <div className={style.container6}>
                <div className={style.container6_title}>
                    <p className={style.container6_subtitle}>Team Members</p>
                    <h2 className={style.container6_htwo}>Our Team Members</h2>
                    <p className={style.container6_para}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. when the musics over turn off the light</p>
                </div>

                <div className={style.team_card1} data-aos="fade-up">

                    <img className={style.team_img} src={team1} alt='team' />
                    <div className={style.facebook_icon}> <BsFacebook size={30} color='white' style={{ paddingTop: '15px' }} /> <BsWhatsapp size={30} color='green' style={{ paddingTop: '15px' }} /><BsInstagram size={30} style={{ paddingTop: '15px' }} /><BsTwitter size={30} color='#add8e6' style={{ paddingTop: '15px' }} /></div>

                    <div className={style.team_details}>
                        <h5 className={style.team_name}>Jewel Hafiz</h5>
                        <p className={style.team_work}>Founder & CEO</p>
                    </div>
                </div>
                <div className={style.team_card2} data-aos="fade-up">
                    <img className={style.team_img} src={team2} alt='team' />
                    <div className={style.facebook_icon}> <BsFacebook size={30} color='white' style={{ paddingTop: '15px' }} /> <BsWhatsapp size={30} style={{ paddingTop: '15px' }} color='green' /><BsInstagram size={30} style={{ paddingTop: '15px' }} /><BsTwitter size={30} color='#add8e6' style={{ paddingTop: '15px' }} /></div>
                    <div className={style.team_details}>
                        <h5 className={style.team_name}>Jenny Alex</h5>
                        <p className={style.team_work}>Founder & CEO</p>
                    </div>
                </div>
                <div className={style.team_card3} data-aos="fade-up">
                    <img className={style.team_img} src={team3} alt='team' />
                    <div className={style.facebook_icon} > <BsFacebook size={30} color='white' style={{ paddingTop: '15px' }} /> <BsWhatsapp size={30} color='green' style={{ paddingTop: '15px' }} /><BsInstagram size={30} style={{ paddingTop: '15px' }} /><BsTwitter size={30} color='#add8e6' style={{ paddingTop: '15px' }} /></div>
                    <div className={style.team_details}>
                        <h5 className={style.team_name}>John Pretty</h5>
                        <p className={style.team_work}>Founder & CEO</p>
                    </div>
                </div>
                <div className={style.team_card4} data-aos="fade-up">
                    <img className={style.team_img} src={team4} alt='team' />
                    <div className={style.facebook_icon}> <BsFacebook size={30} color='white' style={{ paddingTop: '15px' }} /> <BsWhatsapp size={30} color='green' style={{ paddingTop: '15px' }} /><BsInstagram size={30} style={{ paddingTop: '15px' }} /><BsTwitter size={30} color='#add8e6' style={{ paddingTop: '15px' }} /></div>
                    <div className={style.team_details}>
                        <h5 className={style.team_name}>Catherin Betty</h5>
                        <p className={style.team_work}>Founder & CEO</p>
                    </div>
                </div>
            </div> */}
            {/* team mamber end */}
            <div className={style.container7}>
                <div className={style.container7_text}>
                    <p className={style.container7_para}>We Are Here For You</p>
                    <h2 className={style.container7_htwo}>Let’s Get Back to Work</h2>
                    <p className={style.container7_subtitle}>Gom ad minim veniam, quis nostrud exercitation ullamco labor is tetur adip isicing elit, sed do eiusmod</p>
                </div>
               <div className={style.container7_btndiv}>
                <Link to='/contact' className={style.container7_btn}>Read More</Link>
                </div>
            </div>
            {/* container7 end */}
            <div className={style.brandsnames} style={{ display: 'flex', position: 'relative', overflow: 'hidden', marginTop: '100px' }}>
                <div className={style.container_11}>
                    <div className={style.container_11_img1}></div>
                    <div className={style.container_11_img2}></div>
                    <div className={style.container_11_img3}></div>
                    <div className={style.container_11_img4}></div>
                    <div className={style.container_11_img5}></div>
                </div>
                <div className={style.container_11}>
                    <div className={style.container_11_img1}></div>
                    <div className={style.container_11_img2}></div>
                    <div className={style.container_11_img3}></div>
                    <div className={style.container_11_img4}></div>
                    <div className={style.container_11_img5}></div>
                </div>
            </div>
        </>
    )
}
