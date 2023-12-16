import React from 'react'
import style from  '../LandingPages/home.module.css'
import {Link } from 'react-router-dom'

export default function HomePageBlogCard(props) {
  return (
   <>
     <div className={style.container_12div2}>
            <img  src={props.blog31} className={style.blog_img} alt="blog" />
            <div >
              <p className={style.blogtitle}> {props.title} {/*Web Development*/}</p>
              <h6 className={style.bloghsix}> {props.heading} {/* We offer Link wide range of services to meet all your digital needs under one roof, providing you with Link seamless and integrated experience.*/}</h6>
              <p className={style.blogptag}> {props.paragraph} {/*Our team stays updated with industry trends and best practices to deliver innovative and effective solutions.*/}</p>
              <Link className={style.blogatag} to={props.link} >Read More</Link>
            </div>
          </div>
   </>
  )
}
