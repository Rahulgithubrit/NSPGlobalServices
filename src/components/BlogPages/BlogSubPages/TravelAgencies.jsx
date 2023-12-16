import React, { useState } from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import { Helmet } from 'react-helmet'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can online marketing services benefit my travel agency?',
    paragraph: 'Online marketing services can significantly benefit your travel agency by increasing your online visibility, attracting more potential clients, driving bookings, and establishing a strong brand presence in the digital landscape.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Which digital marketing channels are commonly used by travel agencies?',
    paragraph: 'Commonly used digital marketing channels for travel agencies include website optimization, search engine marketing (SEM), search engine optimization (SEO), social media marketing (SMM), email marketing, content marketing, and online reputation management.'
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `How can website optimization enhance my travel agency's online presence?`,
    paragraph: `Website optimization ensures that your agency's website is user-friendly, visually appealing, and optimized for search engines. Providing a seamless browsing experience increases the chances of potential clients engaging with your offerings and making bookings.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What role does social media marketing play in promoting a travel agency?',
    paragraph: `Social media marketing allows travel agencies to showcase their destinations, share travel tips and recommendations, run targeted advertising campaigns, and engage with potential clients. It helps build brand awareness, drive traffic to your website, and increase bookings.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ' How can email marketing help drive bookings for my travel agency?',
    paragraph: `Email marketing enables direct communication with your audience, allowing you to deliver personalized travel offers, promotions, and engaging content. Email marketing encourages bookings and repeats business by nurturing client relationships and keeping your agency top-of-mind.`
  },
  {
    id: 5,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ' What is online reputation management, and why is it important for travel agencies?',
    paragraph: `Online reputation management involves monitoring and managing your travel agency's online reputation, responding to reviews and feedback, and maintaining a positive brand image. It is crucial for building trust, attracting new clients, and establishing credibility in the competitive travel industry.`
  }
]

export default function TravelAgencies() {
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
                <title>Online Travel Marketing Services by NSP</title>
                <meta name="description" content="Experience the future of travel marketing with NSP. Our services are designed to make your travel business grow online." />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/tourism-hospitality/travel-agencies"/>
            </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Online Travel Marketing Services</h1>
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
      <div className={style.container2}>
        <p className={style.container2_ptag}>Welcome to NSP, your trusted partner for comprehensive online marketing services designed specifically for travel agencies. We specialize in helping travel agencies expand their online presence, attract more clients, and increase bookings through strategic digital marketing strategies. With our expertise in the travel industry and digital marketing channels, we are committed to helping your travel agency thrive in the online marketplace.</p>
        <div className={style.container2_div1}>
          <h2>Our Services:</h2>
          <p></p>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Website Optimization:</strong>We optimize your travel agency's website to ensure it provides a seamless user experience. From responsive design and fast loading speed to user-friendly navigation and engaging visuals, we enhance your website to captivate visitors and drive conversions.<br />Our team integrates booking functionalities and clear call-to-action elements to streamline the booking process and maximize your online reservations.</li>
            <li className={style.container2_div1_li}><strong>Search Engine Marketing (SEM):</strong>With our SEM services, we create targeted ad campaigns to increase your travel agency's visibility on search engines. Through extensive keyword research and analysis, we develop compelling ad copy that reaches potential travelers actively searching for travel services.<br />Our bid management strategies and conversion tracking ensure optimal campaign performance, maximizing your return on investment.</li>
            <li className={style.container2_div1_li}><strong>Search Engine Optimization (SEO):</strong>Our SEO experts employ proven strategies to boost your travel agency's organic visibility. By optimizing website content, conducting thorough keyword research, and implementing technical SEO enhancements, we improve your website's ranking on search engine result pages.<br />With a focus on local SEO, we help your agency attract clients from specific geographic areas, increasing your chances of securing bookings.</li>
            <li className={style.container2_div1_li}><strong>Social Media Marketing (SMM):</strong>We promote your travel agency across popular platforms through strategic social media marketing. We create engaging content, run targeted advertising campaigns, and leverage social media influencers to expand your reach and attract potential travelers<br />Our SMM services facilitate customer engagement, showcase travel experiences, and build a loyal online community around your agency's brand.</li>
            <li className={style.container2_div1_li}><strong>Email Marketing:</strong>Our customized email marketing campaigns allow you to connect directly with your target audience. We segment your email lists, personalize content, and deliver enticing travel offers, destination highlights, and exclusive promotions to nurture client relationships and encourage bookings.<br /> Automation features and comprehensive analytics help us optimize your email marketing strategy for maximum effectiveness.</li>
            <li className={style.container2_div1_li}><strong>Content Marketing:</strong>Our content marketing services focus on creating valuable travel-related content that engages and inspires your audience. We develop informative blog articles, destination guides, travel tips, and captivating visuals to showcase your agency's expertise and attract potential clients.<br />By distributing content through various channels, we increase your agency's visibility and establish you as a trusted source of travel information.</li>
            <li className={style.container2_div1_li}><strong>Online Reputation Management:</strong> We monitor and manage your travel agency's online reputation, ensuring positive customer experiences are reflected in online reviews and feedback. Our reputation management strategies include review response and engagement, reputation repair, brand monitoring, and crisis management.<br />Maintaining a positive online reputation, we help build trust with potential clients and enhance your agency's credibility.</li>

          </ul>
        </div >
        <div className={style.container2_div1}>
          <p>Partner with NSP today and unlock the full potential of online marketing for your travel agency. Our dedicated team of experts will work closely with you to develop customized strategies and campaigns tailored to your agency's unique offerings and target audience. Let us help you stand out in the digital landscape, attract more clients, and achieve your business goals. Contact us now to discuss your online marketing needs and embark on a transformative journey for your travel agency.</p>
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
    </>
  )
}
