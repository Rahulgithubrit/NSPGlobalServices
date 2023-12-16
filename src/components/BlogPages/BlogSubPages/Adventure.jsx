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
    statement: ' How can online marketing benefit adventure tourism?  ',
    paragraph: 'Online marketing drives visibility, increases bookings and enhances brand reputation.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you handle multi-language marketing campaigns?',
    paragraph: `We have expertise in creating multilingual campaigns tailored to your target markets.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ` What is the recommended budget for online marketing?`,
    paragraph: `The budget depends on your business goals and market competition. We provide tailored solutions. `
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Do you offer customized marketing strategies?',
    paragraph: `Yes, we believe in tailoring our strategies to meet your business's unique needs and goals.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you handle social media advertising campaigns? ',
    paragraph: `Certainly! We have experience running effective social media ad campaigns to reach your audience. `
  }
]

export default function Adventure() {
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
        <title>Digital Marketing Services for Tourism Companies</title>
        <meta name="description" content="Adventure meets strategy with our specialized digital marketing solutions, designed to propel your tourism business forward." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/tourism-hospitality/adventure" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for Tourism Companies</h1>
          <p className={style.container1_div_ptag}>Discover Thrilling Adventures and Grow Your Tourism Business with Our Online Marketing Solutions
            Start Your Adventure Today! Boost Your Online Presence
          </p>
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
            "Adventure"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Embark on an unforgettable journey to success with our exceptional Online Marketing for Adventure Tourism service. Are you a passionate adventure tour operator, outdoor equipment supplier, or travel agency seeking to capture the hearts and minds of adventure enthusiasts worldwide? Look no further! </p>
        <p className={style.container2_ptag}>By leveraging our expertise, you'll unlock a world of opportunities and experience a surge in online visibility. We understand your challenges in this dynamic market and are here to equip you with the tools and techniques necessary to thrive. With our unwavering commitment to excellence and in-depth knowledge of adventure tourism, we ensure your business remains at the forefront of this exhilarating industry.</p>
        <p className={style.container2_ptag}>Our team of skilled SEO writers, fluent in English and well-versed in captivating storytelling, will help you craft compelling content that resonates with adventure seekers. With a focus on driving website traffic, boosting bookings, and maximizing your return on investment, we are your partners in success.</p>
        <div className={style.container2_div1}>
          <h2>What It Includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Website Optimization:</strong>Transform your Website into an immersive gateway to Adventure with our Website Optimization service. By implementing cutting-edge optimization techniques, we'll enhance your site's visibility, drive organic traffic, and ultimately boost your conversion rates.<br />Benefits<br />Increase user engagement<br />Improve search engine rankings<br />Maximize your Website's potential.</li>
            <li className={style.container2_div1_li}><strong>Search Engine Optimization (SEO):</strong>Achieve higher visibility and organic traffic with our Search Engine Optimization (SEO) service. Our SEO specialists will optimize your Website's structure, content, and technical elements to improve its search engine rankings. By targeting relevant keywords and implementing effective SEO strategies, we'll help your adventure tourism business attract more organic traffic, generate quality leads, and increase conversions.<br />Benefits<br />Enhanced online visibility<br />Increased organic traffic<br />Improved search engine rankings.</li>
            <li className={style.container2_div1_li}><strong>Paid Marketing (PPC):</strong>Accelerate your online visibility and drive targeted traffic with our Paid Marketing (PPC) service. By optimizing ad targeting, bidding strategies, and ad creatives, we'll help your adventure tourism business reach the right audience, generate instant visibility, and increase conversions.<br />Benefits<br />Immediate online visibility<br />Precise audience targeting<br />Measurable ROI.</li>
            <li className={style.container2_div1_li}><strong>Social Media Marketing:</strong>Harness the power of social media to amplify your adventure tourism business with our Social Media Marketing service. Our social media experts will create captivating content, develop strategic campaigns, and engage with your target audience across various platforms. By leveraging the immense reach of social media, we'll help you build a vibrant community, foster brand loyalty, and generate buzz around your adventures.<br />Benefits<br />Expand brand awareness<br />Increase audience engagement<br />Drive traffic to your Website</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <p>So, are you ready to unleash the true potential of your adventure tourism business? Let us navigate the digital landscape together and reach new heights of achievement!</p>
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
