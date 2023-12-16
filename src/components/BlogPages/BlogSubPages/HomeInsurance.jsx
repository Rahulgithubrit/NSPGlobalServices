import React from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { Helmet } from 'react-helmet'
import SEO_Images_1 from '../../assets/Alteration/seo1.jpg'
import SEO_Images_2 from '../../assets/Alteration/on-page SEO1.jpg'
import img1 from '../../assets/Alteration/SEO Reporting 1.jpg'
import img2 from '../../assets/Alteration/technical-seo1.jpg'
import img3 from '../../assets/Alteration/off-page seo 1.jpg'

export default function HomeInsurance() {
    return (
      <>
      <Helmet>
                <title>Home Insurance SEO Services | Boost Your Online Visibility</title>
                <meta name="description" content="Our Home Insurance SEO services boost your online visibility, making it easier for homeowners to find your services. Get started today!" />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/insurance/home-insurance/seo"/>
            </Helmet>
        <div className={style.header}>
          <div className={style.container1_div}>
            <h1 className={style.container1_div_hone}>Home Insurance SEO Services</h1>
            <p className={style.container1_div_ptag}>Dominate the Search Results and Skyrocket Your Business with Strategic SEO for Homeowners Insurance Companies</p>
          </div>
          <div className={style.container2_div}>
            <TextSphare texts = {[
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
            "Home-Owners SEO Services"
          ] }/>
          </div>
        </div>
        <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
        <div className={style.container2}>
          <p className={style.container2_ptag}>We specialize in helping insurance providers like yours maximize their online presence, attract targeted leads, and increase conversions.</p>
          <div className={style.container2_div1}>
            <h2>Our comprehensive range of services includes:</h2>
            <ul className={style.container2_div1_ul}>
              <li className={style.container2_div1_li}><strong>Keyword Research and Analysis:</strong>We conduct thorough research to identify relevant keywords that potential customers use when searching for homeowners insurance.</li>
              <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>Our SEO experts optimize your website's structure, content, and meta tags to enhance its visibility to search engines.</li>
              <li className={style.container2_div1_li}><strong>Local SEO:</strong>We implement effective local SEO strategies to help your homeowners insurance business attract customers in your target geographical area. We optimize your website for local keywords, create and optimize your Google My Business profile, and employ location-specific SEO techniques to improve your local visibility.</li>
              <li className={style.container2_div1_li}><strong>Link Building and Outreach:</strong>Our team builds high-quality backlinks from authoritative websites in the insurance industry. These backlinks improve your website's authority, credibility, and search engine rankings. We also conduct targeted outreach campaigns to secure guest blogging opportunities and expand your online presence.</li>
              <li className={style.container2_div1_li}><strong>Content Creation and Optimization:</strong>We develop compelling blog posts, articles, and landing page content that not only attracts visitors but also ranks well in search engines.</li>
              <li className={style.container2_div1_li}><strong>Technical SEO Audit:</strong>Our experts provide actionable recommendations to optimize your website's structure, crawlability, and indexing.</li>
              <li className={style.container2_div1_li}><strong>Performance Tracking and Reporting:</strong>We continuously monitor the performance of your SEO campaigns and provide regular reports and insights. Our detailed analytics help you understand the impact of our strategies on your website's visibility, traffic, and conversions.<br/>At NSP, we are a team of experienced SEO strategists and copywriters dedicated to providing exceptional SEO services for homeowners insurance companies. </li>
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
        </div>
        <div className={style.container2}>
        <div><img src={img1} className={style.imges} alt="img1" /></div>
        <div><img src={img2} className={style.imges} alt="img2" /></div>
        <div><img src={img3} className={style.imges} alt="img3" /></div>
      </div>
      </>
    )
}
