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
            <SwiperSlide><img src="https://res.cloudinary.com/wshfc/image/upload/v1625078007/PtAngeles-sep2019-6400_l1y5lw.jpg"/></SwiperSlide>
            <SwiperSlide><img src="https://res.cloudinary.com/wshfc/image/upload/v1625078012/Sisters_Haven_family_Spokane_6-19_va3002.jpg"/></SwiperSlide>
            <SwiperSlide><img src="https://res.cloudinary.com/wshfc/image/upload/v1621966138/PtAngeles-sep2019-6081_fol4s3.jpg"/></SwiperSlide>

        </Swiper>
    )
}