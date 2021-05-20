import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Glide from '@glidejs/glide'


export default function Carousel(){
  
new Glide('.glide',{
    peek:50,
    perView:2,
    type:'carousel'
})
    
    return (
        <div className="glide">
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                    Prev
                </button>
            </div>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide">0</li>
                    <li className="glide__slide">1</li>
                    <li className="glide__slide">2</li>
                </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                    Next
                </button>
            </div>
        </div>

    )
}