'use client'

import { ReactNode } from 'react'

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen w-screen relative bg-slate-950 text-slate-300 flex">
      {children}
    </div>
  )
}

export default DashboardLayout
