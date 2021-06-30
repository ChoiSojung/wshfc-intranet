import React from 'react'
import Swiper from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import 'swiper/swiper-bundle.css'

export default function Slider(){
    SwiperCore.use([Navigation, Pagination]);
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    return(
        <div className="swiper-container h-full">
            <div className="swiper-wrapper">
                <div className="swiper-slide"><img src="https://res.cloudinary.com/wshfc/image/upload/v1625078007/PtAngeles-sep2019-6400_l1y5lw.jpg"/></div>
                <div className="swiper-slide"><img src="https://res.cloudinary.com/wshfc/image/upload/v1625078012/Sisters_Haven_family_Spokane_6-19_va3002.jpg"/></div>
                <div className="swiper-slide"><img src="https://res.cloudinary.com/wshfc/image/upload/v1621966138/PtAngeles-sep2019-6081_fol4s3.jpg"/></div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>

    )
}