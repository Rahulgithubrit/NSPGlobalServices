import React from 'react'
import { useState, useEffect } from 'react'

export default function BackToTop() {
    const [scrolltotop, setScrolltotop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScrolltotop(true)
            }
            else {
                setScrolltotop(false)
            }
        })
    })
    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }
    return (
        <div>{scrolltotop && (<button style={{ position: 'fixed', bottom: '80px', right: '35px', height: '50px', width: '50px', fontSize: '50px', zIndex: '5', cursor: 'pointer' }} onClick={scrollup}>^</button>)}</div>
    )
}
