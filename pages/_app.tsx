import Navbar from '@/components/Navbar'
import { Title } from '@/components/shared/Heading'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ 
  Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
