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
import Dance from '../assets/fitness/Dance Studios.png'
import Ballet from '../assets/fitness/Ballet schools.png'
import Excersice from '../assets/fitness/Exercise Equipment.png'
import FitnesCenter from '../assets/fitness/Fitness centers.png'
import Gymnastics from '../assets/fitness/Gymnastics schools.png'
import MedicalSpa from '../assets/fitness/Medical Spa.png'
import Nutrinists from '../assets/fitness/Nutritionists.png'
import PersonalTrainer from '../assets/fitness/Personal Trainers.png'
import SwimmingSchools from '../assets/fitness/Swimming schools.png'
import YogaStudios from '../assets/fitness/Yoga Studios.jpg'
import Acpunchurist from '../assets/fitness/Acupunchurist.jpg'
import MartialArt from '../assets/fitness/MartialArts.jpg'
import Pilates from '../assets/fitness/Pilates studios.png'
import BannerImage from '../assets/Automotive/fitnees.png'
import { Helmet } from 'react-helmet';

export default function Fitness() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
    <Helmet>
        <title>Strategic Digital Marketing for Fitness Industries</title>
        <meta name="description" content="Fuel your fitness brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/fitness" />
      </Helmet>
     <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Fitness Industries</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
        <div> <BlogCard img={Dance} link='/industries/fitness/dance-studios' catagory='Dance Studios' /></div>
        <div> <BlogCard img={Excersice} link='/industries/fitness/exercise-equipment-companies' catagory='Exercise Equipment Companies' /></div>
        <div> <BlogCard img={PersonalTrainer} link='/industries/fitness/personal-trainer' catagory='Personal Trainers' /></div>
        <div><BlogCard img={YogaStudios} link='/industries/fitness/yoga-studios' catagory='Yoga Studios' /></div>
        <div> <BlogCard img={MedicalSpa} link='/industries/fitness/medical-spa' catagory='Medical Spa' /></div>
        <div> <BlogCard img={FitnesCenter} link='/industries/fitness/fitness-centers' catagory='Fitness Centers' /></div>
        <div > <BlogCard img={MartialArt} link='/industries/fitness/martial-arts-schools' catagory='Martial arts Schools' /></div>
        <div> <BlogCard img={Ballet} link='/industries/fitness/ballet-schools' catagory='Ballet Schools' /></div>
        <div> <BlogCard img={Gymnastics} link='/industries/fitness/gymnastics-schools' catagory='Gymnastics Schools' /></div>
        <div> <BlogCard img={SwimmingSchools} link='/industries/fitness/swimming-schools' catagory='Swimming Schools' /></div>
        <div> <BlogCard img={Nutrinists} link='/industries/fitness/nutritionists' catagory='Nutritionists' /></div>
        <div> <BlogCard img={Pilates} link='/industries/fitness/pilates-studios' catagory='Pilates Studios' /></div>
        <div> <BlogCard img={Acpunchurist} link='/industries/fitness/acupuncturists' catagory='Acupuncturists' /></div>
      </div>
    </>
  )
}
