import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


export default function Header() {
    const [isOpen, setisOpen] = React.useState(false)

    function handleClick(){
        console.log('Clicked!')
        setisOpen(!isOpen)
    }
    
    return (
        <> 
            <div className="bg-gray-200 flex flex-col items-center">
                <header className="bg-blue-900 w-full px-4 py-3 flex flex-wrap flex-row justify-center border-b-4 border-blue-500 sticky top-0">
                    <div className="max-w-6xl w-full">    
                        <div className="flex items-center justify-between text-white">
                            <Link href="/">
                                <a className="flex items-center my-2 mx-2 ">
                                    <Image
                                        src="/../public/images/logo.png"
                                        alt="name" 
                                        width={175}
                                        height={55}
                                    />
                                </a>
                            </Link>

                            <div className="max-w-md w-full">
                                <form className="px-4">
                                    <label className="hidden" htmlFor="search-form">Search</label>
                                    <input className="bg-grey-lightest border-2 focus:border-orange p-1 rounded-lg shadow-inner w-full" placeholder="Search" type="text"/>
                                        <button className="hidden">Submit</button>
                                </form>
                            </div>

                           <button type="button" className="my-2 mx-2 lg:hidden block" onClick={handleClick}>
                               <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                   <title>menu</title>
                                   {isOpen && (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                    )}
                                    {!isOpen && (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                    )}
                               </svg>
                            </button>
                            
                        </div>
                      
                        <div className="lg:flex lg:w-full lg:max-w-6xl lg:items-center lg:justify-around lg:w-auto w-full w-4" id="menu">
                            <nav className={`lg:flex ${ isOpen? "block": "hidden"}`}>
                                <ul className="whitespace-nowrap lg:flex items-center justify-between text-base text-gray-100 pt-4 lg:pt-0 text-white text-xl">
                                    <li><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-indigo-400" href="about">About Us</a></li>
                                    <li><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-indigo-400" href="hr-finance">HR &amp; Finance</a></li>
                                    <li><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-indigo-400" href="it">Information Technology</a></li>
                                    <li><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-indigo-400" href="communications">Communications</a></li>
                                    <li><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-indigo-400" href="employee-resources">Employee Resources</a></li>
                                    <li><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-indigo-400" href="cfd">Combined Fund Drive</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>           

            
            </div>
        </>  
    )

  }