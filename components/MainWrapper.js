import Weather from './Weather'
import Image from 'next/image'
import React, { useState } from 'react'


export default function MainWrapper({children}){
    return(
        <div className="max-w-7xl w-full flex justify-center bg-gray-200 shadow-xl">
            <div className="flex flex-row w-full md:flex-row max-h-screen">
                {/* <--------------- Start Left Panel --------------> */}
                <div className="w-3/12 flex flex-col items-center mt-5 px-2 mx-2 hidden md:block">
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex items-center justify-center mt-4">
                            <a className="px-2" href="https://www.soundtransit.org/" target="blank">
                                <Image 
                                    src="v1624905995/Sound_Transit_vertical_logo_epass4.svg"
                                    alt="sound_transit" 
                                    width={75}
                                    height={46}
                                />
                            </a>
                    
                            <a className="px-2" href="https://wsdot.wa.gov/" target="blank">
                                <Image 
                                    src="v1621966123/WSDOT_pptkns.png"
                                    alt="wsdot" 
                                    width={75}
                                    height={75}
                                />
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full sm:mx-2 mb-4">
                            <Weather />

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
            

                {/* <--------------- Start Right Panel --------------> */}
                <div className="w-3/12 flex flex-col items-center mt-5 px-2 mx-2 hidden md:block"> 
                    <div className="flex flex-col items-center justify-between w-full">
                        <div className="flex items-center justify-between mt-4 mb-8">
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
                    <div className="text-gray-100 bg-blue-450 w-full py-2 px-0 md:px-2 flex flex-row justify-center items-center">
                            <h2 className="font-serif text-xs md:text-xl whitespace-nowrap text-base text-center">Quick Links</h2>
                    </div>
                    <div className="py-4 px-2 mb-4 bg-gray-100 flex w-full items-center justify-center text-gray-700">                        
                        <ul className="text-center md:text-lg text-xs">
                                <a className="hover:underline" href=""><li>Timesheet</li></a>
                                <a className="hover:underline" href="https://login.salesforce.com/" target="blank"><li>Homebase</li></a>
                                <a className="hover:underline" href="http://wshfc.org/" target="blank"><li>WSHFC</li></a>
                                <a className="hover:underline" href="http://whefa.org/"><li>WHEFA</li></a>
                                <a className="hover:underline" href="http://www.tsa-wa.org/"><li>TSA</li></a>
                                <a className="hover:underline" href=""><li>Pictorial Guide</li></a>
                                <a className="hover:underline" href="https://myportal.wa.gov/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?saml2=disabled"><li>ESS Login</li></a>
                        </ul>
                        
                    </div>
                    
                </div>
                {/* <--------------- End Right Panel --------------> */}
            </div>
        </div>
                    
    )
}