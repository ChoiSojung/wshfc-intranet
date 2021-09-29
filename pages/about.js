import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import MainWrapper from '../components/MainWrapper'


export default function About(){
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

                <div className="flex flex-col items-center w-full bg-red-350 shadow-xl">
                    <div className="max-w-6xl m-2">
                        <div className="flex flex-col justify-center items-center"> 
                            <Link href="/about">
                                <a>
                                    <h1 className="font-serif hover:text-gray-300 hover:border-gray-300 text-2xl text-blue-350 border-b border-blue-350">
                                        About Us
                                    </h1>
                                </a>
                            </Link>
                            <p className="text-center py-2 text-xl text-blue-350">
                                <i><b>NEW!</b></i> TBD
                            </p>
                        </div>
                    </div>
                </div>
                {/* <--------- End Header ---------> */}
                <MainWrapper>
                    {/* <------------ Page Content ------------> */}
                    <div className="px-6">
                        <p className="font-serif text-xl mt-2 text-blue-350 font-bold pb-2 border-b-2 border-blue-350">Jump to a section</p>

                        <div className="mt-2 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-2 md:w-1/2">
                                <a href="#commission">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-red-350 rounded-lg p-2 hover:bg-yellow-600">
                                        <p className="font-bold text-sm text-blue-350 text-center">The Commission</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#organization">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-red-350 rounded-lg p-2 hover:bg-yellow-600">
                                        <p className="font-bold text-sm text-blue-350 text-center">Organization</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    
                        <div className="mt-5 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="h-full flex flex-col items-center md:mx-2">
                                    <Image
                                        src="v1627069593/About%20page/Spokane-dayA-cc-1364_w7vqm0.jpg"
                                        alt="spokane-day" 
                                        width={600}
                                        height={400}
                                    />
                                    <p className="text-sm italic"></p>
                                </div>
                            </div>
                            <div className="mt-4 md:w-1/2">
                                <div className="h-full flex flex-col items-center md:mx-2">
                                    <Image
                                        src="v1621966138/About%20page/PtAngeles-sep2019-6081_fol4s3.jpg"
                                        alt="ptangeles-2019" 
                                        width={600}
                                        height={400}
                                    />
                                    <p className="text-sm italic"></p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-450 mt-10 p-2 border-2 border-gray-400">
                            <h2 className="text-xl text-blue-350 text-center" id="commission">The Commission</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-350 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-yellow-600 text-center">History</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31642&dbid=0&repo=WSHFC"><li>Mission/Values/Vision</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Commission Enabling Legislation</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>20 year report</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>30 year look back</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-350 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-yellow-600 text-lg text-center">Info Library</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Acronyms and Commonly Used Words</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Tax Credit Program</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Homeownership</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Sustainable Energy Trust (SET)</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Beginning Farmer/Rancher</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>501c3 Bonds</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-xl text-blue-350 text-center" id="organization">Organization</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-350 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-yellow-600 text-lg text-center">Internal</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Division Organizational Chart</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Safety Committee</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Sustainable Practices Plan &amp; Green Committee</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Executive Management Team (EMT) Description and Meeting Notes</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Administration Managment Team (AMT) Description and Meeting Notes</li></a>                              
                                            <a className="hover:underline text-blue-450" src="#"><li>Data Analytics Team (DAT) Description and Meeting Notes</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Project Watchlist Procedure (PROWL)</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-350 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-yellow-600 text-lg text-center">Commissioner/Board Meetings</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Link to Commissioners page on WSHFC website</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Commissioner Relations</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Commission Meeting Packets/Agendas</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Public Hearings and Meeting Notices</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Commission Agenda Sample</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Commissioner Time Record</li></a>
                                        </ul>
                                        
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