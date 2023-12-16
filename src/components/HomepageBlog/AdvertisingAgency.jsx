import React from 'react'
import style from '../BlogPages/BlogSubPages/Alteration.module.css'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import { useState } from 'react'



const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are the benefits of hiring an advertising agency for my business?',
        paragraph: 'Hiring an advertising agency for your business can bring many benefits. An experienced advertising agency will help you define and reach your business goals efficiently by leveraging the right mix of digital or traditional strategies and channels. A successful advertising campaign requires in-depth research, strategy definition, content creation, and marketing activities that take time to execute correctly. Selecting the right agency based on specific criteria is essential to get the most out of a tailored advertising services package from one of the top agencies, helping you achieve great results in a fraction of the time compared to DIY efforts.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do I know if my business needs an advertising agency?',
        paragraph: `
        If you're considering whether to enlist the help of an advertising agency, that likely means your business is growing and needs new ways to reach potential customers. An agency can provide insight into what services are ideal for reaching your target audience, given their current digital behavior. An agency will also define one or more key performance indicators (KPIs) to set up a successful advertising campaign. The selection process for an advertising agency should be meaningful, as it's essential to ensure the company can bring sufficient skills and expertise to meet your business goals. When selecting an agency, here are some criteria: portfolio work/case studies, years of experience with specific advertising channels, quality assurance standards they follow, cost-effectiveness, and reputation in the market. Look through top agencies' portfolios and ensure they offer all the needed services before deciding!
        `
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What factors should I consider when choosing an advertising agency for my business?',
        paragraph: `When selecting an advertising agency for your business, you should consider a variety of factors. To ensure the best outcome and maximum return on investment, it's essential to understand your organization's business goals and the different advertising channels available. Additionally, decide whether you would like to set up an internal or external advertising campaign. Lastly, familiarize yourself with what other businesses are doing by researching the selection process and criteria used by top advertising agencies when assessing their available services. By investing time into these steps, you can make the most informed decision when selecting an agency that will meet your needs and help bring success to your business!`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What kind of advertising services do agencies typically offer, and which ones are right for my business?',
        paragraph: `Choosing the right advertising agency for your business is critical to achieving your goals. While many agencies offer various services, it’s important to consider which ones best suit your needs and budget. Standard advertising services that most agencies provide include online marketing, copywriting, creative design, media planning and buying, video production and post-production, social media management, search engine optimization (SEO), content marketing, email marketing campaigns, and more. When selecting an agency, it’s essential to consider the credentials of the team behind them (such as industry awards or experience), their understanding of your brand identity and objectives, and their past work with other brands in similar industries. Researching top advertising agencies can also help you decide who is best suited for your project requirements.`
    },
    {
        id: 4,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How do advertising agencies typically charge for their services, and what kind of budget should I plan for?',
        paragraph: `Advertising agencies typically charge for their services based on the scope of the advertising campaign, the complexity of your business goals, and the type and number of advertising channels involved. To select a suitable advertising agency that can meet your specific requirements, there are certain selection criteria to consider, such as experience with similar campaigns or clients, pricing structure, and accessibility to particular resources. Top advertising agencies offer quality services at competitive prices, making them a popular choice among businesses looking to promote their products or services effectively. The budget that you should plan for an effective advertising campaign will depend on your business goals and marketing objectives.`
    }
]

