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
    statement: 'How long does it take to see results from Strategic SEO efforts?',
    paragraph: ' SEO is a long-term strategy, and results can vary based on factors such as website age, competition, and industry. Generally, it takes a few months to see noticeable improvements in search engine rankings and organic traffic, but the consistent effort and ongoing optimization are necessary for long-term success.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can SEO help artists and cultural businesses increase their online exposure?',
    paragraph: `SEO plays a vital role in increasing online exposure for artists and cultural businesses. By optimizing your website, targeting relevant keywords, and implementing effective SEO strategies, you can attract a larger audience, gain visibility in search engine results, and expand your artistic reach.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How does NSP tailor SEO strategies for artists and cultural businesses?`,
    paragraph: `NSP understands the unique needs of the arts and culture industry. We conduct thorough research on your artistic niche, target audience, and industry trends to develop customized SEO strategies that align with your creative brand, goals, and objectives.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Will I receive regular reports and updates on my SEO campaign?',
    paragraph: `Absolutely! We provide regular reports and updates on the progress of your SEO campaign. These reports will include key metrics such as keyword rankings, organic traffic, backlink profiles, and other essential insights, enabling you to track the success and ROI of your SEO investment.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How does SEO contribute to the growth of artists and cultural businesses?',
    paragraph: `Strategic SEO helps artists and cultural businesses by increasing online visibility, attracting a wider audience, and promoting their artistic brand. It allows you to connect with art enthusiasts, increase opportunities for collaborations and exhibitions, and ultimately grow your creative career or business.`
  }
]

export default function CulturalAgency() {
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
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/government-agency/arts-cultural/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Arts and Culture</h1>
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
            "Cultural Agency"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Strategic SEO is essential for artists and cultural businesses to enhance online visibility and effectively reach their target audience. By implementing tailored SEO strategies</p>
        <div className={style.container2_div1}>
          <h2>we can help you:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Increase Online Visibility:</strong>Optimize your website to rank higher in search engine results, making it easier for potential audiences to find you and explore your artistic offerings.</li>
            <li className={style.container2_div1_li}><strong>Target Relevant Keywords:</strong>Conduct thorough keyword research to identify the most relevant and high-performing keywords that resonate with your artistic niche, ensuring your website is optimized for the right audience.</li>
            <li className={style.container2_div1_li}><strong>Content Optimization:</strong>Develop high-quality, engaging content that showcases your artistic talents, exhibitions, events, or cultural initiatives. Optimize this content with targeted keywords to improve search engine rankings and attract organic traffic.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>Implement local SEO strategies to target audiences within your specific geographical area, promoting your presence in local art scenes and cultural events.</li>
            <li className={style.container2_div1_li}><strong>Backlink Building:</strong>Build authoritative backlinks from reputable websites and art-related platforms, enhancing your website's credibility and authority within the arts and culture industry.</li>
            <li className={style.container2_div1_li}><strong>Social Media Integration:</strong>Integrate social media platforms to promote your artistic creations, exhibitions, or performances, and create a robust online presence through active engagement with your audience.</li>
            <li className={style.container2_div1_li}><strong>Mobile Optimization:</strong> Optimize your website for mobile devices to ensure a seamless user experience, as more and more audiences access artistic content through their smartphones and tablets.</li>
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
