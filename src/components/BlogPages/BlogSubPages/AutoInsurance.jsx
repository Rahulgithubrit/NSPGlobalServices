import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import { Helmet } from 'react-helmet'
import SEO_Images_1 from '../../assets/Alteration/seo1.jpg'
import SEO_Images_2 from '../../assets/Alteration/on-page SEO1.jpg'
import img1 from '../../assets/Alteration/SEO Reporting 1.jpg'
import img2 from '../../assets/Alteration/technical-seo1.jpg'
import img3 from '../../assets/Alteration/off-page seo 1.jpg'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can SEO help my auto insurance website?',
    paragraph: 'SEO (Search Engine Optimization) can greatly benefit your auto insurance website by improving its visibility in search engine results. With targeted keyword optimization, local SEO strategies, and quality content creation, SEO helps attract more organic traffic, generate leads, and increase conversions.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from SEO for my auto insurance website?',
    paragraph: `Generally, it takes several months to see significant improvements in rankings and organic traffic, but the long-term benefits make it a worthwhile investment.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you guarantee the top ranking on search engines for my auto insurance website?',
    paragraph: `While we cannot guarantee specific rankings, our goal is to improve your website's visibility and increase its rankings on search engines. We employ proven SEO strategies and best practices to maximize your chances of achieving higher rankings, but search engine algorithms and competition factors influence rankings.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you determine the best keywords for my auto insurance website?',
    paragraph: `We conduct thorough keyword research to identify relevant and high-converting keywords for your auto insurance website. We analyze search volumes, competition levels, and user intent to choose the keywords that align with your target audience's search behavior and drive qualified traffic to your site.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Will you make changes directly to my auto insurance website?',
    paragraph: `Yes, as part of our SEO services, we will make recommendations and implement on-page optimizations to improve your website's structure, content, and user experience. `
  },
  {
    id: 5,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of SEO for my auto insurance website?',
    paragraph: ` We provide regular analytics and reporting to track the performance of your SEO campaigns. We analyze data such as organic traffic, keyword rankings, conversion rates, and engagement metrics to evaluate the effectiveness of our strategies. `
  }
]

export default function AutoInsurance() {
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
        <title>Affordable Auto Insurance SEO Services | Rank Higher Today</title>
        <meta name="description" content="Drive online success with expert auto insurance SEO services. Boost your visibility and gain more clients today." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/insurance/automobile-insurance/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Auto Insurance SEO Services</h1>
          <p className={style.container1_div_ptag}>NSP's Expert SEO Services for Auto Insurance Websites</p>
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
            "Auto-Insurance SEO Services"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Our Result-Driven SEO Services for Auto Insurance Websites</p>
        <p className={style.container2_ptag}>At NSP, we specialize in providing comprehensive and result-driven SEO services tailored specifically for auto insurance websites. With our targeted SEO services, we ensure that your auto insurance website effectively reaches your target audience, ranks higher in search engine results, and drives more conversions.</p>
        <div className={style.container2_div1}>
          <h2>Process Involved in Alteration SEO:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research and Optimization:</strong>We conduct thorough keyword research based on intent and high-converting keywords for your auto insurance website. By optimizing your website's content, meta tags, and other on-page elements with these strategic keywords, we improve your website's online visibility.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>We specialize in local SEO for auto insurance websites, ensuring that your business appears prominently in local search results. We optimize your Google My Business profile, create local directory listings, and develop location-specific content to attract customers in your target service areas. Our strategies are tailored to increase your visibility and drive more inquiries from individuals seeking auto insurance coverage.</li>
            <li className={style.container2_div1_li}><strong>Content Creation and Optimization:</strong>Our skilled copywriters create engaging and informative content that addresses the needs and concerns of your target audience. We optimize your content with strategic keywords, provide valuable information about auto insurance, and showcase your expertise and unique value proposition. This helps attract and educate potential customers, building trust and increasing the likelihood of conversions.</li>
            <li className={style.container2_div1_li}><strong>Link Building and Off-Page SEO:</strong>We develop effective link building strategies to enhance your website's authority and credibility. By securing high-quality backlinks from relevant and trustworthy websites, we improve your online reputation and increase your visibility in search engine results. This ultimately drives more traffic to your auto insurance website.</li>
            <li className={style.container2_div1_li}><strong>Website Optimization:</strong> We optimize your website's structure, navigation, and user experience to ensure it is search engine friendly and user-friendly. Our SEO experts analyze your website's performance, improve page loading speed, enhance mobile responsiveness, and optimize your site architecture for easy navigation. This provides a seamless browsing experience for visitors and encourages them to engage with your insurance offerings.</li>
            <li className={style.container2_div1_li}><strong>Analytics and Reporting:</strong>We provide detailed analytics and regular reports to track the performance of your SEO campaigns. Our transparent reporting enables you to measure the impact of our services, understand customer behavior & make data-driven decisions to optimize your online presence and marketing efforts.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <h2>NSP -  Your SEO Advantage</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Specialized Auto Insurance Focus:We specialize in serving auto insurance companies. This focus allows us to understand your industry, target your audience effectively, and position your business as a leader in the market.</li>
            <li className={style.container2_div1_li}>Comprehensive Solutions:Our SEO services cover all aspects of your online presence. From keyword research to technical optimization and content creation, we provide a holistic approach to enhance your search rankings and drive relevant traffic.</li>
            <li className={style.container2_div1_li}>Results-Driven Approach:We are committed to delivering a high ROI for your SEO efforts. Through continuous analysis and optimization, we ensure long-term success and help you achieve sustainable growth for your auto insurance business.<br />Partner with NSP and let us be your trusted SEO partner in driving your auto insurance website's success. With increased online visibility, targeted traffic, and optimized conversions, we'll help you navigate the digital landscape with confidence and achieve your business goals.</li>
          </ul>
        </div>
        {/* FAQ */}
        <div className={style.FAQS}>
          <div >
            <img className={style.faq} src={FAQ} alt="FAQ" />
          </div>
          <div className={style.wrapper}>
            <h2 className={style.accordion_h2}>Frequently Asked Question</h2>
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
