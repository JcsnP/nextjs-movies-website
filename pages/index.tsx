import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/home/Hero'
import { Title } from '@/components/shared/Heading'

export default function Home() {
  return (
    <>
      <Hero />
    </>
  )
}
