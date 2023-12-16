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
    statement: 'How can SEO services benefit aviation companies?',
    paragraph: 'SEO services can benefit aviation companies by improving their online visibility, attracting more qualified leads, and increasing their brand authority and credibility.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can SEO help aviation companies target specific geographical areas?',
    paragraph: `Yes, SEO strategies can be customized to target specific geographical areas, allowing aviation companies to focus on attracting customers from their desired locations and markets.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ` Is it necessary for aviation companies to continuously invest in SEO?`,
    paragraph: `Yes, SEO is an ongoing process. Search engine algorithms constantly evolve, and competition in the aviation industry is fierce. Aviation companies should invest in continuous SEO efforts to maintain and improve their online visibility.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can aviation companies measure the success of their SEO campaigns?',
    paragraph: `Aviation companies can measure the success of their SEO campaigns through metrics such as organic search traffic, keyword rankings, conversion rates, and user engagement. Regular monitoring and analysis of these metrics provide insights into the effectiveness of SEO strategies and help make data-driven decisions for optimization.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How does SEO improve the user experience of my website?',
    paragraph: `SEO includes optimizing site speed, mobile responsiveness, and user-friendly navigation, all contributing to a positive user experience. This leads to increased engagement, more extended site visits, and a higher likelihood of bookings.`
  }
]

export default function AirCraft() {
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
        <title>Digital Marketing for Aircraft Manufacturing: Soar Above the Competition</title>
        <meta name="description" content="Take flight with digital marketing solutions designed for the aircraft industry. Revolutionize your online presence and gain an edge in the digital age." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/manufacturing/aviation/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing for Aircraft Manufacturing</h1>
          <p className={style.container1_div_ptag}>SEO Services for Aviation Companies</p>
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
            "Aviation Companies"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In today's digital age, having a robust online presence is crucial for aviation companies to thrive. By utilizing effective SEO strategies, aviation companies can enhance their online visibility and attract more qualified leads</p>
        <div className={style.container2_div1}>
          <h2>The Importance of Online Visibility for Aviation Companies</h2>
          <p>Establishing a robust online presence in a highly competitive aviation industry is essential. Potential customers and clients often use search engines to find information, services, and products related to aviation. By ranking higher in search engine results, aviation companies can significantly increase their visibility, gain credibility & attract more organic traffic.</p>
        </div>
        <div className={style.container2_div1}>
          <h2> Understanding Search Engine Optimization (SEO)</h2>
          <p>SEO involves various techniques and strategies to enhance the website's relevance, authority, and user experience. By implementing SEO tactics tailored for aviation companies, businesses can improve their chances of appearing in relevant search queries and reaching their target audience effectively.</p>
        </div>
        <div className={style.container2_div1}>
          <h2>Key Benefits of SEO Services for Aviation Companies</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Organic Traffic and Leads:Implementing SEO services can help aviation companies attract more organic website traffic. By optimizing their web pages and content for relevant keywords and search queries, businesses can appear in front of potential customers actively looking for aviation-related products or services. This increased visibility can result in more qualified leads and conversions for the company.</li>
            <li className={style.container2_div1_li}>Improved User Experience and Website Performance:SEO involves optimizing various aspects of a website, including its structure, navigation, and load times. By enhancing these elements, aviation companies can create a better user experience for their website visitors. A user-friendly website that loads quickly and is easy to navigate improves user satisfaction and increases the chances of visitors staying longer on the site and engaging with the content.</li>
            <li className={style.container2_div1_li}>Enhanced Brand Awareness and Credibility:A well-executed SEO strategy can significantly improve aviation companies' brand awareness and credibility. When a business consistently appears at the top of search engine results, it establishes itself as a trusted and authoritative source. This increased visibility and credibility can lead to more brand recognition, customer trust, and business opportunities.</li>
            <li className={style.container2_div1_li}>The Process of Implementing SEO for Aviation Companies:Implementing SEO for aviation companies involves a series of carefully planned steps. Each step contributes to optimizing the website for search engines, improving its visibility, and attracting targeted traffic.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>What It Includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research and Analysis:</strong> By analyzing keyword competition and search volume, businesses can prioritize their optimization efforts and focus on keywords that have the potential to generate significant traffic and conversions.</li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>On-page optimization involves updating meta tags, descriptions, headers, and URLs with relevant keywords. Creating informative and engaging content that incorporates targeted keywords naturally is also crucial for on-page optimization.</li>
            <li className={style.container2_div1_li}><strong>Content Creation and Optimization:</strong>Content plays a vital role in SEO for aviation companies. Creating high-quality content is essential to attract and retain website visitors. Aviation companies should develop content that addresses their target audience's needs and interests while incorporating relevant keywords and providing value to readers.</li>
            <li className={style.container2_div1_li}><strong>Technical SEO:</strong>Technical SEO includes optimizing website loading speed, ensuring mobile-friendliness and responsiveness, improving website navigation and structure, and implementing structured data markup. Technical SEO ensures that search engines can efficiently crawl and index the website, leading to better search visibility.</li>
            <li className={style.container2_div1_li}><strong> Off-Page Optimization and Link Building:</strong>Off-page optimization involves building the website's authority and credibility through external factors. One crucial aspect of off-page optimization is link building, which involves acquiring high-quality backlinks from reputable aviation-related websites. Additionally, leveraging social media platforms and engaging in guest blogging and influencer outreach can help aviation companies increase their online visibility and attract relevant traffic.</li>
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
