import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
    { name: 'About', href: 'about', current: true },
    { name: 'HR & Finance', href: 'hr-finance', current: false },
    { name: 'IT', href: 'it', current: false },
    { name: 'Communications', href: 'communications', current: false },
    { name: 'Employee Resources', href: 'employee-resources', current: false },
    { name: 'Combined Fund Drive', href: 'cfd', current: false }
  ]

export default function Header({children, home}) {
    
    return (
    <div>  
        <header className="lg:px-16 px-6 bg-blue-900 h-20 flex flex-1 flex-wrap items-center lg:py-0 py-2">
            <div className="flex-1 flex justify-between items-center">
                
                <Link href="/">
                    <a className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                        <Image
                            src="/../public/images/logo.png"
                            alt="name" 
                            width={175}
                            height={55}
                        />
                    </a>
                </Link>

            </div>
            <div className="flex-1 flex justify-between items-center">
                <form className="w-full px-4">
                    <label className="hidden" htmlFor="search-form">Search</label>
                    <input className="bg-grey-lightest border-2 focus:border-orange p-1 rounded-lg shadow-inner w-full" placeholder="Search" type="text"/>
                        <button className="hidden">Submit</button>
                </form>
            </div>
            

            <label for="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul className="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="about">About</a></li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="hr-finance">HR &amp; Finance</a></li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="it">IT</a></li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="communications">Communications</a></li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="employee-resources">Employee Resources</a></li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="cfd">Combined Fund Drive</a></li>
                    </ul>
                </nav>
                
            </div>


        </header>
    </div>

    )

  }