import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import MainWrapper from '../components/MainWrapper'

export default function EmployeeResources(){
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

                <div className="flex flex-col items-center w-full bg-blue-600 shadow-xl">
                    <div className="max-w-6xl m-2">
                        <div className="flex flex-col justify-center items-center"> 
                            <Link href="/employee-resources">
                                <a>
                                    <h1 className="font-serif hover:text-gray-300 hover:border-gray-300 text-2xl text-gray-100 border-b border-gray-100">
                                        Employee Resources
                                    </h1>
                                </a>
                            </Link>
                            <p className="text-center py-2 text-xl text-gray-100">
                                <i><b>NEW!</b></i> If you’re looking for the ins and outs of the Commission - its policies on conduct, work accommodations, and evaluations, its facility procedures, or how to recognize a hardworking employee – you’re in the right place! This is the one stop shop for everything you need to navigate your day to day tasks. If you can’t find what you need, just use the search bar.
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
                                <a href="#work_resources">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-blue-600 rounded-lg p-2 hover:bg-blue-800">
                                        <p className="text-sm font-bold text-gray-100 text-center">Work Resources</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#facilities">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-blue-600 rounded-lg p-2 hover:bg-blue-800">
                                        <p className="text-sm font-bold text-gray-100 text-center">Facilities</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-2 md:w-1/2">
                                <a href="#conduct_evaluations">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-blue-600 rounded-lg p-2 hover:bg-blue-800">  
                                        <p className="text-sm font-bold text-gray-100 text-center">Conduct &amp; Evaluations</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#recognition_training">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-blue-600 rounded-lg p-2 hover:bg-blue-800">
                                        <p className="text-sm font-bold text-gray-100 text-center">Recognition &amp; Training</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                    
                        <div className="mt-5 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="h-full flex flex-col items-center md:mx-2">
                                    <Image
                                        src="v1630517198/Employee%20Resources%20page/PtAngeles-sep2019-5844_gwfqfo.jpg"
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
                                        src="v1625078008/Employee%20Resources%20page/PtAngeles-sep2019-6401_kznotn.jpg"
                                        alt="ptangeles-2019" 
                                        width={600}
                                        height={400}
                                    />
                                    <p className="text-sm italic"></p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="bg-blue-600 mt-10 p-2 border-2">
                            <h2 className="text-xl text-gray-100 text-center" id="work_resources">Work Resources</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-600 text-lg text-center">Alternative Work Schedule</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Alternative Work Schedule Request</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Telecommute Application</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Telecommute Equipment Agreement</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Infants at Work</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Deputy Director Orientation Checklist</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Intranet Checklist</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>New Employee Request</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Personnel Orientation Checklist</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Remote Access</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Remote Access Policy Acceptance</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Reasonable Accomodation</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Accommodation Request</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-xl text-blue-350 text-center" id="facilities">Facilities</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Equipment and Office Supplies</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Pictorial Guide</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>About the Commission</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>New Hire HR Packet</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Purchasing and Ordering</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>WA State HR Page</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Health Coverage</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Frontline Employee Newsletter</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Retirement</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Conference/Board Rooms</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Pictorial Guide</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>About the Commission</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>New Hire HR Packet</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Facility Updates</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>WA State HR Page</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Health Coverage</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Frontline Employee Newsletter</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Retirement</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Building Information</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Pictorial Guide</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>About the Commission</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>New Hire HR Packet</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-xl text-blue-350 text-center" id="conduct_evaluations">Conduct &amp; Evaluations</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Conduct/Expectations</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Leave/Overtime Request</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Employee Self Service</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Shared Leave Medical Certificate</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Shared Leave Recipient Request</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Shared Leave Donor Request</li></a>                              
                                            <a className="hover:underline text-blue-450" src="#"><li>Uniformed Service Shared Leave Pool</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Evaluations</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Travel Authorization (Advance)</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Travel Expense Voucher</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Travel Itinerary</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-xl text-blue-350 text-center" id="recognition_training">Recognition &amp; Training</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Employee Recognition</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Hiring</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Orientation Procedures</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Position Description General Service</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Reduction in Force</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Temporary Help</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Reference Check Release</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>State Employment Application</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Jobs</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Contracting</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-600 text-lg text-center">Employee Education</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Performance Evaluations</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Performance Management</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Performance and Development Plan</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Performance Management Competency Examples</li></a>
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