import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {

    const submitSuggestion = event => {
        event.preventDefault()
    }
    
    return (
        <div>
            <div className="bg-blue-450 py-12 w-full flex flex-col items-center border-t-4 border-gray-450 text-lg text-gray-100">
                <h2 className="font-serif text-2xl mt-4">Send us your suggestions!</h2>
                <form onSubmit={submitSuggestion} className="max-w-xl w-full text-gray-100 mt-4 p-8 md:px-0">
                    <div className="flex flex-col md:flex-row md:-mx-2">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input id="name" name="name" type="text" autoComplete="name" className="bg-gray-600 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" placeholder="Name (optional)">
                        
                        </input>
                    </div>
                    <div className="flex flex-col md:flex-row md:-mx-2">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input id="email" name="email" type="text" autoComplete="email" className="bg-gray-600 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" placeholder="Email (optional)">
                        
                        </input>

                    </div>
                    <div className="flex flex-col md:flex-row md:-mx-2">
                        <label htmlFor="suggestion" className="sr-only">Suggestion</label>
                        <input id="suggestion" name="suggestion" type="textarea" required className="bg-gray-600 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" placeholder="Suggestion">

                        </input>
                    </div>
                    <div className="flex flex-col md:flex-row md:-mx-2">
                        <button type="submit" className="bg-blue-350 mt-4 rounded-lg py-2 px-4 w-full md:mx-2">Submit</button>
                    </div>
                </form>
                
                
            </div>
            <div className="bg-blue-450 w-full text-center pb-8 text-gray-100">
                <p className="text-md">1000 2nd Avenue, Suite 2700, Seattle, WA 98104</p>
                <p className="text-md">office (206) 464-7139 | fax (206) 587-5113 | toll-free (800) 767-4663</p>
            </div>
        </div>
    )

  }