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
    statement: 'How long does it take to see results from SEO efforts for a travel insurance firm?',
    paragraph: 'The timeline for seeing noticeable results can vary depending on factors such as keyword competitiveness, industry competition, and the current state of your website.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can SEO help my travel insurance firm attract more customers?',
    paragraph: `Absolutely! By optimizing your website, targeting relevant keywords, and implementing effective SEO strategies, you can enhance your online visibility and attract more customers who are actively seeking travel insurance coverage.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Is local SEO important for travel insurance firms?',
    paragraph: `Local SEO is crucial for targeting customers in specific geographic areas and appearing prominently in local search results. It helps potential customers find your travel insurance services when they search for coverage in their location.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of SEO campaigns for travel insurance firms?',
    paragraph: `We measure the success of SEO campaigns through key performance indicators, including organic traffic, keyword rankings, conversion rates, and quote requests or policy purchases. Our team provides regular reports outlining these metrics and offering continuous improvement insights.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you help with reputation management for my travel insurance firm?',
    paragraph: `Yes, we offer reputation management services to help monitor and enhance the online reputation of your travel`
  }
]

export default function TravelInsurance() {
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
        <title>Travel Insurance SEO Services | Boost Your Online Visibility</title>
        <meta name="description" content="Our travel insurance SEO services drive your online visibility and help you reach more travelers. Get started today!" />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/insurance/travel-insurance/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Travel Insurance SEO Services</h1>
          <p className={style.container1_div_ptag}>Enhance Your Online Visibility and Boost Conversions</p>
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
            "Travel Insurance SEO Services"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>At NSP, we specialize in tailored SEO services for travel insurance firms. Our team of SEO experts understands the unique challenges faced by this industry and is committed to helping you enhance your online visibility.</p>
        <div className={style.container2_div1}>
          <h2>Our Customized SEO Services for Travel Insurance Firms:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Comprehensive Keyword Research and Optimization:</strong>Our SEO experts conduct high-intent keyword research to identify the most relevant and high-performing keywords for your travel insurance business. By optimizing your website and content with these targeted keywords, we improve your search engine rankings, attract potential customers actively searching for travel insurance, and increase organic traffic.</li>
            <li className={style.container2_div1_li}><strong>Local SEO Strategies:</strong>We implement effective SEO strategies to ensure your travel insurance firm ranks higher in local search results. This includes optimizing your GMy Business profile, creating location-specific landing pages, and providing accurate and consistent business information across online directories. By targeting customers in each location you serve, we enhance your visibility among those seeking travel insurance in their area.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>Our team optimizes various on-page elements of your website, including meta tags, headers, URLs, and content structure, to make it more search engine-friendly and user-friendly.</li>
            <li className={style.container2_div1_li}><strong>Content Creation and Optimization:</strong>We have a team of skilled content creators who develop informative and engaging content that addresses travelers' common questions and concerns regarding travel insurance. By optimizing this content for search engines, we ensure it ranks well and attracts organic traffic to your website. We also focus on creating compelling landing pages that drive conversions and encourage visitors to take action.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>Our ethical link-building techniques help acquire high-quality backlinks from authoritative sources in the travel industry. These backlinks improve your website's authority and search engine rankings and generate referral traffic from relevant websites.</li>
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
