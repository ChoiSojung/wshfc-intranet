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
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Alternative Work Schedule</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Alternative Work Schedule Request</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Telecommute Application</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Telecommute Equipment Agreement</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Infants at Work</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Deputy Director Orientation Checklist</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Intranet Checklist</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>New Employee Request</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Personnel Orientation Checklist</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Remote Access</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Remote Access Policy Acceptance</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Reasonable Accomodation</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Accommodation Request</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-600 mt-16 p-2">
                            <h2 className="text-xl text-gray-100 text-center" id="facilities">Facilities</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Equipment and Office Supplies</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Computer Care and Use</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Computer File Storage</li></a>
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

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Purchasing and Ordering</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Capital Assets</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Cash Receipts</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Purchasing</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Purchasing Card Policy</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Signature Authority</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Cash Receipts Log</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Conference/Board Rooms</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Reception Protocol and Security</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Meetings</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Board and Training Room Use</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Board Room Set-Up Chart</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Meeting Room Reservation</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Facility Updates</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li></li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li></li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li></li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li></li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Building Information</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Office Closure Due to Inclement Weather</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-600 mt-16 p-2">
                            <h2 className="text-xl text-gray-100 text-center" id="conduct_evaluations">Conduct &amp; Evaluations</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Conduct/Expectations</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Whistleblower</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Anti-Discrimination Harassment and Sexual Harassment</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Conflict Resolution</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Discipline Policy</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Professional Attire</li></a>                              
                                            <a className="hover:underline text-blue-450" href="#"><li>Professional Conduct/Conflict/Resolution</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Investigation of Suspected Misconduct</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Respectful Work Environment</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Nonprofit Board Participation</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Evaluations</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Performance Evaluation</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Performance Management</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Performance and Development</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-600 mt-16 p-2">
                            <h2 className="text-xl text-gray-100 text-center" id="recognition_training">Recognition &amp; Training</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Employee Recognition</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Employee Recognition</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Employee Recognition Nomination</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Employee Education</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Lynda Learning</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Employee Certificate and Degree Program Application</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Employee Certificate and Degree Program Prioritization</li></a>
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