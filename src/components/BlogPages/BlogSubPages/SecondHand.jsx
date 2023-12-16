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
    statement: 'Why is SEO important for second hand stores?',
    paragraph: 'SEO is crucial for secondhand stores as it improves online visibility, attracts targeted customers, and helps build brand authority, enabling you to stand out in a competitive market.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can SEO help improve the visibility of my secondhand store online?',
    paragraph: `SEO techniques such as keyword optimization, on-page optimization, and link building can significantly improve your secondhand store's search engine rankings, making it more visible to potential customers searching for secondhand items online.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What are the specific SEO challenges faced by secondhand stores?',
    paragraph: `Secondhand stores often have unique inventory turnover, varying product descriptions, and a constant influx of new items. Overcoming these challenges requires effective keyword research, consistent content optimization, and proper categorization of items to maximize SEO potential.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What are the key components of SEO for resale shops?',
    paragraph: `Key components of SEO for resale shops include keyword research, on-page optimization, content optimization, local SEO, and link building. These components work together to improve online visibility and drive targeted traffic to your resale shop.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can I optimize product descriptions for secondhand items to improve SEO?',
    paragraph: `To optimize product descriptions for secondhand items, focus on including relevant keywords, providing accurate and detailed information, and highlighting unique selling points. This will improve your SEO performance and attract interested customers searching for specific secondhand items.`
  },
]
export default function SecondHand() {
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
        <title>Best SEO Experts for Second Hand | Boost Your Online Presence</title>
        <meta name="description" content="Second Hand SEO specialists dedicated to optimizing your online presence. Increase your second hand store's visibility and profitability with us." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/fashion/secondhand-stores/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Second Hand Stores SEO Services</h1>
          <p className={style.container1_div_ptag}>Boosting Online Visibility and Growth</p>
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
            "Second Hand Stores"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Our Secondhand Stores SEO Services are specifically designed to help secondhand retailers optimize their online presence and attract more customers. By implementing effective SEO strategies and techniques, we enhance the visibility of your secondhand store website in search engine results, ultimately driving more organic traffic and increasing conversions.</p>
        <div className={style.container2_div1}>
          <h2>Benefits of Secondhand Stores SEO Services:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}> Increased Online Visibility: Our SEO services ensure that your secondhand store appears prominently in search engine results, allowing potential customers to easily find and discover your offerings.</li>
            <li className={style.container2_div1_li}> Targeted Traffic: By optimizing your website, we attract relevant and interested visitors who are actively searching for secondhand items, increasing the likelihood of conversions and sales.</li>
            <li className={style.container2_div1_li}>Brand Authority: Improved search rankings and visibility establish your secondhand store as a trusted and authoritative source, enhancing your brand reputation and customer trust.</li>
            <li className={style.container2_div1_li}>Competitive Edge: Through effective SEO strategies, we help your store outperform competitors, enabling you to capture a larger market share within the secondhand retail industry.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>Process and Factors:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong>  We conduct thorough research to identify relevant and high-traffic keywords related to secondhand stores, clothing, and resale shops. These keywords are strategically integrated into your website's content, metadata, and product descriptions.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>  We optimize your website's structure, meta tags, headers, and URLs to improve search engine crawling and indexing. This ensures that your secondhand store website is easily accessible and comprehensible to search engines.</li>
            <li className={style.container2_div1_li}><strong> Content Optimization:</strong>We create engaging and informative content that showcases the unique aspects of your secondhand items. By optimizing product descriptions with relevant keywords and compelling language, we enhance your website's SEO performance.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>  We employ link-building strategies to enhance the authority and credibility of your secondhand store website. This involves acquiring quality backlinks from reputable sources in the secondhand retail industry.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>  For physical secondhand stores, we optimize your website for local searches, ensuring that potential customers in your area can easily find your store and its offerings.</li>
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
