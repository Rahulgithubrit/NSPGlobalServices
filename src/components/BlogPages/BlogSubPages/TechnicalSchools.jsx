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
    statement: 'How long does it take to see results from Tutoring SEO efforts?',
    paragraph: `The timeline for noticeable results varies depending on various factors, including your website's current state, market competition, and the level of optimization required. Generally, it takes several months to observe significant improvements in search engine rankings and organic traffic.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you guarantee top rankings on search engines for my tutoring service?',
    paragraph: `While we cannot guarantee specific rankings, our proven SEO strategies and techniques have helped numerous tutoring services achieve higher visibility and improved rankings. We focus on driving targeted organic traffic and increasing your chances of converting visitors into students.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `Will you optimize my tutoring service's social media presence as part of SEO efforts?`,
    paragraph: `Yes, social media optimization is an integral part of our comprehensive SEO approach. We optimize your social media profiles, ensure consistency across platforms, and integrate them seamlessly with your overall SEO strategy to enhance your online presence and attract more students.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of Tutoring SEO campaigns?',
    paragraph: ` We employ various metrics to measure the success of your Tutoring SEO campaign, including organic traffic, keyword rankings, conversion rates, and student enrollment. Our team provides regular reports that highlight key performance indicators and offer insights for continuous improvement.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Do you offer ongoing SEO maintenance for tutoring services?',
    paragraph: ` Yes, we provide ongoing SEO maintenance to ensure that your tutoring service maintains its competitive edge. SEO is an ever-evolving field, and we stay up-to-date with algorithm changes, industry trends, and best practices to ensure your long-term success.`
  }
]

export default function TechnicalSchools() {
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
        <title>Expert Tutoring SEO Services | Boost Your Rankings Today</title>
        <meta name="description" content="Affordable SEO solutions tailored for tutors. Boost your website's rankings and reach your target audience with our specialized services." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/education/tutoring/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Tutoring  SEO services</h1>
          <p className={style.container1_div_ptag}>Welcome to NSP - Your Partner for Tutoring SEO Services</p>
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
            "Tutoring SEO Services"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>At NSP, we understand the unique challenges faced by tutoring services in today's competitive digital landscape. That's why we specialize in providing top-notch Tutoring SEO services tailored specifically for tutoring businesses. Our expertise in search engine optimization combined with our deep understanding of the tutoring industry enables us to help your service enhance its online visibility, attract more students, and grow your business.</p>
        <div className={style.container2_div1}>
          <h2>Why Choose NSP for Tutoring SEO Services?</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Specialized Expertise:We have a dedicated team of SEO professionals who specialize in tutoring SEO. We stay up-to-date with the latest industry trends and search engine algorithms to ensure that our strategies are effective and aligned with your service's goals.</li>
            <li className={style.container2_div1_li}>Customized Approach:We believe that every tutoring service is unique, and we tailor our SEO solutions accordingly. We take the time to understand your service's specific needs, target audience, and competitive landscape, allowing us to develop a customized plan that delivers tangible results.</li>
            <li className={style.container2_div1_li}>Comprehensive Services: Our Tutoring SEO services cover all aspects of search engine optimization to maximize your online presence. From keyword research and on-page optimization to local SEO, content creation, and link building, we implement a holistic approach to boost your service's visibility and attract more students.</li>
            <li className={style.container2_div1_li}>Proven Track Record:We have a successful track record of helping tutoring services achieve significant improvements in their search engine rankings and online visibility. Our results-driven approach has helped numerous clients increase website traffic, generate leads, and ultimately grow their student enrollment.</li>
            <li className={style.container2_div1_li}>Transparency and Communication:We believe in fostering strong relationships with our clients. Throughout our partnership, we maintain open lines of communication and provide transparent reporting on the progress of your Tutoring SEO campaign. We keep you informed about key metrics, insights, and optimizations to ensure that you are always in the loop.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>Our Tutoring SEO Process</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Consultation:</strong>  We start by conducting an in-depth consultation to understand your tutoring service's goals, target audience, and unique selling points. This information helps us develop a comprehensive strategy that aligns with your objectives.</li>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong>Our experienced team performs thorough keyword research to identify the most relevant and effective keywords for your tutoring service. We analyze search volumes, competition, and user intent to ensure that your content aligns with what potential students are searching for.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>We optimize your website's on-page elements, including meta tags, headers, URLs, and content, to make it search engine friendly. By incorporating targeted keywords naturally and improving overall website structure, we enhance your service's visibility in search results.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>We implement local SEO strategies to improve your tutoring service's visibility in local searches. This includes optimizing your Google My Business listing, creating location-specific content, and acquiring positive reviews from satisfied students.</li>
            <li className={style.container2_div1_li}><strong>Content Creation:</strong>We develop engaging and informative content that resonates with potential students searching for tutoring services. Our team creates high-quality articles, blog posts, and other forms of content that highlight your service's unique offerings, tutoring programs, teaching methodologies, and student success stories.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong> We employ effective link building strategies to enhance your service's authority and credibility in the eyes of search engines. By acquiring high-quality backlinks from reputable sources within the tutoring and education industry, we improve your search engine rankings and increase organic traffic to your website.</li>
            <li className={style.container2_div1_li}><strong>Monitoring and Reporting:</strong>We continuously monitor the performance of your Tutoring SEO campaign and provide regular reports that outline key metrics, trends, and recommendations. This allows us to make data-driven optimizations and ensure that your service is on the path to success.</li>
          </ul>
        </div >
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
