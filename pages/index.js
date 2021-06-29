import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import HomeWrapper from '../components/HomeWrapper'

export default function Home() {
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

            
            {/* <--------- End Header ---------> */}

            <HomeWrapper>
                {/* <------------ Page Content ------------> */}
                <div className="px-6">
                    <div className=" flex flex-col md:flex-row md:-mx-2">
                        <div className="mt-2 md:w-1/2">
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
                        <div className="mt-2 md:w-1/2">
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
                </div>
                {/* <------------ End Page Content ------------> */}
            </HomeWrapper>

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
