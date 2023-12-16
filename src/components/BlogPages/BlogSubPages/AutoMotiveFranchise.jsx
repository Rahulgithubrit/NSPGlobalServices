import React,{useState} from 'react'
import style from './Alteration.module.css'
import TextSphare from './TextSphare'
import { GoPlus } from 'react-icons/go'
import FAQ from '../../assets/FAQ_1_-removebg.png'
import { Helmet } from 'react-helmet'
import SEO_Images_1 from '../../assets/loan offers/IMG-20231111-WA0006.jpg'
import SEO_Images_2 from '../../assets/loan offers/IMG-20231111-WA0001.jpg'
import img1 from '../../assets/loan offers/IMG-20231111-WA0004.jpg'
import img2 from '../../assets/loan offers/IMG-20231111-WA0005.jpg'
import img3 from '../../assets/loan offers/IMG-20231111-WA0007.jpg'


const data = [
  {
    id: 0,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
      statement: 'How long does it take to see results from SEO efforts for an automotive franchise?',
      paragraph: 'The timeline for noticeable results may vary depending on factors such as keyword competitiveness and the current state of your website. Generally, observing significant improvements in search engine rankings and organic traffic takes several months.'
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
      statement: 'Can SEO help my automotive franchise attract more customers?',
      paragraph: `Yes, by optimizing your website, targeting relevant keywords, and implementing effective SEO strategies, you can significantly enhance your online visibility and attract more customers to your automotive franchise.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
      statement: 'Is local SEO important for automotive franchises?',
      paragraph: `Absolutely. Local SEO is crucial in targeting customers in specific geographic areas and appearing prominently in local search results. It helps potential customers find your automotive franchise locations more easily.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
      statement: 'How do you measure the success of SEO campaigns for automotive franchises?',
      paragraph: `We measure success through various metrics, including organic traffic, keyword rankings, conversion rates, and the number of leads generated. Our team provides regular reports that outline these key performance indicators and offer insights for continuous improvement.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
      statement: 'Can you help with reputation management for my automotive franchise?',
      paragraph: `Yes, we offer reputation management services to help monitor and enhance the online reputation of your automotive franchise. We proactively monitor online reviews, respond to customer feedback, and implement strategies to maintain a positive brand image.`
  }
]

export default function AutoMotiveFranchise() {
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
        <title>Drive Traffic and Leads: SEO for Automotive Franchise Industries</title>
        <meta name="description" content="Our SEO services for Automotive Franchise Industries drive targeted traffic and leads to boost your business. Get noticed in the Automotive Franchise Industries." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/franchises/automotive-franchise/seo" />
      </Helmet>
        <div className={style.header}>
          <div className={style.container1_div}>
            <h1 className={style.container1_div_hone}>SEO Services for Automotive Franchise Industries</h1>
            <p className={style.container1_div_ptag}>Drive More Traffic and Boost Your Online Presence</p>
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
            "Automotive Frenchise SEO"
          ] }/>
          </div>
        </div>
        <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
        <div className={style.container2}>
          <p className={style.container2_ptag}>In the competitive automotive industry, having a strong online presence is crucial for automotive franchises to attract customers and increase their market share. At NSP, we specialize in tailored SEO services for automotive franchises. Our team of SEO experts understands the unique challenges faced by this industry. It is committed to helping you enhance your online visibility, drive more traffic to your website, and ultimately increase leads and sales.</p>
          <p className={style.container2_ptag}>Our Customized SEO Services for Automotive Franchises</p>
          <div className={style.container2_div1}>
            <h1>We offer a comprehensive range of SEO services tailored to meet the specific needs of automotive franchises.</h1>
            <h2> Our services include:</h2>
            <ul className={style.container2_div1_ul}>
              <li className={style.container2_div1_li}><strong>Keyword Research and Optimization:</strong>We conduct in-depth keyword research to identify your automotive franchise's most relevant and high-performing keywords. By optimizing your website and content with these targeted keywords, we improve your search engine visibility and attract more potential customers who are actively searching for automotive services.</li>
              <li className={style.container2_div1_li}><strong>Local SEO Strategies:</strong>We implement effective SEO strategies to ensure your automotive franchise locations rank higher in local search results. This includes optimizing your Google My Business profiles, creating location-specific landing pages, and providing consistent business information across online directories. By targeting customers in each location, we enhance your visibility among those searching for automotive services in their area.</li>
              <li className={style.container2_div1_li}><strong>On-Page Optimization:</strong>We optimize various on-page elements of your website, including meta tags, headers, URLs, and content structure, to make it more search engine-friendly and user-friendly. By improving the overall on-page optimization, we increase the chances of your website ranking higher in search engine results and providing visitors with a seamless browsing experience.</li>
              <li className={style.container2_div1_li}><strong>Content Creation and Optimization:</strong>Our team of skilled content creators develops engaging and informative content showcasing your automotive franchise's expertise and offerings. From blog posts about industry trends to informative articles about car maintenance, we create content that attracts organic traffic and positions your brand as a trusted authority. By optimizing this content for search engines, we ensure it ranks well and drives more visitors to your website.</li>
              <li className={style.container2_div1_li}><strong>Link Building:</strong>We employ ethical link-building techniques to acquire high-quality backlinks from authoritative sources in the automotive industry. These backlinks enhance your website's authority and search engine rankings and generate referral traffic from relevant websites, increasing your chances of attracting potential customers.</li>
            </ul>
          </div >
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
