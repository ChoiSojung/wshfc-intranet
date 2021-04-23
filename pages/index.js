import Head from 'next/head'
import Layout from '../components/layout'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Intranet</title>
      </Head>
      <section>
        <p>Hi Russ</p>
      </section>
    </Layout>
  )
}
