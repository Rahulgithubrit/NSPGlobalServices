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
    statement: ' How long does it take to see results from SEO?',
    paragraph: `SEO is a long-term strategy, and the timeline for results can vary based on several factors. Generally, you can expect improvements in your website's visibility and organic traffic within a few months. However, significant results may take six months to a year or more, depending on the competitiveness of your market and the effectiveness of the strategies implemented.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Will I rank #1 for all relevant keywords?',
    paragraph: `Achieving the top ranking for all keywords is not guaranteed, as search engine rankings depend on various factors. However, we aim to improve your website's visibility and rankings for relevant keywords, helping you attract more qualified traffic and potential clients.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can I manage SEO on my own?',
    paragraph: ` While it's possible to manage some aspects of SEO yourself, it is a complex and time-consuming process. Working with an experienced SEO agency like NSP can ensure that your website receives the expertise, strategy, and ongoing optimization required for success.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How much does SEO cost?',
    paragraph: `The cost of SEO services depends on various factors, such as the scope of the project, the competitiveness of the industry, and your specific goals. We offer tailored solutions to meet your budget and objectives. Contact us for a personalized quote based on your needs.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Is SEO worth the investment for my estate planning law practice?',
    paragraph: `Absolutely! SEO is a cost-effective marketing strategy that can deliver long-term benefits to your business. By improving your online visibility, attracting more targeted traffic, and establishing your authority in the field, SEO can generate a steady stream of leads and clients for your estate planning law practice.`
  }
]

export default function EstatePlanning() {
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
        <title>Expert SEO Services for Estate Planning Lawyers</title>
        <meta name="description" content="Our SEO services are your key to success in the Estate planning Law industry. Enhance your online reach and attract more clients." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/legal/estate-planning-lawyers/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Estate planning Lawyers</h1>
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
            "Estete Planning Lawyers SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Welcome to NSP, your trusted partner for SEO services tailored specifically for estate planning lawyers. With our expertise in search engine optimization, we can help you increase your online visibility, attract more clients, and grow your practice. Our team of SEO professionals understands the unique challenges and requirements of the estate planning legal industry, and we are here to provide you with practical solutions that drive results.</p>
        <div className={style.container2_div1}>
          <h2>Benefits of SEO for Estate Planning Lawyers:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}> Enhanced Online Visibility:We can improve your search engine rankings by optimizing your website and content for relevant keywords and phrases. This means that when potential clients search for estate planning services in your area, your website will be more likely to appear at the top of the search results, increasing your visibility and chances of being noticed.</li>
            <li className={style.container2_div1_li}>Increased Website Traffic:Higher search engine rankings translate into increased organic traffic to your website. As more people find and visit your site, you have a more significant opportunity to convert them into leads and, ultimately, clients.</li>
            <li className={style.container2_div1_li}>Targeted Audience Reach:Our SEO strategies can target specific keywords and geographic locations relevant to your practice. This helps you reach your ideal audience – individuals or businesses needing estate planning services in your target market.</li>
            <li className={style.container2_div1_li}>Improved User Experience:SEO is not just about optimizing for search engines; it also involves enhancing the user experience on your website. By making your site faster, more mobile-friendly, and easier to navigate, we can ensure visitors have a positive experience and are more likely to engage with your content and contact your firm.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>Our SEO Process:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong>We conduct in-depth keyword research to identify the most relevant and high-traffic keywords related to estate planning law. This forms the foundation for optimizing your website and creating compelling content.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>We optimize your website's structure, meta tags, headings, and content to align with the targeted keywords. This ensures that search engines understand the relevance of your site to the keywords searched by potential clients.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong>We employ ethical and effective link-building strategies to increase the authority and credibility of your website. This involves acquiring high-quality backlinks from reputable sources in the legal industry and related niches.</li>
            <li className={style.container2_div1_li}><strong> Website Audit:</strong>Our team thoroughly analyzes your website, identifying areas for improvement. We assess site structure, page speed, mobile responsiveness, and content relevancy.</li>
            <li className={style.container2_div1_li}><strong>Initial Consultation:</strong> We start by understanding your unique needs, goals, and target audience. This helps us create a customized SEO strategy tailored to your estate planning law practice.</li>
            <li className={style.container2_div1_li}><strong>Ongoing Optimization and Reporting:</strong>SEO is an ongoing process. We continuously monitor and optimize your website, track keyword rankings, analyze website traffic, and provide regular reports on the progress of your SEO campaign.</li>
            <li className={style.container2_div1_li}><strong>Content Creation:</strong>Our team develops high-quality, informative, engaging content that resonates with your target audience. This includes blog posts, articles, case studies, and other types of content that showcase your expertise and provide value to your potential clients.</li>
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
