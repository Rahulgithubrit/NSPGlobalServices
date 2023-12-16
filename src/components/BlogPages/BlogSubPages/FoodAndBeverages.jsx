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
    statement: 'What experience does the SEO agency have in working with Food & Beverage Manufacturing Companies?',
    paragraph: 'The agency has extensive experience working with Food & Beverage Manufacturing Companies and understands the unique challenges and opportunities in the industry.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can the SEO agency provide case studies or examples of successful SEO campaigns for Food & Beverage Manufacturing Companies?',
    paragraph: `The agency can provide case studies and examples of successful SEO campaigns they have executed for Food & Beverage Manufacturing Companies, demonstrating measurable results.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `What specific SEO strategies and techniques will the agency implement for Food & Beverage Manufacturing Companies?`,
    paragraph: `The agency will implement tailored SEO strategies, including keyword research, website optimization, content creation, link building, and local SEO, specific to the needs of Food & Beverage Manufacturing Companies.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How will the agency measure the success and effectiveness of the SEO campaign?',
    paragraph: `The agency utilizes advanced analytics tools to track website performance, keyword rankings, organic traffic, and lead generation. They provide regular reports and insights to measure the success of the SEO campaign.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What is the expected timeframe for seeing results from the SEO campaign?',
    paragraph: `The timeframe for seeing results from the SEO campaign varies based on various factors, but the agency will work diligently to achieve steady progress and long-term success.`
  }
]

export default function FoodAndBeverages() {
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
                <title>Digital Marketing Services for Food & Beverage Excellence</title>
                <meta name="description" content="Unlock the full potential of SEO and digital marketing for food and beverage excellence. Drive more leads, improve online visibility, and expand your market reach." />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/manufacturing/food-beverages-manufacturers/seo"/>
            </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for Food & Beverage</h1>
          <p className={style.container1_div_ptag}>The Importance of SEO Services for Food & Beverage Manufacturing Companies</p>
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
            "Food and Beverage"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>SEO services are essential for Food & Beverage Manufacturing Companies to establish a robust online presence and stay competitive.</p>
        <div className={style.container2_div1}>
          <h2>Here are the key reasons why these companies need SEO services:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Online Visibility:SEO services improve the online visibility of Food & Beverage Manufacturing Companies by optimizing their website and content. This helps them rank higher in search engine results and attract more potential customers searching for food and beverage products.</li>
            <li className={style.container2_div1_li}>Targeted Traffic and Lead Generation: By targeting specific keywords and optimizing their website, Food & Beverage Manufacturing Companies can drive targeted traffic to their site. This increases the chances of generating leads and converting website visitors into customers.</li>
            <li className={style.container2_div1_li}>Brand Awareness and Reputation Management:SEO services help Food & Beverage Manufacturing Companies build brand awareness and manage their online reputation. These companies can establish themselves as industry leaders and trusted brands by creating informative and engaging content.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>The Process of Implementing SEO Services for Food & Beverage Manufacturing Companies**
            Implementing SEO services for Food & Beverage Manufacturing Companies involves optimizing their online presence systematically. Here's an overview of the process:
          </h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong> Thorough keyword research is conducted to identify relevant and high-value keywords in the food and beverage industry. This helps companies understand the search behavior of their target audience and optimize their content accordingly.</li>
            <li className={style.container2_div1_li}><strong>Website Optimization:</strong>The website is optimized to improve its visibility in search engines. This includes optimizing meta tags, headings, and URLs, improving site speed and mobile responsiveness, and ensuring a user-friendly experience.</li>
            <li className={style.container2_div1_li}><strong>Content Creation:</strong>High-quality and relevant content is created to engage the target audience. This includes informative blog posts, product descriptions, recipes, and industry news. The content is optimized with keywords to attract organic traffic.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>Building high-quality backlinks from reputable sources is crucial for improving the website's authority and search engine rankings. This is done through outreach, guest blogging, and creating valuable content others want to link to.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong> For Food & Beverage Manufacturing Companies targeting specific locations, local SEO strategies are implemented. This includes optimizing Google My Business listing, local directory submissions, and obtaining positive online reviews.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <p>By selecting an experienced SEO agency specializing in Food & Beverage Manufacturing Companies, these companies can enhance their online visibility, attract targeted customers, and strengthen their brands in the competitive market.</p>
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
