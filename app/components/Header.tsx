'use client'
import Logo from "./assets/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";


export default function Header(){
    const [open, setOpen] = useState<boolean>(false);
    const [showGetinvolved, setShowGetinvolved] = useState<boolean>(false);
    const [showAdopt, setShowAdopt] = useState<boolean>(false);


    const toggleOpen = () => {
        setOpen((state) => !state)
        setShowAdopt(false)
        setShowGetinvolved(false)
    }
    const toggleInvolved = () => {
        setShowGetinvolved((state) => !state)
        setShowAdopt(false)
    }
    const toggleAdopt = () => {
        setShowAdopt((state) => !state)
        setShowGetinvolved(false)
    }



    return(
        <header className={`w-screen fixed top-0 md:bg-white ${open ? 'bg-blue' : ''}`}>
            <div className='w-[100%] flex justify-between px-[1.3rem] py-[2.8rem] h-[10vh] items-center'>
                <div className='w-[50px]'>
                    <Image alt='' height={2000} width={2000} src={'/Screenshot 2023-12-13 at 5.31.33 AM.png'} />
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
                        fill: open ? '#1D818B' : '#F9F8F8'
                        }}
                        transition={{duration: 0}}
                        width="38" height="38" fill="#F9F8F8"/>
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
                    <Link href='/about-us'>About Us</Link>
                    <details className="dropdown">
                    <summary className="cursor-pointer">Get involved</summary>
                    <ul className="flex flex-col dropdown-content z-[1] menu">
                    <Link href='/get-involved/donate'>Donate</Link>
                    <Link href='/get-involved/foster'>Foster</Link>
                    <Link href='/get/involved/volunteer'>Volunteer</Link>
                    </ul>
                    </details>
                    <details className="dropdown">
                    <summary className="cursor-pointer">Get involved</summary>
                    <ul className="flex flex-col dropdown-content z-[1] menu">
                    <Link href='/adopt/adoptable-dogs'>Adoptable Dogs</Link>
                    <Link href='/adopt/adoption-qualifications'>Adoption Qualifications</Link>
                    <Link href='adopt/adoption-application'>Adoption Application</Link>
                    </ul>
                    </details>
                    <Link href='/events'>Events</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
            </div>
             {/* ========================= */}
            {open && (<motion.div
                    className={`bg-gradient-to-b from-blue to-lightblue h-[80vh] overflow-scroll justify-around text-white flex flex-col text-center font-[900] text-[2.25rem] w-full pt-0 left-0 md:hidden ${open ? '' : 'hidden'}`}
                    >
                    <Link onClick={toggleOpen} href='/'>Home</Link>
                    <Link onClick={toggleOpen} href='/about-us'>About Us</Link>
                    <p className='cursor-pointer' onClick={toggleInvolved}>Get involved</p>
                    <AnimatePresence>
                        {showGetinvolved && (
                        <motion.div
                        className='flex flex-col gap-5 font-[500] text-[1.5rem]'
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'fit-content'}}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div></div>
                            <Link onClick={toggleOpen} href='/get-involved/donate'>Donate</Link>
                            <Link onClick={toggleOpen} href='/get-involved/foster'>Foster</Link>
                            <Link onClick={toggleOpen} href='/get-involved/volunteer'>Volunteer</Link>
                            <div></div>
                        </motion.div>
                        )}
                     </AnimatePresence>
                    <p className='cursor-pointer' onClick={toggleAdopt}>Adopt</p>
                    <AnimatePresence>
                        {showAdopt && (
                        <motion.div
                        className='flex flex-col gap-5 font-[500] text-[1.5rem]'
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'fit-content' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.7 }}
                        >
                            <div></div>
                            <Link onClick={toggleOpen} href='/adopt/adoptable-dogs'>Adoptable Dogs</Link>
                            <Link onClick={toggleOpen} href='/adopt/adoption-qualifications'>Adoption Qualifications</Link>
                            <Link onClick={toggleOpen} href='/adopt/adoption-application'>Adoption Application</Link>
                            <div></div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    <Link onClick={toggleOpen} href='/events'>Events</Link>
                    <Link onClick={toggleOpen} href='/contact'>Contact</Link>   
                    <div></div>
                    <div></div>
            </motion.div>)}
        </header>
    )
}


