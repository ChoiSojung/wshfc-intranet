import Head from 'next/head'
import Layout from '../components/layout'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>WSHFC Intranet</title>
      </Head>
      <section>
        <p>This is the home page</p>
      </section>
    </Layout>
  )
}
