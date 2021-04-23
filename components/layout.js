import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Sidenav from './sidenav'
import Header from './header'

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
        <div className="antialiased flex-1"> 
            <Header></Header>
        </div>

        <div className="flex">
            <Sidenav></Sidenav>
            
            <div className="flex-1">{children}</div>
        </div>
    </div>
      
    )

  }