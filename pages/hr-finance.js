import Head from 'next/head'
import Layout from '../components/layout'
import Card from '../components/card'

export default function HrFinance(){
    return (
        <Layout>
            <Head>
                <title>Intranet</title>
            </Head>
            
            <div className="flex flex-wrap">
                <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
                    <h1>Welcome</h1>
                    <ul>
                        <li className="py-2">Link</li>
                        <li className="py-2">Link</li>
                        <li className="py-2">Link</li>
                        <li className="py-2">Link</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}