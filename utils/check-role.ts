'use client'
import { useUser } from '@clerk/nextjs'

export const useIsAdmin = () => {
  const { user } = useUser()
  return (
    user?.publicMetadata.role === 'admin' ||
    user?.publicMetadata.role === 'main_admin'
  )
}

export const useIsMainAdmin = () => {
  const { user } = useUser()
  return user?.publicMetadata.role === 'main_admin'
}
