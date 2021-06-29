import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import MainWrapper from '../components/MainWrapper'

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

            <MainWrapper>
                {/* <------------ Page Content ------------> */}
                
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
