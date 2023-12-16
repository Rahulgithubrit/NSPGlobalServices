import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import { Helmet } from 'react-helmet'
import SEO_Images_1 from '../../assets/Digital Marketing/IMG-20231116-WA0001.jpg'
import SEO_Images_2 from '../../assets/Digital Marketing/IMG-20231116-WA0000.jpg'
import img1 from '../../assets/Digital Marketing/IMG-20231116-WA0002.jpg'
import img2 from '../../assets/Digital Marketing/IMG-20231116-WA0003.jpg'
import img3 from '../../assets/Digital Marketing/IMG-20231116-WA0004.jpg'

const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ' Is online marketing suitable for small architectural firms?',
    paragraph: ' Absolutely! Online marketing can level the playing field, allowing small firms to compete effectively with larger ones.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What social media platforms are best for architects?',
    paragraph: `Instagram and Pinterest are excellent platforms for visually showcasing architectural projects, while LinkedIn is ideal for professional networking.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from SEO efforts?',
    paragraph: ` SEO is a long-term strategy, and it may take several months to see significant improvements in search engine rankings.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Are there any free tools for email marketing?',
    paragraph: `Yes, platforms like MailChimp offer free plans for small email marketing campaigns.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can I market my architectural services internationally through online marketing?',
    paragraph: `Yes, online marketing allows you to reach a global audience and attract clients from around the world.`
  }
]

export default function Architecture() {
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
        <title>Strategic Digital Marketing for Architectural Firms</title>
        <meta name="description" content="Fuel your Architectural Firms brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/professional-services/architectural-firms" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for Architectural Firms</h1>
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
            "Vintage Stores"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In today's digital era, where online presence is paramount, even architectural firms are recognizing the need to embrace online marketing strategies. Gone are the days when architects relied solely on word-of-mouth referrals and traditional marketing methods. To stay competitive and relevant, architects must harness the power of the internet to showcase their expertise, attract clients, and ultimately, elevate their architectural ventures. This article will serve as your comprehensive guide to mastering online marketing for architecture, providing you with valuable insights and actionable steps to flourish in the digital landscape.<br/>In a world where information is at our fingertips, architects need to adapt to the digital age. Online marketing offers a plethora of opportunities for architects to connect with potential clients, establish their brand, and showcase their architectural prowess. </p>
        <div className={style.container2_div1}>
          <h2>Here are some essential steps of online marketing for architecture:</h2>
          <div className={style.container2_div1}>
          <h3>The Importance of Online Marketing for Architect</h3>
          <p>The architectural industry has evolved, and so has the way clients seek architectural services. Online marketing allows architects to reach a global audience, break geographical barriers, and communicate their unique design philosophies effectively.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Building an Architectural Brand Online</h3>
          <p>Creating a strong online presence starts with defining your architectural brand. What sets your firm apart from others? How do you want to be perceived in the digital space? We'll explore strategies for crafting a compelling brand identity.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Crafting an Engaging Architectural Website</h3>
          <p>Your website is your digital storefront. Learn how to design an attractive and user-friendly website that showcases your portfolio, services, and expertise to potential clients.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Utilizing Social Media for Architectural Success</h3>
          <p>Social media platforms provide a dynamic space to engage with your audience. Discover how to harness the power of platforms like Instagram, Facebook, and LinkedIn to connect with clients and fellow architects.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Leveraging Search Engine Optimization (SEO)</h3>
          <p>Master the art of SEO to ensure that your architectural firm appears prominently in search engine results. We'll delve into keyword research, on-page optimization, and backlink strategies.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Content Marketing: Showcasing Your Architectural Expertise</h3>
          <p>Content is king in the online world. Learn how to create valuable and informative content that positions you as an authority in the architectural field.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Email Marketing: Nurturing Client Relationships</h3>
          <p>Email marketing is a powerful tool for maintaining relationships with existing clients and nurturing potential leads. Discover effective email marketing strategies for architects.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Online Advertising for Architectural Firms</h3>
          <p>Explore the world of online advertising, from Google Ads to social media ads. We'll discuss budgeting, targeting, and measuring the effectiveness of your ad campaigns.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Tracking and Analyzing Your Online Efforts</h3>
          <p>Data-driven decisions are crucial in online marketing. Learn how to use analytics tools to track your online performance and make informed adjustments.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Staying Ahead in the Competitive Landscape</h3>
          <p>In a competitive field, continuous learning and innovation are key. We'll explore ways to stay updated with industry trends and emerging technologies.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Testimonials and Case Studies: Building Credibility</h3>
          <p>Build trust with potential clients by showcasing your past successes through client testimonials and detailed case studies.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>Networking in the Virtual World</h3>
          <p>Networking is not limited to physical events. Discover how to network effectively in online communities and forums to expand your architectural circle.</p>
        </div>
        <div className={style.container2_div1}>
          <h3>The Power of Webinars and Online Workshops</h3>
          <p>Hosting webinars and online workshops can position you as an expert while providing valuable knowledge to your audience. Learn the ins and outs of hosting engaging online events.</p>
        </div>
        </div>
        <div className={style.container2_div1}>
          <h3>Conclusion</h3>
          <p>Embracing online marketing for architecture is no longer optional; it's essential for growth and success in today's digital age. By following the strategies outlined in this article, architects can harness the power of the internet to elevate their businesses and connect with clients on a global scale.</p>
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
