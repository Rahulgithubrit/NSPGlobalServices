import React from 'react'
import quote from './assets/quote-3.png'
import border from './assets/border.png'
// import testimonial from './assets/testimonial-three.png'
import style from './card.module.css'

export default function Card(props) {
    
    return (
        <>
            <div className={style.container_card}>
                <div className={style.card}>
                    <img src={quote}  className={style.quote} alt='quote' />
                    <p className={style.card_para}>{props.statement} </p>
                    <img src={border}  className={style.border} alt="border" />
                    <div className={style.details} >
                        {/* <img src={testimonial} alt="testimonial" /> */}
                        <div>
                            <h4 className={style.card_hfour}>{props.name} </h4>
                            <p className={style.card_para_2}>{props.profession} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
