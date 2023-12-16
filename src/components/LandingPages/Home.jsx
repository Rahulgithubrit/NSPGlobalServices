import React from 'react'
import { useEffect, useState } from 'react'
import style from '../LandingPages/home.module.css'
import img3 from '../assets/circle-three.png'
import img4 from '../assets/circle-four.png'
import img6 from '../assets/circle-six.png'
import img from '../assets/Home/24_20231024_191351_0000.png'
import icon13 from '../assets/icon-14.png'
import about31 from '../assets/Home page/NSP Growth Strategy.jpg'
import about32 from '../assets/Home page/Content Strategy.jpg'
import icon3 from '../assets/icon-3.png'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import AOS from 'aos'
import "aos/dist/aos.css";
import icon17 from '../assets/icon-17.png'
import portfolio2 from '../assets/Home page/20230715_194354_0003.png'
import portfolio3 from '../assets/Home page/20230715_194354_0000.png'
import portfolio4 from '../assets/Home page/20230715_194755_0000.png'
import portfolio1 from '../assets/Home page/20230715_194354_0001.png'
import about4 from '../assets/about-video-4.png'
import check from '../assets/check.png'
import icon23 from '../assets/icon-23.png'
import badge from '../assets/badge.png'
import boost from '../assets/Home page/20230715_194354_0002.png'
import boost2 from '../assets/Home page/photo_2023-07-16_23-00-42.jpg'
// import blog31 from '../assets/Home page/photo_2023-07-14_21-41-20.jpg'
// import blog32 from '../assets/Home page/photo_2023-07-14_21-41-56.jpg'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import { Link } from 'react-router-dom'
import div9img from '../assets/Home page/Website Development.jpg'
// import HomePageBlogCard from '../Pages/HomePageBlogCard'
import { Helmet } from 'react-helmet'
import TrustedCompaniesLogo from '../Pages/TrustedCompaniesLogo'
import Toolsnames from '../Pages/Toolsnames'

const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What is digital marketing, and why is it essential for my business?',
    paragraph: 'Digital marketing uses online channels and strategies to promote products, services, and brands. It is crucial for businesses because it allows them to reach a wider audience, increase brand visibility, drive targeted traffic to their website, and ultimately generate more leads and sales in the digital era.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ' How does search engine optimization (SEO) benefit my website?',
    paragraph: `SEO helps improve your website's visibility and ranking in search engine results pages. By optimizing your website's content, keywords, and technical aspects, SEO increases your chances of appearing higher in search results, attracting more organic (non-paid) traffic, and boosting your online presence.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can social media marketing benefit my business?',
    paragraph: `Social media marketing helps businesses engage with their target audience, build brand awareness, and foster customer relationships. By creating compelling content, interacting with followers, and running targeted ad campaigns, social media platforms provide a powerful channel to promote products/services, drive website traffic, and boost conversions.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How does website development contribute to my online success?',
    paragraph: `Website development is crucial for creating a professional and user-friendly online presence. A well-designed and functional website enhances user experience, encourages engagement, and improves conversion rates. `
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Why should I invest in custom software development for my business?',
    paragraph: `Custom software development allows businesses to have customized solutions that cater to their unique needs and workflows. It can streamline processes, increase operational efficiency, automate tasks, and provide a competitive edge. Custom software ensures scalability, flexibility, and adaptability to changing business requirements.`
  }
]

