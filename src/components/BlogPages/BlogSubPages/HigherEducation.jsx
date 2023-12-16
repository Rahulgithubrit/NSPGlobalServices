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
    statement: 'How long does it take to see results from Language School SEO?',
    paragraph: `The timeline for seeing results can vary depending on various factors such as the competitiveness of keywords, your website's current state, and the level of optimization required. Generally, it takes several months to start seeing noticeable improvements in search engine rankings and organic traffic.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you guarantee the #1 ranking for my language school website?',
    paragraph: `While we cannot guarantee specific rankings, we employ industry best practices and proven strategies to improve your website's visibility and organic rankings. Our goal is to maximize your online presence, attract more students, and achieve sustainable growth for your language school.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Do you offer ongoing SEO maintenance for language school websites?',
    paragraph: `Yes, we offer ongoing SEO maintenance to ensure that your website remains optimized and up-to-date with the latest search engine algorithms. SEO is an ongoing process, and we continuously monitor and make necessary optimizations to keep your language school competitive.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `Will you optimize my language school's social media profiles for SEO?`,
    paragraph: `Yes, we can optimize your language school's social media profiles to align with SEO best practices. This includes optimizing profile information, using relevant keywords, and creating engaging content that attracts potential students and boosts your overall online visibility.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of a Language School SEO campaign?',
    paragraph: `We measure the success of your SEO campaign through various key performance indicators (KPIs) such as organic traffic, keyword rankings, conversion rates, and leads generated. We provide regular reports that outline these metrics and offer insights to track the progress of your campaign.`
  }
]

export default function HigherEducation() {
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
        <title>Language School SEO Services | Boost Your Visibility Online</title>
        <meta name="description" content="Our Language School SEO Services can help you reach more language learners online. Drive enrollments with expert SEO strategies." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/education/language-schools/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Language Schools SEO services</h1>
          <p className={style.container1_div_ptag}> Your Partner for Language School SEO Services</p>
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
            "Higher Education SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>At NSP, we understand the unique challenges faced by language schools in today's competitive digital landscape. That's why we specialize in providing top-notch Language School SEO services tailored specifically for language education businesses. Our expertise in search engine optimization combined with our deep understanding of the language school industry enables us to help your school enhance its online visibility, attract more students, and grow your business.</p>
        <div className={style.container2_div1}>
          <h2>Why Choose NSP for Language School SEO Services?</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Specialized Expertise: We have a dedicated team of SEO professionals who specialize in language school SEO. We stay up-to-date with the latest industry trends and search engine algorithms to ensure that our strategies are effective and aligned with your school's goals.</li>
            <li className={style.container2_div1_li}>Customized Approach:We believe that every language school is unique, and we tailor our SEO solutions accordingly. We take the time to understand your school's specific needs, target audience, and competitive landscape, allowing us to develop a customized plan that delivers tangible results.</li>
            <li className={style.container2_div1_li}>Comprehensive Services:Our Language School SEO services cover all aspects of search engine optimization to maximize your online presence. From keyword research and on-page optimization to local SEO, content creation, and link building, we implement a holistic approach to boost your school's visibility and attract more students.</li>
            <li className={style.container2_div1_li}>Proven Track Record:We have a successful track record of helping language schools achieve significant improvements in their search engine rankings and online visibility. Our results-driven approach has helped numerous clients increase website traffic, generate leads, and ultimately grow their student enrollment.</li>
            <li className={style.container2_div1_li}>Transparency and Communication:We believe in fostering strong relationships with our clients. Throughout our partnership, we maintain open lines of communication and provide transparent reporting on the progress of your Language School SEO campaign. We keep you informed about key metrics, insights, and optimizations to ensure that you are always in the loop.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>Our Language School SEO Process</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Consultation:</strong> We start by conducting an in-depth consultation to understand your language school's goals, target audience, and unique selling points. This information helps us develop a comprehensive strategy that aligns with your objectives.</li>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong> Our experienced team performs thorough keyword research to identify the most relevant and effective keywords for your language school. We analyze search volumes, competition, and user intent to ensure that your content aligns with what potential students are searching for.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>We optimize your website's on-page elements, including meta tags, headers, URLs, and content, to make it search engine friendly. By incorporating targeted keywords naturally and improving overall website structure, we enhance your school's visibility in search results.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>We implement local SEO strategies to improve your language school's visibility in local searches. This includes optimizing your Google My Business listing, creating location-specific content, and acquiring positive reviews from satisfied students.</li>
            <li className={style.container2_div1_li}><strong>Content Creation:</strong>We develop engaging and informative content that resonates with potential students searching for language education. Our team creates high-quality articles, blog posts, and other forms of content that highlight your school's unique offerings, language courses, teaching methodologies, and student success stories.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>We employ effective link building strategies to enhance your school's authority and credibility in the eyes of search engines. By acquiring high-quality backlinks from reputable sources within the language education industry, we improve your search engine rankings and increase organic traffic to your website.</li>
            <li className={style.container2_div1_li}><strong>Monitoring and Reporting:</strong>We continuously monitor the performance of your Language School SEO campaign and provide regular reports that outline key metrics, trends, and recommendations. This allows us to make data-driven optimizations and ensure that your school is on the path to success.</li>
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
