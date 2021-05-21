import React, { useEffect, useState } from 'react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 500){
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <div className="scroll-to-top">
            {isVisible &&
                <div onClick={scrollToTop}>
                    <button className="rounded-lg bg-blue-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg></button>
                </div>}
        </div>
    )
}