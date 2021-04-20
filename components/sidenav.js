import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Layout({children, home}) {
    
    return (
    <div>
        <aside className="bg-white w-64 min-h-screen flex flex-col">
            <div className="bg-white border-r border-b px-4 h-10 flex items-center">
                <span className="text-blue py-2">
                    Quick Links
                </span>
            </div>
            <div className="px-4 border-b flex items-center">
                <ul>
                    <li className="py-1">Attendance</li>
                    <li className="py-1">Leave</li>
                    <li className="py-1">Staff Pictorial Guide</li>
                    <li className="py-1">Employee Self Service</li>
                    <li className="py-1">WSHFC</li>
                    <li className="py-1">WHEFA</li>
                    <li className="py-1">TSA</li>
                </ul>
            </div>
        </aside>
    </div>  
      
    )

  }