import React from 'react'
import style from './blogcard.module.css'
import {Link} from 'react-router-dom'

export default function BlogCard(props) {
  return (
    <>
    <div className={style.container1}>
    <div className={style.container_img}>
        <Link to={props.link}>
            <img src={props.img}  className={style.blogcard_img} alt="img" />
        </Link>
    </div>
    <div className={style.container_title}>
    <p className={style.container_ptag}>{props.catagory}</p>
    <Link to={props.link} className={style.link} >Read More</Link>
    </div>
    </div>
    </>
  )
}
