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
    statement: 'What experience does the SEO agency have in working with Bankruptcy Lawyers?',
    paragraph: 'The SEO agency has extensive experience working with Bankruptcy Lawyers and understands the specific needs of this legal practice area.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can the SEO agency provide case studies or examples of successful SEO campaigns for Bankruptcy Lawyers?',
    paragraph: `Yes, the SEO agency can provide case studies and examples of successful SEO campaigns they have executed for Bankruptcy Lawyers, showcasing measurable results.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What specific SEO strategies and techniques will the agency implement for Bankruptcy Lawyers?',
    paragraph: `The agency will implement tailored SEO strategies, including comprehensive keyword research, on-page optimization, content creation, link building, and local SEO, specific to the needs of Bankruptcy Lawyers.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How will the agency measure the success and effectiveness of the SEO campaign?',
    paragraph: `The agency utilizes advanced metrics and analytics tools to track website performance, keyword rankings, organic traffic, and lead generation, providing regular reports and insights to measure the success of the SEO campaign.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What is the expected timeframe for seeing results from the SEO campaign?',
    paragraph: `The timeframe for seeing results from the SEO campaign varies, but the agency employs strategies for steady progress and long-term success, helping Bankruptcy Lawyers achieve their goals over time.`
  }
]

export default function Bankruptcy() {
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
        <title>Expert SEO Services for Bankruptcy Lawyers | Boost Your Online Presence</title>
        <meta name="description" content="Our SEO services are your key to success in the Bankruptcy Law industry. Enhance your online reach and attract more clients." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/legal/bankruptcy-lawyers/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Bankruptcy Lawyers</h1>
          <p className={style.container1_div_ptag}>The Importance of SEO Services for Bankruptcy Lawyers</p>
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
            "Bankruptcy Lawyers SEO Services"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In today's digital age, the online presence of Bankruptcy Lawyers plays a critical role in attracting clients and growing their practice. With the increasing competition in the legal industry, having a well-optimized website and effective online marketing strategies is essential. This is where SEO services come into play. By implementing SEO strategies tailored to the unique needs of Bankruptcy Lawyers, legal professionals can boost their online visibility, attract targeted clients, and establish themselves as trusted authorities in the field.</p>
        <div className={style.container2_div1}>
          <h2>Why Bankruptcy Lawyers Need SEO Services</h2>
          <p>Bankruptcy lawyers operate in a highly competitive legal landscape where standing out from the crowd is crucial for success. In today's digital age, having a strong online presence is more important than ever. Here are the key reasons why Bankruptcy Lawyers need SEO services:</p>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Online Visibility:With the help of SEO services, Bankruptcy Lawyers can improve their online visibility and ensure that their website appears prominently in search engine results. By ranking higher in search results for relevant keywords, they can attract more potential clients and gain an edge over their competitors.</li>
            <li className={style.container2_div1_li}>Targeted Traffic and Lead Generation: SEO services are designed to drive targeted traffic to Bankruptcy Lawyers' websites. By optimizing their website for specific keywords related to bankruptcy law, lawyers can attract individuals actively searching for legal assistance in this area. This targeted traffic increases the chances of lead generation and client acquisition.</li>
            <li className={style.container2_div1_li}>Establishing Credibility and Trust:A well-optimized website with informative content helps Bankruptcy Lawyers establish credibility and build trust with potential clients. By providing valuable resources, answering common questions, and demonstrating expertise in bankruptcy law, lawyers can position themselves as trusted authorities in their field. This enhances their reputation and increases the likelihood of client conversion.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>The Process of Implementing SEO Services for Bankruptcy Lawyers:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong>Thorough keyword research is conducted to identify the most relevant and valuable keywords related to bankruptcy law. This research helps understand what potential clients are searching for and enables targeted content creation.</li>
            <li className={style.container2_div1_li}><strong>Website Optimization:</strong>The website is optimized to improve its visibility and performance in search engines. This includes optimizing meta tags, headings, and page titles, improving website loading speed, ensuring mobile-friendliness, and enhancing user experience.</li>
            <li className={style.container2_div1_li}><strong>Content Creation:</strong>High-quality, informative, and optimized content is created to engage potential clients and demonstrate expertise. This includes writing blog posts, articles, and guides addressing common questions, concerns, and legal aspects of bankruptcy law.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>Building high-quality backlinks from reputable sources is essential to SEO. By acquiring relevant and authoritative backlinks, Bankruptcy Lawyers can enhance their website's credibility and improve search engine rankings</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>For Bankruptcy Lawyers targeting specific geographic locations, local SEO strategies are implemented. This includes optimizing Google My Business listing, local directory submissions, and generating positive online reviews.</li>
            <li className={style.container2_div1_li}><strong>Monitoring and Optimization:</strong>SEO is an ongoing process that requires continuous monitoring and optimization. Regular analysis of website performance, keyword rankings, and user behaviour helps identify improvement areas and make necessary adjustments to the SEO strategy.</li>
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
