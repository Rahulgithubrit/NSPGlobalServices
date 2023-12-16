import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousal(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: props.num,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings} >
                <div>
                    <Card statement="NSP has truly transformed our online presence! Their digital marketing expertise, encompassing SEO, Google Ads, and Facebook, has been instrumental in propelling our business to new heights." name="David" />
                </div>
                <div>
                    <Card statement="Right from the start, it was evident that we had found the experts we were searching for. The NSP team's commitment to excellence and strategic approach to online visibility has been a game-changer for us." name="Andrea" />
                </div>
                <div>
                    <Card statement="NSP's SEO services are unparalleled! Their strategic insights and meticulous execution have significantly elevated our website's search engine rankings, driving impressive organic growth " name="Sumeet" />
                </div>
                <div>
                    <Card statement="NSP's Facebook Ads campaign worked wonders for our jewelry website! Their targeted approach not only increased engagement but also delivered an exceptional ROAS, bringing valuable returns to our business " name="Dhirsons" />
                </div>
                <div>
                    <Card statement="Our SaaS platform saw remarkable growth with the help of expert SEO services. The tailored strategies from our digital marketing partner significantly improved our online visibility, bringing in qualified leads and enhancing our market presence " name="Anil" />
                </div>
                <div>
                    <Card statement="Our PPC campaign with a trusted partner yielded exceptional results! The strategic approach and targeted ads not only increased visibility but also generated great returns, proving to be a valuable investment for our business" name="Puneet" />
                </div>
            </Slider>

        </>
    )
}
