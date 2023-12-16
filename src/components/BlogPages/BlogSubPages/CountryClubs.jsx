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
    statement: 'How can online marketing benefit my country club?',
    paragraph: `Online marketing can significantly benefit your country club by increasing its visibility, attracting new members, and engaging with your target audience. It allows you to showcase your club's amenities, events, and unique offerings to a wider audience, leading to increased brand awareness and memberships.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What sets your website design services apart from others?',
    paragraph: `Our website design services stand out due to our deep understanding of country clubs and their specific needs. Our designs are tailored to engage visitors and leave a lasting impression.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How do you ensure my club stands out on social media?`,
    paragraph: `We create engaging content that resonates with your target audience, share captivating visuals, promote events, and actively engage with followers. By maintaining an active presence on relevant social media platforms, we ensure that your club stands out, gains followers, and fosters a sense of community.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `Will SEO improve my club's search engine rankings?`,
    paragraph: `Absolutely! SEO (Search Engine Optimization) is vital in improving your club's search engine rankings. Our SEO experts conduct in-depth keyword research, optimize your website's structure and content, and employ industry best practices to enhance your online visibility.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can PPC advertising help me attract more members?',
    paragraph: `  PPC (Pay-per-Click) advertising allows you to display targeted ads to individuals actively searching for country club experiences. Through strategic ad campaigns, we ensure that your club's offerings are prominently featured on search engine results pages.`
  }
]

export default function CountryClubs() {
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
        <title>Expert Digital Marketing Services For Country Clubs</title>
        <meta name="description" content="Our specialized digital marketing services are your path to unlocking the true potential of your country club. Join us for success." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/tourism-hospitality/country-clubs" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services For Country Clubs</h1>
          <p className={style.container1_div_ptag}>Unparalleled Online Marketing Solutions for Country Clubs</p>
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
            "Country Clubs"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>If you want to take your country club's online presence to the next level, you've come to the right place. Our comprehensive online marketing services are designed to enhance your club's visibility, attract new members, and engage with your target audience. Let's dive into the details and discover how our services can benefit your country club.</p>
        <p className={style.container2_ptag}>Our exclusive online marketing services tailored specifically for country clubs. We understand that your club deserves the best, so we are here to elevate your online presence. Our expertise in website design, social media marketing, SEO, and PPC ensures that your club stands out from the rest. Engage with golf enthusiasts, attract new members, and build a thriving online community. Get ready to unlock a world of opportunities for your country club.</p>
        <div className={style.container2_div1}>
          <h2>What It Includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Website Designing:</strong>Drive user engagement and create a lasting impression with our expert website design services. We craft visually stunning and user-friendly websites that showcase your country club's unique charm and amenities. Our designs are tailored to captivate visitors, encourage membership inquiries, and promote an exceptional online experience.</li>
            <li className={style.container2_div1_li}><strong>Social Media Marketing:</strong>
              Harness the power of social media platforms to connect with your target audience and foster a sense of community around your country club. Our social media marketing strategies are tailored to increase brand awareness, engage with golf enthusiasts, and promote upcoming events. With our expertise, your club will be the town's talk on Facebook, Instagram, and Twitter.
            </li>
            <li className={style.container2_div1_li}><strong>SEO:</strong>Enhance your club's online visibility and reach the right audience with our targeted SEO strategies. Our SEO experts employ industry-leading techniques to optimize your website, improve search engine rankings, and attract organic traffic. By leveraging the power of keywords and local SEO, we ensure your club stays ahead of the competition.</li>
            <li className={style.container2_div1_li}><strong> PPC (Pay-per-Click) Advertising:</strong>Maximize your club's online visibility and drive targeted traffic with our PPC advertising services. Through strategic ad campaigns, we ensure that your club appears prominently in search engine results and reaches potential members actively searching for country club experiences. Our tailored PPC strategies deliver measurable results and a strong return on investment.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <p>Your Path to Online Excellence Starts Here! | Take the first step towards online success with our tailored marketing services. Let us help you navigate the digital landscape and achieve your goals. </p>
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