export default function AdvertisingAgency() {
    const [selection, setSelection] = useState(null)
    const toggle = (i) => {
        if (selection === i) {
            return setSelection(null)
        }
        setSelection(i)
    }
    return (
        <>
            <div className={style.header}>
                <div className={style.container1_div}>
                    <h1 className={style.container1_div_hone}>How to Choose the Right Advertising Agency for Your Business Needs</h1>
                    {/* <p className={style.container1_div_ptag}>Grow Your Accountancy Firm With Organic SEO Services</p> */}
                </div>
                <div className={style.container2_div}>
                    {/* <TextSphare texts={[
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
            ]} /> */}
                </div>
            </div>
            <div className={style.container2}>
                <p className={style.container2_ptag}>The world of advertising is constantly evolving, and in today's competitive landscape, it's essential to select the right advertising agency to help your business thrive. In this blog post, we'll explore everything you need to know when choosing an advertising agency, from understanding the benefits of hiring an agency to decide if it's the right move for your business to the factors to consider during the selection process and more.</p>
                <div className={style.container2_div1}>
                    <h2>Does Your Business Need an Advertising Agency?</h2>
                    <p>If you're wondering if your business could benefit from hiring an top advertising agency, ask yourself these questions:</p>
                    <p>1. Are your current marketing campaigns producing the desired results?</p>
                    <p>2. Do you have the in-house expertise to manage a successful multi-channel advertising campaign?</p>
                    <p>3. Is your marketing budget large enough to support the necessary investments for a successful campaign?</p>
                    <p>If you answered 'no' to these questions, an advertising agency might be the right solution for your business.</p>
                </div>
                <div className={style.container2_div1}>
                    <h2>Benefits of Hiring an Advertising Agency</h2>
                    <p>So, why should you consider hiring an advertising agency? Here are a few key benefits:</p>
                    <ul className={style.container2_div1_ul}>
                        <li className={style.container2_div1_li}> Expertise and Experience:Advertising agencies have the knowledge and expertise needed to create successful campaigns that would take an in-house marketing team years to learn.</li>
                        <li className={style.container2_div1_li}>Access to Multiple Channels: Agencies have access to a wide range of advertising channels, allowing them to create comprehensive, cross-channel campaigns.</li>
                        <li className={style.container2_div1_li}>Cost-Effectiveness and Time Savings:Agencies can often secure better rates on advertising placements and offer cost-effective solutions, ultimately saving your organization valuable time and resources in the long run.</li>
                    </ul>
                </div>
                <div className={style.container2_div1}>
                    <h2>Factors to Consider When Choosing an Advertising Agency</h2>
                    <p>To help you navigate the process of selecting an advertising agency, keep these factors in mind:</p>
                    <ul className={style.container2_div1_ul}>
                        <li className={style.container2_div1_li}><strong>Define Your Business Goals:</strong> Clearly define your business objectives, target audience, and desired outcomes to guide your search for the right agency.</li>
                        <li className={style.container2_div1_li}><strong>Evaluate Agency Experience:</strong>ELook for an agency with a proven track record in developing successful campaigns for businesses within your industry.</li>
                        <li className={style.container2_div1_li}><strong>Communication and Compatibility:</strong>Ensure the agency's style, team structure, and communication methods align with your organization's expectations and culture.</li>
                        <li className={style.container2_div1_li}><strong>Agency Services Offered:</strong> Research the advertising services offered by each agency and determine which aligns with your business needs. Common services include<br/>a. Digital Advertising<br/>b.Search Engine Optimization<br/>c.Social Media Advertising<br/>d.Traditional Media (TV, radio, print, outdoor)<br/>e.Content Marketing</li>
                        <li className={style.container2_div1_li}><strong> Budget Consideration:</strong>Understand how advertising agencies charge for their services and set a budget accordingly. Agency fees typically include retainer agreements, project-based fees, or a combination.</li>
                    </ul>
                </div >
                <div className={style.container2_div1}>
                    <h2>Top Advertising Agencies to Consider</h2>
                    <p>As you embark on your advertising agency selection journey, start by researching top agencies with expertise in your industry. To understand their approach and results, look for success stories, testimonials, and case studies.</p>
                </div>
                <div className={style.container2_div1}>
                    <h2>In Conclusion</h2>
                    <p>Choosing the right digital advertising agency is a crucial decision that can directly impact the success of your business. Considering the factors outlined in this blog, you'll be better equipped to navigate the selection process and find the perfect agency partner for your organization.</p>
                    <p>Are you ready to explore the world of advertising agencies? Share your thoughts in the comments section below, and remember to subscribe to our blog for more insights and tips on optimizing your business's marketing strategies. Happy searching!</p>
                </div>
                {/* FAQ */}
                <div className={style.FAQS}>
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
                </div>
            </div>
        </>
    )
}
