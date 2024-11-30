'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import logo from '@/public/company images/logo/logo1.png'
import {
  X as CloseIcon,
  Menu as MenuIcon,
  CircleHelp as aboutIcon,
  BriefcaseBusiness as servicesIcon,
  Phone as contactIcon,
} from 'lucide-react'
import { useAuth, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import ShinyButton from './ShinyButton'

const Navbar = () => {
  const { userId } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    ['About', '#about', 'nav-links', aboutIcon],
    ['Destinations', '#destinations', 'nav-links', servicesIcon],
    ['Contact', '#contacts', 'nav-links', contactIcon],
  ]

  return (
    <nav
      className={`navbar w-screen fixed top-0 left-0 h-[40px] md:h-[55px] p-4 md:px-8 flex items-center justify-between shadow-black/15 shadow-lg text-white bg-black z-50`}
    >
      {/* Logo */}
      <Link href={'/'} className="logo">
        <Image src={logo} alt="logo" className="w-16 md:w-24 h-auto" />
      </Link>

      {/* Menu Button (Visible on small screens) */}
      <div
        className="menuBtnDiv block md:hidden  transition-all duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <CloseIcon className="menuBtn closeBtn text-white" />
        ) : (
          <MenuIcon className="menuBtn openBtn text-white" />
        )}
      </div>

      <ul
        className={`${
          menuOpen ? 'menu menuOpen' : 'menu hidden md:flex'
        } flex flex-col md:flex-row items-end md:items-center bg-inherit md:gap-10 absolute md:relative top-[30px] md:top-0 right-[5px] w-2/5 md:w-auto z-40 transition-all duration-300 rounded-b-xl md:rounded-none shadow-black/15 shadow-lg p-4 md:p-0`}
        onClick={() => setMenuOpen(false)}
      >
        {navLinks.map(([title, url, className]) => (
          <li key={title} className="my-1 md:my-0 mr-2 md:mr-0">
            <Link
              href={url}
              className={`${className} text-lg md:text-xl font-extrabold hover:text-orange-500 focus:text-orange-500 `}
            >
              {title}
            </Link>
          </li>
        ))}
        {userId ? (
          <UserButton />
        ) : (
          <Link href={'/sign-in'}>
            <ShinyButton text="Sign In/Up" />
          </Link>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
