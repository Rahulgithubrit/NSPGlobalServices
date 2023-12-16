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
import Alternative from '../assets/Healthcare/Alternative Medicine.png'
import Audiology from '../assets/Healthcare/Audiology.png'
import Biotechnolgy from '../assets/Healthcare/Biotechnology.png'
import Cardiology from '../assets/Healthcare/Cardiology.png'
// import Chiroprector from '../assets/Healthcare/Chiropractors.png'
import Dentists from '../assets/Healthcare/Dentists.png'
import Dermatology from '../assets/Healthcare/Dermatology.png'
import DoctorsOnDemand from '../assets/Healthcare/Doctor on Demand.png'
import DoctorsOffices from '../assets/Healthcare/Doctors Offices & Medical Practices.png'
import EHR from '../assets/Healthcare/EHR Companies.png'
import EarNose from '../assets/Healthcare/Ear, Nose, & Throat Doctors.png'
import Fertility from '../assets/Healthcare/Fertility Clinics.png'
import MedicalEquipment from '../assets/Healthcare/Medical Equipment Companies.png'
import MedicalImagining from '../assets/Healthcare/Medical Imaging and Radiology.png'
import MentalBevahiour from '../assets/Healthcare/Mental and Behavioral Health.png'
import Nutritinists from '../assets/Healthcare/Nutritionists and Dieticians.png'
import OBGYN from '../assets/Healthcare/OB-GYN.png'
import OccupationalTharepy from '../assets/Healthcare/Occupational Therapy.png'
import Oncologists from '../assets/Healthcare/Oncologists.png'
import Optometrists from '../assets/Healthcare/Optometrists.png'
import OrthDontists from '../assets/Healthcare/Orthodontists.png'
import Orthopedic from '../assets/Healthcare/Orthopedic.png'
import OutPatient from '../assets/Healthcare/Outpatient Care Centers.png'
import PersonalProtective from '../assets/Healthcare/Personal Protective Equipment.png'
import PhysicalTherapy from '../assets/Healthcare/Physical Therapy.png'
import Physicians from '../assets/Healthcare/Physicians.png'
import PlasticSurgery from '../assets/Healthcare/Plastic Surgery.png'
import Podiatory from '../assets/Healthcare/Podiatry.png'
import Psychiatrists from '../assets/Healthcare/Psychiatrists.png'
import Pharmacutical from '../assets/Healthcare/Pharmacutical.jpg'
import uroclogist from '../assets/Healthcare/Uroclogist (1).jpg'
import Speech from '../assets/Healthcare/speech.jpg'
import BannerImage from '../assets/Automotive/health.png'
import counseler from '../assets/Healthcare/counseler.jpg'
import nursing from '../assets/Healthcare/nursinghomes.jpg'
import { Helmet } from 'react-helmet';


