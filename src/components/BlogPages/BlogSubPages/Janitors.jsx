import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import { Helmet } from 'react-helmet'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can SEO benefit my janitorial business?',
    paragraph: 'SEO can greatly benefit your janitorial business by improving your online visibility, driving targeted traffic to your website, and increasing your chances of converting visitors into customers. With effective SEO strategies, you can establish your brand as a trusted authority in the industry and stay ahead of the competition.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from SEO?',
    paragraph: `   SEO is a long-term strategy that typically takes time to see significant results. However, with the right approach and ongoing optimization, you can start noticing improvements within a few months.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `Do I need SEO if I already have a website?`,
    paragraph: `Having a website is a crucial first step, but without proper optimization, it may not reach its full potential. SEO helps your website rank higher in search engine results, making it more visible to potential customers searching for janitorial services. It ensures that your website appears before your competitors when people search for relevant keywords.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can SEO help my janitorial business target local customers?',
    paragraph: `   Absolutely! Local SEO is a crucial aspect of our services. We optimize your website and business listings to target customers in your local area. By appearing prominently in local search results, map listings, and directories, you can attract local customers actively seeking janitorial services in your vicinity.`
  }
]

export default function Janitors() {
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
        <title>Drive Traffic and Leads: SEO for Janitors</title>
        <meta name="description" content="Our SEO services for Online Janitors drive targeted traffic and leads to boost your business. Get noticed in the Janitors industries." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/local-consumer/janitors/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Janitors</h1>
          <p className={style.container1_div_ptag}>NSP - Your Premier SEO Solution for Janitorial Businesses</p>
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
            "Janitors"
          ]} />
        </div>
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Increase your online visibility and grow your janitorial business with our top-notch SEO services tailored specifically for your industry.</p>
        <div className={style.container2_div1}>
          <h2>Through our comprehensive SEO services, we have helped numerous janitorial businesses achieve remarkable success in the digital realm. Here are some of the critical impacts we have made:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Online Visibility:Our strategies have propelled janitorial businesses to the top of search engine results pages, ensuring maximum visibility to potential customers.</li>
            <li className={style.container2_div1_li}>Targeted Traffic:We have significantly increased organic traffic to our client's websites by targeting relevant keywords and optimizing websites, resulting in more leads and conversions.</li>
            <li className={style.container2_div1_li}>Improved Conversion Rates:Our expertly crafted SEO campaigns have driven traffic and improved conversion rates, helping janitorial businesses turn visitors into loyal customers.</li>
            <li className={style.container2_div1_li}>Local Domination:Our specialized local SEO techniques have empowered janitorial businesses to dominate their local markets and establish themselves as industry leaders.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>What It Includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong>Unlock the power of targeted keywords that will drive relevant traffic to your janitorial business. Our expert team conducts comprehensive keyword research to identify high-value search terms your potential customers use.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>Optimize your website's structure, meta tags, headings, and content to ensure search engines understand the relevance and quality of your janitorial services. We employ proven techniques to enhance your on-page optimization and boost your search engine rankings.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>Capture local customers in your area with our specialized local SEO strategies. We optimize your website for location-based searches, ensuring your janitorial business appears prominently in local search results, map listings, and directories.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>Build a robust online presence and improve your search rankings with our effective link-building strategies. We create high-quality backlinks from authoritative websites in the janitorial industry, increasing your website's authority and visibility.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <p>
Ready to take your janitorial business to new heights with our exceptional SEO services? 
</p>
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
    </>
  )
}
