import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

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
            <div className="bg-gray-300 flex flex-col items-center">
                {/* <------------ Header -----------> */}

                <Header></Header>

                <div className="flex flex-col items-center w-full bg-blue-700">
                    <div className="max-w-6xl mx-4">
                        <div className="flex flex-col justify-center items-center"> 
                            <Link href="/employee-resources">
                                <a>
                                    <h1 className="hover:text-gray-300 hover:border-gray-300 py-2 mt-4 text-3xl text-gray-100 border-b border-gray-100">
                                        Employee Resources
                                    </h1>
                                </a>
                            </Link>
                            <p className="text-center py-2 mb-4 text-lg text-gray-100">
                                Find documents/guidelines regarding conduct, evaluations, employee recognition, work resources, facilities and training opportunities.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <--------- End Header ---------> */}


                <div className="max-w-7xl w-full flex justify-center bg-gray-300">
                    <div className="flex flex-row w-full md:flex-row max-h-screen">
                         {/* <--------------- Start Left Panel --------------> */}
                        <div className="w-3/12 flex flex-col items-center mt-10 border-r-2 border-gray-300 px-2 mx-6 hidden md:block">
                            <div className="flex flex-col items-center justify-center w-full mx-4">
                                <div className="flex items-center justify-center mt-4">
                                    <a href="https://www.soundtransit.org/" target="blank">
                                        <Image 
                                            src="v1621966238/sound_transit_ajgfld.svg"
                                            alt="sound_transit" 
                                            width={155}
                                            height={25}
                                        />
                                    </a>
                                </div>

                                <div className="flex items-center justify-center">
                                    <a href="https://wsdot.wa.gov/" target="blank">
                                        <Image 
                                            src="v1621966123/WSDOT_pptkns.png"
                                            alt="wsdot" 
                                            width={100}
                                            height={100}
                                        />
                                    </a>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full sm:mx-2">
                                    <a className="twitter-timeline" data-height="550" href="https://twitter.com/wsdot_traffic?ref_src=twsrc%5Etfw">Tweets by wsdot_traffic</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                                </div>
                               
                                
                            </div>
                        </div>
                         {/* <--------------- End Left Panel --------------> */}


                         {/* <--------------- Start Main --------------> */}
                        <div className="w-full flex flex-col items-center mt-10 bg-gray-200 overflow-y-auto h-5/6"> 
                            <div className="max-w-6x1 w-full mx-4">
                                {/* <------------ Page Content ------------> */}
                                <div className="px-6">
                                    <p className="text-2xl mt-4 text-gray-600 font-bold pb-2 border-b-2 border-gray-500">Jump to a section</p>

                                    <div className="mt-4 flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-2 md:w-1/2">
                                            <a href="#manager_resources">
                                                <div className="h-full flex flex-col items-center md:mx-2 bg-blue-500 rounded-lg p-2 hover:bg-blue-400">
                                                    <p className="text-md text-gray-100 font-bold text-center">Manager Resources</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-2 md:w-1/2">
                                            <a href="#employee_resources">
                                                <div className="h-full flex flex-col items-center md:mx-2 bg-blue-500 rounded-lg p-2 hover:bg-blue-400">
                                                    <p className="text-md text-gray-100 font-bold text-center">New Employee Resources</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-2 md:w-1/2">
                                            <a href="#timesheet_leave_comp">
                                                <div className="h-full flex flex-col items-center md:mx-2 bg-blue-500 rounded-lg p-2 hover:bg-blue-400">  
                                                    <p className="text-md text-gray-100 font-bold text-center">Timesheet, Leave &amp; Compensation</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-2 md:w-1/2">
                                            <a href="#wellness_training">
                                                <div className="h-full flex flex-col items-center md:mx-2 bg-blue-500 rounded-lg p-2 hover:bg-blue-400">
                                                    <p className="text-md text-gray-100 font-bold text-center">Wellness &amp; Training</p>
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

                                    
                                    <div className="bg-blue-700 mt-16 p-2">
                                        <h2 className="text-xl text-gray-100 text-center" id="manager_resources">Manager Resources</h2>
                                    </div>
                                    
                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className=" bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Commission Job</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
                                                    <ul className="list-decimal list-inside">
                                                        <li>Classification Policy</li>
                                                        <li>Exempt Banding Policy</li>
                                                        <li>Salary Determination</li>
                                                        <li>Washington Management Services</li>
                                                        <li>Position Description General Service</li>
                                                        <li>Position Description</li>
                                                        <li>State Employment Application</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Hiring</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
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
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">For the Employer</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
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
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Evaluations</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
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
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Miscellaneous</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
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

                                    <div className="bg-blue-700 mt-16 p-2">
                                        <h2 className="text-xl text-gray-100 text-center" id="employee_resources">New Employee Resources</h2>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Internal Resources</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
                                                    <ul className="list-decimal list-inside">
                                                        <li>Pictorial Guide</li>
                                                        <li>About the Commission</li>
                                                        <li>New Hire HR Packet</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">External Links</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
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
                                    
                                    <div className="bg-blue-700 mt-16 p-2">
                                        <h2 className="text-xl text-gray-100 text-center" id="timesheet_leave_comp">Timesheet, Leave &amp; Compensation</h2>
                                    </div>
                                    
                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Leave</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
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
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Travel</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
                                                    <ul className="list-decimal list-inside">
                                                        <li>Travel Authorization (Advance)</li>
                                                        <li>Travel Expense Voucher</li>
                                                        <li>Travel Itinerary</li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-700 mt-16 p-2">
                                        <h2 className="text-xl text-gray-100 text-center" id="wellness_training">Wellness &amp; Training</h2>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Required Training</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
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
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Additional Training</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
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
                                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-700 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Wellness</div>
                                                <div className="mt-4 text-blue-700 text-md text-center">
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

                            </div>
                        </div>
                        {/* <--------------- End Main --------------> */}
                        

                        {/* <--------------- Start Right Panel --------------> */}
                        <div className="w-3/12 flex flex-col items-center mt-10 border-l-2 border-gray-300 px-2 mx-2 hidden md:block"> 
                            <div className="flex flex-col items-center justify-between w-full">
                                <div className="flex items-center justify-between mt-4 mb-8">
                                    <a className="mx-2" href="http://www.facebook.com/WSHFC" target="blank">
                                        <Image 
                                            src="v1621966124/facebook_fagve2.png"
                                            alt="facebook" 
                                            width={75}
                                            height={75}
                                        />
                                    </a>
                                    <a className="mx-2" href="https://twitter.com/WSHFC" target="blank">
                                        <Image 
                                            src="v1621966123/twitter_ynuzpm.png"
                                            alt="twitter" 
                                            width={75}
                                            height={75}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="text-gray-100 bg-blue-900 w-full py-2 px-0 md:px-2 flex flex-row justify-center items-center">
                                    <h2 className="text-xs md:text-lg whitespace-nowrap text-base text-center">Quick Links</h2>
                            </div>
                            <div className="py-4 px-2 bg-gray-100 flex w-full items-center justify-center text-gray-700">                        
                                <ul className="text-xs md:text-lg text-center">
                                        <a className="hover:underline" href=""><li>Timesheet</li></a>
                                        <a className="hover:underline" href="https://login.salesforce.com/" target="blank"><li>Homebase</li></a>
                                        <a className="hover:underline" href="http://wshfc.org/" target="blank"><li>WSHFC</li></a>
                                        <a className="hover:underline" href="http://whefa.org/"><li>WHEFA</li></a>
                                        <a className="hover:underline" href="http://www.tsa-wa.org/"><li>TSA</li></a>
                                        <a className="hover:underline" href=""><li>Pictorial Guide</li></a>
                                        <a className="hover:underline" href="https://myportal.wa.gov/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?saml2=disabled"><li>ESS Login</li></a>
                                </ul>
                                
                            </div>
                            <div className="flex flex-col">
                                {/* <iframe width="1000" height="900" src="https://outlook.office365.com/owa/calendar/f1d1282ff21746c9b4caeba67ab84207@wshfc.org/64961be2d3c34d5c8918d07dc215344e10856728753962429613/calendar.html"></iframe> */}
                            </div>
                        </div>
                        {/* <--------------- End Right Panel --------------> */}
                    </div>
                </div>

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