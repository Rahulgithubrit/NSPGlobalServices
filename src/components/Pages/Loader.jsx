import React from 'react'
import style from './Loader.module.css'

function Loader() {
    return (
        <div className={`${style.spinner} ${style.container}`}>
          <div className={style.spinner}></div>
        </div>
      );
}

export default Loader
