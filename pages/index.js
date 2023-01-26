import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Row from '@/components/Row'
import requests from '@/Requests'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <Main />
        {
          requests.map((request, index) => (
            <Row key={index} rowID={index} title={request.title} fetchURL={request.fetchURL} />
          ))
        }   
    </>
  )
}
