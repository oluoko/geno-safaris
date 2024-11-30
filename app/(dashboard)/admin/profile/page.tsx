import { getUserByClerkId } from '@/utils/auth'
import Image from 'next/image'

const AdminProfile = async () => {
  const user = await getUserByClerkId()
  return (
    <div>
      <h2 className="font-bold text-2xl">Admin Profile</h2>
      <div className="flex"></div>
    </div>
  )
}

export default AdminProfile
