"use client"

import React, { useState } from 'react'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import Sidebar from '../sidebar';
import SidebarToggle from '../sidebar1';



const Header = () => {
    const [isMenuOpen,setIsMenuOpen]=React.useState(false);
    const [lang, setLang] = useState("fr");

  const toggleLang = () => {
    setLang(lang === "fr" ? "en" : "fr");
  };
    return (
        <header className='sticky top-0 z-[100] h-20 flex items-center justify-between px-0 lg:px-4 md:px-4 sm:px-4 py-4 bg-blue-700 w-full'>

            <nav className='flex items-center gap-6 '>
            <SidebarToggle />
            {/* <Link href={"/"} className='text-2xl font-bold hoover:text-foreground/65 text-white flex items-center'>
                Fare Calculator
            </Link> */}
            {/* <h2 className='font-bold text-white items-center text-2xl'>Fare Calculator</h2> */}
            <Link href={'#'} scroll={true} className='font-bold text-white items-center text-xl lg:text-3xl sm:text-3xl md:text-3xl ml-0'>School & CO</Link>
            </nav>
            <div className='flex items-center gap-4'>
            {/* <Link href={"/statistiques"} className='hidden lg:flex text-white  font-medium mr-4 text-[18px] hover:text-violet-800 dark:text-white dark:hover:text-violet-600'>
                        Tableau de bord
                </Link> */}
                {/* <Link href={"/aide1"} className='hidden lg:flex text-white text-sm font-medium text-[18px] hover:text-violet-800 dark:text-white dark:hover:text-violet-600'>
                    Aide
                </Link> */}
            {/* <Button onClick={toggleLang} className='hidden sm:flex mr-6 bg-transparent border-none shadow-none text-white text-[18px] hover:text-violet-800 cursor-pointer dark:hover:text-violet-600 hover:bg-transparent dark:bg-[#0D1B2A] dark:hover:bg-[#0D1B2A]'><span className='text-xl text-white dark:text-violet-400'><FaGlobe /></span>{lang === "fr" ? "English" : "Français"}</Button> */}
            {/* <ModeToggle /> */}
                {/* <Link href={"/inscription1"} className='hidden lg:flex'>
                <Button className='cursor-pointer bg-transparent dark:bg-[#0D1B2A] hover:bg-transparent dark:hover:bg-[#0D1B2A] hover:text-violet-800 dark:hover:text-violet-600 text-[18px] text-white'>S'inscrire</Button>
                </Link> */}
                {/* <Link href={"/connexion"} >
                <button className='cursor-pointer bg-transparent dark:bg-[#0D1B2A] hover:text-violet-800 hover:bg-transparent dark:hover:bg-[#0D1B2A] dark:hover:text-violet-600 lg:text-[18px] md:text-[18px] sm:text-[18px] text-[16px] text-white'>Deconnexion</button>
                </Link> */}
                <div className='hidden sm:flex'>
                </div>
            </div>
        </header>
  )
}

export default Header