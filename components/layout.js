import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Sidenav from './sidenav'

const navigation = [
    { name: 'About', href: '/', current: true },
    { name: 'HR & Finance', href: 'hr-finance', current: false },
    { name: 'IT', href: '/', current: false },
    { name: 'Communications', href: '/', current: false },
    { name: 'Employee Resources', href: '/', current: false },
    { name: 'Combined Fund Drive', href: '/', current: false }
  ]

export default function Layout({children, home}) {
    
    return (
    <div>
        <body className="antialiased bg-gray-200">
            
            <header className="lg:px-16 px-6 bg-blue-900 h-20 flex flex-wrap items-center lg:py-0 py-2">
                <div className="flex-1 flex justify-between items-center">
                    
                    <Link href="/">
                        <a className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                            <Image
                                src="/../public/images/logo2.png"
                                alt="name" 
                                width={175}
                                height={55}
                            />
                        </a>
                    </Link>

                </div>
                <div className="flex-1 flex justify-between items-center">
                    <form className="w-full px-4">
                        <label className="hidden" for="search-form">Search</label>
                        <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text"/>
                            <button className="hidden">Submit</button>
                    </form>
                </div>
             

                <label for="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                    <nav>
                        <ul className="lg:flex items-center justify-between text-base text-white font-serif font-semibold text-3x1 pt-4 lg:pt-0">
                        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">About</a></li>
                        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="hr-finance">HR &amp; Finance</a></li>
                        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">IT</a></li>
                        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="#">Communications</a></li>
                        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="#">Employee Resources</a></li>
                        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="#">Combined Fund Drive</a></li>
                        </ul>
                    </nav>
                   
                </div>
  

            </header>
            <Sidenav></Sidenav>
            <div className="px-4">
                <div className="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16">
                    <h1 className="text-2xl font-medium mb-2">Let's Build: With Tailwind CSS</h1>
                    <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">Responsive Navbar</h2>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, 
                    odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.
                  
                    <span>
                        
                        {children}
                    </span>

                </div>
                
            </div>
        </body>
    </div>  
      
    )

  }