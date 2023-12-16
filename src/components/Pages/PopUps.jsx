import React from 'react'
import styles from './PopUps.module.css'

function PopUps(props) {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.containerdiv} >
        <div className={styles.title} >
          <h1 className={styles.text}>Claim Your Free SEO Audit Now!</h1>
          <button onClick={props.onClick} className={styles.titlebtn} >X</button>
        </div>
        <div className={styles.formdiv} >
          <form className={styles.form} action="https://formsubmit.co/nspglobalservices@gmail.com" method="POST" >
            <input className={styles.inputs} type="text" name='name' required  placeholder='Your Name' /><br />
            <input className={styles.inputs} type="email" name='email' required placeholder='Email Address' /><br />
            <input className={styles.inputs} type="phone" name='phone' required placeholder='Your phone' /><br />
            <input type="hidden" name="_template" value="table"></input>
            <button type='submit' className={styles.container_1_ptag} >Submit</button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default PopUps;