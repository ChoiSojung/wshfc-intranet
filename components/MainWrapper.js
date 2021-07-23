import Weather from './Weather'
import Image from 'next/image'
import React, { useState } from 'react'


export default function MainWrapper({children}){
    return(
        <div className="max-w-7xl w-full flex justify-center bg-gray-450 shadow-xl">
            <div className="flex flex-row w-full md:flex-row max-h-screen">
                {/* <--------------- Start Left Panel --------------> */}
                <div className="w-3/12 flex flex-col items-center px-6 border-r border-gray-300 hidden md:block">
                    <div className="flex flex-col items-center justify-center w-full">
                        
                    
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