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
    statement: 'How can SEO benefit my disability insurance website?',
    paragraph: `SEO can improve your website's visibility in search engine results, attract targeted traffic, and generate more leads for your disability insurance business.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Why is content optimization important for my disability insurance website?',
    paragraph: `Content optimization ensures that your website's content is informative, engaging, and search engine friendly. It helps attract and retain visitors while improving your website's visibility in search results.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How does local SEO help my disability insurance website?',
    paragraph: `Local SEO focuses on optimizing your website to appear prominently in local search results. It helps attract clients in your target geographical area who are searching for disability insurance services locally.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can SEO help me stay ahead of my competitors in the disability insurance market?',
    paragraph: `SEO can improve your website's visibility, attract more clients, and position your brand as an industry leader. By implementing effective SEO strategies, you can gain a competitive edge in the disability insurance market`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can I track the success of my SEO efforts for my disability insurance website?',
    paragraph: `Tracking tools, such as Google Analytics, can help you monitor website traffic, keyword rankings, and conversions. These insights provide valuable data to evaluate the effectiveness of your SEO strategies.`
  },
  {
    id: 5,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How can I get started with NSP's SEO services for my disability insurance website?`,
    paragraph: `Contact NSP today to schedule a personalized consultation. Our experts will assess your website's needs and recommend tailored SEO strategies to boost your online presence and attract more clients.`
  }
]

export default function DisabilityInsurance() {
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
        <title>Disability Insurance SEO Services | Boost Your Online Visibility</title>
        <meta name="description" content="Our Disability Insurance SEO services enhance your online visibility, making it easier for people to discover your insurance offerings. Kickstart your online success now!" />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/insurance/disability-insurance/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Disability Insurance SEO Services</h1>
          <p className={style.container1_div_ptag}>Drive Traffic, Generate Leads, and Dominate the Disability Insurance Market with NSP's Tailored SEO Strategies</p>
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
            "Disability Insurance SEO Services"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>At NSP, we specialize in delivering exceptional SEO services specifically tailored to disability insurance websites. Let our expertise help you maximize your online visibility, attract qualified leads, and establish your brand as a trusted provider in the industry.</p>
        <div className={style.container2_div1}>
          <h2>Process Involved in Alteration SEO:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>🎯 Targeted Keyword Optimization:</strong>Our SEO experts understand the unique needs of disability insurance websites. By optimizing your website and content with these targeted keywords, we ensure your website appears prominently in search engine results, attracting potential clients.</li>
            <li className={style.container2_div1_li}><strong>⚡ Content Strategy and Optimization:</strong>Engaging and informative content is crucial for attracting and retaining clients. Our SEO specialists will optimize your website's content, ensuring it is not only informative but also search engine friendly.</li>
            <li className={style.container2_div1_li}><strong>📈 Local SEO Domination:</strong>Local clients play a significant role in the disability insurance sector. Our localized SEO strategies focus on improving your visibility in specific geographic areas, ensuring your website stands out when potential clients search for disability insurance services in their locality. Drive targeted traffic and increase your client base.</li>
            <li className={style.container2_div1_li}><strong>💡 Mobile Optimization for Seamless User Experience:</strong> Mobile devices are now the primary means of internet access. NSP's SEO services include mobile optimization, ensuring your website provides a seamless and user-friendly experience across all devices. Attract busy individuals searching for disability insurance solutions on their smartphones or tablets.<br /><br />Embrace the power of NSP's SEO services and revolutionize your disability insurance website's online presence. Take the first step towards dominating the market by reaching out to our experts today. The path to attracting more clients and expanding your business awaits you.Don't let your competitors overshadow you. Reach out to NSP today and unlock the full potential of your disability insurance website.</li>
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
