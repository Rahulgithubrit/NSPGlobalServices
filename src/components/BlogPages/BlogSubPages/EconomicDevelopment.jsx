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
    statement: 'How long does it take to see results from SEO efforts for economic development websites?',
    paragraph: 'The timeline for SEO results can vary depending on factors such as website age, competition, and the effectiveness of your SEO strategy. Generally, it takes several months to see significant changes in serps and organic traffic. Consistency and ongoing optimization are critical to long-term success.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can SEO help attract international investors?',
    paragraph: `Absolutely! SEO can be tailored to target both local and international audiences. By optimizing your website for keywords and content relevant to international investors, you can enhance your visibility in global search results. This can attract foreign investment and foster economic growth in your region.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `What role does content play in SEO for economic development websites?`,
    paragraph: `Content plays a crucial role in SEO for economic development websites. High-quality and informative content helps search engines understand the relevance and value of your website. It also engages and educates your target audience, encouraging them to spend more time on your site and increasing the likelihood of conversions.`
  }
]

export default function EconomicDevelopment() {
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
        <title>Drive Traffic and Leads: SEO for Arts and Culture</title>
        <meta name="description" content="Our SEO services for Arts and Culture Agency drive targeted traffic and leads to boost your business. Get noticed in the Arts and Culture Agency." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/government-agency/economic-development/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Arts and Culture</h1>
          <p className={style.container1_div_ptag}>Driving Growth and Visibility</p>
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
            "Economic Development"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Welcome to NSP, your trusted partner in SEO services for economic development websites. Establishing a robust online presence is vital for economic development organizations and agencies in today's digital era. </p>
        <div className={style.container2_div1}>
          <h2>Why SEO is Important for Economic Development Websites:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong> Increasing Online Visibility:</strong>In an increasingly competitive online landscape, having a well-optimized website is crucial for economic development organizations. SEO techniques help improve your website's visibility in search engine results, ensuring your target audience can easily find and access your information. By ranking higher in search results, you increase your chances of attracting investors, businesses, and tourists to your region.</li>
            <li className={style.container2_div1_li}><strong>Attracting Targeted Traffic:</strong>SEO allows you to target specific keywords and phrases that potential investors or businesses may use when searching for economic development opportunities. By optimizing your website's content and structure, you can attract highly relevant traffic, ensuring that those who visit your site are genuinely interested in the economic potential of your region. This targeted approach maximizes your chances of converting visitors into stakeholders.</li>
            <li className={style.container2_div1_li}><strong>Showcasing Regional Advantages:</strong>An SEO-optimized website provides an opportunity to highlight the unique advantages and opportunities your region offers for economic development. By creating informative and engaging writing, you can effectively showcase infrastructure, incentives, workforce, quality of life, and other factors that make your region attractive for investment. SEO helps ensure that this valuable information reaches your target audience.</li>
          </ul>
        </div >
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
