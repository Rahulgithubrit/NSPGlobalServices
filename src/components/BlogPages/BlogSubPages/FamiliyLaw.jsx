import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import { Helmet } from 'react-helmet'
import SEO_Images_1 from '../../assets/Alteration/Untitled design_20231106_205249_0000.png'
import SEO_Images_2 from '../../assets/Alteration/local seo 2.jpg'
import img1 from '../../assets/Alteration/technical seo 2.jpg'
import img2 from '../../assets/Alteration/mobile SEO 2.jpg'
import img3 from '../../assets/Alteration/Link building 2.jpg'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Why do Family Lawyers need SEO services?',
    paragraph: 'Family Lawyers need SEO services to enhance their online visibility, attract more potential clients, outrank competitors, and establish their law firm as a trusted authority in family law.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What is the process of implementing SEO services for Family Lawyers?',
    paragraph: `The process typically involves thoroughly analyzing your current website, keyword research, on-page optimization, content creation, link building, local SEO strategies, and regular performance monitoring.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from SEO efforts?',
    paragraph: `SEO is a long-term strategy, and results may vary based on factors such as website age, competition, and industry. However, you can expect noticeable improvements in your website's visibility and organic traffic within a few months of implementing SEO services.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How much do SEO services for Family Lawyers cost?',
    paragraph: `The cost of SEO services can vary depending on the scope of work, competition, and the specific needs of your law firm. We offer flexible pricing options tailored to your budget and objectives.`
  }
]

export default function FamiliyLaw() {
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
        <title>Expert SEO Services for Family Lawyers | Boost Your Online Presence</title>
        <meta name="description" content="Our SEO services are your key to success in the family law industry. Enhance your online reach and attract more clients." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/legal/family-lawyers/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Family Lawyers</h1>
          <p className={style.container1_div_ptag}>Elevate Your Family Law Practice with Tailored SEO Services</p>
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
            "Family Lawyers SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>We understand the unique challenges faced by Family Lawyers in today's digital landscape and are here to help you maximize your online visibility, attract more clients, and grow your practice. Our expertise in e-commerce and conversion-centred design makes us well-equipped to create a highly effective product landing page to drive conversions and elevate your online presence.<br />NSP is a leading provider of SEO services, specializing in assisting Family Lawyers in optimizing their online presence. We employ cutting-edge strategies and industry best practices to ensure that your law firm's website ranks higher in search engine results, making it easier for potential clients to find you. Our team of SEO experts is dedicated to delivering results and helping you achieve your business goals.</p>
        <div className={style.container2_div1}>
          <h2>Our SEO Services for Family Lawyers offer a comprehensive range of solutions tailored to meet the specific needs of your legal practice. Here's why our services are essential for your success:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Online Visibility:Enhance your website's visibility in search engine results, allowing you to reach a wider audience and attract more potential clients.</li>
            <li className={style.container2_div1_li}>Targeted Traffic:Drive qualified traffic to your website by optimizing your content for relevant keywords and phrases your potential clients are searching for.</li>
            <li className={style.container2_div1_li}>Higher Conversion Rates:Implement conversion-centred design principles to create a compelling user experience, leading to higher conversion rates and more client inquiries.</li>
            <li className={style.container2_div1_li}>Brand Reputation:Strengthen your online reputation and establish your law firm as a trusted authority in family law by leveraging our SEO strategies.</li>
            <li className={style.container2_div1_li}>Competitive Edge:Stay ahead of your competitors by utilizing advanced SEO techniques, including competitor analysis, to identify opportunities and outrank them in search results.</li>
            <li className={style.container2_div1_li}> Local SEO:Dominate local search results by optimizing your website for location-based keywords, ensuring potential clients in your area find your law firm easily.</li>
            <li className={style.container2_div1_li}>Mobile Optimization:With most searches now happening on mobile devices, we optimize your website for mobile responsiveness, providing a seamless browsing experience for potential clients.</li>
            <li className={style.container2_div1_li}>Comprehensive Reporting:Receive regular reports detailing your website's performance, keyword rankings, and other essential metrics, allowing you to track the success of your SEO campaigns.</li>
            <li className={style.container2_div1_li}>Expert Guidance:Benefit from our team's expertise and industry knowledge as we provide ongoing consultation and recommendations to help you make informed decisions about your online marketing strategies.</li>
            <li className={style.container2_div1_li}>Cost-Effective Solution:Our SEO services offer an excellent return on investment, ensuring you get the most out of your marketing budget.</li>
          </ul>
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
