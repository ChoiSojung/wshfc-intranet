import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Layout() {
    
    return (
    <div>

        <aside className="bg-gray-100 w-64 h-screen flex flex-col">
            <div className="px-4 h-10 flex items-center">
                <span className="text-blue pt-4">
                    Quick Links
                </span>
            </div>
            <div className="px-4 flex items-center">
                <ul>
                    <li className="py-1">Attendance</li>
                  
                </ul>
            </div>
        </aside>
    </div>  
      
    )

  }