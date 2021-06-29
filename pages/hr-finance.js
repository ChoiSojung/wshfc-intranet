import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import MainWrapper from '../components/MainWrapper'

export default function HrFinance(){
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

                <div className="flex flex-col items-center w-full bg-green-450 shadow-xl">
                    <div className="max-w-6xl mx-4">
                        <div className="flex flex-col justify-center items-center"> 
                            <Link href="/hr-finance">
                                <a>
                                    <h1 className="font-serif hover:text-gray-300 hover:border-gray-300 py-2 mt-4 text-3xl text-gray-100 border-b border-gray-100">
                                        Human Resources and Finance
                                    </h1>
                                </a>
                            </Link>
                            <p className="text-center py-2 mb-4 text-2xl text-gray-100">
                                Find HR documents for both managers and employees, new employees, as well as timesheets, leave, compensation and training resources.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <--------- End Header ---------> */}

                <MainWrapper>
                    {/* <------------ Page Content ------------> */}
                    <div className="px-6">
                        <p className="font-serif text-2xl mt-4 text-blue-350 font-bold pb-2 border-b-2 border-blue-350">Jump to a section</p>

                        <div className="mt-4 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-2 md:w-1/2">
                                <a href="#manager_resources">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-green-450 rounded-lg p-2 hover:bg-green-700">
                                        <p className="text-md font-bold text-gray-100 text-center">Manager Resources</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#employee_resources">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-green-450 rounded-lg p-2 hover:bg-green-700">
                                        <p className="text-md font-bold text-gray-100 text-center">New Employee Resources</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-2 md:w-1/2">
                                <a href="#timesheet_leave_comp">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-green-450 rounded-lg p-2 hover:bg-green-700">  
                                        <p className="text-md font-bold text-gray-100 text-center">Timesheet, Leave &amp; Compensation</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#wellness_training">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-green-450 rounded-lg p-2 hover:bg-green-700">
                                        <p className="text-md font-bold text-gray-100 text-center">Wellness &amp; Training</p>
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
                            <h2 className="text-2xl text-blue-350 text-center" id="manager_resources">Manager Resources</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">Commission Job</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Classification Policy</li>
                                            <li>Exempt Banding Policy</li>
                                            <li>Salary Determination</li>
                                            <li>Washington Management Services</li>
                                            <li>Position Description General Service</li>
                                            <li>Position Description</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">Hiring</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Hiring</li>
                                            <li>Orientation Procedures</li>
                                            <li>Position Description General Service</li>
                                            <li>Reduction in Force</li>
                                            <li>Temporary Help</li>
                                            <li>Reference Check Release</li>
                                            <li>State Employment Application</li>
                                            <li>Jobs</li>
                                            <li>Contracting</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">For the Employer</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Deputy Director Orientation Checklist</li>
                                            <li>Intranet Checklist</li>
                                            <li>New Employee Request</li>
                                            <li>Personnel Orientation Checklist</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">Evaluations</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Performance Evaluations</li>
                                            <li>Performance Management</li>
                                            <li>Performance and Development Plan</li>
                                            <li>Performance Management Competency Examples</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">Miscellaneous</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Exemption Request</li>
                                            <li>Frontline Supervisor Newsletter</li>
                                            <li>Great Job Program</li>
                                            <li>Discipline Policy</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-2xl text-blue-350 text-center" id="employee_resources">New Employee Resources</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">Internal Resources</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Pictorial Guide</li>
                                            <li>About the Commission</li>
                                            <li>New Hire HR Packet</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">External Links</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>WA State HR Page</li>
                                            <li>Health Coverage</li>
                                            <li>Frontline Employee Newsletter</li>
                                            <li>Retirement</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-2xl text-blue-350 text-center" id="timesheet_leave_comp">Timesheet, Leave &amp; Compensation</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">Leave</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Leave/Overtime Request</li>
                                            <li>Employee Self Service</li>
                                            <li>Shared Leave Medical Certificate</li>
                                            <li>Shared Leave Recipient Request</li>
                                            <li>Shared Leave Donor Request</li>                              
                                            <li>Uniformed Service Shared Leave Pool</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">Travel</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Travel Authorization (Advance)</li>
                                            <li>Travel Expense Voucher</li>
                                            <li>Travel Itinerary</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-2xl text-blue-350 text-center" id="wellness_training">Wellness &amp; Training</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">Required Training</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Hiring</li>
                                            <li>Orientation Procedures</li>
                                            <li>Position Description General Service</li>
                                            <li>Reduction in Force</li>
                                            <li>Temporary Help</li>
                                            <li>Reference Check Release</li>
                                            <li>State Employment Application</li>
                                            <li>Jobs</li>
                                            <li>Contracting</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">Additional Training</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Performance Evaluations</li>
                                            <li>Performance Management</li>
                                            <li>Performance and Development Plan</li>
                                            <li>Performance Management Competency Examples</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-green-450 text-xl text-center">Wellness</div>
                                    <div className="mt-4 text-gray-700 text-md text-center">
                                        <ul className="list-decimal list-inside">
                                            <li>Hiring</li>
                                            <li>Orientation Procedures</li>
                                            <li>Position Description General Service</li>
                                            <li>Reduction in Force</li>
                                            <li>Temporary Help</li>
                                            <li>Reference Check Release</li>
                                            <li>State Employment Application</li>
                                            <li>Jobs</li>
                                            <li>Contracting</li>
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