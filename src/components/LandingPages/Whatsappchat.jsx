import React from 'react'
import icon from '../assets/whatsappchat/WhatsApp.svg.webp'

function Whatsappchat() {
  return (
    <div style={{position:'fixed',bottom:'20px',left:'20px',zIndex:'7'}}>
        <a href="https://wa.me/919717244643" target='_blank' rel="noreferrer" >
      <img src={icon} alt="whatsapp" style={{width:'70px'}} />
      </a>
    </div>
  )
}

export default Whatsappchat
