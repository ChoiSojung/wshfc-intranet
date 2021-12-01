import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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
                    <div className="max-w-6xl m-2">
                        <div className="flex flex-col justify-center items-center"> 
                            <Link href="/hr-finance">
                                <a>
                                    <h1 className="font-serif hover:text-gray-300 hover:border-gray-300 text-2xl text-gray-100 border-b border-gray-100">
                                        Human Resources and Finance
                                    </h1>
                                </a>
                            </Link>
                            <p className="text-center py-2 text-xl text-gray-100">
                                <i><b>NEW!</b></i> Looking for hiring policies? Perhaps evaluations? Are you a new employee looking to orient yourself in the office and get to know everybody’s name and face? Or perhaps you’re just looking for your leave request or travel documents. If you can’t find what you need, just use the search bar.
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
                                <a href="#manager_resources">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-green-450 rounded-lg p-2 hover:bg-green-700">
                                        <p className="text-sm font-bold text-gray-100 text-center">Manager Resources</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#employee_resources">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-green-450 rounded-lg p-2 hover:bg-green-700">
                                        <p className="text-sm font-bold text-gray-100 text-center">New Employee Resources</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-2 md:w-1/2">
                                <a href="#timesheet_leave_comp">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-green-450 rounded-lg p-2 hover:bg-green-700">  
                                        <p className="text-sm font-bold text-gray-100 text-center">Timesheet, Leave &amp; Compensation</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#wellness_training">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-green-450 rounded-lg p-2 hover:bg-green-700">
                                        <p className="text-sm font-bold text-gray-100 text-center">Wellness &amp; Training</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                    
                        <div className="mt-5 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="h-full flex flex-col items-center md:mx-2">
                                    <Image
                                        src="v1625078012/HR-Finance%20page/Sisters_Haven_family_Spokane_6-19_va3002.jpg"
                                        alt="sisters-haven-family-spokane" 
                                        width={600}
                                        height={400}
                                    />
                                </div>
                            </div>
                            <div className="mt-4 md:w-1/2">
                                <div className="h-full flex flex-col items-center md:mx-2">
                                    <Image
                                        src="v1621966145/HR-Finance%20page/Spokane-day1-cc-2402_uowdmt.jpg"
                                        alt="spokane-day" 
                                        width={600}
                                        height={400} 
                                    />
                                </div>
                            </div>
                        </div>

                        
                        <div className="bg-green-450 mt-10 p-2">
                            <h2 className="text-xl text-gray-200 text-center" id="manager_resources">Manager Resources</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Commission Job</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31758&dbid=0&repo=WSHFC" target="_blank"><li>Classification Policy</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31759&dbid=0&repo=WSHFC" target="_blank"><li>Exempt Banding Policy</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31760&dbid=0&repo=WSHFC" target="_blank"><li>Salary Determination</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31761&dbid=0&repo=WSHFC" target="_blank"><li>Washington Management Services</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31757&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Position Description General Service**</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Position Description**</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Hiring</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31776&dbid=0&repo=WSHFC" target="_blank"><li>Hiring</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31777&dbid=0&repo=WSHFC" target="_blank"><li>Orientation Procedures</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31757&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Position Description General Service**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31778&dbid=0&repo=WSHFC" target="_blank"><li>Reduction in Force</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31779&dbid=0&repo=WSHFC" target="_blank"><li>Temporary Help</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31774&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Reference Check Release**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31775&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>State Employment Application**</li></a>
                                            <a className="hover:underline text-blue-450" href="http://www.wshfc.org/admin/careers.htm" target="_blank"><li>Jobs</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Contracting**</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">For the Employer</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31768&dbid=0&repo=WSHFC" target="_blank"><li>Deputy Director Orientation Checklist</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31769&dbid=0&repo=WSHFC" target="_blank"><li>Intranet Checklist</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31770&dbid=0&repo=WSHFC" target="_blank"><li>New Employee Request</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31771&dbid=0&repo=WSHFC" target="_blank"><li>Personnel Orientation Checklist</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Evaluations</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31765&dbid=0&repo=WSHFC" target="_blank"><li>Performance Evaluations</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31766&dbid=0&repo=WSHFC" target="_blank"><li>Performance Management</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31764&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Performance and Development Plan**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31763&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Performance Management Competency Examples**</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Miscellaneous</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31783&dbid=0&repo=WSHFC" target="_blank"><li>Exemption Request</li></a>
                                            <a className="hover:underline text-blue-450" href="http://des.wa.gov/services/HRPayroll/eap/Resources/Pages/FrontlineSupervisorNewsletters.aspx" target="_blank"><li>Frontline Supervisor Newsletter</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31784&dbid=0&repo=WSHFC" target="_blank"><li>Great Job Program</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31782&dbid=0&repo=WSHFC" target="_blank"><li>Discipline Policy</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-450 mt-16 p-2">
                            <h2 className="text-xl text-gray-200 text-center" id="employee_resources">New Employee Resources</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Internal Resources</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/laserfiche/DocView.aspx?repo=WSHFC&docid=35063#?openmode=PDF" target="_blank"><li>Pictorial Guide</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>About the Commission**</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>New Hire HR Packet**</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">External Links</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://hr.wa.gov/" target="_blank"><li>WA State HR Page</li></a>
                                            <a className="hover:underline text-blue-450" href="https://www.hca.wa.gov/" target="_blank"><li>WA State Health Care Authority</li></a>
                                            <a className="hover:underline text-blue-450" href="http://des.wa.gov/services/HRPayroll/eap/Resources/Pages/FrontLineEmployeeNewsletter.aspx" target="_blank"><li>Frontline Employee Newsletter</li></a>
                                            <a className="hover:underline text-blue-450" href="https://www.drs.wa.gov/" target="_blank"><li>WA State Department of Retirement Systems</li></a>
                                            <a className="hover:underline text-blue-450" href="http://www.drs.wa.gov/outlook/active/default.htm" target="_blank"><li>Retirement Newsletter**</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-green-450 mt-16 p-2">
                            <h2 className="text-xl text-gray-200 text-center" id="timesheet_leave_comp">Timesheet, Leave &amp; Compensation</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Timesheet &amp; Leave</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31797&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Timesheet**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/laserfiche/DocView.aspx?repo=WSHFC&docid=31797#?openmode=LDPS" target="_blank"><li>Leave**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://myportal.wa.gov/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?saml2=disabled" target="_blank"><li>Employee Self Service</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31798&dbid=0&repo=WSHFC" target="_blank"><li>Shared Leave Policy</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=33949&dbid=0&repo=WSHFC" target="_blank"><li>Shared Leave Medical Certificate</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=33950&dbid=0&repo=WSHFC" target="_blank"><li>Shared Leave Recipient Request</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=33948&dbid=0&repo=WSHFC" target="_blank"><li>Shared Leave Donor Request</li></a>                              
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31799&dbid=0&repo=WSHFC" target="_blank"><li>Uniformed Service Shared Leave Pool</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Travel</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31804&dbid=0&repo=WSHFC" target="_blank"><li>Travel Policy</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31801&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Travel Authorization (Advance)**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31802&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Travel Expense Voucher**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31803&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Travel Itinerary**</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-450 mt-16 p-2">
                            <h2 className="text-xl text-gray-200 text-center" id="wellness_training">Wellness &amp; Training</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Required Training</div>
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
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Additional Training</div>
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

                        <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-green-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Wellness</div>
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