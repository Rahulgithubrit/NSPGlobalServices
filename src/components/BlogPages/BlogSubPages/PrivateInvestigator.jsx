import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import SEO_Images_1 from '../../assets/Alteration/seo1.jpg'
import SEO_Images_2 from '../../assets/Alteration/on-page SEO1.jpg'
import img1 from '../../assets/Alteration/SEO Reporting 1.jpg'
import img2 from '../../assets/Alteration/technical-seo1.jpg'
import img3 from '../../assets/Alteration/off-page seo 1.jpg'
import { Helmet } from 'react-helmet'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from SEO efforts?',
    paragraph: 'SEO is a long-term strategy that usually takes a few months to see noticeable results. However, the timeline may vary depending on factors such as competition, website structure, and the level of optimization implemented.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Will SEO guarantee the top spot in search engine results?',
    paragraph: `While we strive to improve your website's rankings, we cannot guarantee the top spot in search engine results. SEO involves various factors, including competition and algorithm updates. We aim to increase your visibility and attract targeted traffic to maximize your chances of generating leads.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `Can you optimize my existing website, or do I need a new one?`,
    paragraph: `We can optimize your existing website to improve its SEO performance. However, a website redesign or restructuring may sometimes be recommended to ensure optimal results. We can provide guidance based on your specific situation.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of your SEO efforts?',
    paragraph: ` We track various metrics to measure the success of our SEO efforts, including organic traffic, keyword rankings, conversion rates, and engagement metrics. We provide regular reports and insights to keep you informed about the progress and performance of your website.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `Ready to Boost Your Private Investigator Website's SEO?`,
    paragraph: `Contact us today to learn more about our Private Investigator Website SEO Services and how we can help you improve your online visibility, attract targeted traffic, and generate more leads for your private investigation business. Our experienced team is ready to develop a customized SEO strategy tailored to your unique needs and goals. Take the first step towards maximizing your online presence and growing your client base.`
  }
]

export default function PrivateInvestigator() {
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
        <title>Drive Traffic and Leads: SEO for Private Investigator</title>
        <meta name="description" content="Our SEO services for Private Investigator drive targeted traffic and leads to boost your business. Get noticed in the Private Investigator." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/local-consumer/private-investigators/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Private Investigator</h1>
          {/* <p className={style.container1_div_ptag}>Enhancing Online Visibility for Timeless Treasures</p> */}
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
            "Private Investigator"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Are you a private investigator looking to boost your online presence and attract more clients? Our Private Investigator Website SEO Services are designed to help you achieve just that. With our expertise in search engine optimization (SEO), we can optimize your website to rank higher in search engine results, increase your online visibility, and drive targeted traffic to your site.
        </p>
        <div className={style.container2_div1}>
          <h2> Here are some of the key benefits of our services:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Online Visibility:Our SEO strategies are tailored to improve the visibility of your private investigator website in search engine results. By optimizing your website's content and structure, we ensure that it ranks higher for relevant keywords and attracts more potential clients.</li>
            <li className={style.container2_div1_li}>Targeted Traffic:We focus on attracting highly targeted traffic to your website. Through comprehensive keyword research and optimization, we optimize your website to appear in front of people searching for private investigation services in your area. This helps you connect with potential clients who are actively seeking your expertise.</li>
            <li className={style.container2_div1_li}>Brand Authority: A robust online presence can enhance your brand authority and credibility as a private investigator. By implementing effective SEO techniques, we help establish your website as a trusted resource in the industry. This can result in more inquiries and conversions for your business.</li>
            <li className={style.container2_div1_li}>Increased Conversions:Our SEO strategies drive traffic to your website and aim to convert visitors into clients. We optimize your website's user experience, improve call-to-action elements, and provide valuable content to engage visitors and encourage them to take the desired actions.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>What It Includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research:</strong>We perform in-depth keyword research to identify the most relevant and high-converting keywords for your private investigator services. This forms the basis of our content optimization and targeting strategy.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong> Our team optimizes your website's meta tags, headings, content, and internal linking structure to align with targeted keywords. This ensures that search engines can easily understand your website's relevance to specific search queries.</li>
            <li className={style.container2_div1_li}><strong>Content Creation:</strong>We develop compelling, informative content that resonates with your target audience. Our content strategy includes blog posts, case studies, service pages, and other valuable resources to establish your expertise and attract organic traffic.</li>
            <li className={style.container2_div1_li}><strong>Link Building:</strong> We implement effective link-building strategies to increase the authority and credibility of your website. We enhance your website's visibility and rankings through quality backlinks from relevant and trustworthy sources.</li>
            <li className={style.container2_div1_li}><strong>Website Audit:</strong>We thoroughly audit your website to identify any technical issues, on-page optimization gaps, or usability challenges. This helps us create a solid foundation for your SEO campaign.</li>
          </ul>
        </div >
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
