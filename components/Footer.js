import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {

    const submitSuggestion = event => {
        event.preventDefault()
    }
    
    return (
        <div>
            <div className="bg-blue-450 py-12 w-full flex flex-col items-center text-lg text-gray-100 shadow-xl">
                <a href="https://portal.wshfc.org/Forms/Suggestion_Box" target="blank" className="hover:text-blue-350"><h2 className="font-serif text-2xl mt-4">Send us your suggestions!</h2></a>
                
                
            </div>
            <div className="bg-blue-450 w-full text-center pb-8 text-gray-100">
                <p className="text-md">1000 2nd Avenue, Suite 2700, Seattle, WA 98104</p>
                <p className="text-md">office (206) 464-7139 | fax (206) 587-5113 | toll-free (800) 767-4663</p>
            </div>
        </div>
    )

  }