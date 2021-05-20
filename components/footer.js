import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    
    return (
        <> 
            <div className="bg-gray-200 flex flex-col items-center">
                <div className="bg-blue-900 w-full px-4 py-3 flex justify-center border-t-4 border-blue-500">
                    <div className="max-w-6xl w-full">
                        <div className="flex flex-col justify-between items-center text-white">
                            <p className="text-md text-white">1000 2nd Avenue, Suite 2700, Seattle, WA 98104</p>
                            <p className="text-md text-white">office (206) 464-7139 | fax (206) 587-5113 | toll-free (800) 767-4663</p> 
                        </div>
                        
                    </div>
                </div>

            </div>
        </>  
    )

  }