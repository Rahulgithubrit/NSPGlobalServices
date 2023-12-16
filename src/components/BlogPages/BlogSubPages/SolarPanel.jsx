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
    statement: 'How long does it take to see results from SEO efforts?',
    paragraph: 'SEO is a long-term strategy, and results can vary based on factors such as website age, competition, and industry. Generally, noticeable improvements can be seen within a few months, but it takes consistent effort and ongoing optimization to achieve sustainable long-term results.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ' How much do SEO services for Solar Panel Manufacturers and SEO Companies cost?',
    paragraph: `The cost of SEO services can vary depending on the scope of work, competition, and the specific needs of your business. We offer customized pricing options tailored to your budget and objectives.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ` Can SEO help us generate leads and increase conversions?`,
    paragraph: `SEO plays a crucial role in generating leads and increasing conversions. By optimizing your website, targeting relevant keywords, and improving user experience, we can attract qualified traffic and optimize your site for conversions, resulting in more inquiries and business growth.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What makes NSP the right choice for SEO services?',
    paragraph: `NSP has a proven track record of delivering effective SEO solutions for Solar Panel Manufacturers and SEO Companies. We combine industry expertise, data-driven strategies, and a client-centric approach to ensure your business achieves maximum visibility, drives targeted traffic, and achieves long-term success.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Will we receive regular reports and updates on our SEO campaign?',
    paragraph: `Yes, we provide regular reports and updates on the progress of your SEO campaign. These reports will include key metrics such as keyword rankings, organic traffic, and website performance, enabling you to track the success and ROI of your SEO investment.`
  },
  {
    id: 5,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you stay updated with the latest SEO trends and algorithm updates?',
    paragraph: `At NSP, we prioritize staying updated with the latest SEO trends and algorithm changes. Our team of experts constantly monitors industry developments, participates in conferences and webinars, and engages in continuous learning to ensure that our strategies align with the latest best practices.`
  }
]

export default function SolarPanel() {
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
                <title>SEO & Digital Marketing for Solar Panel Manufacturers</title>
                <meta name="description" content="Empower your solar panel brand with our specialized digital marketing services. Illuminate your online presence, attract more customers, and lead the way in a competitive market." />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/manufacturing/solar-panel-manufacturers/seo"/>
            </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for Solar Panel Manufacturers</h1>
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
            "Solar Panel"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>We are your trusted partner for SEO services explicitly tailored for Solar Panel Manufacturers and SEO Companies. We understand this industry's unique challenges and are here to help you maximize your online visibility, attract more clients, and grow your business. With our expertise in SEO strategies and industry best practices, we can create a highly effective digital presence that drives organic traffic and increases conversions.</p>
        <div className={style.container2_div1}>
          <h2>Importance of SEO  services to Solar Panel Manufacturers and SEO Companies</h2>
          <p>Solar Panel Manufacturers and SEO Companies need SEO services to stay ahead of the competition, improve their online visibility, and attract targeted website traffic. With the increasing demand for solar energy solutions and the competitive nature of the SEO industry, it's crucial to have a robust online presence that ranks well in search engine results.</p>
        </div>
        <div className={style.container2_div1}>
          <h2>Process of implementing SEO services for Solar Panel Manufacturers and SEO Companies</h2>
          <p>The process begins with a comprehensive analysis of your current website, keyword research, and competitor analysis. We then optimize your website's on-page elements, create high-quality content, and build authoritative backlinks to improve search engine rankings. We also focus on local SEO strategies to target customers in specific geographic locations, ensuring maximum visibility for your business.</p>
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
