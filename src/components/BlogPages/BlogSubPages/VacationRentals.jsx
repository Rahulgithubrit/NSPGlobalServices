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
    statement: 'How can online marketing services benefit my vacation rental business?',
    paragraph: 'Online marketing services can significantly benefit your vacation rental business by increasing your online visibility, driving targeted traffic to your Website, and ultimately boosting bookings and revenue. '
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Are online marketing services suitable for all types and sizes of vacation rental businesses?',
    paragraph: `Online marketing services are suitable for vacation rental businesses of all types and sizes. Whether you own a single property or manage a portfolio of rentals, effective online marketing strategies can help you gain a competitive edge, connect with your target audience, and achieve your business goals. Our services are customizable to meet different vacation rental businesses' unique needs and budgets.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How long does it take to see results from online marketing efforts?',
    paragraph: `The timeline for seeing results from online marketing efforts can vary depending on several factors, including the competitiveness of your market, the existing online presence of your vacation rental business, and the specific strategies implemented. `
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can I track the performance and effectiveness of my online marketing campaigns?',
    paragraph: `Absolutely! We believe in transparency and accountability. Our team will provide detailed analytics and performance reports that outline the key metrics and insights related to your online marketing campaigns. `
  }
]

export default function VacationRentals() {
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
                <title>Vacation Rentals Digital Marketing Services | Maximize Bookings</title>
                <meta name="description" content="Improve your SEO and online visibility with our digital marketing for vacation rentals. Achieve remarkable growth and guest satisfaction." />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/tourism-hospitality/vacation-rentals"/>
            </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Vacation Rentals Digital Marketing Services</h1>
          <p className={style.container1_div_ptag}></p>
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
            "Accountancy Firm SEO"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>At NSP, we are passionate about empowering vacation rental owners to succeed in the competitive online market. With our deep expertise in online marketing for vacation rentals, we leverage cutting-edge strategies and industry insights to help you maximize your bookings, boost revenue, and establish a strong online presence. </p>
        <div className={style.container2_div1}>
          <h2>Trust us to be your dedicated partner in unlocking the full potential of your vacation rental business.</h2>
          <p></p>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Search Engine Optimization (SEO):</strong>We'll optimize your vacation rental Website with keyword-rich content, meta tags, and other on-page SEO techniques to enhance your visibility on search engine results pages. By targeting relevant keywords, we'll help potential guests find your rentals effortlessly, leading to increased bookings and revenue.</li>
            <li className={style.container2_div1_li}><strong>Pay-Per-Click Advertising (PPC):</strong>Our PPC experts will create targeted advertising campaigns on platforms like Google Ads, driving highly relevant traffic to your vacation rental Website. With strategic keyword selection, compelling ad copy, and effective bidding strategies, we'll ensure your ads generate maximum conversions while staying within your budget.</li>
            <li className={style.container2_div1_li}><strong>Social Media Marketing (SMM):</strong>Our services include creating and managing social media accounts, developing captivating content, running targeted ad campaigns, and fostering meaningful interactions to boost brand awareness and drive bookings.</li>
            <li className={style.container2_div1_li}><strong>Content Marketing:</strong>Engage and inspire potential guests with captivating content that showcases your vacation rentals' unique features and attractions. Our content marketing services include blog writing, guest articles on travel platforms, compelling property descriptions, and visually appealing multimedia content to pique interest and drive bookings.</li>
            <li className={style.container2_div1_li}><strong>Email Marketing:</strong>Stay connected with past guests and nurture potential leads through effective email marketing campaigns. Our experts will design engaging newsletters, automate personalized email sequences, and craft persuasive promotional offers to drive repeat bookings and foster guest loyalty.</li>
            <li className={style.container2_div1_li}><strong>Reputation Management:</strong>SProtect and enhance your online reputation to build trust and credibility. We'll monitor and respond to reviews and feedback, manage your online listings, and implement strategies to maintain a stellar reputation. Positive reviews and ratings will attract more guests, increasing bookings and revenue.</li>
            <li className={style.container2_div1_li}><strong>Website Design and Optimization:</strong>Ensure your vacation rental Website is visually appealing, user-friendly, and optimized for conversions. Our web design and optimization services focus on intuitive navigation, seamless booking processes, mobile responsiveness, and fast loading speeds, creating a delightful user experience that drives more bookings.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <h2>Why Choose Us:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Proven Track Record:Our team of seasoned professionals has a proven track record of delivering outstanding results for vacation rental businesses across the industry.</li>
            <li className={style.container2_div1_li}>Tailored Solutions:We understand that each vacation rental business is unique. We offer customized online marketing strategies aligning with your goals, target audience, and property characteristics.</li>
            <li className={style.container2_div1_li}>Expertise and Experience:With extensive experience in online marketing for vacation rentals, we have the knowledge and expertise to navigate the digital landscape and drive tangible results.</li>
            <li className={style.container2_div1_li}>Data-Driven Approach:Our strategies are backed by in-depth market research, data analysis, and continuous monitoring to ensure optimal performance and adaptability.</li>
            <li className={style.container2_div1_li}>Transparent Communication:We believe in open and transparent communication. You can expect regular updates, insightful reporting, and collaborative discussions throughout our partnership.</li>
          </ul>
        </div>
        <div className={style.container2_div1}>
          <h2>We Are Unique</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}>Exceeding Expectations:We go above and beyond to deliver exceptional results, constantly striving for excellence in all aspects of online marketing for vacation rentals.</li>
            <li className={style.container2_div1_li}>Customized Strategies:Our team will work diligently to optimize your online marketing campaigns and provide regular progress updates, ensuring maximum impact and success.</li>
            <li className={style.container2_div1_li}>Personalized Attention:We provide dedicated support and personalized attention to each client, building strong relationships and fostering long-term partnerships.</li>
            <li className={style.container2_div1_li}>Cutting-Edge Techniques:We stay ahead of the curve by leveraging the latest trends, tools, and techniques in online marketing to give your vacation rental business a competitive edge.</li>
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
