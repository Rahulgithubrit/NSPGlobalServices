import React from 'react'
import './accordation.css'
import {GoPlus} from 'react-icons/go'


export default function Accordation() {

    return (
        <>
            <ul id='accordion'>
                <li>
                    <label htmlFor="first"><GoPlus/>Our Mission & Vision </label>
                    <input type='radio' name='accoedion' id='first' checked />
                    <div className='content'>
                        <p className='p_tag'>
                        At NSP, our primary objective is to deliver unparalleled digital marketing services while simultaneously making a positive impact on our planet. With an unwavering commitment to sustainability, we pledge to plant a tree for every sale we make, ensuring our contribution to a greener future. Furthermore, we are resolute in our pursuit of innovation and continual enhancement of our services, always striving to exceed the expectations of our esteemed clients. With passion and dedication, we aim to help businesses succeed in the ever-evolving world of digital marketing.
                        </p>
                    </div>
                </li>
                <li>
                    <label htmlFor="second"><GoPlus/>Work Eticks & Complimency</label>
                    <input type='radio' name='accoedion' id='second' />
                    <div className='content'>
                        <p className='p_tag'>
                        Through comprehensive training, valuable resources, and unwavering support, our core objective revolves around empowering individuals to assume full ownership of their work and foster a relentless pursuit of excellence every day.
                        </p>
                    </div>
                </li>
                <li>
                    <label htmlFor="third"> <GoPlus/>Strategy to Achieve Goals</label>
                    <input type='radio' name='accoedion' id='third' />
                    <div className='content'>
                        <p className='p_tag'>
                        Our primary aim is to equip our clients with a time-tested strategy that guides them through the intricate journey of attaining their objectives. In a steadfast commitment to comprehending their distinctive needs and preferences, we diligently craft personalized solutions that harmonize with their aspirations. Leveraging our expertise, profound knowledge, and unwavering dedication to excellence, we aspire to become the trusted partner of choice for those pursuing triumph.
                        </p>
                    </div>
                </li>
            </ul>
        </>
    )
}
