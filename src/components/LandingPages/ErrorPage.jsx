import React from 'react'
import styles from './Error.module.css'
import error from '../assets/Home/Copy of Untitled (1200 × 1080px)/3.png'

function ErrorPage() {
  return (
    <>
      <div className={styles.container} >
        <img src={error} className={styles.container} alt="error" />
      </div>
    </>
  )
}

export default ErrorPage;
