import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


export default function Header() {

    const [isOpen, setisOpen] = React.useState(false)

    function handleClick(){
        console.log('Clicked!')
        setisOpen(!isOpen)
    }

    return(
        <div className="bg-blue-450 w-full px-4 py-3 flex justify-center items-center">
            <div className="max-w-6xl w-full">


                <div className="flex items-center justify-between">
                    <Link href="/">
                        <a>
                            <Image
                                src="v1621966122/logo_agc8oo.png"
                                alt="wshfc" 
                                width={150}
                                height={45}
                            />
                        </a>
                    </Link>
                    <div className="max-w-md w-1/6">
                        <form action="https://karpathos.wshfc.org/FederatedSearch/" target="_blank" className="px-4 hidden md:block">
                            <div className="relative flex w-full flex-wrap items-stretch">
                                <button className="bg-red-350 text-gray-700 text-lg relative rounded-lg border-2 focus:border-grey-200 rounded-lg shadow-inner w-full hover:text-white">
                                    Search here
                                </button>
                            </div>
                        </form>
                        {/* <div className="px-4 hidden md:block">
                            <div className="relative flex w-full flex-wrap items-stretch">
                                <div className="h-full text-gray-900 absolute right-0 pr-4 -py-0">
                                    <button onclick="https://karpathos.wshfc.org/FederatedSearch/" className="bg-red-350 px-4 rounded-full border-2 focus:border-grey-200 hover:bg-blue-350 hover:text-white font-serif">
                                        Search here
                                    </button>
                                </div>
                            </div>
                        </div> */}
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

                <div className="lg:flex lg:w-full lg:max-w-6xl md:max-w-6xl lg:items-center lg:justify-center lg:w-auto w-full" id="menu">
                    <nav className={`lg:flex ${ isOpen? "block": "hidden"}`}>
                        <ul className="font-serif whitespace-nowrap lg:flex items-center justify-between text-base lg:pt-0 text-gray-100 text-xl">
                            <li><Link href="/"><a className="inline-block lg:p-4 px-0 block border-b-2 border-transparent hover:border-blue-400">Home</a></Link></li>
                            <li><Link href="/hr-finance"><a className="inline-block lg:p-4 px-0 block border-b-2 border-transparent hover:border-blue-400">HR/Finance</a></Link></li>
                            <li><Link href="/it"><a className="inline-block lg:p-4 px-0 block border-b-2 border-transparent hover:border-blue-400">IT</a></Link></li>
                            <li><Link href="/communications"><a className="inline-block lg:p-4 px-0 block border-b-2 border-transparent hover:border-blue-400">Communications</a></Link></li>
                            <li><Link href="/employee-resources"><a className="inline-block lg:p-4 px-0 block border-b-2 border-transparent hover:border-blue-400">Employee Resources</a></Link></li>
                            <li><Link href="/cfd"><a className="inline-block lg:p-4 px-0 block border-b-2 border-transparent hover:border-blue-400">Combined Fund Drive</a></Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )

  }