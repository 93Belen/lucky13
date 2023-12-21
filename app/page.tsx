'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [scroll, setScroll] = useState(false)

  const scrollUp = () => {
    setScroll(true)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
    <motion.div
    onClick={scrollUp}
    transition={{ duration: 2}}
    layout
     className={`bg-blue fixed ${!scroll ? 'top-0': 'top-[-200vh]'} h-screen w-screen`} >
      <div className='absolute top-0 left-0 text-white text-center w-full h-full flex flex-col pt-[5rem] md:pt-[19rem]'>
        <h1 className='text-[2rem] font-[700] md:text-[4.5rem]'>Lucky 13 Rescue</h1>
        <p className='text-[1rem] font-[300] md:text-[1.25rem]'>You can't change a dog's past, but you can rewrite their future!</p>
        <p className='text-[1rem] font-[500] md:text-[1.25rem]'>Adopt • Foster • Volunteer • Donate • Advocate</p>
        <div className='h-full flex items-end pb-[20vh] mx-auto animate-bounce'>
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32" fill="none">
          <path d="M21.5 3C21.5 1.61929 20.3807 0.5 19 0.5C17.6193 0.5 16.5 1.61929 16.5 3H21.5ZM17.2322 30.7678C18.2085 31.7441 19.7915 31.7441 20.7678 30.7678L36.6777 14.8579C37.654 13.8816 37.654 12.2986 36.6777 11.3223C35.7014 10.346 34.1184 10.346 33.1421 11.3223L19 25.4645L4.85786 11.3223C3.88155 10.346 2.29864 10.346 1.32233 11.3223C0.34602 12.2986 0.34602 13.8816 1.32233 14.8579L17.2322 30.7678ZM16.5 3V29H21.5V3H16.5Z" fill="white"/>
        </svg>
        </div>
      </div>
      <Image className='mix-blend-overlay object-cover h-full w-full object-center relative top-0'  alt='' height={2000} width={2000} src={'/IMG_6059 2.jpg.jpg'} />
    </motion.div>
    </>
  )
}
