import React from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { Helmet } from 'react-helmet'
import SEO_Images_1 from '../../assets/Alteration/seo1.jpg'
import SEO_Images_2 from '../../assets/Alteration/on-page SEO1.jpg'
import img1 from '../../assets/Alteration/SEO Reporting 1.jpg'
import img2 from '../../assets/Alteration/technical-seo1.jpg'
import img3 from '../../assets/Alteration/off-page seo 1.jpg'

export default function Health() {

  return (
    <>
      <Helmet>
        <title>SEO Consultant Services for Health Insurance</title>
        <meta name="description" content="Our SEO consultants specialize in the health insurance industry. Unlock the potential for higher rankings and increased customer acquisition." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/insurance/health-insurance/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Health Insurance SEO Services</h1>
          <p className={style.container1_div_ptag}>Your website fails to rank prominently on SERPs, resulting in low visibility and minimal organic traffic.</p>
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
            "Health Insurance SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>At NSP, we want to empower you with the knowledge and skills to improve your health insurance business's online presence</p>
        <div className={style.container2_div1}>
          <h2>Here's what you can expect from our engaging content:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Relevant industry insights:Discover the latest statistics and insights on the growing number of health insurance searches online, the impact of high rankings on SERPs, and the correlation between website traffic and sales conversions.</li>
            <li className={style.container2_div1_li}>Expert advice tailored to your industry:Access valuable tips and advice from our team of SEO experts who specialize in the health insurance sector. Learn how to optimize your website content, use relevant keywords, and implement effective SEO strategies to outshine your competitors.</li>
            <li className={style.container2_div1_li}>Stay ahead of the game:Stay updated on emerging trends in the health insurance market and understand how our SEO can help you adapt and stay ahead of the competition.</li>
            <li className={style.container2_div1_li}>Unique advantages:Discover the unique selling points of our SEO services, such as our team's deep understanding of the health insurance industry, innovative techniques, and proprietary tools designed to drive your success.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>By choosing our SEO services, you can enjoy a range of benefits and effective solutions tailored to your health insurance business:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Boost your online visibility:Our SEO strategies will elevate your website's visibility on search engines, ensuring that you're prominently featured when potential customers search for health insurance.</li>
            <li className={style.container2_div1_li}>Attract targeted traffic:Through optimized keywords and content, we'll drive highly relevant traffic to your website, increasing the chances of attracting qualified leads who are ready to engage with your services.</li>
            <li className={style.container2_div1_li}>Dominate search rankings:Our dedicated SEO team will work tirelessly to improve your website's rankings for relevant search terms, enabling you to outrank your competitors and secure a competitive advantage.</li>
            <li className={style.container2_div1_li}>Enhance user experience:With our expertise, we'll optimize your website's structure, load speed, and navigation, providing visitors with a seamless and enjoyable browsing experience that encourages them to take action.</li>
            <li className={style.container2_div1_li}>Increase conversions and sales:Expect to see a significant boost in conversions and sales as our SEO services improve your online visibility, attract the right audience, and optimize your website to maximize customer engagement.<br />Remember, these sections should be tailored to your specific SEO services for the health insurance industry and written in a persuasive and engaging tone to capture the visitor's attention and increase the opt-in or sales rate.</li>
          </ul>
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
