import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import check from '../../assets/check.png'
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
    statement: ' What is SEO, and why is it important for organic food stores?',
    paragraph: 'SEO, or Search Engine Optimization, means optimizing a website to improve its ranking & visibility in search engine results. For organic food stores, SEO is crucial as it helps attract potential clients actively searching for organic food products, driving targeted traffic to their websites.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can SEO help increase the visibility of my organic food store website?',
    paragraph: `SEO enhances your organic food store website's visibility by improving rankings in search engine results. With higher visibility, your website becomes more discoverable to individuals searching for organic food products, increasing their likelihood of visiting it.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What are some specific SEO strategies for optimizing an organic food store website?',
    paragraph: `Specific SEO strategies for organic food stores include extensive keyword research, on-page optimization, technical SEO practices, content marketing, and local SEO techniques to target customers in specific geographical areas.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from SEO efforts for an organic food store?',
    paragraph: `The timeline for seeing results from SEO efforts can vary depending on keyword competitiveness, website structure, and optimization level. Generally, it takes several months for significant improvements in search engine rankings and organic traffic.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can I do SEO for my organic food store website on my own, or should I hire a professional?',
    paragraph: `While it's possible to implement basic SEO practices on your own, hiring a professional SEO service provider with expertise in the organic food industry can provide an effective strategy to achieve optimal results.`
  },
  {
    id: 5,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What is SEO for Organic Food Stores?',
    paragraph: `SEO for Organic Food Stores refers to optimizing an organic food store's website to improve its visibility, attract targeted traffic, and increase online sales. The process involves techniques such as keyword research, on-page optimization, content creation, and local SEO practices tailored explicitly for organic food businesses.`
  }
]

export default function OrganicFoodStores() {
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
        <title>Drive Traffic and Leads: SEO for Organic Food Stores</title>
        <meta name="description" content="Our SEO services for Online Organic Food Stores drive targeted traffic and leads to boost your business. Get noticed in the Restaurants industries." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/food-beverage/organic-food-stores/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Organic Food Stores</h1>
          <p className={style.container1_div_ptag}>Elevate Your Organic Food Store's Online Presence with Effective SEO Services.</p>
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
            "Organic Food Stores"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In the rapidly growing organic food industry, having a strong online presence is essential for thriving organic food stores. By leveraging professional SEO services explicitly tailored for organic food stores, you can optimize your website, improve search engine rankings, and attract more clients.<br />At NSP, we provide comprehensive SEO services for organic food stores. Our tailored approach enhances your website's visibility, attracts targeted traffic, and increases your online sales.</p>
        <div className={style.container2_div1}>
          <h2>Effective SEO Strategies for Organic Food Stores:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Extensive Keyword Research:</strong>Identify and target relevant keywords specific to the organic food industry.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong> Optimize meta tags, headings, URLs, and content to align with targeted keywords.</li>
            <li className={style.container2_div1_li}><strong>Technical SEO:</strong> Ensure your website's structure, mobile-friendliness, and loading speed are optimized for search engines.</li>
            <li className={style.container2_div1_li}><strong>Content Marketing:</strong>Create valuable and engaging organic food-related content to attract and retain your target audience.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>Optimize your website and online listings for local search results to target customers in your area.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <h2>The Outcome of Organic Food Stores SEO Efforts:</h2>
          <ul className={style.container3_ul}>
            <li>
              <div className={style.container3_li}>
                <img src={check} alt="check" />
                <span>Improved search engine rankings for organic food-related keywords.</span>
              </div>
            </li>
            <li>
              <div className={style.container3_li}>
                <img src={check} alt="check" />
                <span>Increased organic traffic to your website.</span>
              </div>
            </li>
            <li>
              <div className={style.container3_li}>
                <img src={check} alt="check" />
                <span>Enhanced brand visibility and authority in the organic food industry.</span>
              </div>
            </li>
            <li>
              <div className={style.container3_li}>
                <img src={check} alt="check" />
                <span>Competitive advantage over other organic food stores.</span>
              </div>
            </li>
          </ul>
        </div>
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
