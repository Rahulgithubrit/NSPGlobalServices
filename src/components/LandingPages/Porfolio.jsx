import React, { useEffect, useState } from 'react'
import img1 from '../assets/shape-7.png'
import img2 from '../assets/shape-9.png'
import img3 from '../assets/shape-10.png'
import img4 from '../assets/shape-2.png'
import img5 from '../assets/shape-5.png'
import style from './portfolio.module.css'
import AOS from 'aos'
import "aos/dist/aos.css";
import All from '../portfolio_component/All'
import Development from '../portfolio_component/Development'
import Marketing from '../portfolio_component/Marketing'
import Photography from '../portfolio_component/Photography'
import WebDesign from '../portfolio_component/WebDesign'

export default function Porfolio() {
    useEffect(function () {
        AOS.init({ duration: 2000 });
    }, []);
    const [logged, setLogged] = useState(1)
    const Alltoggle = () => {
        setLogged(1);
    }
    const WebDesigntoggle = () => {
        setLogged(2);
    }
    const Developmenttoggle = () => {
        setLogged(3);
    }
    const Marketingtoggle = () => {
        setLogged(4);
    }
    const Photographytoggle = () => {
        setLogged(5);
    }
    return (
        <>
            <div className={style.container1}>
                <div className={style.img1} data-wow-duration="1s" data-wow-delay=".1s" >
                    <img src={img1} alt='shape' data-aos='fade-up' />
                </div>
                <div className={style.img2} data-wow-duration="1s" data-wow-delay=".1s" data-aos='fade-up'>
                    <img src={img2} alt='shape' />
                </div>
                <div className={style.img3} data-wow-duration="1.5s" data-wow-delay=".1s" data-aos='fade-up'>
                    <img src={img3} alt='shape' />
                </div>
                <div className={style.img4}>
                    <img src={img4} alt='shape' />
                </div>
                <div className={style.img5}>
                    <img src={img5} alt='shape' />
                </div>
                <h1 className={style.title}>Portfolio Masonry</h1>
                <p className={style.subtitle}>Sed do eiusmod tempor incididunt ut labore et when the musis dolore magna aliqua.</p>
            </div>
            {/* end */}
            <div className={style.container2}>
                <div className={style.container2_div}>
                    <button className={style.container2_btn} style={logged === 1 ? { color: 'blue' } : { color: 'black' }} onClick={Alltoggle}>All</button>
                    <button className={style.container2_btn} style={logged === 2 ? { color: 'blue' } : { color: 'black' }} onClick={WebDesigntoggle}>Web Design</button>
                    <button className={style.container2_btn} style={logged === 3 ? { color: 'blue' } : { color: 'black' }} onClick={Developmenttoggle}>Development</button>
                    <button className={style.container2_btn} style={logged === 4 ? { color: 'blue' } : { color: 'black' }} onClick={Marketingtoggle}>Marketing</button>
                    <button className={style.container2_btn} style={logged === 5 ? { color: 'blue' } : { color: 'black' }} onClick={Photographytoggle}>Photography</button>
                </div>
                <div className={style.container3}>
                    {/* set useState value as 1,2,3 */}
                    {logged === 1 ? <All /> : logged === 2 ? <WebDesign /> : logged === 3 ? <Development /> : logged === 4 ? <Marketing /> : <Photography />}
                    {/* logged==1?<All/>:logged==2?<webdevelopment/>:logged==3?<Marketing/> */}
                </div>
                <a href="" className={style.container2atag}>Load More</a>
            </div>
        </>
    )
}
