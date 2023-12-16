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
    statement: 'What is keyword research, and why is it important for SEO?',
    paragraph: 'keyword research involves identifying popular search terms related to your business, helping you optimize your website and content for relevant keywords to attract targeted traffic.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can I do SEO on my own, or do I need professional assistance?',
    paragraph: `While basic SEO practices can be implemented by anyone, professional SEO services offer expertise, industry insights, and advanced strategies for optimal results.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How does local SEO differ from general SEO?',
    paragraph: `Local SEO focuses on optimizing your online presence for location-specific searches, helping you target local customers and appear in Google Maps and local listings.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can SEO guarantee a top ranking in search engine results?',
    paragraph: `While SEO improves your chances of ranking higher, search engine rankings are influenced by various factors, and no company can guarantee a specific position.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you measure the success of SEO campaigns?',
    paragraph: `Success is measured through various metrics like organic traffic, keyword rankings, 
    conversion rates, and ROI, providing insights into the effectiveness of SEO efforts.
    Dominate the Search Results and Skyrocket Your Business with Strategic SEO for Homeowners Insurance Companies
    `
  }
]

export default function Business() {
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
        <title>Insurance SEO: Grow Your Business Through Google</title>
        <meta name="description" content="Our SEO services are specialized for the business insurance sector. Unlock higher rankings and drive growth in the digital landscape." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/insurance/business-insurance/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO services for Business Insurance</h1>
          <p className={style.container1_div_ptag}>Enhance Your Online Presence and Drive Success with Expert SEO Services for Business Insurance </p>
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
            "Business Insurance SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Welcome to our SEO services for business insurance providers. At NSP, we deliver top-notch SEO solutions tailored to the insurance industry. We aim to help you enhance online visibility, attract targeted leads, and drive business growth. With our expertise in SEO and insurance sector knowledge, we'll position your business at the forefront of search engine rankings and help you outrank your competitors.<br /><br />At NSP, we offer comprehensive SEO solutions to elevate your search engine rankings, increase organic traffic, and generate quality leads. With our expertise in the insurance industry and advanced SEO strategies, we'll help your business thrive in the digital landscape.</p>
        <div className={style.container2_div1}>
          <h2>Process Involved in Business Insurance SEO:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Targeted Keyword Research and Optimization:</strong>Our SEO experts will research extensively to identify the most relevant and high-converting keywords for your business insurance services. By strategically optimizing your website content, meta tags, and headings, we'll ensure your business ranks prominently in search engine results, driving targeted traffic.</li>
            <li className={style.container2_div1_li}><strong>Local SEO Strategies:</strong>As a business insurance provider, targeting local customers is essential for success. We'll implement effective local SEO strategies to enhance your visibility within your service area. From optimizing your website for location-specific keywords to managing your online business listings and acquiring positive customer reviews, we'll position your business as the go-to choice in your local market.</li>
            <li className={style.container2_div1_li}><strong>Compelling Content Creation:</strong>Engaging and informative content is critical to capturing the attention of potential customers and building trust in your business. Our skilled content creators will develop compelling blog posts, informative articles, and educational resources that address common insurance concerns and provide valuable insights. By consistently delivering high-quality content, we'll establish your business as an industry thought leader and improve your search engine rankings.</li>
            <li className={style.container2_div1_li}><strong> User-Friendly Website Design:</strong>A user-friendly website provides a seamless browsing experience and encourages visitors to explore your business insurance offerings. Our web design experts will optimize your website for speed, responsiveness, and ease of navigation. We'll maximize conversions and improve user satisfaction by ensuring intuitive interfaces, clear call-to-actions, and streamlined quote request processes.<br /><br />NSP's expert SEO services are tailored to meet the specific needs of business insurance providers. With our comprehensive strategies, you can enhance your online visibility, attract targeted customers, and drive significant growth in your industry.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <h2>Our comprehensive range of services includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Keyword Research and Analysis:</strong>We conduct thorough research to identify relevant keywords that potential customers use when searching for homeowners insurance.
            </li>
            <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>Our SEO experts optimize your website's structure, content, and meta tags to enhance its visibility to search engines.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>We implement effective local SEO strategies to help your homeowners insurance business attract customers in your target geographical area. We optimize your website for local keywords, create and optimize your Google My Business profile, and employ location-specific SEO techniques to improve your local visibility.</li>
            <li className={style.container2_div1_li}><strong>Link Building and Outreach:</strong>Our team builds high-quality backlinks from authoritative websites in the insurance industry. These backlinks improve your website's authority, credibility, and search engine rankings. We also conduct targeted outreach campaigns to secure guest blogging opportunities and expand your online presence.</li>
            <li className={style.container2_div1_li}><strong>Content Creation and Optimization:</strong>We develop compelling blog posts, articles, and landing page content that not only attracts visitors but also ranks well in search engines.</li>
            <li className={style.container2_div1_li}><strong>Technical SEO Audit:</strong> Our experts provide actionable recommendations to optimize your website's structure, crawlability, and indexing.</li>
            <li className={style.container2_div1_li}><strong>Performance Tracking and Reporting:</strong>We continuously monitor the performance of your SEO campaigns and provide regular reports and insights. Our detailed analytics help you understand the impact of our strategies on your website's visibility, traffic, and conversions.<br />At NSP, we are a team of experienced SEO strategists and copywriters dedicated to providing exceptional SEO services for homeowners insurance companies. </li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <h2>Why Choose NSP?</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Industry Expertise:We possess extensive knowledge and expertise in the homeowners insurance industry. Our team stays updated on the latest industry trends, search engine algorithms, and consumer behavior to ensure that our strategies are tailored to your specific niche.</li>
            <li className={style.container2_div1_li}>Proven Results:We have a track record of delivering measurable results for our clients. Our strategies have helped numerous homeowners insurance companies achieve higher search rankings, increased website traffic, and improved lead generation.</li>
            <li className={style.container2_div1_li}>Customized Approach:We believe in personalized solutions that cater to your unique business goals, target audience, and competitive landscape. Our customized approach ensures that our SEO strategies align with your specific requirements and yield the best possible outcomes.</li>
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
