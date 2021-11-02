import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import MainWrapper from '../components/MainWrapper'

export default function CFD(){

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

                <div className="flex flex-col items-center w-full bg-yellow-450 shadow-xl">
                    <div className="max-w-6xl m-2">
                        <div className="flex flex-col justify-center items-center"> 
                            <Link href="/cfd">
                                <a>
                                    <h1 className="font-serif hover:text-gray-300 hover:border-gray-300 text-2xl text-blue-350 border-b border-blue-350">
                                        Combined Fund Drive (CFD)
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
                        
                    <p className="font-serif text-xl mt-2 text-blue-350 font-bold pb-2 border-b-2 border-blue-350">We are currently working on 2021 CFD, stay tuned</p>
                        <div className="mt-4 text-lg">
                            <p>
                                For the 2020 CFD drive, the Commission chose to support <a className="hover:underline text-blue-450" href="https://www.northwestharvest.org/">NorthWest Harvest</a> 
                                and <a className="hover:underline text-blue-450" href="https://namiseattle.org/">NAMI Seattle</a> during our annual fund drive activities. 
                                In total we collected $4,635! We made a $2,500 donation to NAMI and was also able to provide the equivalent of 9,704 meals with the remaining 
                                $2,135 for NW Harvest. We raised the money by scheduling and coordinating events throughout the year, like a coin derby which was won by MHCF division,  
                                and other offerings like pie baking classes for donation.
                            </p>
                        
                        
                            <div className="mt-4">
                                <p>Here’s an email we received from NAMI Seattle detailing how we helped them out:</p>
                            </div>
                        </div>

                        <div className="mt-4 bg-gray-100 h-full border border-blue-600 rounded-lg flex flex-col items-center p-4">
                            <div className="text-gray-700">
                                <p>
                                    "Thank you for being part of our mission to end the stigma of mental illness, 
                                    and for believing in this important work! 2020 brought us many challenges, 
                                    and we could not have persevered without you. For the last nine months our 
                                    virtual trainings, workshops, presentations, and support groups have been 
                                    instrumental to the stability of so many of our neighbors.
                                    Covid-19, economic recession, social unrest: no one predicted this scenario. 
                                    Yet, NAMI Seattle met the challenge by quickly pivoting all our activities 
                                    and support to an online platform. Our community needed us. 
                                    Our friends and neighbors needed us. And with your help, we delivered!
                                </p>
                                <div className="mt-4">
                                    <ul className="list-disc list-inside">
                                        <li>684 middle and high school students attended Ending the Silence presentations.</li>
                                        <li>We helped over 200 individuals find information, referrals and support through our Helpline.</li>
                                        <li>We hosted 167 in-person and online support groups, serving more than 865 people.</li>
                                        <li>Our BIPOC (Black, Indigenous and People of Color) support groups reached individuals from 27 different zip codes across 3 different states.</li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        So much more can be done. Whether it is depression, anxiety, or trauma, our community members affected 
                                        by mental illness are dealing with many stressors. NAMI Seattle is committed to be there for them by 
                                        addressing the unmet mental health needs within our community through support, referral, education, advocacy and outreach."
                                    </p>
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