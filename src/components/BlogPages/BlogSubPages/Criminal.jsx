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
    statement: 'Can you guarantee the top position in search engine results?',
    paragraph: `While we cannot guarantee specific rankings, we aim to improve your website's visibility and organic traffic. We employ proven strategies and best practices to optimize your website, increasing the likelihood of higher rankings and better online exposure.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of SEO campaigns?',
    paragraph: `We track and analyze various metrics, including organic traffic, keyword rankings, click-through rates, and conversions, to evaluate the success of our SEO campaigns. Our team provides regular reports highlighting the progress and results achieved.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can I do SEO for my website on my own?',
    paragraph: `SEO is a complex and ever-evolving field that requires expertise and ongoing effort. While you can implement basic SEO practices, partnering with a professional SEO agency like NSP ensures that your website receives comprehensive optimization strategies tailored to your needs.`
  }
]

export default function Criminal() {
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
        <title>Drive More Clients and Cases with Expert SEO Services for Attorneys</title>
        <meta name="description" content="Our SEO services for criminal defense lawyers will transform your online presence, attracting more clients to your firm." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/legal/criminal-defense-lawyers/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Criminal Defense Lawyers</h1>
          <p className={style.container1_div_ptag}>Boost Your Online Presence with NSP's SEO Services for Criminal Defense Lawyers</p>
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
            "Criminal Defence Lawyers SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In today's digital age, having a strong online presence is crucial for any business, including law firms specializing in criminal defence. As potential clients increasingly turn to search engines for legal representation, criminal defence lawyers must rank well in search engine results pages (SERPs). This is where SEO services come into play.<br />Effective SEO strategies can help criminal defence lawyers improve their online visibility, increase organic website traffic, and ultimately attract more clients. This ensures that their website appears at the top of search engine results, making them more getting more business.</p>
        <div className={style.container2_div1}>
          <h2>The Process of SEO Services for Criminal Defense Lawyers:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong> Our SEO experts research high-intent keywords to identify the most relevant and high-traffic keywords in the legal industry. We analyze search trends, competition, and user intent to select the optimal keywords to target for your website.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>We optimize your website's structure, meta tags, headings, and content to align with the targeted keywords. This includes crafting compelling and informative content showcasing your expertise while incorporating keywords naturally.</li>
            <li className={style.container2_div1_li}><strong>Technical SEO:</strong>Our experts ensure that your website meets all technical requirements to improve its search engine visibility. This involves optimizing page load speed, mobile responsiveness, URL structure, and implementing proper schema markup.</li>
            <li className={style.container2_div1_li}><strong>Content Marketing:</strong> We create engaging and informative content, such as blog posts, articles, and FAQs, to establish you as a thought leader in your field. This content helps educate potential clients and attracts natural backlinks and social shares, further boosting your website's visibility.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>We develop a customized link-building strategy to enhance your website's authority and credibility. Our team acquires high-quality backlinks from reputable sources, such as legal directories, industry publications, and relevant websites, to boost your website's ranking.</li>
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
