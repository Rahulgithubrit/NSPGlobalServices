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
    statement: 'How long does it take to see results from Golf Course SEO efforts?',
    paragraph: `SEO is a long game, my friend. Results can vary depending on factors like the age of your website, the competition in your field, and the overall industry landscape. Generally, you'll start seeing noticeable improvements within a few months, but remember; sustainable success requires consistent effort and ongoing optimization.`
  },
  {
    id: 1,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How can SEO help increase bookings and revenue for Golf Courses?',
    paragraph: `Ah, the golden question! By supercharging your website with SEO goodness—optimizing it, targeting the right keywords, and skyrocketing your search engine rankings—, we can reel in a bounty of qualified golfers to your course. More visibility, more targeted traffic, more bookings, and more revenue. It's like scoring a hole-in-one for your online presence.`
  },
  {
    id: 2,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: `What makes NSP the right choice for Golf Course SEO services?`,
    paragraph: `Well, first things first, we eat, sleep, and breathe Golf Course SEO. It's our bread and butter, our birdie in the making. We've got a proven track record of turning golf courses into online juggernauts, and we're armed with industry expertise, data-driven strategies, and a client-centric approach that's second to none`
  },
  {
    id: 3,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'Will we receive regular reports and updates on our Golf Course SEO campaign?',
    paragraph: ` Absolutely! We're all about transparency here at NSP. We'll keep you in the loop with regular reports and updates on the progress of your SEO campaign. You'll get a peek at key metrics like keyword rankings, organic traffic, conversions, and all the juicy insights you need to track the success and ROI of your SEO investment.`
  },
  {
    id: 4,
    icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
    statement: 'How do you stay updated with the latest SEO trends and algorithm updates?',
    paragraph: `Oh, we've got our finger on the pulse, my friend. Staying ahead of the curve is our jam. Our team of experts keeps a watchful eye on the ever-evolving SEO landscape. We devour industry developments like ravenous golfers at a post-round feast. We're constantly attending conferences and webinars and engaging in continuous learning to ensure our strategies align with the latest and greatest best practices in Golf Course SEO.`
  }
]

export default function GolfCourse() {
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
        <title>Drive Traffic and Leads: SEO for Golf Course Companies</title>
        <meta name="description" content="Our SEO services for Golf Course Companies drive targeted traffic and leads to boost your business. Get noticed in the Golf Course Companies industry." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/recreation/golf-course-companies/seo" />
      </Helmet>
      <div className={style.header}>
        <div className={style.container1_div}>
          <h1 className={style.container1_div_hone}>SEO Services for Golf Course Companies</h1>
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
            "Golf Course Companies"
          ]} />
        </div>
      </div>
      <div className={style.container2_div}>
          <img src={SEO_Images_1} className={style.container2_div_img} alt="SEO_Images" />
          <img src={SEO_Images_2} className={style.container2_div_img1} alt="SEO_Images" />
        </div>
      <div className={style.container2}>
        <p className={style.container2_ptag}>Welcome to NSP, your go-to SEO partner for Golf Course companies. We get it; the golf industry has challenges, but fret not because we're here to be your online wingman. Our mission? To help you turbocharge your online presence, reel in more golf enthusiasts, and skyrocket your business. Regarding Golf Course SEO, we're the maestros who can compose a symphony of success—a digital strategy that'll send organic traffic soaring, ramp up bookings, and establish your course as a bona fide hotspot.</p>
        <div className={style.container2_div1}>
          <p>But why do Golf Course companies need SEO services, you ask? Picture this: the golf world is growing like wildfire, and the competition is fiercer than a heated tee-off. If you want to stand out, snag potential players, and leave your rivals green with envy, you've got to amp up your online visibility. It's about attracting fresh faces, filling tee sheets, and cementing your course as a must-visit destination.</p>
        </div>
        <div className={style.container2_div1}>
          <p>Let's discuss the importance of a Golf Course SEO Company like NSP. We're no ordinary SEO folks—we're golf enthusiasts, too. We get the ins and outs of the golfing world, your unique needs, and the hurdles you face. That's why we're armed with the know-how to optimize your website, target the juiciest keywords, dominate local search rankings, and whip up strategies tailor-made for golf course marketing. Our goal? To make you shine brighter than a well-polished putter, driving qualified traffic to your site and turning curious visitors into die-hard golf aficionados.</p>
        </div>
        <div className={style.container2_div1}>
          <p>How do we make it all happen? Let's peel back the curtain and give you a glimpse into the magic. It starts with a comprehensive analysis of your golf course website—think of it as the swing before the big drive. We dive deep into keyword research, scout the competition like seasoned caddies, and assess your online presence from every angle. Armed with these insights, we optimize your website's structure, jazz up your content, and sprinkle that metadata goodness to boost your search engine rankings. But that's not all, folks! We're all about local SEO, targeting the golfers right in your neck of the woods. And we don't stop there—we'll bust out the big guns of content marketing, link building, and social media strategies to take your online visibility to new heights.</p>
        </div>
        <div className={style.container2_div1}>
          <p>So, what are you waiting for? It's time to step up your golf game and conquer the online world with NSP by your side. Get ready to tee off on a journey to success like no other.</p>
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
