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
    statement: ' How long does it take to see SEO results for my website?',
    paragraph: 'The timeline for SEO results can vary depending on various factors. Still, you can expect improvements in search engine rankings and organic traffic within a few months of implementing the SEO strategies.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you provide examples of successful SEO campaigns for Recreation & Entertainment websites?',
    paragraph: `We have successfully helped Recreation & Entertainment websites improve their online visibility, attract targeted visitors, and achieve higher search engine rankings. Contact us for case studies and examples of our past success.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How do you optimize website content and attract targeted visitors?`,
    paragraph: `We use a combination of keyword research, on-page optimization, content creation, link building, and local SEO strategies to optimize website content and attract targeted visitors actively seeking recreation and entertainment options.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Do I need to change my website to improve its SEO?',
    paragraph: `Based on our analysis, we may recommend specific changes or optimizations to improve your website'swebsite's SEO. These can include optimizing website structure, improving content quality and relevance, enhancing user experience, and implementing technical SEO best practices.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of an SEO campaign?',
    paragraph: `We measure the success of an SEO campaign through various metrics, including keyword rankings, organic traffic growth, engagement metrics, and conversions. We provide comprehensive reports that track these metrics and show the progress and effectiveness of the SEO campaign for your Recreation & Entertainment website.`
  }
]

export default function Recration() {
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
        <title>Strategic Digital Marketing for Travel Excellence</title>
        <meta name="description" content="Ignite your travel brand with our tailored digital marketing solutions. From SEO mastery to engaging social strategies, we elevate your online presence for unforgettable experiences." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/recreation/travel-recreation-websites" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing for Travel Excellence</h1>
          <p className={style.container1_div_ptag}>NSP's Result-Driven SEO Strategies for Travel and Recreation websites.</p>
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
            "Recration"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>At NSP, we understand SEO's crucial role in the success of Recreation & Entertainment websites. With the increasing competition in the travel and entertainment industry, optimizing your online presence to attract the right audience and drive engagement is more critical than ever.<br/>Recreation & Entertainment websites often need help to stand out in the competitive online landscape, making it challenging for potential visitors to discover their offerings. Our SEO services help Recreation & Entertainment websites increase online visibility, attract more targeted visitors, and drive higher engagement and conversions.</p>
        <div className={style.container2_div1}>
          <h2>When you choose NSP's SEO services for your Recreation & Entertainment website, you can expect the following benefits:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Online Visibility:We optimize your website to appear prominently in search engine results, ensuring potential visitors quickly discover your offerings.</li>
            <li className={style.container2_div1_li}>Targeted Traffic:Our SEO strategies attract qualified visitors actively searching for recreational and entertainment experiences, increasing the likelihood of conversions.</li>
            <li className={style.container2_div1_li}> Enhanced User Experience:We optimize your website's website'swebsite's structure, content, and performance to provide visitors with a seamless and engaging experience.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>Our 3-Step Process Plan:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Analysis:</strong>We thoroughly assess your website, industry, and target audience to identify optimization opportunities and develop a tailored SEO strategy.</li>
            <li className={style.container2_div1_li}><strong>Implementation:</strong>Our team implements a range of SEO techniques, including keyword optimization, content creation, link building, and technical improvements, to enhance your website'swebsite's visibility and attract relevant traffic.</li>
            <li className={style.container2_div1_li}><strong>Monitoring and Optimization:</strong>We continuously monitor your website'swebsite's performance, analyze data, and make data-driven adjustments to ensure long-term SEO success and help you stay ahead of the competition.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <h2>Why Choose NSP as Your Trusted Partner</h2>
          <p>We understand the challenges Recreation & Entertainment website owners face in attracting the right audience and driving engagement. At NSP, we empathize with your primary problem of limited online visibility and are here to provide the solution you need.<br/>Rest assured that NSP is well-versed in the intricacies of SEO for Recreation & Entertainment websites. Our portfolio of successful projects and testimonials from satisfied clients demonstrate our expertise in helping businesses like yours achieve their online visibility and growth goals.</p>
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
