'use client'

import { ReactNode, useEffect, useState } from 'react'
import {
  UserRound,
  House,
  BookMarked,
  Users,
  Car,
  TramFront,
  LayoutDashboard,
  EllipsisVertical,
  List,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import AdminFallBack from '@/components/Admin/AdminFallback'
import { useAuth } from '@clerk/nextjs'

interface AdminLayoutProps {
  children: ReactNode
}

const links = [
  { href: '/admin', title: 'Home', icon: House },
  { href: '/admin/dashboard', title: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/requests', title: 'Requests', icon: Car },
  { href: '/admin/bookings', title: 'Bookings', icon: BookMarked },
  { href: '/admin/destinations', title: 'Destinations', icon: TramFront },
  { href: '/admin/users', title: 'Users', icon: Users },
  { href: '/admin/profile', title: 'Profile', icon: UserRound },
]

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const path = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(false)
    }
    handleResize()
  }, [])

  const { user } = useUser()

  const isAdmin =
    user?.publicMetadata.role === 'admin' ||
    user?.publicMetadata.role === 'main_admin'

  if (!isAdmin) return <AdminFallBack />

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="h-screen w-screen relative bg-black text-slate-200 flex ">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-[50] md:w-[250px] ' : 'w-[40px] md:w-[60px]'
        } transition-all duration-300 h-full border-r border-slate-400/30 overflow-hidden flex flex-col items-center `}
      >
        <Link href="/" className=" h-[60px] p-4 text-center">
          <Image
            className="h-full mb"
            src="/company images/logo/logo1.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>

        <ul className="mt-5 w-10/12">
          {links.map((link) => (
            <li key={link.href} className="mb-2 md:mb-4 text-[8px] md:text-lg">
              <Link
                href={link.href}
                className={`flex px-1 md:px3 md:py-2 py-1 items-center md:gap-2 hover:bg-slate-100/10  rounded-full ${
                  path === link.href &&
                  'bg-slate-100/10 border border-slate-400/30 text-[#f97316]'
                }`}
              >
                <link.icon className="size-[10px] md:size-6 mx-1 md:mx-2 " />

                {isSidebarOpen && <span className=""> {link.title} </span>}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        <header className="p-2 md:p-4 h-[60px] border-b border-slate-400/30 flex items-center justify-between">
          <div
            className="h-full flex items-center justify-end cursor-pointer"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <EllipsisVertical className="size-6 md:size-8" />
            ) : (
              <List className="size-6 md:size-8" />
            )}
          </div>
          <div className="px-0 md:px-6 h-full flex items-center justify-end">
            <UserButton />
          </div>
        </header>

        <div className="flex-1 overflow-auto p-2 md:p-4 h-[calc(100vh-60px)]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
