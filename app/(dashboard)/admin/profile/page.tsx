'use client'

import { prisma } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

const AdminProfile = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl">Admin Profile</h2>
      <div className="flex"></div>
    </div>
  )
}

export default AdminProfile
