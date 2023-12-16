import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import SEO_Images_1 from '../../assets/loan offers/IMG-20231111-WA0006.jpg'
import SEO_Images_2 from '../../assets/loan offers/IMG-20231111-WA0001.jpg'
import img1 from '../../assets/loan offers/IMG-20231111-WA0004.jpg'
import img2 from '../../assets/loan offers/IMG-20231111-WA0005.jpg'
import img3 from '../../assets/loan offers/IMG-20231111-WA0007.jpg'
import { Helmet } from 'react-helmet'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from SEO efforts?',
    paragraph: 'SEO is a long-term strategy, and results can vary based on factors such as website age, competition, and industry. Generally, it takes several months to see noticeable changes. Consistent effort and ongoing optimization are necessary for long-term success.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can SEO help real estate investors generate leads?',
    paragraph: `Absolutely! SEO can be a powerful tool for lead generation in the real estate industry. By optimizing your website, targeting relevant keywords, and implementing effective SEO strategies, you can attract motivated sellers and buyers, increasing the chances of generating valuable leads for your investment business.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How does NSP customize SEO strategies for real estate investors?`,
    paragraph: `NSP understands the unique needs of real estate investors. We thoroughly research your target market, investment strategies, and industry trends to develop customized SEO strategies that align with your business goals and objectives.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Will I receive regular reports and updates on my SEO campaign?',
    paragraph: `Yes, we provide regular reports and updates on the progress of your SEO campaign. These reports will include key metrics such as keyword rankings, organic traffic, lead generation, and other essential insights, enabling you to track the success and ROI of your SEO investment.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can SEO help real estate investors stand out in a competitive market?',
    paragraph: `SEO can help real estate investors stand out by improving their online visibility, attracting targeted traffic, and establishing their expertise in the industry. By optimizing your website and content for relevant keywords, you can increase your chances of being found by motivated sellers and buyers, giving you a competitive edge.`
  }
]

export default function RealEstateInvestement() {
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
        <title>Drive Traffic and Leads: SEO for Real Estate Investment Companies</title>
        <meta name="description" content="Our SEO services for Real Estate Investment Companies drive targeted traffic and leads to boost your business. Get noticed in the Real Estate Investment Companies." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/real-estate/real-estate-investement-companies/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Real Estate Investment Companies</h1>
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
            "Real Estate Investement"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Welcome to NSP, your trusted partner for SEO services designed specifically for Real Estate Investors. We understand the unique needs and challenges the real estate industry faces. With our expertise in SEO, we can create a customized digital strategy that drives organic traffic, increases leads, and boosts your success as a real estate investor.</p>
        <div className={style.container2_div1}>
          <h2>SEO Services Designed for Real Estate Investors Websites:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong> Improve Search Engine Visibility:</strong>Enhance your website's rankings to ensure it appears prominently when potential sellers and buyers search for real estate investment opportunities in your target market.</li>
            <li className={style.container2_div1_li}><strong>Keyword Optimization:</strong>Conduct thorough keyword research to identify the most relevant and high-performing real estate investment industry keywords. Optimize your website's content with these keywords to improve visibility and attract targeted traffic.</li>
            <li className={style.container2_div1_li}><strong>Local SEO Strategies:</strong>Implement local SEO techniques to target specific geographic areas where you operate as a real estate investor. This includes optimizing your website for local keywords and leveraging local directories and listings.</li>
            <li className={style.container2_div1_li}><strong>Content Creation and Optimization:</strong>Develop high-quality and informative content showcasing your real estate investor expertise. Optimize this content with targeted keywords to attract organic traffic and establish yourself as a trusted authority in the industry.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>Build high-quality backlinks from reputable websites and real estate directories to improve your website's authority and visibility in search engine results.</li>
            <li className={style.container2_div1_li}><strong>User Experience Optimization:</strong>Enhance the user experience on your website by optimizing page load speed, mobile responsiveness, and navigation, ensuring visitors have a seamless browsing experience.</li>
            <li className={style.container2_div1_li}><strong>Analytics and Reporting:</strong>Provide regular reports and analytics that track the performance of your website, including keyword rankings, organic traffic, and lead generation, allowing you to measure the effectiveness of your SEO efforts.</li>
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
