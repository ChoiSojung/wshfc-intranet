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

                        
                        <div className="bg-gray-450 mt-10 p-2 border-2 border-gray-400">
                            <h2 className="text-xl font-bold text-red-450 text-center" id="templates_logos">Templates &amp; Logos</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className=" bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-350 text-lg text-center">Templates</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Letterheads</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Powerpoints</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Memos</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Commission Agenda Sample</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-blue-350 text-lg text-center">Logos</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>WSHFC</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>WHEFA</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>TSA</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-xl text-blue-350 text-center" id="marketing_social">Marketing &amp; Social Media</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-red-450 text-lg text-center">Marketing Materials</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Homeownership</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Multifamily</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Asset Management &amp; Compliance</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-red-450 text-lg text-center">Social Media</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Web Content and Social Media Use</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Facebook</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Twitter</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Instagram</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>YouTube</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-xl text-blue-350 text-center" id="guides_publications">Guides &amp; Publications</h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:-mx-2">
                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-red-450 text-lg text-center">Guides</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Graphic Standards Guide</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>To Hyphenate or Not to Hyphenate</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Styleguide</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Quick Style Sheet for Contractors</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:w-1/2">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-serif font-bold text-red-450 text-lg text-center">Publications</div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Annual/Impact Reports</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>Commission Newsletters</li></a>
                                            <a className="hover:underline text-blue-450" src="#"><li>History Books</li></a>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-450 mt-16 p-2 border-2 border-gray-400">
                            <h2 className="text-xl text-blue-350 text-center" id="communications_plan">Communications Plan</h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:-mx-2 mb-2">
                            <div className="mt-4 md:w-full">
                                <div className="bg-gray-100 h-full p-8 border-b-4 border-red-450 rounded-lg flex flex-col items-center md:mx-2 md:p-3 md:p-8">
                                    <div className="font-bold text-gray-700 text-lg text-center"></div>
                                    <div className="mt-4 text-gray-700 text-sm text-center">
                                        <ul className="list-decimal list-inside">
                                            <a className="hover:underline text-blue-450" src="#"><li>Communications Plan</li></a>
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