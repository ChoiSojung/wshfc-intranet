import Weather from './Weather'
import Image from 'next/image'
import React, { useState } from 'react'


export default function HomeWrapper({children}){
    return(
        <div className="max-w-7xl w-full flex justify-center bg-gray-450 shadow-xl">
            <div className="flex flex-row w-full md:flex-row max-h-screen">
                {/* <--------------- Start Left Panel --------------> */}
                <div className="w-3/12 flex flex-col items-center px-6 border-r border-gray-300 hidden md:block">
                    <div className="flex flex-col items-center justify-center w-full">
                        
                        <div className="flex flex-col items-center justify-center w-full mt-9 sm:mx-2 mb-4">
                            <Weather />

                        </div>
                        <div className="text-gray-100 bg-blue-350 w-full py-1 px-0 md:px-2 flex flex-row justify-center items-center border border-gray-300">
                            <h2 className="text-xs md:text-xl whitespace-nowrap text-base text-center">Quick Links</h2>
                        </div>
                        <div className="p-1 mb-4 bg-gray-100 flex w-full items-center justify-center text-gray-700 border border-gray-300">                        
                            <ul className="text-center md:text-lg text-xs">
                                    <a className="hover:underline text-blue-350" href="#"><li>Timesheet**</li></a>
                                    <a className="hover:underline text-blue-350" href="#"><li>Leave**</li></a>
                                    <a className="hover:underline text-blue-350" href="http://wshfc.org/" target="blank"><li>WSHFC</li></a>
                                    <a className="hover:underline text-blue-350" href="https://login.salesforce.com/" target="blank"><li>Homebase</li></a>
                                    <a className="hover:underline text-blue-350" href="https://kasos.wshfc.org/laserfiche/DocView.aspx?repo=WSHFC&docid=35063#?openmode=PDF"><li>Pictorial Guide</li></a>
                                    <a className="hover:underline text-blue-350" href="https://myportal.wa.gov/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?saml2=disabled"><li>Employee Self Services</li></a>     
                            </ul>
                            
                        </div>
                        <div className="flex flex-col items-center justify-between w-full">
                            <div className="flex items-center justify-between mt-2">
                                <a className="mx-2" href="http://www.facebook.com/WSHFC" target="blank">
                                    <Image 
                                        src="v1621966124/facebook_fagve2.png"
                                        alt="facebook" 
                                        width={50}
                                        height={50}
                                    />
                                </a>
                                <a className="mx-2" href="https://twitter.com/WSHFC" target="blank">
                                    <Image 
                                        src="v1621966123/twitter_ynuzpm.png"
                                        alt="twitter" 
                                        width={50}
                                        height={50}
                                    />
                                </a>
                            </div>
                        </div>
                   
                        <div className="flex items-center justify-center">
                            <a className="px-2" href="https://www.soundtransit.org/" target="blank">
                                <Image 
                                    src="v1624905995/Sound_Transit_vertical_logo_epass4.svg"
                                    alt="sound_transit" 
                                    width={80}
                                    height={50}
                                />
                            </a>
                            <a className="px-2" href="https://wsdot.wa.gov/" target="blank">
                                <Image 
                                    src="v1621966123/WSDOT_pptkns.png"
                                    alt="wsdot" 
                                    width={90}
                                    height={90}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                {/* <--------------- End Left Panel --------------> */}


                {/* <--------------- Start Main --------------> */}
                <div className="w-full flex flex-grow flex-col items-center py-5 bg-gray-200 overflow-y-auto overflow-x-hidden h-full shadow-2xl"> 
                    <div className="max-w-6x1 w-full mx-4">
                        {children}

                    </div>
                </div>
                {/* <--------------- End Main --------------> */}
            
            </div>
        </div>
                    
    )
}