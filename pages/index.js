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
                                <div className="mt-4 text-gray-700 text-sm">
                                    <ul className="list-decimal list-inside">
                                        <a className="hover:underline text-blue-450" src="#"><li>Mission/Values/Vision</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Commission Enabling Legislation</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>20 year report</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>30 year look back</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 md:w-1/2">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-lg text-center">Info Library</div>
                                <div className="mt-4 text-gray-700 text-sm">
                                    <ul className="list-decimal list-inside">
                                        <a className="hover:underline text-blue-450" src="#"><li>Acronyms and Commonly Used Words</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Tax Credit Program</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Homeownership</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Sustainable Energy Trust (SET)</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Beginning Farmer/Rancher</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>501c3 Bonds</li></a>
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
                                <div className="mt-4 text-gray-700 text-sm">
                                    <ul className="list-decimal list-inside">
                                        <a className="hover:underline text-blue-450" src="#"><li>Division Organizational Chart</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Safety Committee</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Sustainable Practices Plan &amp; Green Committee</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Executive Management Team (EMT) Description and Meeting Notes</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Administration Managment Team (AMT) Description and Meeting Notes</li></a>                              
                                        <a className="hover:underline text-blue-450" src="#"><li>Data Analytics Team (DAT) Description and Meeting Notes</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Project Watchlist Procedure (PROWL)</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 md:w-1/2">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-lg text-center">Commissioner/Board Meetings</div>
                                <div className="mt-4 text-gray-700 text-sm ">
                                    <ul className="list-decimal list-inside">
                                        <a className="hover:underline text-blue-450" src="#"><li>Link to Commissioners page on WSHFC website</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Commissioner Relations</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Commission Meeting Packets/Agendas</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Public Hearings and Meeting Notices</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Commission Agenda Sample</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Commissioner Time Record</li></a>
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
                                <div className="font-serif font-bold text-blue-450 text-center">Admin</div>
                                <div className="mt-4 text-gray-700 text-sm ">
                                    <ul className="list-decimal list-inside">
                                        <a className="hover:underline text-blue-450" src="#"><li>Link</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Link</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 md:w-1/4">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-center">Homeownership</div>
                                <div className="mt-4 text-gray-700 text-sm ">
                                    <ul className="list-decimal list-inside">
                                        <a className="hover:underline text-blue-450" src="#"><li>Home Advantage Rates</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Link</li></a>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 md:w-1/4">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-center">Multifamily Housing (MHCF)</div>
                                <div className="mt-4 text-gray-700 text-sm ">
                                    <ul className="list-decimal list-inside">
                                        <a className="hover:underline text-blue-450" src="#"><li>Novoco</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>NCSHA</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>ENR</li></a>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 md:w-1/4">
                            <div className="bg-gray-100 h-full p-8 border-b-4 border-blue-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                <div className="font-serif font-bold text-blue-450 text-center">Asset Mgmt &amp; Compliance (AMC)</div>
                                <div className="mt-4 text-gray-700 text-sm ">
                                    <ul className="list-decimal list-inside">
                                        <a className="hover:underline text-blue-450" src="#"><li>Links</li></a>
                                        <a className="hover:underline text-blue-450" src="#"><li>Link</li></a>
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
