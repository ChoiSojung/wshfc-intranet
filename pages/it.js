import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import MainWrapper from '../components/MainWrapper'

export default function IT(){
    const [isOpen, setisOpen] = React.useState(false)

    function handleClick(){
        console.log('Clicked!')
        setisOpen(!isOpen)
    }

    return (
        <div>

            <Head>
                <title>WSHFC | Intranet</title>
               
            </Head>

             {/* <--------------- Body --------------> */}
            <div className="bg-gray-300 flex flex-col items-center mb-4 min-h-screen">
                {/* <------------ Header -----------> */}

                <Header></Header>

                <div className="flex flex-col items-center w-full bg-gray-400 shadow-xl">
                    <div className="max-w-6xl mx-4">
                        <div className="flex flex-col justify-center items-center"> 
                            <Link href="/it">
                                <a>
                                    <h1 className="font-serif hover:text-gray-300 hover:border-gray-300 py-2 mt-4 text-3xl text-blue-450 border-b border-blue-450">
                                        Information Technology
                                    </h1>
                                </a>
                            </Link>
                            <p className="text-center py-2 mb-4 text-2xl text-blue-450">
                                Find documents/guidelines for IT related issues.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <--------- End Header ---------> */}


                <MainWrapper>
                    {/* <------------ Page Content ------------> */}
                    <div className="px-6">
                        <p className="font-serif text-2xl mt-4 text-blue-350 font-bold pb-2 border-b-2 border-blue-350">Jump to a section</p>

                        <div className="mt-4 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-2 md:w-1/2">
                                <a href="#policies_equipment">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-gray-400 rounded-lg p-2 hover:bg-gray-500">
                                        <p className="text-md font-bold text-gray-100 text-center">Policies &amp; Equipment</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#training_links">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-gray-400 rounded-lg p-2 hover:bg-gray-500">
                                        <p className="text-md font-bold text-gray-100 text-center">Training &amp; Links</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-2 md:w-1/2">
                                <a href="#facts">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-gray-400 rounded-lg p-2 hover:bg-gray-500">
                                        <p className="text-md font-bold text-gray-100 text-center">Fact Sheets</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#help">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-gray-400 rounded-lg p-2 hover:bg-gray-500">  
                                        <p className="text-md font-bold text-gray-100 text-center">Help</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                    
                        <div className="mt-10 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="h-full flex flex-col items-center md:mx-2">
                                    <Image
                                        src="v1621966145/Spokane-day1-cc-2402_uowdmt.jpg"
                                        alt="spokane-day1" 
                                        width={600}
                                        height={400}
                                    />
                                    <p className="text-md italic">Caption</p>
                                </div>
                            </div>
                            <div className="mt-4 md:w-1/2">
                                <div className="h-full flex flex-col items-center md:mx-2">
                                    <Image
                                        src="v1621966138/PtAngeles-sep2019-6081_fol4s3.jpg"
                                        alt="ptangeles-2019" 
                                        width={600}
                                        height={400}
                                    />
                                    <p className="text-md italic">Caption</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-2xl text-blue-350 text-center" id="policies_equipment">Policies &amp; Equipment</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-600 text-xl text-center">Policies</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Classification Policy</li>
                                            <li>Exempt Banding Policy</li>
                                            <li>Salary Determination</li>
                                            <li>Washington Management Services</li>
                                            <li>Position Description General Service</li>
                                            <li>Position Description</li>
                                            <li>State Employment Application</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-600 text-xl text-center">Equipment</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Classification Policy</li>
                                            <li>Exempt Banding Policy</li>
                                            <li>Salary Determination</li>
                                            <li>Washington Management Services</li>
                                            <li>Position Description General Service</li>
                                            <li>Position Description</li>
                                            <li>State Employment Application</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-2xl text-blue-350 text-center" id="training_links">Training &amp; Links</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-600 text-xl text-center">Training</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Classification Policy</li>
                                            <li>Exempt Banding Policy</li>
                                            <li>Salary Determination</li>
                                            <li>Washington Management Services</li>
                                            <li>Position Description General Service</li>
                                            <li>Position Description</li>
                                            <li>State Employment Application</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-600 text-xl text-center">Links</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Pictorial Guide</li>
                                            <li>About the Commission</li>
                                            <li>New Hire HR Packet</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-2xl text-blue-350 text-center" id="facts">Fact Sheets/How-to</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-600 text-xl text-center">Fact Sheets/How-to</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Pictorial Guide</li>
                                            <li>About the Commission</li>
                                            <li>New Hire HR Packet</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-2xl text-blue-350 text-center" id="help">Need Help?</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-600 text-xl text-center">Help</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <------------ End Page Content ------------> */}
                </MainWrapper>
                            
                <div className="fixed right-2 bottom-5">
                    <ScrollToTop></ScrollToTop>
                </div>

                {/* <----------- Footer -----------> */}
                <div className="w-full">
                    <Footer></Footer>
                </div>
                {/* <---------- End Footer ---------> */}

            </div>
             {/* <--------------- End Body --------------> */}
            
        </div>
    )

}