import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    
    return (
        <div>
            <div className="bg-blue-900 py-12 mt-12 w-full flex flex-col items-center border-t-4 border-blue-500 text-lg text-gray-100">
                <h2 className="font-bold text-xl mt-4">Send us your suggestions!</h2>
                <form className="max-w-xl w-full text-gray-100 mt-4 p-8 md:px-0" action="#" method="POST">
                    <div className="flex flex-col md:flex-row md:-mx-2">
                        <label htmlFor="name" className="sr-only"></label>
                        <input id="name" name="name" type="text" autoComplete="name" className="bg-gray-600 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" placeholder="Name (optional)">
                        
                        </input>
                    </div>
                    <div className="flex flex-col md:flex-row md:-mx-2">
                        <label htmlFor="email" className="sr-only"></label>
                        <input id="email" name="email" type="text" autoComplete="email" className="bg-gray-600 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" placeholder="Email (optional)">
                        
                        </input>

                    </div>
                    <div className="flex flex-col md:flex-row md:-mx-2">
                        <label htmlFor="suggestion" className="sr-only"></label>
                        <input id="suggestion" name="suggestion" type="text" required className="bg-gray-600 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" placeholder="Suggestion">

                        </input>
                    </div>
                    <div className="flex flex-col md:flex-row md:-mx-2">
                        <button type="submit" className="bg-blue-500 mt-4 rounded-lg py-2 px-4 w-full md:mx-2">Submit</button>
                    </div>
                </form>
            </div>
            <div className="bg-blue-900 w-full text-center pb-8 text-gray-100">
                <p className="text-md">1000 2nd Avenue, Suite 2700, Seattle, WA 98104</p>
                <p className="text-md">office (206) 464-7139 | fax (206) 587-5113 | toll-free (800) 767-4663</p>
            </div>
        </div>
    )

  }