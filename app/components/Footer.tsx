'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "@/node_modules/next/link"

export default function Footer(){
    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen((state) => !state)
    }


    return (
        <footer className='bg-blue p-4 md:p-7 w-full h-fit min-h-[20vh] md:h-[20vh] grid grid-cols-[25%_75%] grid-rows-[fit-content_40%_40%] md:grid-cols-[20%_40%_40%] md:grid-rows-[80%_20%]'>
            <div className='text-white h-fit w-[85%] col-span-2 md:col-start-2 md:col-span-1'>
                <h3 className='font-[800] flex items-center justify-between' onClick={toggleOpen}>NAVIGATION <span>
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
                        <Link onClick={toggleOpen} href='/'>Shop</Link>
                        <Link onClick={toggleOpen} href='/'>Events</Link>
                        <Link onClick={toggleOpen} href='/'>Board of Directors</Link>
                    </motion.div>
                )}
            </div>
            <div className='bg-lightblue h-[100%] w-[100%] md:col-start-3'>

            </div>
            <div className='bg-black h-[100%] w-[100%] md:col-start-1 md:row-start-1'>

            </div>
            <div className='bg-yellow h-[100%] w-[100%] row-start-2 row-span-2 md:row-span-1 md:col-start-3 md:row-start-2'>

            </div>
        </footer>
    )
}