import React from 'react'
import style from './HomeTwo.module.css'
// import { Helmet } from 'react-helmet';
import bannerImage from '../assets/Digital Marketing/IMG-20231116-WA0001.jpg'
import Icons1 from '../assets/Home Two/IMG-20231207-WA0009.jpg'
import Icons2 from '../assets/Home Two/IMG-20231207-WA0010.jpg'
import Icons3 from '../assets/Home Two/IMG-20231207-WA0011.jpg'
import Icons4 from '../assets/Home Two/IMG-20231207-WA0012.jpg'
import { GoChevronRight } from 'react-icons/go'
import icon_3 from '../assets/icon-3.png';
import { Link } from 'react-router-dom'
import Toolsnames from '../Pages/Toolsnames'
import Carousal from '../Carousal'

function HomeTwo(props) {
  return (
    <>
      {/* <Helmet>
        <title>NSP Global Services | Expert Digital Marketing for Revenue Growth</title>
        <meta name="description" content="NSP: The digital marketing agency that's generated $5 billion+ in revenue for clients. Read 1020+ glowing reviews here." />
        <link rel="canonical" href="https://www.nspglobalservices.com/" />
      </Helmet> */}
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>{props.h1}</h1>
        </div>
      
      </div>
      <div className={style.container}>
        <div >
          <img src={bannerImage} alt='bannerImage' className={style.bannerimage} />
        </div>
        <div className={style.bannerForm}>
          <h2>Get Your Free Quote</h2>
          <form className={style.Form} action="https://formsubmit.co/nspglobalservices@gmail.com" method="POST" >
            <input className={style.inputs} type="text" name='name' required placeholder='Your Name' />
            <input className={style.inputs} type="email" name='email' required placeholder='Email Address' />
            <input className={style.inputs} type="url" name='url' required placeholder='Your Website Url' />
            <input type="hidden" name="_template" value="table"></input>
            <button className={style.FormButton} type='submit'>Submit</button>
          </form>
        </div>
      </div>
      {/* container 2 */}
      <div className={style.container2}>
        <div className={style.container2_1}>
          <div className={style.container2_div}>
            <img src={icon_3} alt='icon' />
            <h2 className={style.container2_htwo}>SEO</h2>
            <p className={style.container2_paraSEO}>Enhance your online footprint with strategic SEO solutions. From optimizing your site for improved rankings to driving targeted traffic, our experts ensure your brand stands out in the digital arena. Our holistic SEO solutions not only boost your website's search engine rankings but also ensure a comprehensive online presence that captivates your audience.</p>
            <Link to='/seo-services' className={style.container2_atag}><GoChevronRight />Read More</Link>
          </div>
        </div>
        <div className={style.container2_1}>
          <div className={style.container2_div}>
            <img src={icon_3} alt='icon' />
            <h2 className={style.container2_htwo}>Social Media Marketing (SMM)</h2>
            <p className={style.container2_paraSEO}>Crafting compelling social narratives, we ensure your brand captivates audiences. Our strategic and data-driven SMM approaches boost online visibility and drive conversions, making your brand an online sensation. Grow your brand with our holistic SMM services that seamlessly integrate strategy, creativity, and engagement for a social presence that truly stands out.</p>
            <Link to='/design-development' className={style.container2_atag}><GoChevronRight />Read More</Link>
          </div>
        </div>
        <div className={style.container2_1}>
          <div className={style.container2_div}>
            <img src={icon_3} alt='icon' />
            <h2 className={style.container2_htwo}>Pay-Per-Click Advertising (PPC)</h2>
            <p className={style.container2_paraSEO}>Make each click count with our precision-focused PPC strategies. From strategic ad placements to compelling content, trust our experts to ensure your ad spend yields lasting impact and drives conversions.Our holistic PPC approach ensures your ad spend delivers maximum impact, driving targeted traffic and achieving optimal returns through strategic placements and compelling content.</p>
            <Link to='/ppc-services' className={style.container2_atag}><GoChevronRight />Read More</Link>
          </div>
        </div>
        <div className={style.container2_1}>
          <div className={style.container2_div}>
            <img src={icon_3} alt='icon' />
            <h2 className={style.container2_htwo}>Content Marketing</h2>
            <p className={style.container2_paraSEO}>Crafting brand stories that resonate, we go beyond words. Our creative and strategic content approach ensures every piece matters, building connections, and elevating your brand in the digital space. Trust our storytelling expertise for brand advocacy. Our holistic content marketing services go beyond words; we craft compelling narratives that resonate with your audience, driving engagement, trust, and conversion</p>
            <Link to='/content-marketing-services' className={style.container2_atag}><GoChevronRight />Read More</Link>
          </div>
        </div>
      </div>
      {/* container 3 */}
      <div className={style.container_3}>
        <div className={style.container_3_div1}>
          <h2 className={style.container_3_H2}>Why Our Clients Continue to Prefer us</h2>
          <p className={style.container_3_para}>Increase your online presence and drive success with NSP's comprehensive digital marketing services. Benefit from increased visibility, lead generation, and revenue growth.</p>
        </div>
        <div className={style.cardContainer}>
          <div className={style.card} >
            <img src={Icons1} alt='Icons1' className={style.cardimg} />
            <h2 className={style.cardTitle}>Client Loyalty</h2>
            <p className={style.cardPara}><strong>Client Loyalty Building:</strong>Beyond immediate gains, we prioritize long-term success by fostering client loyalty through personalized approaches and customer-centric strategies.</p>
          </div>
          <div className={style.card} >
            <img src={Icons2} alt='Icons2' className={style.cardimg} />
            <h2 className={style.cardTitle}>Maximize Booking</h2>
            <p className={style.cardPara}><strong>Booking Rate Optimization:</strong>We focuse on converting leads into customers through compelling creatives, strategic targeting, and effective conversion optimization techniques</p>
          </div>
          <div className={style.card} >
            <img src={Icons3} alt='Icons3' className={style.cardimg} />
            <h2 className={style.cardTitle}>Ad Spending</h2>
            <p className={style.cardPara}><strong>Smart Ad Spending:</strong>We excel in strategic ad spending, channeling resources where they matter most to generate optimum visibility, leads, and conversions for your business.</p>
          </div>
          <div className={style.card} >
            <img src={Icons4} alt='Icons4' className={style.cardimg} />
            <h2 className={style.cardTitle}>Market ROI</h2>
            <p className={style.cardPara}><strong>High ROI Expertise:</strong> We ensure a top-notch Return on Investment (ROI) by crafting targeted strategies that maximize the impact of every marketing dollar.</p>
          </div>
        </div>
      </div>
      {/* toolsname */}
     <div className={style.tools}>
     <h3>Tools that we use</h3>
      <div className={style.toolsname}> <Toolsnames /></div>
     </div>
      {/* testimonials  */}
      <div className={style.container5}>
                <div className={style.container5_div}>
                    <p className={style.container4_para1}>Testimonials</p>
                    <h2 className={style.container4_hone}>What People Say</h2>
                    {/* <p className={style.container4_para2}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. when the musics over turnoff the light</p> */}
                </div>
            </div>
            <div className={style.carousel}>
                <Carousal num={3} />
            </div>
    </>
  )
}

export default HomeTwo;