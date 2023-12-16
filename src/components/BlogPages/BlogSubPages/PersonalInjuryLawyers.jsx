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
    statement: 'What do you offer?',
    paragraph: 'At NSP, we provide SEO services tailored explicitly for Personal Injury Lawyers.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How will  NSP customer's life better?`,
    paragraph: `By leveraging our SEO expertise, we help Personal Injury Lawyers increase their online visibility, attract more qualified leads, and ultimately grow their client base.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What is the direct CTA? In other words, "How do I get it?"',
    paragraph: `Take your law practice to new heights with our SEO services. Get started today by contacting us for a personalized consultation.`
  }
]

export default function PersonalInjuryLawyers() {
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
                <title>Top-Rated SEO Services for Personal Injury Attorneys</title>
                <meta name="description" content="Our SEO services for personal injury lawyers will put your practice in the spotlight, driving more clients to your firm." />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/legal/personal-injury-lawyers/seo"/>
            </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Personal Injury Lawyers</h1>
          <p className={style.container1_div_ptag}>When you choose NSP's SEO services for Personal Injury Lawyers</p>
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
            "Personal Injury Lawyers SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Personal Injury Lawyers face intense competition in the digital landscape, making it difficult for potential clients to find their services online.This problem frustrates Personal Injury Lawyers as they need help to reach their target audience and compete effectively against other law firms.It's wrong because Personal Injury Lawyers deserve a fair chance to showcase their expertise and connect with clients needing help. It's unjust that their valuable services remain hidden due to inadequate online visibility.</p>
        <div className={style.container2_div1}>
          <h2>you can expect the following benefits:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Online Visibility:We improve your website's search engine rankings, ensuring that your law practice appears prominently when potential clients search for relevant keywords.</li>
            <li className={style.container2_div1_li}>Targeted Traffic:Our strategies attract qualified leads specifically looking for Personal Injury Lawyers, increasing the likelihood of converting them into clients</li>
            <li className={style.container2_div1_li}>Brand Authority: By establishing your law practice as a reputable authority online, we enhance your brand's credibility and trustworthiness among potential clients.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>Why Choose Targeted SEO for  Personal Injury Lawyers ?</h2>
          <p>We understand the challenges Personal Injury Lawyers face in the digital world. At NSP, we empathize with your primary problem of low online visibility and are here to provide the solution you need.Rest assured that NSP is well-versed in the intricacies of SEO for Personal Injury Lawyers. Our track record of success, backed by testimonials from satisfied clients and partnerships with reputable law firms, demonstrates our expertise and ability to help you solve your problem effectively.</p>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Analysis:</strong>We thoroughly assess your current online presence, identify areas for improvement, and perform keyword research to determine the most effective SEO strategy for your law practice..</li>
            <li className={style.container2_div1_li}><strong>Optimization:</strong>Our team implements various SEO techniques, including on-page optimization, content creation, link building, and local SEO, to enhance your website's visibility and attract more targeted traffic.</li>
            <li className={style.container2_div1_li}><strong>Monitoring and Adaptation:</strong>We continuously monitor your SEO performance, make data-driven adjustments, and provide regular reports to ensure your online presence remains optimized and ahead of the competition.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <p>At NSP, we understand the challenges Personal Injury Lawyers face in today's digital landscape. Many law firms need help to stand out among their competitors, resulting in missed opportunities to connect with potential clients. However, with our tailored SEO services, you can overcome these obstacles and experience tremendous growth in your practice.</p>
          <p>We work closely with Personal Injury Lawyers to analyze their online presence and devise a customized SEO strategy that aligns with their goals. Through comprehensive optimization techniques, we enhance your website's visibility, attract targeted traffic and establish your law practice as a trusted authority in your field. Success is achieved when your firm gains increased online visibility, generates a steady stream of qualified leads, and converts them into loyal clients.</p>
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
