import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/banner/banner'
import Card from '@/components/banner/card/card'
import Section from '@/components/banner/card/sectionCard'
import { getVideos } from '@/lib/videos'



export async function getServerSideProps() {
  const newyorkVideos = await getVideos('new york skyline view shorts')
  const puppetHistory = await getVideos('puppet history')
  
  return {
    props: {
      newyorkVideos,
      puppetHistory
    }
  }
}

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
      <Head>
        <title>The Ugly Cat</title>
        <meta name="description" content="A streaming platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <section>
            <Banner />
        </section>
        <section>
          <Section title="New York" videos={props.newyorkVideos} size="large"/>
          <Section title="Coding Adventures" videos={props.puppetHistory} size="small"/>
        </section>
      </main>
    </>
  )
}
