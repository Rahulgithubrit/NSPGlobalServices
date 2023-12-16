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
    statement: 'How long does it take to see results from SEO?',
    paragraph: 'SEO is a long-term strategy, and results can vary based on factors such as competition, keyword difficulty, and the current state of your website. Generally, you can start seeing noticeable improvements within a few months, but it may take up to six months or more to achieve significant results.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Will you guarantee the top position in search engine rankings?',
    paragraph: `While we strive to improve your website's rankings, it's important to note that no reputable SEO agency can guarantee the top position in search engine results. SEO involves various factors, including algorithm changes, competitor activity, and user behavior. We focus on providing sustainable and long-term growth rather than making false promises.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you work with law firms in specific geographical locations?',
    paragraph: ` Absolutely! We have expertise in local SEO strategies and can optimize your website to target specific geographic locations. We can help you attract clients in your desired area by targeting local keywords and implementing location-based optimization techniques.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ' How do you measure the success of your SEO efforts?',
    paragraph: `We provide regular reports that track key performance indicators (KPIs) such as website traffic, rankings, conversions, and engagement metrics. These reports help us evaluate the success of our SEO efforts and identify areas for further optimization.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you help with website design and development?',
    paragraph: ` While our primary focus is on SEO , we can work closely with your web development team or recommend trusted partners to ensure your website is optimized for search engines. A well-designed and user-friendly website is essential for SEO success.`
  },
  {
    id: 5,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What is SEO for Organic Food Stores?',
    paragraph: `SEO for Organic Food Stores refers to optimizing an organic food store's website to improve its visibility, attract targeted traffic, and increase online sales. The process involves techniques such as keyword research, on-page optimization, content creation, and local SEO practices tailored explicitly for organic food businesses.`
  }
]

export default function Immigration() {
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
        <title>Expert SEO Services for Immigration Lawyers | Boost Your Online Presence</title>
        <meta name="description" content="Our SEO services are your key to success in the Immigration Law industry. Enhance your online reach and attract more clients." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/legal/immigration-lawyers/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Immigration Lawyers</h1>
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
            "Immigration Lawyers SEO Services"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Welcome to NSP, your trusted partner for SEO services explicitly tailored for immigration lawyers. We understand that visibility and online presence are crucial for your law firm's success. That's why we offer comprehensive SEO solutions to help you reach your target audience effectively and increase your website's visibility in search engine results. With our expertise in the field, we can optimize your online presence and drive valuable traffic to your website.</p>
        <div className={style.container2_div1}>
          <h2>Why Choose NSP for SEO Services?</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Industry Expertise:Our team of SEO professionals has extensive experience working with immigration lawyers and law firms. We understand the unique challenges you face in your industry and can provide tailored strategies to address them effectively.</li>
            <li className={style.container2_div1_li}>Increased Visibility:We employ proven SEO techniques to enhance your website's visibility in search engine rankings. By optimizing your website's content, structure, and keywords, we help you rank higher in search results, ensuring potential clients can find you easily.</li>
            <li className={style.container2_div1_li}>Targeted Traffic:Our SEO strategies focus on attracting highly relevant traffic to your website. By targeting keywords and phrases specific to immigration law, we drive traffic from individuals actively seeking legal services in your niche.</li>
            <li className={style.container2_div1_li}>Conversion Optimization:It's not just about driving traffic; it's about converting those visitors into clients. We analyze user behavior on your website and implement strategies to improve conversion rates, ensuring your website generates more leads and inquiries.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>Our SEO Process:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong>We perform in-depth keyword research to identify the most relevant and high-converting keywords in the immigration law niche. This research forms the foundation for our content optimization strategies.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>We optimize your website's content, meta tags, headings, and URLs to ensure search engines understand the relevance and quality of your pages. This optimization helps search engines rank your website higher in search results.</li>
            <li className={style.container2_div1_li}><strong>Content Strategy:</strong>Our team develops a content strategy that creates informative and engaging content relevant to immigration law. We incorporate the targeted keywords to improve search engine visibility and attract your ideal clients.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>We employ effective link-building techniques to enhance your website's authority and credibility. We improve your website's ranking potential by securing high-quality backlinks from relevant websites.</li>
            <li className={style.container2_div1_li}><strong>Website Audit:</strong>We begin by conducting a comprehensive audit of your website to identify any technical issues, optimize website structure, and ensure it aligns with search engine guidelines.</li>
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
