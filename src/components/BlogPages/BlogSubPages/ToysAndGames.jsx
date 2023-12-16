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
    statement: 'Can digital marketing help my toy store reach a wider audience?',
    paragraph: `Absolutely! We can help you get new customers and increase your store's visibility through strategic campaigns, social media engagement, and search engine optimization.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can social media marketing benefit my toy store? ',
    paragraph: `Social media marketing offers numerous benefits for toy stores. It allows you to engage directly with parents, build brand loyalty, promote special offers, and showcase new toys and games.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `Is PPC advertising suitable for toy stores on a limited budget? `,
    paragraph: `Yes, PPC advertising can be tailored to suit toy stores with varying budgets. Our team will optimize your campaigns to maximize your budget and ensure cost-effective results. We'll strategize bidding, target relevant keywords, and monitor performance to maximize your investment.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `Will digital marketing strategies be tailored to my specific toy store's needs and goals? `,
    paragraph: ` Absolutely! We understand that every toy store has unique needs and goals. Our digital marketing strategies are tailored to align with your specific objectives. `
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How can SEO improve my toy store's online visibility?`,
    paragraph: `By optimizing your website's content and structure and implementing effective SEO strategies, we can help your store rank higher in search engine results. This increased visibility drives more organic traffic to your website.   `
  }
]

export default function ToysAndGames() {
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
        <title>Strategic Digital Marketing for Toys And Games Stores</title>
        <meta name="description" content="Fuel your Toys And Games Stores‍ brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/retail-ecommerce/toys-stores" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for Toys And Games Stores</h1>
          <p className={style.container1_div_ptag}>Drive More Sales with Digital Marketing</p>
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
            "Toys And Games"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In today's digital age, toy and game stores must have a strong online presence. At NSP, we specialize in tailored digital marketing services for toy stores. With our expertise and customized strategies, we can help your store stand out from the competition, attract more customers, and increase sales.</p>
        <p className={style.container2_ptag}>Our digital marketing approach involves increasing your store's online visibility and brand awareness. Each toy store is unique, so we create personalized strategies to meet your needs and goals. Whether you're a small independent toy store or a large retail chain, our team will develop and implement effective campaigns that drive targeted website traffic and boost sales.</p>
        <p className={style.container2_ptag}>One of our core areas of expertise is social media marketing. Our team will develop engaging social media campaigns that resonate with your target audience, driving them to your store and increasing brand loyalty. Through strategic content creation, community management, and data-driven insights, we'll ensure that your social media presence captivates parents and drives traffic to your store.
          Our digital marketing services also encompass search engine optimization (SEO) and pay-per-click (PPC) advertising. Our PPC campaigns will target relevant keywords and demographics, driving targeted traffic to your website and generating more sales.
        </p>
        <div className={style.container2_div1}>
          <h2>What It Includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Search Engine Optimization (SEO):</strong>Enhance your toy store's online visibility and increase organic traffic with our expert SEO services. By optimizing your website's content, meta tags, and structure, we'll help your store rank higher in search engine results, attracting more potential customers. Our SEO strategies will ensure your store remains competitive in the digital landscape.<br/><b>Benefits:</b><br/>- Increased organic visibility in search engine results<br/>- Higher rankings for relevant keywords<br/>- More targeted traffic to your website<br/>- Improved user experience and website performance<br/>- Enhanced brand credibility and trust</li>
            <li className={style.container2_div1_li}><strong>Social Media Marketing:</strong>Engage with parents, build brand loyalty, and showcase your toy store's products through strategic social media marketing. Our team will develop creative and engaging content tailored to your target audience, driving traffic to your store and generating interest in your toys and games. We'll manage your social media accounts, create captivating posts, run targeted ad campaigns, and analyze data to optimize performance and maximize results.<br/><b>Benefits:</b><br/>- Increased brand awareness and visibility<br/>-- Enhanced engagement with parents and caregivers<br/>- Amplified reach and exposure for your toy store<br/>- Greater customer loyalty and retention<br/>- Direct communication and feedback from your target audience</li>
            <li className={style.container2_div1_li}><strong>Pay-Per-Click (PPC) Advertising:</strong>Drive targeted traffic to your toy store's website and boost conversions with our PPC advertising services. We'll create customized campaigns targeting relevant keywords and demographics, ensuring your ads reach parents and caregivers looking for toys and games. Through strategic bidding, compelling ad copy, and continuous optimization, we'll maximize your return on investment and help you achieve your advertising goals.<br/><b>Benefits:</b><br/>-  Increased website traffic and visibility<br/>- Targeted exposure to potential customers<br/>- Higher conversions and sales<br/>- Measurable results and ROI tracking<br/>- Flexible budgeting options to fit your needs</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          {/* <h2>Why Choose NSP as Your Trusted Partner</h2> */}
          <p>Partner with NSP to unlock the full potential of your online marketing efforts and take your toy store to new heights of success in the digital landscape.
Request a free consultation and see how we can elevate your toy store's online marketing strategies.    </p>
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
