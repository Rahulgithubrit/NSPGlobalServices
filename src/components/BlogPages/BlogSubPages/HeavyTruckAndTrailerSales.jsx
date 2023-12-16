import React, { useState } from 'react'
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
    statement: 'How long till I see SEO results?',
    paragraph: `SEO is a marathon, not a sprint. The timing can vary depending on factors like industry competitiveness, your website's current state, and the quality of your SEO efforts. Generally, it takes several months to see noticeable improvements in your rankings and organic traffic. But remember, SEO is an ongoing adventure, so buckle up for the long haul!`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Can I do SEO for my heavy truck and trailer sales biz solo?',
    paragraph: `Sure, you can do abble in basic SEO techniques on your own, but if you want to hit the big leagues in a competitive industry like heavy truck and trailer sales, you'll need a seasoned pro. SEO is a complex game that demands expertise and experience. That's where we come in, my friend. NSP, your ultimate SEO sidekick!`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can SEO turbocharge my leads and sales?',
    paragraph: `SEO is like a turbo boost for your heavy truck and trailer sales biz. It attracts targeted traffic to your website, increasing your chances of generating leads and sales. By optimizing your site with relevant keywords and skyrocketing its visibility on search engines, you'll reach potential customers who are actively seeking heavy trucks and trailers. Plus, killer SEO strategies improve user experience, boost website performance, and establish your business as a trusted authority. All that jazz adds up to higher conversion rates and business growth. Cha-ching!
    Investing in SEO for your heavy truck and trailer sales business is a genius move to crank up your online presence, lure in targeted traffic, and drive that sweet, sweet growth. By teaming up with a trusted SEO service provider like NSP, you'll tap into our expertise and experience to create killer strategies that align with your business goals. Don't let your competitors hog the spotlight—capture the attention of potential customers in the digital landscape. Let's make your heavy truck and trailer sales biz shine like never before!`
  }
]

export default function HeavyTruckAndTrailerSales() {
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
        <title>Drive Traffic and Leads: SEO for Heavy Truck and Trailer Sales</title>
        <meta name="description" content="Our SEO services for Heavy Truck and Trailer Sales drive targeted traffic and leads to boost your business. Get noticed in the Heavy Truck and Trailer Sales industry." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/heavy-equipment/heavy-truck-trailer/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Heavy Truck and Trailer Sales</h1>
          <p className={style.container1_div_ptag}>Boost Your Heavy Truck and Trailer Sales Business with Awesome SEO Strategies!</p>
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
            "Heavy Truck & Trailer Sales"
          ] } />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>In today's digital era, having a killer online presence is a must for any business, including heavy truck and trailer sales. With fierce competition in the industry, it's crucial to tap into the power of SEO to make your business shine and reach your target audience. </p>
        <div className={style.container2_div1}>
          <h2>What's the Deal with SEO Anyway?</h2>
          <p>SEO, my friend, is the art of optimizing a website to skyrocket its visibility on search engine result pages (SERPs). When potential customers are out there scouring the internet for heavy trucks and trailers, you want your website to be front and center. SEO involves a bag of tricks and strategies like keyword research, on-page optimization, link building, and content creation.</p>
        </div>
        <div className={style.container2_div1}>
          <h2>Why You Gotta Have SEO for Your Heavy Truck and Trailer Sales Biz?</h2>
          <p>In the wild, wild world of heavy truck and trailer sales, having a rock-solid website that's optimized to the max can give you a leg up. Here are some irresistible reasons why SEO is a must-have for your business:</p>
        </div>
        <div className={style.container2_div1}>
          <h2>1. Amped-Up Online Visibility</h2>
          <p>Picture this: your website soaring high in search engine results, catching the eyes of potential customers who are actively seeking heavy trucks and trailers. By optimizing the website with relevant keywords & phrases, you'll attract qualified leads and increase your chances of conversion. That's the ticket!</p>
        </div>
        <div className={style.container2_div1}>
          <h2>2. Laser-Targeted Traffic</h2>
          <p>SEO lets you zero in on specific keywords and phrases that are tailor-made for your business. By ranking for these gold nuggets, you'll reel in highly targeted traffic to your website. These people are interested in what you're selling, leading to higher conversion rates and a sweet boost in sales.</p>
        </div>
        <div className={style.container2_div1}>
          <h2>3. Credibility and Trustworthiness</h2>
          <p>When your website pops up on the first page of search engine results, it's like shouting, "Hey, I'm legit!" People tend to associate higher rankings with trustworthy and reliable businesses. By implementing killer SEO strategies, you can build up your brand's rep and establish yourself as a heavy truck and trailer sales authority. Trust me, credibility is gold!</p>
        </div>
        <div className={style.container2_div1}>
          <h2>4. Long-Term Benefits that Keep on Giving</h2>
          <p> Unlike paid advertising, which offers a quick fix but demands a never-ending cash flow, SEO is the gift that keeps on giving. By consistently optimizing your website and staying in tune with industry trends, you can maintain and improve your search engine rankings over time. That means a steady flow of organic traffic and leads straight to your digital doorstep. Sweet success! </p>
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
