import React, { useEffect,useState } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
// import blog from '../assets/blog-1-1.png'
// import service from '../assets/service-details-2.png'
import icon7 from '../assets/icon-7.png'
import { MdCall } from 'react-icons/md'
import arrow from '../assets/right-arrow.png'
import AOS from 'aos'
import "aos/dist/aos.css";
import style from './servicedetails.module.css'
import Carousal from '../Carousal'
import BannerImage from '../assets/Automotive/Product Descriptions.png'
import endImages2 from '../assets/Product Descriptions-20230918T172525Z-001/Product Descriptions/20230907_172715_0002.png'
import endImages1 from '../assets/Product Descriptions-20230918T172525Z-001/Product Descriptions/20230907_172715_0001.png'
import SEO from '../assets/Product Descriptions-20230918T172525Z-001/Product Descriptions/20230907_172715_0000.png'
import { GoPlus } from 'react-icons/go'
import FAQ from '../assets/FAQ_1_-removebg.png'
import {Link} from 'react-router-dom'
import form from '../assets/whatsappchat/form.pdf'
import newpdf from '../assets/whatsappchat/NewPdf.pdf'
import TrustedCompaniesLogo from '../Pages/TrustedCompaniesLogo'
import { Helmet } from 'react-helmet'


const data = [
    {
        id: 0,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What are product descriptions?',
        paragraph: 'Product descriptions are an essential part of product content writing and ecommerce. They are comprehensive texts that provide accurate and detailed information about a product or service, usually with the purpose of persuading potential customers to purchase it. Examples include descriptions of features, benefits, styling details as well as technical specifications. A great product description should accurately convey what a customer can expect from the item in question.'
    },
    {
        id: 1,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'Why are product descriptions important for e-commerce businesses?',
        paragraph: `Product descriptions are essential for e-commerce businesses, as they communicate the value of products to customers. Product descriptions should include detailed product features along with benefits and helpful information such as size charts and delivery options. Writing effective product descriptions requires research, structure, a well thought out plan and creativity to capture potential customers’ attention.`
    },
    {
        id: 2,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'What makes a good product description?',
        paragraph: `An effective product description should provide an accurate and comprehensive overview of the product, emphasizing its key features and benefits. It should be detailed yet concise; persuasive yet factual; include specific keywords to increase search engine visibility; and have a design that is visually appealing.`
    },
    {
        id: 3,
        icon: <GoPlus style={{ marginTop: '28px' }} size={25} />,
        statement: 'How long should a product description be?',
        paragraph: `A good product description should be succinct yet comprehensive. It should be between 250-400 words, featuring relevant keywords to help with search engine optimization and attract buyers. Include essential details like product specifications, target audience, unique features and benefits of the product. Lastly, use carefully chosen design elements to make your description stand out!`
    }
]

