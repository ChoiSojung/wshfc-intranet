import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

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
            <div className="bg-blue-350 flex flex-col items-center">
                {/* <------------ Header -----------> */}

                <Header></Header>

                <div className="flex flex-col items-center w-full bg-gray-400">
                    <div className="max-w-6xl mx-4">
                        <div className="flex flex-col justify-center items-center"> 
                            <Link href="/it">
                                <a>
                                    <h1 className="font-serif hover:text-gray-300 hover:border-gray-300 py-2 mt-4 text-3xl text-blue-450 border-b border-blue-450">
                                        Information Technology
                                    </h1>
                                </a>
                            </Link>
                            <p className="text-center py-2 mb-4 text-xl text-blue-450">
                                Find documents/guidelines for IT related issues.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <--------- End Header ---------> */}


                <div className="max-w-7xl w-full flex justify-center bg-gray-300 shadow-xl">
                    <div className="flex flex-row w-full md:flex-row max-h-screen">
                         {/* <--------------- Start Left Panel --------------> */}
                        <div className="w-3/12 flex flex-col items-center mt-10 border-r-2 border-gray-300 px-2 mx-2 hidden md:block">
                            <div className="flex flex-col items-center justify-center w-full">
                                <div className="flex items-center justify-center mt-4">
                                    <a href="https://www.soundtransit.org/" target="blank">
                                        <Image 
                                            src="v1621966238/sound_transit_ajgfld.svg"
                                            alt="sound_transit" 
                                            width={155}
                                            height={25}
                                        />
                                    </a>
                                </div>

                                <div className="flex items-center justify-center">
                                    <a href="https://wsdot.wa.gov/" target="blank">
                                        <Image 
                                            src="v1621966123/WSDOT_pptkns.png"
                                            alt="wsdot" 
                                            width={100}
                                            height={100}
                                        />
                                    </a>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full sm:mx-2 mb-4">
                                    <a className="twitter-timeline" data-height="550" href="https://twitter.com/wsdot_traffic?ref_src=twsrc%5Etfw">Tweets by wsdot_traffic</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                                </div>
                               
                                
                            </div>
                        </div>
                         {/* <--------------- End Left Panel --------------> */}


                         {/* <--------------- Start Main --------------> */}
                        <div className="w-full flex flex-col items-center mt-10 bg-gray-200 overflow-y-auto h-5/6 shadow-2xl"> 
                            <div className="max-w-6x1 w-full mx-4">
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
                                        <h2 className="text-2xl text-blue-350 font-bold text-center" id="policies_equipment">Policies &amp; Equipment</h2>
                                    </div>
                                    
                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className=" bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Policies</div>
                                                <div className="mt-4 text-gray-600 text-md text-center">
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
                                                <div className="font-bold text-gray-700 text-lg text-center">Equipment</div>
                                                <div className="mt-4 text-gray-600 text-md text-center">
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
                                        <h2 className="text-2xl text-blue-350 font-bold text-center" id="training_links">Training &amp; Links</h2>
                                    </div>
                                    
                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className=" bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Training</div>
                                                <div className="mt-4 text-gray-600 text-md text-center">
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
                                                <div className="font-bold text-gray-700 text-lg text-center">Links</div>
                                                <div className="mt-4 text-gray-600 text-md text-center">
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
                                        <h2 className="text-2xl text-blue-350 font-bold text-center" id="facts">Fact Sheets/How-to</h2>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-full">
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Fact Sheets/How-to</div>
                                                <div className="mt-4 text-gray-600 text-md text-center">
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
                                        <h2 className="text-2xl text-blue-350 font-bold text-center" id="help">Need Help?</h2>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                                        <div className="mt-4 md:w-full">
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Help</div>
                                                <div className="mt-4 text-gray-600 text-md text-center">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <------------ End Page Content ------------> */}

                            </div>
                        </div>
                        {/* <--------------- End Main --------------> */}
                        

                        {/* <--------------- Start Right Panel --------------> */}
                        <div className="w-3/12 flex flex-col items-center mt-10 border-l-2 border-gray-300 px-2 mx-2 hidden md:block"> 
                            <div className="flex flex-col items-center justify-between w-full">
                                <div className="flex items-center justify-between mt-4 mb-8">
                                    <a className="mx-2" href="http://www.facebook.com/WSHFC" target="blank">
                                        <Image 
                                            src="v1621966124/facebook_fagve2.png"
                                            alt="facebook" 
                                            width={75}
                                            height={75}
                                        />
                                    </a>
                                    <a className="mx-2" href="https://twitter.com/WSHFC" target="blank">
                                        <Image 
                                            src="v1621966123/twitter_ynuzpm.png"
                                            alt="twitter" 
                                            width={75}
                                            height={75}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="text-gray-100 bg-blue-450 w-full py-2 px-0 md:px-2 flex flex-row justify-center items-center">
                                    <h2 className="font-serif text-xs md:text-xl whitespace-nowrap text-base text-center">Quick Links</h2>
                            </div>
                            <div className="py-4 px-2 mb-4 bg-gray-100 flex w-full items-center justify-center text-gray-700">                        
                                <ul className="text-xs md:text-lg text-center">
                                        <a className="hover:underline" href=""><li>Timesheet</li></a>
                                        <a className="hover:underline" href="https://login.salesforce.com/" target="blank"><li>Homebase</li></a>
                                        <a className="hover:underline" href="http://wshfc.org/" target="blank"><li>WSHFC</li></a>
                                        <a className="hover:underline" href="http://whefa.org/"><li>WHEFA</li></a>
                                        <a className="hover:underline" href="http://www.tsa-wa.org/"><li>TSA</li></a>
                                        <a className="hover:underline" href=""><li>Pictorial Guide</li></a>
                                        <a className="hover:underline" href="https://myportal.wa.gov/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?saml2=disabled"><li>ESS Login</li></a>
                                </ul>
                                
                            </div>
                            <div className="flex flex-col">
                                {/* <iframe width="1000" height="900" src="https://outlook.office365.com/owa/calendar/f1d1282ff21746c9b4caeba67ab84207@wshfc.org/64961be2d3c34d5c8918d07dc215344e10856728753962429613/calendar.html"></iframe> */}
                            </div>
                        </div>
                        {/* <--------------- End Right Panel --------------> */}
                    </div>
                </div>

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