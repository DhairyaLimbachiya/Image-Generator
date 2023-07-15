import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomeHero from '@/components/HomeHero'
import HowtoGenerate from '@/components/HowtoGenerate'
import ImageGenerator from '@/components/ImageGenerator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Artify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero />
      <HowtoGenerate />
      <ImageGenerator />
    </>
  )
}
