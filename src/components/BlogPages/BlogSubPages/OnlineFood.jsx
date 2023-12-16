import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import SEO_Images_1 from '../../assets/Alteration/Untitled design_20231106_205249_0000.png'
import SEO_Images_2 from '../../assets/Alteration/local seo 2.jpg'
import img1 from '../../assets/Alteration/technical seo 2.jpg'
import img2 from '../../assets/Alteration/mobile SEO 2.jpg'
import img3 from '../../assets/Alteration/Link building 2.jpg'
import { Helmet } from 'react-helmet'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from SEO efforts for an online food delivery service?',
    paragraph: 'The timeline for noticeable results may vary depending on many factors, such as keyword competitiveness and the current state of your website. Generally, it takes several months to observe major changes in search engine rankings & organic traffic.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ' Can SEO help my online food delivery service attract more customers?',
    paragraph: `Absolutely! By optimizing your website, targeting relevant keywords, and implementing effective SEO strategies, you can significantly improve your online visibility & attract more customers to your food delivery service.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Is local SEO important for online food delivery services?',
    paragraph: `Local SEO plays a crucial role in targeting customers in specific geographic areas and appearing prominently in local search results. It helps potential customers in your service area find and choose your food delivery service more easily.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of SEO campaigns for online food delivery services?',
    paragraph: `We measure success through various metrics, including organic traffic, keyword rankings, conversion rates, and the number of orders placed. Our team provides regular reports that outline these key performance indicators and offer insights for continuous improvement.`
  }
]

export default function OnlineFood() {
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
        <title>Drive Traffic and Leads: SEO for Online Food Delivery</title>
        <meta name="description" content="Our SEO services for Online Food Delivery drive targeted traffic and leads to boost your business. Get noticed in the food beverage industries." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/food-beverage/online-food-delivery/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Online Food Delivery</h1>
          <p className={style.container1_div_ptag}>Boost Your Online Presence and Drive More Orders</p>
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
            "Online Food SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In the competitive world of online food delivery services, it's essential to establish a strong online presence to attract customers and outshine your competitors. At NSP, we specialize in customized SEO services exclusively designed for online food delivery services. Our team of SEO experts understands the unique challenges faced by this industry. It is dedicated to helping you enhance your online visibility, increase organic traffic, and ultimately drive more orders and revenue.<br />Our Tailored SEO Services for Online Food Delivery Services.</p>
        <div className={style.container2_div1}>
          <h2>We offer  SEO services for online food delivery services. Our services include:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research and Optimization:</strong>Our experienced SEO professionals conduct keyword research to identify the intent and high-performing keywords for your online food delivery business. By optimizing your website and content with these targeted keywords, we can improve your search engine visibility and attract more hungry customers.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>We optimize various on-page elements of your website to make it search engine-friendly and user-friendly. This includes optimizing meta tags, headers, URLs, and content structure. Enhancing the overall on-page optimization increases your website's visibility in search engine results.</li>
            <li className={style.container2_div1_li}><strong>Local SEO Strategies:</strong>We implement effective SEO strategies to ensure your online food delivery service ranks higher in local search results. This involves optimizing your GMB profile, creating location-specific landing pages, and maintaining consistent business information across various online directories. By targeting customers in your service area, we can enhance your visibility among those actively searching for food delivery options nearby.</li>
            <li className={style.container2_div1_li}><strong>CContent Creation and Optimization:</strong>Our skilled content creators develop engaging, informative, and keyword-rich content that resonates with your target audience. From blog posts about popular food trends to informative articles about healthy eating, we create compelling content that attracts organic traffic and positions your brand as a trusted source of food-related information. By optimizing this content for search engines, we ensure it ranks well and drives more visitors to your website.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>We employ ethical link-building techniques to acquire high-quality backlinks from reputable food and culinary industry sources. These backlinks enhance your website's authority and search engine rankings and generate referral traffic from relevant websites, increasing your chances of attracting new customers.</li>
          </ul>
        </div >
        {/* FAQ */}
        <div sclassName={style.FAQS}>
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
