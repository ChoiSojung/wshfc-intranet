import * as React from 'react'
import Head from 'next/head'
import Sidenav from './sidenav'
import Header from './header'
import Footer from './footer'

const navigation = [
    { name: 'About', href: '/', current: true },
    { name: 'HR & Finance', href: 'hr-finance', current: false },
    { name: 'IT', href: '/', current: false },
    { name: 'Communications', href: '/', current: false },
    { name: 'Employee Resources', href: '/', current: false },
    { name: 'Combined Fund Drive', href: '/', current: false }
  ]

export default function Layout({children, home}) {
    
    return (
    <div>
        <Head>
            <title>Intranet | WSHFC </title>
        </Head>
        <div className="antialiased flex-1"> 
            <Header></Header>
        </div>

        <div className="flex flex-col items-center bg-blue-500">
            <div className="max-w-7xl w-full">
            <div className="flex-1 h-screen">
                {children}
            </div>
            </div>
        </div>

        <div className="flex-1">
            <Footer></Footer>
        </div>
        

    </div>
      
    )

  }