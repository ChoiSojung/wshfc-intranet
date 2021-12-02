import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import MainWrapper from '../components/MainWrapper'

export default function Communications(){
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

                <div className="flex flex-col items-center w-full bg-red-450 shadow-xl">
                    <div className="max-w-6xl m-2">
                        <div className="flex flex-col justify-center items-center"> 
                            <Link href="/communications">
                                <a>
                                    <h1 className="font-serif hover:text-gray-300 hover:border-gray-300 text-2xl text-gray-100 border-b border-gray-100">
                                        Communications
                                    </h1>
                                </a>
                            </Link>
                            <p className="text-center py-2 text-xl text-gray-100">
                                <i><b>NEW!</b></i> Finished your official document/project and looking to add that final Commission authenticity? Look no further! Here you will find all things Commission and affiliate branded! Letterheads, Powerpoints, templates, styleguides, logos, publications, and MORE! If you can’t find what you need, just use the search bar.
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
                                <a href="#templates_logos">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-red-450 rounded-lg p-2 hover:bg-red-700">
                                        <p className="text-sm font-bold text-gray-100 text-center">Templates &amp; Logos</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#marketing_social">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-red-450 rounded-lg p-2 hover:bg-red-700">
                                        <p className="text-sm font-bold text-gray-100 text-center">Marketing &amp; Social Media</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-2 md:w-1/2">
                                <a href="#guides_publications">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-red-450 rounded-lg p-2 hover:bg-red-700">  
                                        <p className="text-sm font-bold text-gray-100 text-center">Guides &amp; Publications</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-2 md:w-1/2">
                                <a href="#communications_plan">
                                    <div className="h-full flex flex-col items-center md:mx-2 bg-red-450 rounded-lg p-2 hover:bg-red-700">
                                        <p className="text-sm font-bold text-gray-100 text-center">Communications Plan</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                    
                        <div className="mt-5 flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="h-full flex flex-col items-center md:mx-2">
                                    <Image
                                        src="v1630517259/Communications%20page/PtAngeles-sep2019-6435_r1ljqn.jpg"
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
                                        src="v1630517193/Communications%20page/PtAngeles-sep2019-5943_og6md0.jpg"
                                        alt="ptangeles-2019" 
                                        width={600}
                                        height={400}
                                    />
                                    <p className="text-sm italic"></p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="bg-red-450 mt-10 p-2">
                            <h2 className="text-xl text-gray-100 text-center" id="templates_logos">Templates &amp; Logos</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Letterheads &amp; Templates</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31694&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>WSHFC Letterhead**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31690&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>WHEFA Letterhead**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31688&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>TSA Letterhead**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31693&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Powerpoints**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31691&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>WHEFA Memos**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31687&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>TSA Memos**</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView9.aspx?id=31695&dbid=0&repo=WSHFC&cr1&openfile=false" target="_blank"><li>Commission Agenda Sample**</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Official Logos</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/Browse.aspx?id=31679&dbid=0&repo=WSHFC" target="_blank"><li>WA State Housing Finance Commission (WSHFC)</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/Browse.aspx?id=31676&dbid=0&repo=WSHFC" target="_blank"><li>WA Higher Education Facilities Authority (WHEFA)</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/Browse.aspx?id=31674&dbid=0&repo=WSHFC" target="_blank"><li>Tobacco Settlement Authority (TSA)</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-450 mt-16 p-2">
                            <h2 className="text-xl text-gray-100 text-center" id="marketing_social">Marketing &amp; Social Media</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Marketing Materials</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="#"><li>Homeownership**</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Multifamily**</li></a>
                                            <a className="hover:underline text-blue-450" href="#"><li>Asset Management &amp; Compliance**</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Web &amp; Social Media</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31671&dbid=0&repo=WSHFC" target="_blank"><li>Website &amp; Social Media Policy</li></a>
                                            <a className="hover:underline text-blue-450" href="http://www.facebook.com/wshfc" target="_blank"><li>Facebook</li></a>
                                            <a className="hover:underline text-blue-450" href="http://www.twitter.com/wshfc" target="_blank"><li>Twitter</li></a>
                                            <a className="hover:underline text-blue-450" href="https://www.instagram.com/wa_housing_finance/" target="_blank"><li>Instagram</li></a>
                                            <a className="hover:underline text-blue-450" href="https://www.youtube.com/channel/UCMSdmora-KStbypuqOQf3hw" target="_blank"><li>YouTube</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-red-450 mt-16 p-2">
                            <h2 className="text-xl text-gray-100 text-center" id="guides_publications">Guides &amp; Publications</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Guides</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31659&dbid=0&repo=WSHFC" target="_blank"><li>Graphic Standards</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31662&dbid=0&repo=WSHFC" target="_blank"><li>To Hyphenate or Not to Hyphenate</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31661&dbid=0&repo=WSHFC" target="_blank"><li>Style Guide</li></a>
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31660&dbid=0&repo=WSHFC" target="_blank"><li>Quick Style Sheet for Contractors</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-gray-700 text-lg text-center">Publications</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="http://www.wshfc.org/admin/publications.htm" target="_blank"><li>Statewide Annual &amp; Impact Reports</li></a>
                                            <a className="hover:underline text-blue-450" href="http://www.wshfc.org/admin/publications.htm" target="_blank"><li>Other Commission Publications</li></a>
                                            <a className="hover:underline text-blue-450" href="http://www.wshfc.org/Newsletter/index.htm" target="_blank"><li>My View Newsletters</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-450 mt-16 p-2">
                            <h2 className="text-xl text-gray-100 text-center" id="communications_plan">Communications Strategy</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-bold text-gray-700 text-lg text-center"></div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" href="https://kasos.wshfc.org/WebLink/DocView.aspx?id=31653&dbid=0&repo=WSHFC" target="_blank"><li>Communications Plan (2017-19)</li></a>
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