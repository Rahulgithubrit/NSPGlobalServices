import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import { Helmet } from 'react-helmet'
import SEO_Images_1 from '../../assets/loan offers/IMG-20231111-WA0006.jpg'
import SEO_Images_2 from '../../assets/loan offers/IMG-20231111-WA0001.jpg'
import img1 from '../../assets/loan offers/IMG-20231111-WA0004.jpg'
import img2 from '../../assets/loan offers/IMG-20231111-WA0005.jpg'
import img3 from '../../assets/loan offers/IMG-20231111-WA0007.jpg'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from SEO efforts for an equipment rental business?',
    paragraph: 'The timeline for noticeable results may vary depending on many factors such as keyword competitiveness and the current state of your website. Generally, it takes several months to observe significant improvements in search engine rankings and organic traffic.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can SEO help my equipment rental business attract more customers?',
    paragraph: `Absolutely! By optimizing your website, targeting relevant keywords, and implementing effective SEO strategies, you can enhance your online visibility and attract more customers who are actively seeking equipment rentals.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Is local SEO important for equipment rental businesses?',
    paragraph: `Yes, local SEO is crucial for targeting customers in specific geographic areas and appearing prominently in local search results. It helps potential customers find your equipment rental services more easily.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of SEO campaigns for equipment rentals?',
    paragraph: `We measure success through various metrics, including organic traffic, keyword rankings, conversion rates, and the number of rental inquiries or bookings. Our team provides regular reports that outline these key performance indicators and offer insights for continuous improvement.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you help with reputation management for my equipment rental business?',
    paragraph: `Yes, we offer reputation management services to help monitor and enhance the online reputation of your equipment rental business. We proactively monitor online reviews, respond to customer feedback, and implement strategies to maintain a positive brand image.`
  }
]

export default function Equipment() {
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
        <title>Strategic Digital Marketing for Rentals Equipment</title>
        <meta name="description" content="Fuel your Rentals Equipment brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/logistics/logistics-consulting-firm" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for Rentals Equipment</h1>
          <p className={style.container1_div_ptag}>Our Customized SEO Services for Equipment Rentals</p>
        </div>
        <div className={style.container2_div}>
          <TextSphare texts={[
            "services SEO",
            "Keyword Research",
            "On-Page",
            "Tailoring shop",
            "Technical SEO",
            "Content Marketing",
            "garment alterations",
            "clothing alterations",
            "tailor services",
            "Alteration services"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>We offer a ange of SEO services designed to meet the specific needs of equipment rental businesses</p>
        <div className={style.container2_div1}>
          <h2>Our services include:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research and Optimization:</strong> We conduct thorough keyword research to identify the most relevant and high-performing keywords for your equipment rental business. By optimizing your website and content with these targeted keywords, we improve your search engine rankings and attract potential leads who are actively searching for equipment rentals.</li>
            <li className={style.container2_div1_li}><strong>Local SEO Strategies:</strong>We implement effective local SEO strategies to ensure your equipment rental business ranks higher in local search results. This includes optimizing your GMB profile, creating location-specific landing pages, and ensuring accurate business information across online directories. By targeting customers in each location you serve, we enhance your visibility among those seeking equipment rentals in their area.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>We optimize various on-page elements of your website, such as meta tags, headers, URLs, and content structure, to make it more search engine-friendly and user-friendly. By improving the overall on-page optimization, we increase the chances of your website ranking higher in search engine results and provide a seamless browsing experience for your visitors.</li>
            <li className={style.container2_div1_li}><strong>Content Creation and Optimization:</strong>Our team of skilled content creators develops engaging and informative content that showcases the equipment you offer, highlights the benefits of renting from your business, and addresses common customer concerns. By optimizing this content for search engines, we ensure it ranks well and attracts organic traffic to your website.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>We employ ethical link building techniques to attain high-quality backlinks from authoritative sources in the equipment rental industry. These backlinks not only improve your website's authority and search engine rankings but also generate referral traffic from relevant websites, increasing your chances of attracting potential customers.</li>
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
