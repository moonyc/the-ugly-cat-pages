import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/banner/banner'
import Section from '@/components/card/sectionCard'
import { getVideos } from '@/lib/videos'
import NavBar from '@/components/navigation/navbar'


export const getServerSideProps = async () => {
  const newyorkVideos = await getVideos('new york skyline view shorts')
  const franLebowitz = await getVideos('fran lebowitz')
  
  return {
    props: {
      newyorkVideos,
      franLebowitz
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
        <NavBar />
        <section>
            <Banner 
              videoId="y8kTYCex8RU"
              title="Sasha and TaylorSwift"
              subTitle="Directors on Directors"
              imgUrl="/bannerImg.jpg"
            />
        </section>
        <section>
          <Section title="New York" videos={props.newyorkVideos} size="large"/>
          <Section title="Fran" videos={props.franLebowitz} size="small"/>
        </section>
      </main>
    </>
  )
}