export default function Home() {
  const [counter, setCounter] = useState(false)

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
        <title>NSP Global Services | Expert Digital Marketing for Revenue Growth</title>
        <meta name="description" content="NSP: The digital marketing agency that's generated $5 billion+ in revenue for clients. Read 1020+ glowing reviews here." />
        <link rel="canonical" href="https://www.nspglobalservices.com/" />
      </Helmet>
      <div className={style.container_1}>
        <img src={img3} className={style.circle3} alt="img3" />
        <img src={img4} className={style.circle4} alt="img4" />
        <img src={img6} className={style.circle6} alt="img6" />
        <img src={img} className={style.img} alt="img" />
        <div className={style.container_1_div}>
          <h1 className={style.container_1_hone}>Grow Your Business with Data-Driven Revenue</h1>
          <p className={style.container_1_para2}>Empower organizations with cutting-edge business solutions tailored to your unique needs.
            Ignite Your Growth!
          </p>
          <Link to="/contact-us" className={style.container_1_ptag}>Contact us</Link>
        </div>
        <div className={style.div}>
          <span className={style.number}>12</span>
          <span>Years of Success</span>
        </div>
      </div>
      {/* container 1 end */}
      <div className={style.container_2}>
        <div className={style.container_2div}>
          <div className={style.container_2div1}>
            <div className={style.container_2img}>
              <img src={icon13} alt='icon' />
            </div>
            <div className={style.container_2div2}>
              <h6 className={style.container_2div2_hsix}>Creative Strategy</h6>
              <p className={style.container_2div2_para}>Unlock your creative potential with NSP's Creative Strategy. Our innovative approach will help you develop unique and effective strategies to make your brand stand out from the competition. {/*With NSP, you'll have the tools and guidance you need to take your creative vision to new heights and achieve unparalleled success in the market. */}</p>
            </div>
          </div>
          <div className={style.container_2div1}>
            <div className={style.container_2img}>
              <img src={icon13} alt='icon' />
            </div>
            <div className={style.container_2div2}>
              <h6 className={style.container_2div2_hsix}>Digital Solution</h6>
              <p className={style.container_2div2_para}>Experience the ultimate digital solution with NSP. Our professional team is dedicated to providing top-notch digital services that will take your business to new heights.{/*From web development to digital marketing, we have the expertise and solutions you need to succeed in today's competitive market. Trust NSP for all your digital needs and let us help you achieve your business goals.*/} </p>
            </div>
          </div>
          <div className={style.container_2div1}>
            <div className={style.container_2img}>
              <img src={icon13} alt='icon' />
            </div>
            <div className={style.container_2div2}>
              <h6 className={style.container_2div2_hsix}>Analysis & Report</h6>
              <p className={style.container_2div2_para}>NSP is your go-to solution for professional analysis and reporting. With our cutting-edge tools and expertise, we provide comprehensive insights and detailed reports that will help you make informed decisions for your business.{/* Trust NSP to deliver accurate and reliable analysis, giving you the edge in a competitive market.*/}</p>
            </div>
          </div>
        </div>
      </div>
      {/* container 2 end */}
      <div>
        <div className={style.container_3imgdiv}>
          <img src={about31} className={style.container_3img1} alt='about' />
          <img src={about32} className={style.container_3img2} alt='about' />
        </div>
        <div className={style.container_3}>
          <div className={style.container_3div}>
            <p className={style.container_3title}>We are NSP</p>
            <h4 className={style.container_3htwo}>Embrace Success with us</h4>
            <p className={style.container_3ptag}>Your Partner in Pursuit of Success<br />Providing comprehensive support and resources to fuel your growth and prosperity.
            </p>
            <Link className={style.container_3atag} to="/contact-us">Contact us</Link>
          </div>
          <div className={style.container_3div1}>
            <p className={style.container_3div1_para}>Digital marketing and design can help your business grow by driving more traffic to your website, increasing conversion rates, and building a stronger brand.</p>
            <div className={style.container_3div2}>
              <div className={style.container_3div3}>
                <img src={icon3} alt="icons" />
                <div className={style.container_3div4}>
                  <h6 className={style.container_3div4_hsix}>Digital Marketing</h6>
                  <p className={style.container_3div4_para}>Fuel Your Growth with Effective Digital Marketing Strategies</p>
                </div>
              </div>
              <div className={style.container_3div3}>
                <img src={icon3} alt="icons" />
                <div className={style.container_3div4}>
                  <h6 className={style.container_3div4_hsix}>Design & Development</h6>
                  <p className={style.container_3div4_para}>Craft a Unique Online Identity with Exceptional Design and Development</p>
                </div>
              </div>
            </div>
            <ul className={style.container_2ul}>
              <li className={style.container_2li}>Drive more traffic to your website with digital marketing and design strategies.</li>
              <li className={style.container_2li}>Increase conversion rates with effective online marketing and design campaigns.</li>
              <li className={style.container_2li}>Build a stronger brand with strategic branding and design initiatives.</li>
              <li className={style.container_2li}>Stay ahead of the curve with cutting-edge digital marketing and design techniques.</li>
              <li className={style.container_2li}>Get the most out of your online marketing and design efforts by working with a reputable digital marketing and design firm.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* container 3 end */}
      <div>
        <div className={style.container5}>
          <ScrollTrigger onEnter={() => { setCounter(true) }} onExit={() => { setCounter(false) }} >
            <div className={style.container5_div1} data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
              {counter && <CountUp className={style.count_number} start={0} end={50} duration={1} delay={0} />}
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
              <p className={style.container5_ptag}>Yearly<br />Review</p>
            </div>
          </ScrollTrigger>
        </div>
      </div>
      {/* scroll trigger end */}
      <div>
        <div className={style.container6}>
          <div className={style.container6_div}>
            <h2 className={style.container4_hone}>Transforming Businesses with Innovative Solutions</h2>
            <p className={style.container4_para2}> We are a one-stop shop for all your online marketing needs, from website design to SEO services</p>
          </div>
        </div>
        <div className={style.container_6_cards}>
          <div className={style.container_6card}>
            <div className={style.container_6div2}>
              <img src={icon17} alt="icons" />
              <h2 className={style.container_6div2_hfour}>Digital Marketing</h2>
            </div>
            <p className={style.container_6ptag}>Digital Marketing can help you take your business to the next level. It can help you grow your audience and convert more leads into customers. Get ready to take your digital marketing to new heights with NSP!</p>
            <Link className={style.container_6atag} to="/services">Read More</Link>
          </div>
          <div className={style.container_6card}>
            <div className={style.container_6div2}>
              <img src={icon17} alt="icons" />
              <h2 className={style.container_6div2_hfour}>Website Development</h2>
            </div>
            <p className={style.container_6ptag}>Website Development will help you create a beautiful and functional online presence for your business. We offer a variety of services that will help you create a website that reflects your unique brand and personality.</p>
            <Link className={style.container_6atag} to="/design-development">Read More</Link>
          </div>
          <div className={style.container_6card}>
            <div className={style.container_6div2}>
              <img src={icon17} alt="icons" />
              <h2 className={style.container_6div2_hfour}>Search Engine Optimization</h2>
            </div>
            <p className={style.container_6ptag}>Elevate your online presence and dominate search results with our effective SEO strategies. Our data-driven tactics will boost your search rankings, attract qualified leads, and ensure that your brand stands out from the competition.</p>
            <Link className={style.container_6atag} to="/seo-services">Read More</Link>
          </div>
          <div className={style.container_6card}>
            <div className={style.container_6div2}>
              <img src={icon17} alt="icons" />
              <h2 className={style.container_6div2_hfour}>Software Development</h2>
            </div>
            <p className={style.container_6ptag}>From conception to deployment, our agile development process ensures your software is built the right way, the first time.We transform your ideas into robust and intuitive software solutions for optimal performance.</p>
            <Link className={style.container_6atag} to="/design-development">Read More</Link>
          </div>
          <div className={style.container_6card}>
            <div className={style.container_6div2}>
              <img src={icon17} alt="icons" />
              <h2 className={style.container_6div2_hfour}>Paid Marketing</h2>
            </div>
            <p className={style.container_6ptag}>Our team of experts specializes in creating compelling ad campaigns that will engage your audience and deliver the results you've been dreaming of. With our effective paid marketing strategies, you'll see your business reach new heights of success.</p>
            <Link className={style.container_6atag} to="/ppc-services">Read More</Link>
          </div>
          <div className={style.container_6card}>
            <div className={style.container_6div2}>
              <img src={icon17} alt="icons" />
              <h2 className={style.container_6div2_hfour}>Content Writing</h2>
            </div>
            <p className={style.container_6ptag}>With our strategic approach, we create valuable content that truly resonates with your target audience. From captivating blog posts to engaging social media campaigns, we know how to make your brand shine. Get ready to take your content marketing to the next level with us.</p>
            <Link className={style.container_6atag} to="/content-marketing-services">Read More</Link>
          </div>
        </div>
      </div>
      {/* container 6 end */}
      <div>
        <div className={style.container_7div}>
          <p className={style.container_7title}>Discover</p>
          <h5 className={style.container_7hfive}>Our Portfolio of Amazing Works</h5>
          <p className={style.container_7ptag}>We take pride in our exceptional projects that showcase creativity and expertise.</p>
        </div>
        <div className={style.portfolio2}>
          <img src={portfolio2} style={{ height: '417px', width: '535px', borderRadius: '11px' }} className={style.container_7img} alt="portfolio" />
        </div>
        <div className={style.portfolio1}>
          <img src={portfolio1} style={{ height: '534px', borderRadius: '11px' }} className={style.container_7img} alt="portfolio" />
        </div>
        <div className={style.portfolio4}>
          <img src={portfolio4} style={{ height: '534px', borderRadius: '11px' }} className={style.container_7img} alt="portfolio" />
        </div>
        <div className={style.portfolio3}>
          <img src={portfolio3} style={{ height: '417px', width: '535px', borderRadius: '11px' }} className={style.container_7img} alt="portfolio" />
        </div>
        <Link to='/contact-us' className={style.container_7atag} >Load More</Link>
      </div>
      {/* porfolio end */}
      <div className={style.container_8}>
        <div className={style.container_8_text}>
          <p className={style.container_8_para}>Embrace the Momentum</p>
          <h2 className={style.container_8_htwo}>Ignite Your Passion for Success</h2>
          <p className={style.container_8_subtitle}>Let's harness our collective energy to achieve great things together.</p>
        </div>
        <div className={style.container_8_btndiv}>
          <Link to='/contact-us' className={style.container_8_btn}>Contact us</Link>
        </div>
      </div>
      {/* container 8 end */}
      <div className={style.container_9}>
        <div className={style.div1}>
          <div className={style.container_9div1}>
            <p className={style.container_9title}>Discover the Difference</p>
            <h3 className={style.container_9hthree}>Choose us</h3>
            <p className={style.container_9ptag}>Our expertise, cutting-edge strategies, and commitment to excellence make us the go-to partner for all your online needs.</p>
          </div>
          <div className={style.container_9div2}>
            <div className={style.container_9img}>
              <img src={about4} alt="about" />
              <div className={style.video_icon}>
              </div>
            </div>
            <div className={style.container_9li_content}>
              <ul className={style.container_9ul}>
                <li className={style.li_items}>
                  <img src={check} className={style.check} alt="check" />
                  <span className={style.container_9li_span}>Industry Expertise</span>
                </li>
                <li className={style.li_items}>
                  <img src={check} className={style.check} alt="check" />
                  <span className={style.container_9li_span}>Customized Solutions</span>
                </li>
                <li className={style.li_items}>
                  <img src={check} className={style.check} alt="check" />
                  <span className={style.container_9li_span}>Result-Oriented Approach</span>
                </li>
                <li className={style.li_items}>
                  <img src={check} className={style.check} alt="check" />
                  <span className={style.container_9li_span}>Proven Track Record</span>
                </li>
                <li className={style.li_items}>
                  <img src={check} className={style.check} alt="check" />
                  <span className={style.container_9li_span}>Dedicated Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img src={div9img} className={style.div9img} alt="div9img" />
      </div>
      {/* container 9 end */}
      <div className={style.FAQS}>
        <div style={{ position: 'absolute', width: '378px' }}>
          <h2 className={style.accordion_h1}>Frequently Asked Questions</h2>
        </div>
        <div className={style.faqdiv2}>
          <div className={style.faqimg}>
            <img className={style.faq} src={FAQ} alt="FAQ" />
          </div>
          <div className={style.wrapper}>

            <div className={style.accordion}>
              {data.map((element, i) => (
                <div key={element.id}>
                  <div className={style.title_1} style={{ height: '90px' }} onClick={() => { toggle(i) }}>
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
      {/* accordion end or FAQ END */}
      <div className={style.container_10}>
        <div className={style.container_10div1}>
          <img className={style.boost} src={boost} alt="boost" />
          <img className={style.boost2} src={boost2} alt="boost2" />
          <div className={style.badge}>
            <img src={badge} alt="badge" />
          </div>
        </div>
        <div className={style.container_10div2}>
          <div className={style.container_10div3}>
            <p className={style.container_10title}>We Are Unique</p>
            <h2 className={style.container_10htwo}>We Never Compromise with Quality</h2>
            <p className={style.container_10div2ptag}>We prioritize understanding your business goals and objectives to create customized strategies that align with your vision.</p>
          </div>
          <p className={style.container_10ptag}>We strive to build long-term relationships with our clients, providing continuous support and adapting to their evolving needs.</p>
          <div className={style.container_10divicons}>
            <div className={style.container_10icons}>
              <img src={icon23} alt="icons" />
              <h5>Comprehensive<br />Solutions</h5>
            </div>
            <div className={style.container_10icons}>
              <img src={icon23} alt="icons" />
              <h5>Cutting-Edge<br />Strategies</h5>
            </div>
            <div className={style.container_10icons}>
              <img src={icon23} alt="icons" />
              <h5>Transparent<br /> Communication</h5>
            </div>
          </div>
          <Link to="/contact-us" className={style.container_10atag}>Contact us</Link>
        </div>
      </div>
      {/* container 10 end */}
      <TrustedCompaniesLogo />
      {/* container 11 end */}

      {/* <div className={style.container_12div2}>
            <img src={blog31} alt="blog" />
            <div >
              <p className={style.blogtitle}>Web Development</p>
              <h6 className={style.bloghsix}>We offer Link wide range of services to meet all your digital needs under one roof, providing you with Link seamless and integrated experience.</h6>
              <p className={style.blogptag}>Our team stays updated with industry trends and best practices to deliver innovative and effective solutions.</p>
              <Link className={style.blogatag} to="/contact">Read More</Link>
            </div>
          </div> */}

      {/* <div className={style.container_12div2}>
            <img src={blog31} alt="blog" />
            <div >
              <p className={style.blogtitle}>Web Development</p>
              <h6 className={style.bloghsix}>Jim Morisson says when the musics over turn off the light</h6>
              <p className={style.blogptag}>kemod tempor incididunt ut labore et dolore magna aliqunim ad minim veniam, quis nostr ...</p>
              <Link className={style.blogatag} to="/contact">Read More</Link>
            </div>
          </div> */}

      {/* container 12 end */}
      {/* <div className={style.container_14}>
        <div className={style.container_14div}>
          <p className={style.container_14ptag}>Get Updates</p>
          <h2 className={style.container_14htwo}>Signup for Newsletter</h2>
        </div>
        <div className={style.container_14div2}>
          <input type="text" className={style.container_14input} placeholder='Your email here' />
          <button className={style.container_14btn}>Subscribe</button>
        </div>
      </div> */}
      <div className={style.toolsname}> <Toolsnames /></div>
    </>
  )
}
