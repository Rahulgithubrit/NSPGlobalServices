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
    statement: 'How long does it take to see results from SEO efforts for accountants?',
    paragraph: 'The timeline for results may vary based on various factors, including the competitiveness of keywords and the current state of your website. Generally, it takes several months to observe significant improvements in search engine rankings and organic traffic.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can SEO help my accounting firm attract more clients?',
    paragraph: `Yes, by optimizing your website for relevant keywords and implementing effective SEO strategies, you can increase your online visibility and attract more potential clients to your accounting firm.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ' Is local SEO important for accounting firms?',
    paragraph: `Yes, local SEO is crucial for accounting firms targeting clients in specific geographic areas. It helps your firm appear prominently in local search results, making it easier for local clients to find and choose your services`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of SEO campaigns for accounting firms?',
    paragraph: `We measure the success of your SEO campaign using various metrics, including organic traffic, keyword rankings, lead generation, and conversion rates. Our team provides regular reports that outline these key performance indicators and offer insights for continuous improvement.`
  }
]

export default function Accounting() {
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
        <title>Drive Traffic and Leads: SEO for Accountancy Firm</title>
        <meta name="description" content="Our SEO services for Online Accountancy Firm drive targeted traffic and leads to boost your business. Get noticed in the Accountancy Firm finance industries." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/finance/accountants/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Accountancy Firm</h1>
          <p className={style.container1_div_ptag}>Grow Your Accountancy Firm With Organic SEO Services</p>
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
            "Accountancy Firm SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In today's digital landscape, having a strong online presence is essential for accountancy firms to attract new clients and stay ahead of the competition. At NSP, we specialize in providing expert SEO services tailored specifically for accountants and bookkeepers. Our team of SEO specialists understands the unique needs and challenges faced by accounting firms and is dedicated to helping them grow their online visibility, increase organic traffic, and ultimately drive more leads and conversions.</p>
        <div className={style.container2_div1}>
          <h2>Why Choose Targeted SEO For Your Accounting Firm?</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Online Visibility: Our targeted SEO strategies help your accounting firm appear on the first page of search engine results, making it easier for potential clients to find you.</li>
            <li className={style.container2_div1_li}>Drive Organic Traffic:By optimizing your website for relevant keywords, we attract organic traffic from individuals actively seeking accounting services, increasing your chances of converting them into clients.</li>
            <li className={style.container2_div1_li}>Generate Qualified Leads:Our SEO efforts focus on attracting highly targeted traffic to your website, increasing the likelihood of generating leads from individuals in need of accounting services.</li>
            <li className={style.container2_div1_li}>Stay Ahead of Competitors:With our specialized SEO services, you can outrank your competitors, establish your accounting firm as an industry leader, and gain a competitive edge.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>Our Specialist SEO Services For Accountants</h2>
          <p>At NSP, we offer a comprehensive range of SEO services specifically designed to meet the needs of accounting firms. Our services include:</p>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research and Optimaization:</strong>We conduct in-depth keyword research to identify relevant and high-performing keywords for your accounting firm. We optimize your website's content, meta tags, and headings to ensure that your site ranks higher in search engine results for targeted keywords.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>We optimize various on-page elements of your website, such as titles, URLs, and internal linking structure, to enhance your site's visibility and improve user experience.</li>
            <li className={style.container2_div1_li}><strong>Local SEO and Strategies:</strong> We implement effective local SEO strategies to help your accounting firm appear prominently in local search results. This includes optimizing your Google My Business profile, creating location-specific landing pages, and ensuring consistent business information across online directories.</li>
            <li className={style.container2_div1_li}><strong>Content Creation and Optimization:</strong> Our skilled content creators develop high-quality and informative content that resonates with your target audience. We optimize the content with relevant keywords to improve its visibility in search engine results.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>We employ white-hat link building techniques to acquire high-quality backlinks from authoritative sources, which enhances your website's authority and improves its search engine rankings.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <h2>Elevate Your Accounting Firm with Our SEO Services</h2>
          <p>NSP's specialist SEO services for accountants are designed to help your firm grow its online presence, attract more clients, and stay ahead in the competitive market. With our expertise in keyword research, on-page optimization, content creation, local SEO, and link building, we can enhance your visibility in search engine results and drive targeted traffic to your website. Contact us today to discuss your accounting firm's SEO needs and take the first step toward expanding your online reach and growing your client base.</p>
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
