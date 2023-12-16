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
    statement: 'How long does it take to see results from SEO efforts?',
    paragraph: 'The timeline for SEO results can vary, but you can expect to see improvements in search engine rankings and organic traffic within a few months of implementing the SEO strategies.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can you provide examples of your past success with countertop manufacturers?',
    paragraph: `We have successfully helped countertop manufacturers improve their online visibility, attract more qualified leads, and achieve higher search engine rankings. Contact us for case studies and testimonials.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `What strategies do you use to improve website rankings?`,
    paragraph: `We combine on-page optimization, content creation, keyword research, link building, and local SEO strategies to improve website rankings and increasing visibility in search engine results.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Will my website require changes or updates to improve its SEO?',
    paragraph: `Based on our analysis, we may recommend specific changes or updates to optimize your website for SEO. These include improving site structure, optimizing content, enhancing user experience, and implementing technical SEO best practices.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What metrics and reporting will you provide to track the progress of our SEO campaign?',
    paragraph: `We provide comprehensive reports that include key metrics such as keyword rankings, organic traffic, conversion rates, and more. These reports will help you track the progress of your SEO campaign and measure its effectiveness.`
  }
]

export default function CounterTop() {
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
                <title>Countertop Manufacturing SEO & Digital Marketing Expertise</title>
                <meta name="description" content="Our digital marketing services are tailored to countertop manufacturers, helping you reach new heights. Elevate your brand, generate leads, and dominate the industry." />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/manufacturing/countertop-manufacturers/seo"/>
            </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Countertop Manufacturers</h1>
          <p className={style.container1_div_ptag}>NSP offers specialized SEO services for Countertop Manufacturers.</p>
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
            "CounterTop Manufacturing"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>At NSP, we understand the challenges Countertop Manufacturers face in the digital marketplace. Many businesses need help to stand out among their competitors, resulting in missed opportunities to reach potential customers. However, with our specialized SEO services, you can overcome these obstacles and achieve remarkable growth for your countertop manufacturing business.</p>
        <p>Our SEO services will help Countertop Manufacturers increase their online visibility, attract more qualified leads, and ultimately grow their business.</p>
        <p>Countertop Manufacturers face intense competition in the digital marketplace, making it difficult for potential customers to find their products online.</p>
        <p>This problem frustrates Countertop Manufacturers, as they need help reaching their target audience and competing effectively against other manufacturers.</p>
        <p>It's wrong because Countertop Manufacturers deserve a fair chance to showcase their products and connect with customers who need their high-quality countertops. It's unjust that their valuable offerings remain hidden due to inadequate online visibility.</p>
        <div className={style.container2_div1}>
          <h2>When you choose NSP's SEO services for Countertop Manufacturers, you can expect the following benefits:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Increased Online Visibility:We improve your website's search engine rankings, ensuring that your countertop products appear prominently when potential customers search for relevant keywords.</li>
            <li className={style.container2_div1_li}>Targeted Traffic: Our strategies attract qualified leads specifically interested in countertops, increasing the likelihood of converting them into customers.</li>
            <li className={style.container2_div1_li}>Brand Authority: By establishing your countertop manufacturing business as a reputable authority online, we enhance your brand's credibility and trustworthiness among potential customers.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <p>We understand the challenges Countertop Manufacturers face in the digital world. At NSP, we empathize with your primary problem of low online visibility and are here to provide the solution you need.</p>
          <p>Rest assured that NSP is well-versed in the intricacies of SEO for Countertop Manufacturers. Our track record of success, backed by testimonials from satisfied clients and partnerships with reputable countertop manufacturers, demonstrates our expertise and ability to help you solve your problem effectively.</p>
        </div>
        <div className={style.container2_div1}>
          <h2>Our 3-Step Process Plan:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Analysis: We thoroughly assess your current online presence, identify areas for improvement, and perform keyword research to determine the most effective SEO strategy for your countertop manufacturing business.</li>
            <li className={style.container2_div1_li}>Optimization: Our team implements various SEO techniques, including on-page optimization, content creation, link building, and local SEO, to enhance your website's visibility and attract more targeted traffic.</li>
            <li className={style.container2_div1_li}>Monitoring and Adaptation: We continuously monitor your SEO performance, make data-driven adjustments, and provide regular reports to ensure your online presence remains optimized and ahead of the competition.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <p>We work closely with Countertop Manufacturers to analyze their online presence and devise a customized SEO strategy that aligns with their goals. We enhance your website's visibility through comprehensive optimization techniques, attract qualified leads, and position your business as a trusted provider of high-quality countertops. Success is achieved when your business gains increased online visibility, generates a steady stream of qualified leads, and converts them into satisfied customers.</p>
          <p>Boost your countertop manufacturing business with our SEO services. Get started today by contacting us for a personalized consultation.</p>
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
