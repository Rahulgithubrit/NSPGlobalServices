import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import { Helmet } from 'react-helmet'
import SEO_Images_1 from '../../assets/Digital Marketing/IMG-20231116-WA0001.jpg'
import SEO_Images_2 from '../../assets/Digital Marketing/IMG-20231116-WA0000.jpg'
import img1 from '../../assets/Digital Marketing/IMG-20231116-WA0002.jpg'
import img2 from '../../assets/Digital Marketing/IMG-20231116-WA0003.jpg'
import img3 from '../../assets/Digital Marketing/IMG-20231116-WA0004.jpg'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can online marketing services benefit my museum?',
    paragraph: `Online marketing services can increase your museum's online visibility, attract more visitors, promote events and exhibitions, engage with your audience, and enhance your museum's reputation.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Which digital marketing channels are commonly used for museums?',
    paragraph: 'Commonly used digital marketing channels for museums include website optimization, search engine marketing (SEM), search engine optimization (SEO), social media marketing (SMM), email marketing, content marketing, and online reputation management.'
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How can website optimization improve my museum's online presence?`,
    paragraph: `Website optimization ensures that your museum's website is user-friendly, mobile-friendly, fast-loading, and optimized for search engines. It helps improve the overall user experience and increases the chances of your museum being discovered online.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What is the role of social media marketing for museums?',
    paragraph: `Social media marketing allows museums to connect with their audience, share engaging content, promote events and exhibitions, showcase artifacts, and build a strong online community. It helps increase awareness and drives visitor engagement.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can email marketing benefit my museum?',
    paragraph: `Email marketing enables museums to reach their audience directly, deliver personalized content, announce upcoming events, share educational resources, and provide membership updates. It is an effective way to nurture relationships and drive repeat visits.`
  }
  ,
  {
    id: 5,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What is online reputation management, and why is it important for museums?',
    paragraph: `Online reputation management involves monitoring and managing your museum's online presence, responding to reviews and feedback, repairing any negative reputation, and maintaining a positive brand image. It ensures that your museum's online reputation remains strong and favorable.`
  }
]

export default function Musemums() {
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
        <title>Strategic Digital Marketing for Museums</title>
        <meta name="description" content="Fuel your Museums success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/tourism-hospitality/museums" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for Museums</h1>
          <p className={style.container1_div_ptag}></p>
        </div>
        <div className={style.container2_div}>
          <TextSphare texts={[
            "Consultation",
            "Keyword Research",
            "On-Page",
            "Off-Page",
            "SEO",
            "Reputation Management",
            "Google Ads",
            "Facebook Ads",
            "Lead Generation",
            "Shopping Ads",
            "Maximize Conversions",
            "Accountancy Firm SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Welcome to NSP, your trusted partner for comprehensive online marketing services tailored specifically for museums. We specialize in helping museums enhance their online presence, attract more visitors, and promote their unique collections and exhibitions to a wider audience. With our expertise in digital marketing channels and strategies, we are dedicated to assisting museums in achieving their goals in the online realm.</p>
        <div className={style.container2_div1}>
          <h2>Our Services:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Website Optimization:</strong>We optimize your museum's website to ensure it provides a seamless user experience. Our team focuses on responsive design, fast loading speed, and mobile compatibility to engage visitors effectively.<br />With clear call-to-action elements and integration of membership sign-up and virtual tour options, we facilitate easy navigation and encourage visitor interaction.</li>
            <li className={style.container2_div1_li}><strong>Search Engine Marketing (SEM):</strong>Our SEM experts employ paid search advertising to enhance your museum's visibility on search engines. We create targeted ad campaigns through thorough keyword research and analysis to reach potential visitors actively searching for museum experiences.<br />We carefully craft compelling ad copy, manage bids, and track conversions to maximize your SEM campaign's effectiveness and return on investment.</li>
            <li className={style.container2_div1_li}><strong>Search Engine Optimization (SEO):</strong>By implementing effective SEO strategies, we ensure your museum's website ranks high in search engine results. Our team optimizes keyword usage, enhances on-page elements, and builds relevant backlinks to improve your website's visibility and organic traffic.<br />We conduct comprehensive technical SEO audits and provide recommendations to enhance website performance, boosting your museum's online presence.</li>
            <li className={style.container2_div1_li}><strong>Social Media Marketing (SMM):</strong>With our SMM services, we create captivating social media profiles for your museum and develop engaging content to connect with your audience. Through strategic community engagement, event promotion, and artifact showcases, we generate buzz and increase your museum's following.<br />Our social media advertising strategies target specific demographics, further expanding your reach and driving visitor engagement.</li>
            <li className={style.container2_div1_li}><strong>Email Marketing:</strong>Our tailored email marketing campaigns enable direct communication with your audience. We segment and target your email lists, delivering personalized content, event announcements, educational resources, and membership updates to nurture relationships with your subscribers.<br />Automation features and comprehensive analytics allow us to refine your email marketing strategies and optimize performance..</li>
            <li className={style.container2_div1_li}><strong>Content Marketing:</strong>Through our content marketing services, we develop an impactful content strategy for your museum. Our team creates informative blog articles, captivating virtual tours, engaging educational resources, and captivating artifact spotlights to showcase your unique collections.<br />We distribute content across various channels, attracting organic traffic, boosting visitor engagement, and establishing your museum as a valuable online resource.</li>
            <li className={style.container2_div1_li}><strong>Online Reputation Management:</strong>We monitor your museum's online reputation, responding promptly to reviews and feedback to maintain a positive brand image. Our reputation management strategies include proactive reputation repair, brand monitoring, crisis management, and social listening.<br />By safeguarding your museum's reputation, we ensure that online perception aligns with the exceptional experiences visitors can expect.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          {/* <h2></h2> */}
          <p>Partner with NSP today and unlock the full potential of online marketing for your museum. Our dedicated team of experts will work closely with you to develop customized strategies and campaigns that align with your museum's unique offerings and goals. Let us help you reach new audiences, engage visitors, and make a lasting impact in the digital landscape. Contact us now to discuss your online marketing needs and embark on a transformative journey for your museum.</p>
        </div>
        {/* FAQ */}
        <div className={style.FAQS}>
          <div >
            <img className={style.faq} src={FAQ} alt="FAQ" />
          </div>
          <div className={style.wrapper}>
            <h2 className={style.accordion_h1}>Frequently Asked Question</h2>
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
      <div className={style.container2}>
        <div><img src={img1} className={style.imges} alt="img1" /></div>
        <div><img src={img2} className={style.imges} alt="img2" /></div>
        <div><img src={img3} className={style.imges} alt="img3" /></div>
      </div>
    </>
  )
}
