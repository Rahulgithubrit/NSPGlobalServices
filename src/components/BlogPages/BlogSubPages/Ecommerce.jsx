import React from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { Helmet } from 'react-helmet'
import SEO_Images_1 from '../../assets/Digital Marketing/IMG-20231116-WA0001.jpg'
import SEO_Images_2 from '../../assets/Digital Marketing/IMG-20231116-WA0000.jpg'
import img1 from '../../assets/Digital Marketing/IMG-20231116-WA0002.jpg'
import img2 from '../../assets/Digital Marketing/IMG-20231116-WA0003.jpg'
import img3 from '../../assets/Digital Marketing/IMG-20231116-WA0004.jpg'
// import { GoPlus } from 'react-icons/go'
// import FAQ from '../../assets/FAQ_1_-removebg.png'


// const data = [
//   {
//     id: 0,
//     icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
//     statement: 'How can online marketing services benefit my casino?',
//     paragraph: 'Online marketing services can significantly benefit your casino by increasing your online visibility, attracting more players, driving revenue, and establishing a strong brand presence in the digital landscape.'
//   },
//   {
//     id: 1,
//     icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
//     statement: 'Which digital marketing channels are commonly used for casinos?',
//     paragraph: `Commonly used digital marketing channels for casinos include website optimization, search engine marketing (SEM), search engine optimization (SEO), social media marketing (SMM), email marketing, content marketing, and online reputation management.`
//   },
//   {
//     id: 2,
//     icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
//     statement: `How can website optimization enhance my casino's online presence?`,
//     paragraph: `Website optimization ensures that your casino's website is user-friendly, visually appealing, and optimized for search engines. Providing a seamless browsing experience increases the chances of potential players engaging with your offerings and participating in your casino activities.`
//   },
//   {
//     id: 3,
//     icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
//     statement: 'What role does social media marketing play in promoting a casino?',
//     paragraph: `Social media marketing allows casinos to showcase their gaming offerings, share special promotions and events, run targeted advertising campaigns, and engage with potential players. It helps build brand awareness, drive traffic to your website, and increase player participation.`
//   },
//   {
//     id: 4,
//     icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
//     statement: 'How can email marketing help drive visits and revenue for my casino?',
//     paragraph: `Email marketing enables direct communication with your audience, allowing you to deliver personalized offers, promotions, and engaging content. Email marketing encourages visits and increased spending by nurturing player relationships and keeping your casino top-of-mind.`
//   },
//   {
//     id: 5,
//     icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
//     statement: ' What is online reputation management, and why is it important for casinos?',
//     paragraph: `Online reputation management involves monitoring and managing your casino's online reputation, responding to reviews and feedback, and maintaining a positive brand image. It is crucial for building trust, attracting new players, and establishing credibility in the competitive casino industry.`
//   }
// ]

export default function Ecommerce() {
  // const [selection, setSelection] = useState(null)
  // const toggle = (i) => {
  //   if (selection === i) {
  //     return setSelection(null)
  //   }
  //   setSelection(i)
  // }
  return (
    <>
     <Helmet>
        <title>Strategic Digital Marketing for E-commerce</title>
        <meta name="description" content="Fuel your E-commerce‍ brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/retail-ecommerce/ecommerce" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for E-commerce</h1>
          <p className={style.container1_div_ptag}>Unlocking the Potential</p>
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
            "Ecommerce"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
        <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
        <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
      </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In today's rapidly evolving digital landscape, the role of effective marketing strategies is pivotal for the success of any ecommerce business. With the ever-increasing competition, understanding and implementing digital marketing techniques has become essential to drive traffic, generate leads, and boost sales.In the age of e-commerce, digital marketing has emerged as a game-changer. By leveraging various online channels and strategies, businesses can effectively reach their target audience, build brand awareness, and drive conversions. Here are some key areas to focus on when implementing digital marketing for your e-commerce venture:</p>
        <div className={style.container2_div1}>
          <h2>What It Includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>Search Engine Optimization (SEO):</strong>One of the cornerstones of a successful digital marketing strategy is optimizing your e-commerce website for search engines. You can improve your organic search rankings and increase visibility by utilizing relevant keywords, creating high-quality content, and improving your website structure.</li>
            <li className={style.container2_div1_li}><strong>Pay-Per-Click (PPC) Advertising:</strong>PPC advertising allows you to display targeted ads to potential customers across various platforms, such as search engines and social media networks. By carefully crafting compelling ad copy and optimizing your campaigns, you can drive traffic to your e-commerce site and maximize your return on investment.</li>
            <li className={style.container2_div1_li}><strong>Social Media Marketing:</strong>With billions of active users, social media platforms offer immense opportunities for e-commerce businesses. Establishing a strong social media presence, engaging with your audience, and running targeted ad campaigns can help you build brand loyalty, drive website traffic, and increase conversions.</li>
            <li className={style.container2_div1_li}><strong>Content Marketing:</strong>Creating and sharing valuable content is an effective way to attract and engage your target audience. By publishing blog posts, articles, videos, and infographics, you can position your e-commerce brand as an industry expert and drive organic traffic to your website.</li>
            <li className={style.container2_div1_li}><strong>Email Marketing:</strong>Email marketing remains a powerful tool for e-commerce businesses. By building an email list and crafting personalized, relevant messages, you can nurture leads, promote your products or services, and encourage repeat purchases.</li>
            <li className={style.container2_div1_li}><strong>Conversion Rate Optimization (CRO):</strong>Improving your website's conversion rate is crucial for maximizing the value of your digital marketing efforts. By conducting A/B testing, optimizing your landing pages, and enhancing the user experience, you can increase your e-commerce site's conversion rate and drive more sales.</li>
            <li className={style.container2_div1_li}><strong>Mobile Optimization:</strong>Optimizing your e-commerce website for mobile devices is essential given the rise in mobile device usage. Ensure your site is responsive, loads quickly, and offers a seamless browsing experience across various screen sizes to cater to mobile users effectively.</li>
          </ul>
        </div >
        <div className={style.container2_div1}>
          <h2>Conclusion:</h2>
          <p>Digital marketing has revolutionized how e-commerce businesses operate and connect with their audience. By implementing effective strategies such as SEO, PPC advertising, social media marketing, content marketing, email marketing, CRO, and mobile optimization, you can position your e-commerce venture for success in today's competitive landscape.</p>
        </div>
        {/* FAQ's */}
        {/* <div className={style.FAQS}>
          <div >
            <img className={style.faq} src={FAQ} alt="FAQ" />
          </div>
          <div className={style.wrapper}>
            <h1 className={style.accordion_h1}>Frequently Asked Question</h1>
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
        </div> */}
      </div>
      <div className={style.container2}>
        <div><img src={img1} className={style.imges} alt="img1" /></div>
        <div><img src={img2} className={style.imges} alt="img2" /></div>
        <div><img src={img3} className={style.imges} alt="img3" /></div>
      </div>
    </>
  )
}
