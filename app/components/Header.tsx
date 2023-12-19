'use client'
import Logo from "./assets/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "@/node_modules/next/link";


export default function Header(){
    const [open, setOpen] = useState<boolean>(false);
    const toggleOpen = () => {
        setOpen(!open)
    }
    return(
        <header className={`w-screen ${open ? 'bg-blue' : ''}`}>
            <div className='w-[100%] flex justify-between px-[1.3rem] py-[2.8rem] h-[7vh] items-center'>
                <div className='w-[50px]'>
                    <Logo/>
                </div>
                <div className='md:hidden'>
                    <AnimatePresence>
                    <motion.svg
                    layout
                    onClick={toggleOpen}
                    animate={{
                    rotate: open ? 45 : 0,
                    origin: '50% 50%'
                    }}
                    transition={{ duration: 0.5}}
                    width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.rect 
                        animate={{
                        fill: open ? '#1D818B' : 'white'
                        }}
                        width="38" height="38" fill="white"/>
                        <motion.rect
                        animate={{
                        opacity: open ? 0 : 1
                        }}
                        x="7" y="7" width="10" height="10" fill="black"/>
                        <motion.rect 
                        animate={{
                        rotate: open ? 180 : 0,
                        fill: open ? 'white' : 'black',
                        origin: '50% 50%'
                        }}
                        transition={{ duration: 0.7}}
                        x="21" y="7" width="10" height="10" fill="black"/>
                        <motion.rect 
                        animate={{
                        rotate: open ? 180 : 0,
                        fill: open ? 'white' : 'black',
                        origin: '50% 50%'
                        }}
                        transition={{ duration: 0.7}}
                        x="7" y="20" width="10" height="10" fill="black"/>
                        <motion.rect 
                        animate={{
                        opacity: open ? 0 : 1
                        }}
                        x="21" y="20" width="10" height="10" fill="black"/>
                        </motion.svg>
                    </AnimatePresence>
                </div>
                <div className='hidden md:flex justify-around gap-5 w-fit pr-5'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>About Us</Link>
                    <Link href='/'>Get involved</Link>
                    <Link href='/'>Adopt</Link>
                    <Link href='/'>Events</Link>
                    <Link href='/'>Contact</Link>
                </div>
            </div>
             {/* ========================= */}
            <motion.div
                    className={`bg-blue h-[75vh] justify-around text-white flex flex-col text-center font-[900] text-[2.25rem] w-full top-[7vh] left-0 md:hidden ${open ? '' : 'hidden'}`}
                    motion={{
                        display: open ? 'flex' : 'none'
                    }}
                    >
                     <Link href='/'>Home</Link>
                    <Link href='/'>About Us</Link>
                    <Link href='/'>Get involved</Link>
                    <Link href='/'>Adopt</Link>
                    <Link href='/'>Events</Link>
                    <Link href='/'>Contact</Link>   
                    <div></div>
            </motion.div>
        </header>
    )
}


