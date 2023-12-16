import React from 'react'
import style from './all.module.css'
import img1 from '../assets/portfolio-1.png'
import img2 from '../assets/portfolio-2.png'
import img3 from '../assets/portfolio-3.png'
import img4 from '../assets/portfolio-4.png'
import img5 from '../assets/portfolio-5.png'
import img6 from '../assets/portfolio-6.png'

export default function All() {
  return (
    <>
    <div className={style.container1}>
      <div className={style.div1}>
       <img src={img1} className={style.img1} alt="img" />
       </div>
       <div className={style.div2}>
       <img src={img2} className={style.img2} alt="img" />
       </div>
       <div className={style.div3}>
       <img src={img3} className={style.img3} alt="img" />
       </div>
       <div className={style.div4}>
       <img src={img4} className={style.img4} alt="img" />
       </div>
       <div className={style.div5}>
       <img src={img5} className={style.img5} alt="img" />
       </div>
       <div className={style.div6}>
       <img src={img6} className={style.img6} alt="img" />
       </div>
    </div>
    </>
  )
}