export default function ProductDescription() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
    }, []);
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
        <title>Quality Product Description Services Online</title>
        <meta name="description" content="Boost your online presence with top-notch product description writers. Quality content that speaks to your audience and drives sales. Explore our services today!" />
        <link rel="canonical" href="https://www.nspglobalservices.com/content-marketing-services/product-descriptions" />
      </Helmet>
          <div className={style.container1}>
                <img  src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Product Descriptions</h1>
                {/* <p className={style.subtitle}>Sed do eiusmod tempor incididunt ut labore et when the musis dolore magna aliqua.</p> */}
            </div>
            <div className={style.container2}>
                <div className={style.container2div1}>
                <img  src={endImages1} className={style.endImages1} alt="blog" />
                </div>
                <div className={style.container2div2}>
                    <h4 className={style.container2div2_hfour}>Service</h4>
                    <ul>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/seo-content-writing" className={style.container2_atag}>SEO Content</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/guest-blogging" className={style.container2_atag}>Guest Blogging</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/web-copy-writing" className={style.container2_atag}>Web Content</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services/blog-writing" className={style.container2_atag}>Blog Post</Link>
                        </li>
                        <li className={style.container2div2_li}>
                            <Link to="/content-marketing-services" className={style.container2_atag}>Content Marketing</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div3}>
                    <h2>Overview</h2>
                    <p>Welcome to NSP, your premier provider of Product Descriptions Writing Services. In the competitive world of e-commerce, persuasive and engaging product descriptions are crucial for capturing the attention of potential customers and driving conversions.</p>
                    <p>At NSP, we craft compelling and informative product descriptions that showcase your product's unique features, benefits, and value. With our expert product description writers, we help you create captivating content that entices customers and maximizes your sales potential.</p>
                </div>
                <div className={style.container2div4}>
                    <h4 className={style.container2div4_hfour}>Get A Quote</h4>
                    <form action="https://formsubmit.co/nspglobalservices@gmail.com" method="POST" className={style.container2div4_form}>
                        <input placeholder='Your Name' name='name' required className={style.container2div4_input} type="text" />
                        <input placeholder='Your email' name='email' required className={style.container2div4_input} type="text" />
                        <textarea name="text" required className={style.container2div4_textarea} id="" cols="30" rows="10"></textarea>
                        <input type="hidden" name="_template" value="table"></input>
                        <button type='submit' className={style.container2div4_btn}>Submit Now</button>
                    </form>
                </div>
                <div className={style.container2div5}>
                    <h2 className={style.container2div5_hone}>Key Factors</h2>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>In-depth Product Research</h4>
                        </div>
                        <p>Our experienced writers conduct thorough research on your products to gain a deep understanding of their features, specifications, and benefits. We highlight your product's key selling points and unique aspects, ensuring the descriptions are accurate, informative, and compelling.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Persuasive and Engaging Writing</h4>
                        </div>
                        <p>We know the power of persuasive writing in influencing purchasing decisions. Our talented writers utilize captivating language, storytelling techniques, and persuasive copywriting to create product descriptions that engage customers, evoke emotions, and inspire them to take action.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>SEO Optimization</h4>
                        </div>
                        <p>We understand the importance of optimizing product descriptions for search engines. Our writers seamlessly incorporate relevant keywords and phrases into the descriptions, ensuring your products are visible to potential customers actively searching for them. By optimizing the descriptions, we help improve your product's search engine rankings and increase organic traffic to your online store.</p>
                    </div>
                    <div className={style.container2div5_blog}>
                        <div className={style.container2div5_img}>
                            <img src={icon7} alt="icon" />
                            <h4>Customized Tone and Style</h4>
                        </div>
                        <p>We adapt the tone and style of the product descriptions to match your brand identity and target audience. Whether you need informative, elegant, playful, or sophisticated descriptions, our writers have the versatility to create content that resonates with your specific brand voice and appeals to your ideal customers.</p>
                    </div>
                </div>
                <div className={style.container2div6}>
                    <h4 className={style.container2div6_hfour}>Need Help?</h4>
                    <p className={style.container2div6_ptag}>Pabore et dolor mod tempor inci didunt ut labore et dolore magna aliqua nim veniam strud </p>
                    <div className={style.container2div6_icons}>
                        <div className={style.container2div6_icon}>
                            <MdCall />
                        </div>
                        <div>
                            <span>Call Us</span>
                            <p>+123 456 7890</p>
                        </div>
                    </div>
                </div>
                <div className={style.container2div7}>
                <img  src={SEO} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                    <img  src={endImages2} style={{ height: '324px', width: '424px', borderRadius: '8px' }} alt="service" />
                </div>
                <div className={style.container2div8}>
                    <h3>Key Benefits</h3>
                    <ul className={style.container2div8_ul}>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Increased Conversions:</strong>Our compelling product descriptions are designed to drive conversions. By highlighting your products' unique features and benefits engagingly, we help create a sense of desire and urgency in potential customers, increasing the likelihood of them making a purchase.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Enhanced Customer Experience:</strong>Informative and well-crafted product descriptions give customers the information to make informed purchasing decisions. Delivering accurate and detailed descriptions enhances the overall customer experience, reduces uncertainty, and builds trust with your audience.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Improved Search Engine Visibility:</strong>Our SEO-optimized product descriptions help improve your online store's search engine visibility. By incorporating relevant keywords, we increase the chances of your products appearing in search engine results, attracting more organic traffic to your website.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span><strong>Consistent Brand Messaging:</strong>We ensure the product descriptions align with your brand's messaging and values. By delivering consistent and cohesive descriptions, we strengthen your brand identity and establish a strong connection with your customers.</span>
                            </div>
                        </li>
                        <li >
                            <div className={style.container2div8_li}>
                                <img src={arrow} alt="arrow" />
                                <span>Experience the benefits of our professional Product Descriptions Writing Services. Trust NSP to deliver persuasive, engaging, and SEO-optimized content that drives conversions and maximizes the impact of your e-commerce business. Contact us today to discuss your product description needs and how we can support your online success.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.container2div9}>
                    <h4 className={style.container2div9_hfour}>Download Company Profile</h4>
                    <div className={style.container2div9_btn}>
                        <Link className={style.container2div9_atag} to={form} download="Nsp" target='_blank'>Download PDF</Link>
                        <Link className={style.container2div9_atag} to={newpdf} download="NspMainPdf" target='_blank'>Download Word File</Link>
                    </div>
                </div>
                <div className={style.container2div10}>
                    <h3 className={style.container2div10_hthree}>Neat Outcome</h3>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>5350%</span>
                        <span className={style.container2div10_span2}>Increase in website traffic</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>223%</span>
                        <span className={style.container2div10_span2}>Increase in conversion rates</span>
                    </div>
                    <div className={style.container2div10_box}>
                        <span className={style.container2div10_span1}>325%</span>
                        <span className={style.container2div10_span2}>Increase in leads generation</span>
                    </div>
                </div>
            </div>
            {/* container 2 end */}
            <div className={style.container5}>
                <div className={style.container5_div}>
                    <p className={style.container4_para1}>Testimonials</p>
                    <h2 className={style.container4_hone}>What People Say</h2>
                    <p className={style.container4_para2}></p>
                </div>
            </div>
            <div className={style.carousel}>
                <Carousal num={3} />
            </div>
            {/* carosel end */}
           <TrustedCompaniesLogo/>
            <div className={style.FAQS}>
                <div >
                    <img  className={style.faq} src={FAQ} alt="FAQ" />
                </div>
                <div className={style.wrapper}>
                    <h2 className={style.accordion_h2}>Frequently Asked Question</h2>
                    <div className={style.accordion}>
                        {data.map((element, i) => (
                            <div key={element.id}>
                                <div className={style.title_1} style={{ backgroundColor: 'white',height:'90px' }} onClick={() => { toggle(i) }}>
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
        </>
    )
}