export default function MedicalandHealth() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <>
     <Helmet>
        <title>Strategic Digital Marketing for Medical Health</title>
        <meta name="description" content="Fuel your Medical Health brand's success with our tailored digital marketing services. From social media to SEO, we've got the strategies to amplify your online presence and drive growth." />
        <link rel="canonical" href="https://www.nspglobalservices.com/industries/medical-health" />
      </Helmet>
     <div className={style.container1}>
                <img src={BannerImage}  style={{ width: '100%', height: '90%', filter: 'blur(0px)' }} alt="" />
                <h1 className={style.title}>Digital Marketing Services for Medical Health</h1>
                {/* <p className={style.subtitle}>Boost Your Ecommerce Business with Powerful SEO Strategies</p> */}
            </div>
      <div className={style.container2}>
        <div> <BlogCard img={Alternative} link='/industries/medical-health/alternative-medicine' catagory='Alternative Medicine' /></div>
        <div> <BlogCard img={Audiology} link='/industries/medical-health/audiology' catagory='Audiology' /></div>
        <div> <BlogCard img={Biotechnolgy} link='/industries/medical-health/bio-technology' catagory='Biotechnology' /></div>
        <div><BlogCard img={Cardiology} link='/industries/medical-health/cardiology' catagory='Cardiology' /></div>
        <div><BlogCard img={Cardiology} link='/industries/medical-health/cardiology' catagory='Cardiology' /></div>
        <div> <BlogCard img={Fertility} link='/industries/medical-health/fertility-clinics' catagory='Fertility Clinics' /></div>
        <div> <BlogCard img={Dentists} link='/industries/medical-health/dentists' catagory='Dentists' /></div>
        <div> <BlogCard img={Dermatology} link='/industries/medical-health/dermatology' catagory='Dermatology' /></div>
        <div> <BlogCard img={DoctorsOffices} link='/industries/medical-health/doctors-offices' catagory='Doctors Offices & Medical Planning' /></div>
        <div> <BlogCard img={EarNose} link='/industries/medical-health/ear-nose-throat-doctors' catagory='Ear, Nose & Throat Doctors ' /></div>
        <div> <BlogCard img={EHR} link='/industries/medical-health/ehr-companies' catagory='EHR Companies' /></div>
        <div> <BlogCard img={MedicalEquipment} link='/industries/medical-health/chiropractors' catagory='Chiropractors' /></div>
        <div> <BlogCard img={MedicalImagining} link='/industries/medical-health/medical-imaging' catagory='Medical Imagining Radiology' /></div>
        <div> <BlogCard img={MentalBevahiour} link='/industries/medical-health/mental-behavioral-health' catagory='Mental & Behavioral Health' /></div>
        <div> <BlogCard img={Nutritinists} link='/industries/medical-health/nutritionists-dieticians' catagory='Nutritionists & Dieticians' /></div>
        <div> <BlogCard img={OBGYN} link='/industries/medical-health/ob-gyn' catagory='OB-GYN' /></div>
        <div> <BlogCard img={OccupationalTharepy} link='/industries/medical-health/occupational-therapy' catagory='Occupational Therapy' /></div>
        <div> <BlogCard img={Oncologists} link='/industries/medical-health/oncologists' catagory='Oncologists' /></div>
        <div> <BlogCard img={Optometrists} link='/industries/medical-health/optometrists' catagory='Optometrists' /></div>
        <div> <BlogCard img={OrthDontists} link='/industries/medical-health/orthodontists' catagory='Orthodontists' /></div>
        <div> <BlogCard img={Orthopedic} link='/industries/medical-health/orthopedic' catagory='Orthopedic' /></div>
        <div> <BlogCard img={OutPatient} link='/industries/medical-health/rehab-addiction-treatment' catagory='Outpatient Care Centers' /></div>
        <div> <BlogCard img={PersonalProtective} link='/industries/medical-health/personal-protective' catagory='Personal Protective Equipment' /></div>
        <div> <BlogCard img={Pharmacutical} link='/industries/medical-health/pharmaceutical-companies' catagory='Pharmaceutical' /></div>
        <div> <BlogCard img={PhysicalTherapy} link='/industries/medical-health/telehealth' catagory='Physical Therapy' /></div>
        <div> <BlogCard img={Physicians} link='/industries/medical-health/hospice' catagory='Physicians' /></div>
        <div> <BlogCard img={PlasticSurgery} link='/industries/medical-health/plastic-surgery' catagory='Plastic Surgery' /></div>
        <div> <BlogCard img={Podiatory} link='/industries/medical-health/podiatry' catagory='Podiatry' /></div>
        <div> <BlogCard img={Psychiatrists} link='/industries/medical-health/psychiatrists' catagory='Psychiatrists' /></div>
        <div> <BlogCard img={Speech} link='/industries/medical-health/speech-therapists' catagory='Speech Therapists' /></div>
        <div> <BlogCard img={uroclogist} link='/industries/medical-health/urologists' catagory='Urologists' /></div>
        <div> <BlogCard img={counseler} link='/industries/medical-health/counselor' catagory='Counselor And Therapist' /></div>
        <div> <BlogCard img={nursing} link='/industries/medical-health/nursing-homes' catagory='Nursing Homes' /></div>
        <div> <BlogCard img={DoctorsOnDemand} link='/industries/medical-health/hospitals-healthcare' catagory='Doctor On Demand' /></div>
      </div>
    </>
  )
}
