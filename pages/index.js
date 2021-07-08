import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import HomeWrapper from '../components/HomeWrapper'
import HomeSlider from '../components/HomeSlider'

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
                    <div className="w-full flex flex-col md:flex-row">
                        <div className="mt-4 md:w-2/3">
                            <HomeSlider/>
                        </div>
                        <div className="mt-4 md:w-1/3">
                            <div className="h-full flex flex-col items-center bg-blue-350">
                                <h1 className="text-gray-100 py-4 text-xl">Cool Happenings</h1>
                                <p className="text-sm text-gray-100 py-4">Coming soon!</p>
                            </div>
                        </div>
                    </div>
                    <p className="font-serif text-xl mt-10 text-blue-350 font-bold pb-2 border-b-2 border-blue-350">Jump to a section</p>

                    <div className="mt-2 flex flex-col md:flex-row md:-mx-2">
                        <div className="mt-2 md:w-1/2">
                            <a href="#organization">
                                <div className="h-full flex flex-col items-center md:mx-2 bg-blue-450 rounded-lg p-2 hover:bg-blue-350">
                                    <p className="text-sm font-bold text-gray-100 text-center">Organization</p>
                                </div>
                            </a>
                        </div>
                        <div className="mt-2 md:w-1/2">
                            <a href="#division_links">
                                <div className="h-full flex flex-col items-center md:mx-2 bg-blue-450 rounded-lg p-2 hover:bg-blue-350">
                                    <p className="text-sm font-bold text-gray-100 text-center">Division Specific Links</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    

                    <div className="bg-gray-450 mt-10 p-2 border-2 border-gray-400">
                        <h2 className="text-xl text-blue-350 text-center" id="commission">The Commission</h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                        <div className="mt-4 md:w-1/2">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-gray-700 text-lg text-blue-450 text-center">History</div>
                                <div className="mt-4 text-gray-700 text-sm text-center">
                                    <ul className="list-decimal list-inside">
                                        <li>Mission/Values/Vision</li>
                                        <li>Commission Enabling Legislation</li>
                                        <li>20 year report</li>
                                        <li>30 year look back</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 md:w-1/2">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-lg text-center">Info Library</div>
                                <div className="mt-4 text-gray-700 text-sm text-center">
                                    <ul className="list-decimal list-inside">
                                        <li>Acronyms and Commonly Used Words</li>
                                        <li>Tax Credit Program</li>
                                        <li>Homeownership</li>
                                        <li>Sustainable Energy Trust (SET)</li>
                                        <li>Beginning Farmer/Rancher</li>
                                        <li>501c3 Bonds</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                        <h2 className="text-xl text-blue-350 text-center" id="organization">Organization</h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                        <div className="mt-4 md:w-1/2">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-lg text-center">Internal</div>
                                <div className="mt-4 text-gray-700 text-sm text-center">
                                    <ul className="list-decimal list-inside">
                                        <li>Division Organizational Chart</li>
                                        <li>Safety Committee</li>
                                        <li>Sustainable Practices Plan &amp; Green Committee</li>
                                        <li>Executive Management Team (EMT) Description and Meeting Notes</li>
                                        <li>Administration Managment Team (AMT) Description and Meeting Notes</li>                              
                                        <li>Data Analytics Team (DAT) Description and Meeting Notes</li>
                                        <li>Project Watchlist Procedure (PROWL)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 md:w-1/2">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-lg text-center">Commissioner/Board Meetings</div>
                                <div className="mt-4 text-gray-700 text-sm text-center">
                                    <ul className="list-decimal list-inside">
                                        <li>Link to Commissioners page on WSHFC website</li>
                                        <li>Commissioner Relations</li>
                                        <li>Commission Meeting Packets/Agendas</li>
                                        <li>Public Hearings and Meeting Notices</li>
                                        <li>Commission Agenda Sample</li>
                                        <li>Commissioner Time Record</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                        <h2 className="text-xl text-blue-350 text-center" id="division_links">Division Specific Links</h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                        <div className="mt-4 md:w-1/4">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-lg text-center">Admin</div>
                                <div className="mt-4 text-gray-700 text-sm text-center">
                                    <ul className="list-decimal list-inside">
                                        <li>Homebase</li>
                                        <li>Link</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 md:w-1/4">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-lg text-center">HO</div>
                                <div className="mt-4 text-gray-700 text-sm text-center">
                                    <ul className="list-decimal list-inside">
                                        <li>Home Advantage Rates</li>
                                        <li>Link</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 md:w-1/4">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-lg text-center">MHCF</div>
                                <div className="mt-4 text-gray-700 text-sm text-center">
                                    <ul className="list-decimal list-inside">
                                        <li>Novoco</li>
                                        <li>NCSHA</li>
                                        <li>ENR</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 md:w-1/4">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-lg text-center">AMC</div>
                                <div className="mt-4 text-gray-700 text-sm text-center">
                                    <ul className="list-decimal list-inside">
                                        <li>Links</li>
                                        <li>Link</li>
                                    </ul>
                                    
                                </div>
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
