import React from 'react'
import Swiper from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import 'swiper/swiper-bundle.css'

export default function Slider({children}){
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
                {children.map((child)=> (
                    <div className="swiper-slide"><img src={child}/></div>
                ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>

    )
}