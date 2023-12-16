import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import SEO_Images_1 from '../../assets/Alteration/seo1.jpg'
import SEO_Images_2 from '../../assets/Alteration/on-page SEO1.jpg'
import img1 from '../../assets/Alteration/SEO Reporting 1.jpg'
import img2 from '../../assets/Alteration/technical-seo1.jpg'
import img3 from '../../assets/Alteration/off-page seo 1.jpg'
import { Helmet } from 'react-helmet'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from SEO efforts?',
    paragraph: 'SEO is a long-term strategy, and the time it takes to see results can vary based on various factors, including competition, keyword difficulty, and the current state of your website. It may take several months to see significant improvements in your organic rankings.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you guarantee the top position in search engine results?',
    paragraph: `While we cannot guarantee specific rankings, we aim to improve your website's visibility and organic traffic. We employ proven strategies and best practices to optimize your website, increasing the likelihood of higher rankings and enhanced online exposure.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How do you measure the success of SEO campaigns?`,
    paragraph: `We track and analyze various metrics, including organic traffic, keyword rankings, click-through rates, and conversions, to evaluate the success of our SEO campaigns. Our team provides regular reports highlighting the progress and results achieved.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can I do SEO for my travel website on my own?',
    paragraph: ` SEO is a complex and ever-evolving field that requires expertise and ongoing effort. While you can implement basic SEO practices, partnering with a professional SEO agency like NSP ensures that your travel website receives comprehensive optimization strategies tailored to the unique needs of the travel industry.`
  }
]

export default function TourismAgency() {
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
        <title>Drive Traffic and Leads: SEO for Tourism Agency</title>
        <meta name="description" content="Our SEO services for Tourism Agency drive targeted traffic and leads to boost your business. Get noticed in the Tourism Agency." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/government-agency/tourism/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Tourism Agency</h1>
          <p className={style.container1_div_ptag}>Enhance Your Online Presence with NSP's SEO Services for Travel Agency Websites</p>
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
            "Tourism Agency"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In today's digital age, the travel industry heavily relies on the internet and online search. Travel agency websites are the primary touchpoint for potential customers seeking information, inspiration, and booking services. SEO services ensure that travel agency websites are visible, accessible, and attract relevant traffic.<br />By implementing effective SEO strategies, travel agencies can improve their website's search engine rankings, increase organic traffic, and drive more bookings and revenue. SEO services help travel agency websites stand out in a highly competitive market and reach a wider audience of travelers actively searching for destinations, flights, accommodations, and other travel-related services.</p>
        <div className={style.container2_div1}>
          <h2>The Process of SEO Services for Travel Agency Websites</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong>Our SEO experts conduct comprehensive keyword research to identify the most relevant and high-traffic keywords in the travel industry. We analyze search trends, competition, and user intent to select the optimal keywords to target for your website.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>We optimize your website's structure, meta tags, headings, and content to align with the targeted keywords. This includes crafting engaging and informative travel-related content, optimizing page titles and descriptions, and improving website usability.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>We implement local SEO strategies for travel agencies with physical locations or targeting specific geographic areas. This includes optimizing Google My Business profiles, managing online reviews, and enhancing local citations to improve visibility in local search results.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>We develop a customized link-building strategy to enhance your website's authority and credibility. Our team acquires high-quality backlinks from reputable travel-related sources, such as travel blogs, industry publications, and relevant directories.</li>
            <li className={style.container2_div1_li}><strong>Content Marketing:</strong>We create compelling and valuable travel-related content, including destination guides, travel tips, and blog posts. This content engages potential customers and attracts natural backlinks and social shares, further boosting your website's visibility.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <p>By leveraging NSP's SEO services for travel agency websites, you can enhance your online visibility, attract more qualified leads, and drive the growth of your travel business in the competitive travel market.</p>
          <p>Welcome to NSP, your trusted partner for Strategic SEO services for Artists & Cultural Businesses. We understand the unique needs and challenges faced by the arts and culture industry, and we are here to help you optimize your online presence, attract a wider audience, and promote your artistic endeavors. With our expertise in Strategic SEO, we can create a customized digital strategy that drives organic traffic, increases visibility, and boosts your creative brand.</p>
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
