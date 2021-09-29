import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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
                    <div className="max-w-6xl m-2">
                        <div className="flex flex-col justify-center items-center"> 
                            <Link href="/it">
                                <a>
                                    <h1 className="font-serif hover:text-gray-300 hover:border-gray-300 text-2xl text-blue-450 border-b border-blue-450">
                                        Information Technology
                                    </h1>
                                </a>
                            </Link>
                            <p className="text-center py-2 text-xl text-blue-450">
                                <i><b>NEW!</b></i> Information Technology is the one stop shop for all things…..tech! Whether you’re looking to solve a problem, learn how to use a new program, or login to your Office 365 filtering service, IT has it all. If you can’t find what you need, just use the search bar.
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
                                <a href="#policies_equipment">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-gray-400 rounded-lg p-2 hover:bg-gray-500">
                                        <p className="font-bold text-sm text-blue-450 text-center">Policies &amp; Equipment</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#training_links">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-gray-400 rounded-lg p-2 hover:bg-gray-500">
                                        <p className="font-bold text-sm text-blue-450 text-center">Training &amp; Links</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-2 md:w-1/2">
                                <a href="#facts">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-gray-400 rounded-lg p-2 hover:bg-gray-500">
                                        <p className="font-bold text-sm text-blue-450 text-center">Fact Sheets</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#help">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-gray-400 rounded-lg p-2 hover:bg-gray-500">  
                                        <p className="font-bold text-sm text-blue-450 text-center">Help</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                    
                        <div className="mt-5 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="h-full flex flex-col items-center md:mx-2">
                                    <Image
                                        src="v1627069606/IT%20page/PtAngeles-sep2019-6072_yvr8pb.jpg"
                                        alt="ptangeles-2019" 
                                        width={600}
                                        height={400}
                                    />
                                    <p className="text-sm italic"></p>
                                </div>
                            </div>
                            <div className="mt-4 md:w-1/2">
                                <div className="h-full flex flex-col items-center md:mx-2">
                                    <Image
                                        src="v1627069588/IT%20page/PtAngeles-sep2019-6153_kijstc.jpg"
                                        alt="ptangeles-2019" 
                                        width={600}
                                        height={400}
                                    />
                                    <p className="text-sm italic"></p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="bg-gray-400 mt-10 p-2">
                            <h2 className="text-xl text-blue-450 text-center" id="policies_equipment">Policies &amp; Equipment</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Policies</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li></li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li></li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li></li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Equipment</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Computer Care and Use</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Computer Shared Software</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Computer Software and Upgrades</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Computer Virus Policy</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Internet Access &amp; Use</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Equipment Checkout</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Wireless Device</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-400 mt-16 p-2">
                            <h2 className="text-xl text-blue-450 text-center" id="training_links">Training &amp; Links</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Training</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Security Awareness Training</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Office Quick Reference Guides</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>WEBEX Tutorial</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>WEBEX Training Center</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Links</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Mimecast Spam Filter Employee Access</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Office 365 Exchange Filtering Services</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Homebase</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Navision Web Client</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>WSHFC</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>WHEFA</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>TSA</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-400 mt-16 p-2">
                            <h2 className="text-xl text-blue-450 text-center" id="facts">Fact Sheets/How-to</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Fact Sheets/How-to</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Mimecast Spam Filter Employee Access Instructions</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>F5 Set-Up Instructions</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Postage Meter Instructions</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-400 mt-16 p-2">
                            <h2 className="text-xl text-blue-450 text-center" id="help">Need Help?</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-gray-400 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Request support <a className="hover:underline text-blue-450" href="mailto:itsupport@wshfc.org">here</a></div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        
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