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
    statement: 'How can online marketing benefit my limo company?',
    paragraph: 'Online marketing can benefit your limo company by increasing online visibility, attracting potential clients, and driving bookings. It helps you reach a wider audience, showcase your services, and stand out.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you help improve our online reputation and customer reviews?',
    paragraph: `We can help improve your online reputation, and customer reviews through reputation management strategies. We can monitor online mentions, encourage satisfied customers to leave reviews and address negative feedback to maintain a positive brand image.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ` Will my website be optimized for mobile devices?`,
    paragraph: `Yes, we ensure that your website is fully optimized for mobile devices. With responsive web design, your website will adapt seamlessly to different screen sizes, providing an excellent user experience for mobile users.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you target the right audience with PPC advertising?',
    paragraph: `We target the right audience with PPC advertising through thorough research and precise audience targeting settings. We identify relevant keywords, demographics, interests, and locations to ensure your ads are shown to the most relevant and potential customers.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What metrics do you track to measure the success of marketing campaigns?',
    paragraph: `We track various metrics to measure the success of marketing campaigns, including website traffic, conversion rates, click-through rates, engagement levels, leads generated, and return on investment (ROI). `
  }
]

export default function LimoCompanies() {
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
                <title>Digital Marketing for Limousine Companies: Elevate Your Brand</title>
                <meta name="description" content="Our digital marketing services for limo companies are designed to accelerate your growth. Experience the power of strategic online marketing." />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/tourism-hospitality/limo-companies"/>
            </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing for Limousine Companies</h1>
          <p className={style.container1_div_ptag}> Unleash the Potential of Digital Marketing for Limos</p>
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
            "Limo Companies"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>If you're a limo company looking to expand your reach, attract more clients, and increase bookings, our online marketing services are tailored just for you. As experts in the field, we understand the unique needs of limo companies and the importance of an effective online presence. With our proficient SEO writing and comprehensive marketing strategies, we can help your limo business thrive in the digital landscape.</p>
        <p className={style.container2_ptag}>Our online marketing services are designed specifically for limo companies. We specialize in providing tailored marketing solutions that emphasize the benefits of your limo services, attract potential clients, and generate more bookings. Let us help you unlock the power of online marketing and drive the success of your limo business.</p>
        <div className={style.container2_div1}>
          <h2>What It Includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Responsive Website Design:</strong>Impress potential clients with a visually appealing and user-friendly website that showcases your fleet, services, and commitment to luxury transportation. Our responsive website design ensures that your site looks stunning and functions flawlessly on all devices, providing a seamless browsing experience. Capture visitors' attention and guide them to inquire about your limo services effortlessly.</li>
            <li className={style.container2_div1_li}><strong>Local SEO Optimization:</strong>Our local SEO strategies ensure that your limo company appears prominently in local searches, making it easier for potential customers to find you when looking for luxury transportation services in your region. Increase your bookings and maximize your presence in the local market.</li>
            <li className={style.container2_div1_li}><strong>Social Media Marketing:</strong>Harness the power of social media to connect with your target audience, build brand awareness, and engage with potential clients. Our social media marketing services for limo companies focus on creating compelling content, sharing industry news and updates, promoting special offers, and showcasing the luxury experiences your limo services offer. Increase your followers, expand your reach, and drive more inquiries and bookings.</li>
            <li className={style.container2_div1_li}><strong>Pay-per-Click (PPC) Advertising:</strong>Reach potential clients immediately and drive targeted traffic to your website with PPC advertising. Through strategic ad campaigns on search engines and social media platforms, we ensure that your limo company appears prominently when individuals actively seek luxury transportation services. Maximize your visibility, increase website traffic, and generate valuable leads.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <p>Get on Onboard the Digital Transformation! | Embrace the digital era and revolutionize your limo business. Our online marketing services will elevate your brand, attract more clients, and boost your revenue. Start your journey to digital success now! </p>
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
