'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "@/node_modules/next/link"
import Facebook from "./assets/Facebook"
import X from "./assets/x"
import Instagram from "./assets/Instagram"
import Tiktok from "./assets/Tiktok"
import Linkedin from "./assets/Linkedin"

export default function Footer(){
    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen((state) => !state)
    }


    return (
        <footer className='bg-blue md:pb-16 p-5 md:gap-5 gap-4 box-border md:p-7 w-full h-fit min-h-[20vh] md:h-[20vh] grid grid-cols-[15%_85%] grid-rows-[fit-content_40%_40%] md:grid-cols-[20%_40%_40%] md:grid-rows-[80%_20%]'>
            <div className='text-white md:flex md:gap-4 md:justify-around h-fit w-[85%] col-span-2 md:col-start-2 md:col-span-1'>
                <h3 className='font-[800] flex items-center justify-between md:hidden' onClick={toggleOpen}>NAVIGATION <span>
                    <motion.svg
                    animate={{
                        rotate: open ? 180 : 0
                    }}
                    transition={{durtation: 0.5}}
                     xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
                    <path d="M1.99953 2L8.60739 8.49649C9.3856 9.26158 10.6335 9.26158 11.4117 8.49649L18.0195 2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </motion.svg>
                </span>
                </h3>
                {open && (
                    <motion.div
                    className='flex flex-col gap-2'
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'fit-content'}}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                        <Link onClick={toggleOpen} href='/'>Foster</Link>
                        <Link onClick={toggleOpen} href='/'>Volunteer</Link>
                        <Link onClick={toggleOpen} href='/'>Adoptable Dogs</Link>
                        <Link onClick={toggleOpen} href='/'>Adoption Application</Link>
                        <Link onClick={toggleOpen} href='/'>Adoption FAQS</Link>
                        <Link onClick={toggleOpen} href='/'>Board of Directors</Link>
                    </motion.div>
                )}
                <div className='hidden md:flex flex-col gap-3'>
                    <Link onClick={toggleOpen} href='/'>Foster</Link>
                    <Link onClick={toggleOpen} href='/'>Volunteer</Link>
                    <Link onClick={toggleOpen} href='/'>Adoptable Dogs</Link>
                    <Link onClick={toggleOpen} href='/'>Adoption Application</Link>
                </div>
                <div className='hidden md:flex flex-col gap-3'>
                    <Link onClick={toggleOpen} href='/'>Adoption FAQS</Link>
                    <Link onClick={toggleOpen} href='/'>Shop</Link>
                    <Link onClick={toggleOpen} href='/'>Events</Link>
                    <Link onClick={toggleOpen} href='/'>Board of Directors</Link>
                </div>
            </div>
            <div className='md:col-start-3 flex flex-col justify-around md:justify-start gap-5'>
                <p className='flex text-white font-[100]'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 5H18C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8V17C21 17.7956 20.6839 18.5587 20.1213 19.1213C19.5587 19.6839 18.7956 20 18 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V8C2 7.20435 2.31607 6.44129 2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5ZM5 6C4.5 6 4.06 6.17 3.72 6.47L11.5 11.5L19.28 6.47C18.94 6.17 18.5 6 18 6H5ZM11.5 12.71L3.13 7.28C3.05 7.5 3 7.75 3 8V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H18C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17V8C20 7.75 19.95 7.5 19.87 7.28L11.5 12.71Z" fill="#F9F8F8"/>
                </svg></span>info@lucky13rescue.org</p>
                <p className='flex text-white font-[100]'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.7147 8.57146C19.7147 12.84 12.0004 23.1429 12.0004 23.1429C12.0004 23.1429 4.28613 12.84 4.28613 8.57146C4.28613 6.52551 5.09889 4.56335 6.54559 3.11664C7.9923 1.66993 9.95446 0.857178 12.0004 0.857178C14.0464 0.857178 16.0085 1.66993 17.4552 3.11664C18.902 4.56335 19.7147 6.52551 19.7147 8.57146Z" stroke="#F9F8F8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.0001 11.1429C13.4203 11.1429 14.5716 9.99159 14.5716 8.57143C14.5716 7.15127 13.4203 6 12.0001 6C10.58 6 9.42871 7.15127 9.42871 8.57143C9.42871 9.99159 10.58 11.1429 12.0001 11.1429Z" stroke="#F9F8F8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></span>119 W. Gregory Blvd. #7907, Kansas City, Missouri 64114</p>
                <div className='hidden md:flex md:flex-row gap-5 md:row-span-1 md:col-start-3 md:row-start-2'>
                    <Facebook/>
                    <X/>
                    <Instagram/>
                    <Tiktok/>
                    <Linkedin/>
            </div>
            </div>
            <div className='h-full flex flex-col justify-end md:justify-between md:col-start-1 md:row-start-1 text-white font-bold'>
                <h3>Lucky 13 Rescue</h3>
                <p className='font-[100]'>
                Copyright © 2023 Lucky 13 Rescue Inc. - A Lucky Rescue for the Unlucky - All Rights Reserved.
                </p>
            </div>
            <div className='flex md:hidden flex-col gap-5 row-start-2 row-span-2'>
                    <Facebook/>
                    <X/>
                    <Instagram/>
                    <Tiktok/>
                    <Linkedin/>
            </div>
        </footer>
    )
}