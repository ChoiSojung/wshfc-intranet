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
                    <div className="max-w-md w-1/3">
                        <form className="px-4 hidden md:block">
                            <div className="relative flex w-full flex-wrap items-stretch">
                                <input type="text" placeholder="What are you looking for?" className="bg-red-350 md:placeholder-gray-800 placeholder-gray-800 text-gray-800 relative rounded-lg border-2 focus:border-grey-200 p-1 rounded-lg shadow-inner w-full"/>
                                <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-900 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                    <svg className="text-gray-900 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px"><path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" /></svg>
                                </span>
                            </div>
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