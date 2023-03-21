import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="text-gray-300 bg-gray-900 body-font relative min-h-screen pb-12 ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-7xl mx-auto'>
        <Navbar />
        <Dashboard />
      </main>
    </div>
  )
}