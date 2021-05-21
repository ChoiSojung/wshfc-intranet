import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'

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
            <div className="bg-gray-100 flex flex-col items-center">


                {/* <------------ Header -----------> */}
                <div className="bg-blue-900 w-full px-4 py-3 flex justify-center border-b-4 border-blue-500">
                    <div className="max-w-6xl w-full">


                        <div className="flex items-center justify-between">
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/images/logo.png"
                                        alt="name" 
                                        width={175}
                                        height={55}
                                    />
                                </a>
                            </Link>
                            <div className="max-w-md w-full">
                                <form className="px-4">
                                    <label className="hidden" htmlFor="search-form">Search</label>
                                    <input className="bg-gray-100 border-2 focus:border-orange p-1 rounded-lg shadow-inner w-full" placeholder="What are you looking for?" type="text"/>
                                        <button className="hidden">Submit</button>
                                </form>
                            </div>
                            <button type="button" className="my-2 mx-2 lg:hidden block" onClick={handleClick}>
                               <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                   <title>menu</title>
                                   {isOpen && (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                    )}
                                    {!isOpen && (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                    )}
                               </svg>
                            </button>
                        </div>

                        <div className="my-4 lg:flex lg:w-full lg:max-w-6xl md:max-w-6xl lg:items-center lg:justify-center lg:w-auto w-full" id="menu">
                            <nav className={`lg:flex ${ isOpen? "block": "hidden"}`}>
                                <ul className="whitespace-nowrap lg:flex items-center justify-between text-base pt-4 lg:pt-0 text-gray-100 text-xl">
                                    <li><Link href="/about"><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-blue-400">About Us</a></Link></li>
                                    <li><Link href="/hr-finance"><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-blue-400">HR &amp; Finance</a></Link></li>
                                    <li><Link href="/it"><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-blue-400">Information Technology</a></Link></li>
                                    <li><Link href="/communications"><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-blue-400">Communications</a></Link></li>
                                    <li><Link href="/employee-resources"><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-blue-400">Employee Resources</a></Link></li>
                                    <li><Link href="/cfd"><a className="inline-block lg:p-4 py-3 px-0 mx-2 block border-b-2 border-transparent hover:border-blue-400">Combined Fund Drive</a></Link></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-center w-full bg-green-600">
                    <div className="max-w-6xl mx-4">
                        <div className="flex flex-col justify-center items-center"> 
                            <h1 className="py-2 mt-4 text-4xl text-gray-100 border-b border-white">
                                Human Resources &amp; Finance
                            </h1>
                            <p className="text-center py-2 mb-4 text-xl text-gray-100">
                                Find HR documents for both managers and employees, new employees, as well as timesheets, leave, compensation and training resources.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <--------- End Header ---------> */}


                <div className="max-w-7xl w-full flex justify-center">
                    <div className="flex flex-row w-full">
                         {/* <--------------- Start Left Panel --------------> */}
                        <div className="w-3/12 flex flex-col items-center mt-10 border-r-2 border-gray-300 px-4">
                            <div className="flex flex-col items-center justify-center w-full mx-4">
                                <div className="flex items-center justify-center mt-4">
                                    <a href="https://www.soundtransit.org/" target="blank">
                                        <Image 
                                            src="/images/sound_transit.svg"
                                            alt="name" 
                                            width={155}
                                            height={25}
                                        />
                                    </a>
                                </div>

                                <div className="flex items-center justify-center">
                                    <a href="https://wsdot.wa.gov/" target="blank">
                                        <Image 
                                            src="/images/WSDOT.png"
                                            alt="name" 
                                            width={100}
                                            height={100}
                                        />
                                    </a>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full mx-4">
                                    <a className="twitter-timeline" data-height="600" href="https://twitter.com/wsdot_traffic?ref_src=twsrc%5Etfw">Tweets by wsdot_traffic</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                                </div>
                               
                                
                            </div>
                        </div>
                         {/* <--------------- End Left Panel --------------> */}


                         {/* <--------------- Start Main --------------> */}
                        <div className="w-full he-full flex flex-col items-center mt-10"> 
                            <div className="max-w-6x1 w-full mx-4 overflow-y-auto h-4/6">
                                {/* <------------ Page Content ------------> */}
                                <div className="px-6">
                                    <p className="text-3xl mt-4 text-gray-600 font-bold pb-2 border-b-2 border-gray-500">Jump to a section</p>

                                    <div className="mt-4 flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-2 md:w-1/2">
                                            <a href="#manager_resources">
                                                <div className="h-full flex flex-col items-center md:mx-2 bg-blue-500 rounded-lg p-2">
                                                    <p className="text-lg text-gray-100 font-bold text-center">Manager Resources</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-2 md:w-1/2">
                                            <a href="#employee_resources">
                                                <div className="h-full flex flex-col items-center md:mx-2 bg-blue-500 rounded-lg p-2">
                                                    <p className="text-lg text-gray-100 font-bold text-center">New Employee Resources</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-2 md:w-1/2">
                                            <a href="#timesheet_leave_comp">
                                                <div className="h-full flex flex-col items-center md:mx-2 bg-blue-500 rounded-lg p-2">  
                                                    <p className="text-lg text-gray-100 font-bold text-center">Timesheet, Leave &amp; Compensation</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-2 md:w-1/2">
                                            <a href="#wellness_training">
                                                <div className="h-full flex flex-col items-center md:mx-2 bg-blue-500 rounded-lg p-2">
                                                    <p className="text-lg text-gray-100 font-bold text-center">Wellness &amp; Training</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    
                                
                                    <div className="mt-10 flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className="h-full flex flex-col items-center md:mx-2">
                                                <Image
                                                    src="/images/PtAngeles-sep2019-6081.jpg"
                                                    alt="name" 
                                                    width={600}
                                                    height={400}
                                                />
                                                <p className="text-md italic">Caption</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:w-1/2">
                                            <div className="h-full flex flex-col items-center md:mx-2">
                                                <Image
                                                    src="/images/Liberty_Bank_opening.jpg"
                                                    alt="name" 
                                                    width={600}
                                                    height={400}
                                                />
                                                <p className="text-md italic">Caption</p>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className="bg-green-600 mt-16 p-2">
                                        <h2 className="text-2xl text-gray-100 text-center" id="manager_resources">Manager Resources</h2>
                                    </div>
                                    
                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Commission Job</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
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
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Hiring</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
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
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">For the Employer</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
                                                        <li>Deputy Director Orientation Checklist</li>
                                                        <li>Intranet Checklist</li>
                                                        <li>New Employee Request</li>
                                                        <li>Personnel Orientation Checklist</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-center">Miscellaneous</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
                                                        <li>Exemption Request</li>
                                                        <li>Frontline Supervisor Newsletter</li>
                                                        <li>Great Job Program</li>
                                                        <li>Discipline Policy</li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-full">
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Evaluations</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
                                                        <li>Performance Evaluations</li>
                                                        <li>Performance Management</li>
                                                        <li>Performance and Development Plan</li>
                                                        <li>Performance Management Competency Examples</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-green-600 mt-16 p-2">
                                        <h2 className="text-2xl text-gray-100 text-center" id="employee_resources">New Employee Resources</h2>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Internal Resources</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
                                                        <li>Pictorial Guide</li>
                                                        <li>About the Commission</li>
                                                        <li>New Hire HR Packet</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">External Links</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
                                                        <li>WA State HR Page</li>
                                                        <li>Health Coverage</li>
                                                        <li>Frontline Employee Newsletter</li>
                                                        <li>Retirement</li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-green-600 mt-16 p-2">
                                        <h2 className="text-2xl text-gray-100 text-center" id="timesheet_leave_comp">Timesheet, Leave &amp; Compensation</h2>
                                    </div>
                                    
                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Leave</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
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
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Travel</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
                                                        <li>Travel Authorization (Advance)</li>
                                                        <li>Travel Expense Voucher</li>
                                                        <li>Travel Itinerary</li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-green-600 mt-16 p-2">
                                        <h2 className="text-2xl text-gray-100 text-center" id="wellness_training">Wellness &amp; Training</h2>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:-mx-2">
                                        <div className="mt-4 md:w-1/2">
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Required Training</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
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
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Additional Training</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
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
                                            <div className="bg-gray-200 h-full p-8 border-b-4 border-green-600 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                                <div className="font-bold text-gray-700 text-lg text-center">Wellness</div>
                                                <div className="mt-4 text-green-600 text-md text-center">
                                                    <ul>
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
                        <div className="w-3/12 flex flex-col items-center mt-10 border-l-2 border-gray-300 px-4"> 
                            <div className="flex flex-col items-center justify-center w-full mx-4">
                                <div className="flex items-center justify-center mt-4 mb-8">
                                    <a className="px-2" href="http://www.facebook.com/WSHFC" target="blank">
                                        <Image 
                                            src="/images/facebook.png"
                                            alt="name" 
                                            width={75}
                                            height={75}
                                        />
                                    </a>
                                    <a className="px-2" href="https://twitter.com/WSHFC" target="blank">
                                        <Image 
                                            src="/images/twitter.png"
                                            alt="name" 
                                            width={75}
                                            height={75}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="text-gray-100 bg-gray-500 w-full py-2 flex flex-row justify-center items-center">
                                    <h2 className="text-sm md:text-xl font-bold whitespace-nowrap">Quick Links</h2>
                            </div>
                            <div className="pl-7 py-4 bg-gray-200 flex w-full text-gray-700">                        
                                <ul className="text-xs md:text-lg text-center">
                                        <li>Timesheet</li>
                                        <li>Homebase</li>
                                        <li>WSHFC</li>
                                        <li>WHEFA</li>
                                        <li>TSA</li>
                                        <li>Pictorial Guide</li>
                                        <li>ESS Login</li>
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
                <div className="bg-blue-900 py-12 mt-12 w-full flex flex-col items-center border-t-4 border-blue-500 text-lg text-gray-100">
                    <h2 className="font-bold text-xl mt-4">Send us your suggestions!</h2>
                    <form className="max-w-xl w-full text-gray-100 mt-4 p-8 md:px-0" action="#" method="POST">
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <label htmlFor="name" className="sr-only"></label>
                            <input id="name" name="name" type="text" autoComplete="name" className="bg-gray-600 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" placeholder="Name (optional)">
                            
                            </input>
                        </div>
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <label htmlFor="email" className="sr-only"></label>
                            <input id="email" name="email" type="text" autoComplete="email" className="bg-gray-600 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" placeholder="Email (optional)">
                            
                            </input>

                        </div>
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <label htmlFor="suggestion" className="sr-only"></label>
                            <input id="suggestion" name="suggestion" type="text" required className="bg-gray-600 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" placeholder="Suggestion">

                            </input>
                        </div>
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <button type="submit" className="bg-blue-500 mt-4 rounded-lg py-2 px-4 w-full md:mx-2">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="bg-blue-900 w-full text-center pb-8 text-gray-100">
                    <p className="text-md">1000 2nd Avenue, Suite 2700, Seattle, WA 98104</p>
                    <p className="text-md">office (206) 464-7139 | fax (206) 587-5113 | toll-free (800) 767-4663</p>
                </div>
                
                {/* <---------- End Footer ---------> */}



            </div>
             {/* <--------------- End Body --------------> */}
            
        </div>
    )
}