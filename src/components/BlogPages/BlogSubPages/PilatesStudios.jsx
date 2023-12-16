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
    statement: 'How long does it take to see results from online marketing for my Pilates studio?',
    paragraph: 'Results can vary, but many clients start to see increased website traffic and engagement within a few months. Full ROI may take longer, depending on your specific goals and competition.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ' Is online marketing cost-effective for small Pilates studios?',
    paragraph: `Absolutely. Online marketing can be tailored to fit your budget. We work closely with you to create strategies that maximize your investment and provide a strong return.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can NSP help my studio with social media advertising?',
    paragraph: `Yes, we specialize in social media advertising. We'll create and manage campaigns on platforms like Facebook and Instagram to target your ideal audience and drive conversions.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What sets NSP apart from other online marketing agencies?',
    paragraph: `We have a deep understanding of the fitness industry and the unique needs of Pilates studios. Our personalized approach, transparent reporting, and dedication to your success set us apart from the competition.


    Ready to take your Pilates studio to new heights in the digital realm? Contact NSP today for a consultation, and let's embark on a journey to boost your studio's online presence, attract new clients, and enhance your reputation in the world of Pilates.
    .`
  }
]

export default function PilatesStudios() {
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
        <title>Strategic Digital Marketing for Pilates Studio</title>
        <meta name="description" content="Fuel your Pilates Studio brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/fitness/pilates-studios" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for Pilates Studio</h1>
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
        <p className={style.container2_ptag}>In the fast-paced digital age, establishing a robust online presence is no longer an option—it's a necessity. For Pilates studios seeking growth and visibility, NSP offers tailored online marketing solutions that can elevate your studio above the competition.</p>
        <div className={style.container2_div1}>
          <h2>Why Online Marketing for Pilates Studios is Essential:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Visibility:In a sea of fitness options, it's crucial to stand out. Online marketing ensures that your Pilates studio appears prominently in search engine results and on social media platforms, making it easier for potential clients to find you.</li>
            <li className={style.container2_div1_li}>Targeted Reach:Online marketing allows you to reach your ideal audience. Whether you're targeting local clients or expanding to a broader market, NSP can help you tailor your strategies accordingly.</li>
            <li className={style.container2_div1_li}>Brand Building:Establishing a strong online presence enhances your studio's reputation and credibility. With the right strategies, you can build a loyal client base that trusts your expertise.</li>
            <li className={style.container2_div1_li}>Competitive Edge:Your competitors are already leveraging online marketing. To stay competitive, it's crucial to embrace these strategies and ensure you're not left behind.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>Our Proven Online Marketing Strategies for Pilates Studios:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Social Media Management:</strong>We'll develop and manage your social media presence across platforms like Facebook, Instagram, and Twitter to increase engagement and reach a wider audience.</li>
            <li className={style.container2_div1_li}><strong>Local SEO:</strong>Target clients in your area with local search engine optimization. We'll ensure your studio appears in local searches, including on Google Maps.</li>
            <li className={style.container2_div1_li}><strong>Content Marketing:</strong>Our team will craft valuable, informative, and engaging content that showcases your Pilates expertise. Regular blog posts and articles can attract and retain clients.</li>
            <li className={style.container2_div1_li}><strong>Pay-Per-Click (PPC) Advertising:</strong>Maximize your reach with targeted PPC campaigns that ensure your studio appears at the top of search engine results.</li>
            <li className={style.container2_div1_li}><strong>Webiste Optimization:</strong>We create and optimize websites that reflect your studio's unique identity and services. A user-friendly, mobile-responsive website is essential for engaging potential clients.</li>
            <li className={style.container2_div1_li}><strong>Email Marketing:</strong>Stay connected with your clients through personalized email campaigns. From newsletters to promotions, we've got your email marketing covered.</li>
            <li className={style.container2_div1_li}><strong>Analytics and Reporting:</strong>We provide transparent insights into the performance of your online marketing efforts, helping you make informed decisions and track your ROI.</li>
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
