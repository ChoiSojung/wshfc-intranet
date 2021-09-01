import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

export default function HomeSlider(){
    SwiperCore.use([Navigation, Pagination]);

    return(
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation 
            loop={true}
            pagination={{clickable: true}}
            onSlideChange={()=>console.log('slide change')}
            onSwiper={(swiper)=>console.log(swiper)}
        >
            <SwiperSlide><img src="https://res.cloudinary.com/wshfc/image/upload/v1627069615/Home%20page/Liberty_Bank_opening_r8yfln.jpg" alt="liberty-bank-opening"/></SwiperSlide>
            <SwiperSlide><img src="https://res.cloudinary.com/wshfc/image/upload/v1627069600/Home%20page/PtAngeles-sep2019-6405_f6xrbw.jpg" alt="ptangeles-2019"/></SwiperSlide>
            <SwiperSlide><img src="https://res.cloudinary.com/wshfc/image/upload/v1625078006/Home%20page/Spokane-dayA-cc-0028_mylwpd.jpg" alt="spokane-day"/></SwiperSlide>
        </Swiper>
    )
}