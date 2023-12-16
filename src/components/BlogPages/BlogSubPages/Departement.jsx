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
    statement: `Will digital marketing strategies be tailored to my department store's needs and goals? `,
    paragraph: `Absolutely! We understand that every department store has unique needs and goals. Our digital marketing strategies are tailored to align with your specific objectives. We'll thoroughly analyze your store, target audience, and competition to develop a customized plan that delivers results.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How can SEO improve my department store's online visibility?`,
    paragraph: `By optimizing your website's content and structure and implementing effective SEO strategies, we can help your store rank higher in search engine results. This increased visibility drives more organic traffic to your website.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `Can digital marketing help drive more foot traffic to my department store?`,
    paragraph: `Yes, digital marketing can help drive foot traffic to your department store. We can attract potential customers searching for department stores in your area through targeted advertising, local search optimization, and strategic campaigns. `
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What metrics and analytics will be provided to track the success of digital marketing efforts? ',
    paragraph: `You'll have access to metrics such as website traffic, engagement, conversions, keyword rankings, and more. These insights will help you understand the effectiveness of our strategies and make data-driven decisions. `
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Are there any long-term contracts or commitments for your digital marketing services?',
    paragraph: `We offer flexible terms for our digital marketing services. There are no long-term contracts or commitments required. We believe in building strong partnerships based on trust and results. You can start or stop our services as per your requirements, ensuring you have the freedom to adjust your strategies. `
  }
]

export default function Departement() {
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
        <title>Strategic Digital Marketing for Department Stores</title>
        <meta name="description" content="Fuel your Department Stores‍ brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/retail-ecommerce/department-stores" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for Department Stores</h1>
          <p className={style.container1_div_ptag}> Boost Your Department Store's Online Presence</p>
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
            "Department"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In today's digital age, having a strong online presence is crucial for the success of department stores. At NSP, we specialize in providing comprehensive digital marketing services specifically designed for department stores. With our expertise and tailored strategies, we can help your store stand out from the competition and attract more customers.<br/>Our digital marketing approach focuses on increasing your store's online visibility and brand awareness. Every department store is unique, so we create customized strategies to meet your specific needs and goals. Whether you're a small boutique department store or a large retail chain, we have the knowledge and experience to drive targeted website traffic and boost sales.<br/>One of our key areas of expertise is social media marketing. Our team will develop engaging social media campaigns that resonate with your target audience, driving them to your store and increasing customer loyalty. We'll ensure that your social media presence is optimized for maximum impact through strategic content creation, community management, and data-driven insights.<br/>Our digital marketing services also encompass search engine optimization (SEO) and pay-per-click (PPC) advertising. Our PPC campaigns will target relevant keywords and demographics, driving targeted traffic to your website and generating more conversions.<br/>At NSP, we are passionate about helping department stores thrive in the digital landscape. Partner with us to unlock the full potential of your online marketing efforts and take your store to new heights of success.</p>
        <div className={style.container2_div1}>
          <h2>What It Includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Search Engine Optimization (SEO):</strong>Enhance your department store's online visibility and increase organic traffic with our expert SEO services. You'll attract more potential customers and drive targeted traffic to your store by appearing higher in search results.<br/>
            <b>Benefits:</b><br/>
            - Higher visibility in search engine results
            <br/>- Increased organic traffic to your website
            <br/>- Improved brand visibility and credibility
            <br/>- Enhanced user experience on your website
            <br/>- Higher chances of attracting local customers searching for department stores</li>
            <li className={style.container2_div1_li}><strong>Social Media Marketing:</strong>Connect with your target audience, engage with shoppers, and build a strong online community through effective social media marketing. Our team will create tailored social media strategies that align with your department store's brand and goals. We'll develop engaging content, run targeted ad campaigns, and analyze data to ensure maximum engagement and return on investment.<br/>
            <b>Benefits:</b><br/>
            - Increased brand awareness and visibility
            <br/>- Greater engagement with your target audience
            <br/>- Improved customer loyalty and retention
            <br/>- Higher website traffic and conversions
            <br/>- Amplified reach and exposure for your promotions and offers</li>
            <li className={style.container2_div1_li}><strong>Pay-Per-Click (PPC) Advertising:</strong>Drive targeted traffic to your department store's website and increase conversions with our PPC advertising services. We'll create customized campaigns targeting relevant keywords and demographics, ensuring your ads reach the right audience at the right time. With strategic bidding, compelling ad copy, and continuous optimization, we'll maximize your return on investment and help you achieve your advertising goals.<br/>
            <b>Benefits:</b><br/>
            - Increased website traffic and visibility
            <br/>- Targeted exposure to potential customers
            <br/>- Higher conversions and sales
            <br/>- Measurable results and ROI tracking
            <br/>- Flexible budgeting options to fit your needs</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <h2>Unleashing Success: Digital Marketing Strategies for Pet Supplies Stores</h2>
          <p>Competition is fierce in the ever-growing pet industry; pet supply stores need effective digital marketing strategies to stand out. With increasing numbers of pet owners turning to online platforms for their pet-related needs, pet supplies stores must have a strong digital presence. This article will provide valuable insights and actionable tips on leveraging digital marketing to boost your pet supplies store's visibility, attract customers, and drive sales.</p>
        </div>
        {/* FAQ's */}
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
