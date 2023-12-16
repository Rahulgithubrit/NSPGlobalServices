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
    statement: 'What is online marketing for recruiters, and why is it important?',
    paragraph: `Online marketing for recruiters refers to the use of digital marketing strategies and tools to attract, engage, and hire top talent. It's essential because today's job seekers primarily use the internet to search for opportunities, making online presence and marketing crucial for successful recruitment.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can keyword optimization benefit recruiters?',
    paragraph: `Keyword optimization involves incorporating relevant keywords into job postings and content. This practice improves search engine visibility, helping recruiters reach a broader audience of potential candidates actively searching for specific roles or skills.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What role does social media play in online marketing for recruiters?',
    paragraph: `Social media allows recruiters to build and promote their employer brand. It's a platform to showcase company culture, values, and job opportunities. Engaging with candidates on social media can also foster a sense of community and loyalty.`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can content marketing be used in recruiting?',
    paragraph: `Content marketing involves creating informative and engaging content such as blog posts, articles, videos, and webinars. For recruiters, this content can position them as industry experts, attract potential candidates, and provide valuable insights into the job market.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Why is mobile optimization important for recruitment websites?',
    paragraph: `Mobile optimization ensures that your website and job postings are easily accessible on smartphones and tablets. With the majority of job seekers using mobile devices, a mobile-friendly approach is vital to reach a broader audience.
    `
  },
  {
    id: 5,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: ' How can data analytics benefit recruiters in their online marketing efforts?',
    paragraph: `Data analytics allows recruiters to track the performance of their marketing strategies. It provides valuable insights into which methods are most effective, helping recruiters make informed decisions and refine their approach to reach their target audience more effectively.`
  },
  {
    id: 6,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What are the advantages of paid advertising for recruiting?',
    paragraph: `Paid advertising, such as Google Ads and social media ads, offers recruiters the ability to target specific demographics and reach candidates more efficiently. It provides a cost-effective way to attract quality applicants and fill job vacancies faster.`
  },
  {
    id: 7,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can a specialized online marketing strategy benefit my recruitment efforts?',
    paragraph: `A specialized online marketing strategy tailored to your specific needs and goals can maximize your recruitment efforts. It ensures that you reach the right candidates through the most effective channels, saving time and resources in the process.`
  },
  {
    id: 8,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'What can NSP do to help recruiters with online marketing?',
    paragraph: `At NSP, we specialize in creating customized online marketing strategies for recruiters. We provide expert guidance and services to help you leverage the full potential of digital marketing for talent acquisition. Contact us to discuss how we can support your recruitment goals.`
  },
  {
    id: 9,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do I get started with online marketing for recruiting?',
    paragraph: `To get started with online marketing for recruiting, contact our team. We'll work with you to understand your unique needs and objectives and develop a tailored strategy that will help you connect with the best candidates in the digital world.`
  }
]

export default function Recuiters() {
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
        <title>Strategic Digital Marketing for Recruiters</title>
        <meta name="description" content="Fuel your Recruiters brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/professional-services/recruiters" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>Digital Marketing Services for Recruiters</h1>
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
        <p className={style.container2_ptag}>In the fast-paced world of recruitment, staying ahead of the competition requires more than just traditional methods. In today's digital age, recruiters must harness the power of online marketing to connect with top-tier talent and build a strong employer brand. Our comprehensive guide explores the strategies, tools, and techniques that can elevate your recruiting game.</p>
        <div className={style.container2_div1}>
          <h2>What It Includes:</h2>
          <ul className={style.container2_div1_ul}>
            <li className={style.container2_div1_li}><strong>The Power of Online Marketing:</strong>In an era where job seekers turn to the internet for career opportunities, recruiters must adapt and thrive in the digital landscape. Harnessing the power of online marketing can significantly impact your talent acquisition efforts. Let's delve into the core strategies.</li>
            <li className={style.container2_div1_li}><strong>Keyword Optimization:</strong>The foundation of successful online marketing for recruiters lies in keyword optimization. By integrating relevant keywords into your job postings, website content, and social media profiles, you can increase your visibility in search engine results and attract the right candidates.</li>
            <li className={style.container2_div1_li}><strong>Social Media Engagement: Building Your Employer Brand</strong>Today's job seekers are not just looking for a paycheck; they want to be part of a company culture that aligns with their values. Utilize social media platforms to showcase your company's unique culture, values, and work environment. Engage with potential candidates and build a loyal online community.</li>
            <li className={style.container2_div1_li}><strong>Content Marketing: Inform and Attract</strong>Create compelling and informative content that addresses the pain points of job seekers. From blog posts and articles to videos and webinars, content marketing can establish your authority in the industry and attract top talent.</li>
            <li className={style.container2_div1_li}><strong>Navigating the Digital Landscape</strong>Recruiters must navigate the ever-evolving digital landscape to remain competitive. Here's how you can stay ahead of the curve.</li>
            <li className={style.container2_div1_li}><strong>Mobile Optimization: Be Accessible Anywhere, Anytime:</strong>In today's mobile-centric world, ensuring that your website and job postings are mobile-friendly is crucial. Job seekers browse opportunities on their smartphones and tablets, so make it easy for them to access your content.</li>
            <li className={style.container2_div1_li}><strong>Data Analytics: Making Informed Decisions</strong>Harness the power of data analytics to understand your audience better. Track the performance of your job listings, social media campaigns, and website traffic. Use this valuable information to refine your strategies and reach your target audience effectively.</li>
            <li className={style.container2_div1_li}><strong>Paid Advertising: Targeted Reach</strong>Invest in paid advertising campaigns to target specific demographics and reach the candidates you need. Platforms like Google Ads and social media advertising allow you to tailor your message to a highly receptive audience.</li>
            <li className={style.container2_div1_li}><strong>Your Path to Recruiting Success</strong>Online marketing for recruiters is not a one-size-fits-all solution. It requires a strategic approach tailored to your unique needs and goals. At NSP, we specialize in helping recruiters like you leverage the full potential of online marketing to find, attract, and retain top talent.</li>
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
