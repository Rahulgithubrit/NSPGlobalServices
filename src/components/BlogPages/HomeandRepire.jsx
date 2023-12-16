import React, { useEffect } from 'react'
// import img1 from '../assets/shape-7.png'
// import img2 from '../assets/shape-9.png'
// import img3 from '../assets/shape-10.png'
// import img4 from '../assets/shape-2.png'
// import img5 from '../assets/shape-5.png'
import style from './automotive.module.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import BlogCard from '../Pages/BlogCard'
import HomeIMprovement from '../assets/Home & Repair/Home Improvement.png'
import HomeEnergy from '../assets/Home & Repair/Home Energy.png'
import HomeBuilder from '../assets/Home & Repair/Home Builders.png'
import HomeSecurity from '../assets/Home & Repair/Home Security Companies.png'
import HandyMan from '../assets/Home & Repair/Handyman services.png'
import Garage from '../assets/Home & Repair/Garage Doors.png'
import Flooring from '../assets/Home & Repair/Flooring.png'
import Elctrician from '../assets/Home & Repair/Electricians.png'
import DeckBuilder from '../assets/Home & Repair/Deck Builders.png'
import Chimney from '../assets/Home & Repair/Chimney and Masonry.png'
import Bathroom from '../assets/Home & Repair/Bathroom Remodel.png'
import TreeCare from '../assets/Home & Repair/Tree Care.png'
import Roofing from '../assets/Home & Repair/Roofing.png'
import Plumber from '../assets/Home & Repair/Plumbers.png'
import PestControl from '../assets/Home & Repair/Pest Control.png'
import MovingCompanies from '../assets/Home & Repair/Moving Companies.png'
import LandEscaping from '../assets/Home & Repair/Landscaping Company.png'
import CellPhone from '../assets/Home & Repair/Cell Phone Repair.png'
import HAVC from '../assets/Home & Repair/HVAC.png'
import InteriorDesign from '../assets/Home & Repair/Interior Design Services.png'
import LockSmith from '../assets/Home & Repair/locksmith.png'
import GarageDoor from '../assets/Home & Repair/Garage Door Repair.png'
import Grocery from '../assets/Home & Repair/Grocery Delivery Service.png'
import FoodDelivery from '../assets/Home & Repair/Food Delivery Service.png'
import Fence from '../assets/Home & Repair/Fence Installers.png'
import MovingServices from '../assets/Home & Repair/Moving Services.png'
import ComputerRetail from '../assets/Home & Repair/Computer Repair Shop.png'
import BannerImage from '../assets/Automotive/home.png'
import { Helmet } from 'react-helmet';
import restoration from '../assets/Home & Repair/restoration.jpg'
import window from '../assets/Home & Repair/window and doors.jpg'

export default function HomeandRepire() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <Helmet>
                <title>Online Marketing for Home Repair | Grow Your Business</title>
                <meta name="description" content="Drive more customers to your home repair business with our expert digital marketing services. Increase your online visibility and grow your client base today." />
                <link rel="canonical" href="https://www.nspglobalservices.com/industries/home-repair" />
            </Helmet>
            <div className={style.container1}>
                <img src={BannerImage} style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Online Marketing for Home Repair</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
            <div className={style.container2}>
                <div> <BlogCard img={HomeIMprovement} link='/industries/home-repair/home-improvement' catagory='Home Improvement' /></div>
                <div> <BlogCard img={HomeEnergy} link='/industries/home-repair/home-energy' catagory='Home Energy' /></div>
                <div><BlogCard img={HomeBuilder} link='/industries/home-repair/home-builder/seo' catagory='Home Builder' /></div>
                <div> <BlogCard img={HomeSecurity} link='/industries/home-repair/home-security' catagory='Home Security campanies' /></div>
                <div> <BlogCard img={Chimney} link='/industries/home-repair/chimney-masonry' catagory='Chimney And Masonry' /></div>
                <div> <BlogCard img={Bathroom} link='/industries/home-repair/bathroom-remodel' catagory='Bathroom Remodel' /></div>
                <div> <BlogCard img={TreeCare} link='/industries/home-repair/tree-care' catagory='Tree Care' /></div>
                <div> <BlogCard img={LandEscaping} link='/industries/home-repair/landscaping-companies' catagory='Landscaping Companies' /></div>
                <div> <BlogCard img={MovingCompanies} link='/industries/home-repair/moving-companies' catagory='Moving Companies' /></div>
                <div> <BlogCard img={PestControl} link='/industries/home-repair/pest-control' catagory='Pest Control' /></div>
                <div> <BlogCard img={DeckBuilder} link='/industries/home-repair/deck-builders' catagory='Deck Builders' /></div>
                <div> <BlogCard img={Elctrician} link='/industries/home-repair/electricians' catagory='Electricians' /></div>
                <div> <BlogCard img={Flooring} link='/industries/home-repair/flooring' catagory='Flooring' /></div>
                <div> <BlogCard img={Garage} link='/industries/home-repair/garage-doors' catagory='Garage Doors' /></div>
                <div> <BlogCard img={Plumber} link='/industries/home-repair/plumbers' catagory='Plumbers' /></div>
                <div> <BlogCard img={Roofing} link='/industries/home-repair/roofing' catagory='Roofing' /></div>
                <div> <BlogCard img={restoration} link='/industries/home-repair/restoration-companies' catagory='Restoration Companies' /></div>
                <div> <BlogCard img={HAVC} link='/industries/home-repair/hvac' catagory='HVAC' /></div>
                <div> <BlogCard img={GarageDoor} link='/industries/home-repair/garage-door-repair' catagory='Garage Door Repair' /></div>
                <div> <BlogCard img={CellPhone} link='/industries/home-repair/carpet-cleaners' catagory='Cell Phone Repair' /></div>
                <div> <BlogCard img={ComputerRetail} link='/industries/home-repair/computer-retail-shop' catagory='Computer Retail Shop' /></div>
                <div> <BlogCard img={MovingServices} link='/industries/home-repair/moving-services' catagory='Moving Services' /></div>
                <div> <BlogCard img={LockSmith} link='/industries/home-repair/locksmiths' catagory='Locksmith' /></div>
                <div> <BlogCard img={Fence} link='/industries/home-repair/fence-installer' catagory='Fence Installers' /></div>
                <div> <BlogCard img={FoodDelivery} link='/industries/home-repair/food-delivery-services' catagory='Food Delivery Services' /></div>
                <div> <BlogCard img={Grocery} link='/industries/home-repair/grocery-delivery-services' catagory='Grocery Delivery Services' /></div>
                <div> <BlogCard img={window} link='/industries/home-repair/window-door-companies' catagory='Window And Door Companiese' /></div>
                <div> <BlogCard img={InteriorDesign} link='/industries/home-repair/interior-design-services' catagory='Interior Design Services' /></div>
                <div> <BlogCard img={HandyMan} link='/industries/home-repair/handyman-services' catagory='Handyman Services' /></div>
            </div>
        </>
    )
}
