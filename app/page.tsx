import About from '@/components/HomeScreen/About'
import Destinations from '@/components/HomeScreen/Destinations'
import Contacts from '@/components/HomeScreen/Contacts'
import Navbar from '@/components/Navbar'
import { getUserByClerkId } from '@/utils/auth'
import { auth } from '@clerk/nextjs/server'

export default async function HomeScreen() {
  const { userId } = await auth()
  let isAdmin = false
  if (userId) {
    const user = await getUserByClerkId()
    isAdmin = user?.role === 'ADMIN' || user?.role === 'MAIN_ADMIN'
  }
  return (
    <div className="w-screen">
      <Navbar isAdmin={isAdmin} />
      <div
        id="home"
        className="h-screen w-full mt-[60px] md:mt-[70px] p-4 md:px-10"
      >
        Home Life is full of challenges so go strong. Offering a wide range of
        Transport Logistics. East Africa. Beyond Expectations Tours and Travel
        Hotel, Airport,City to City , Private Transfers. Pick ups and Drop off.
        Family,Friends, colleagues Drives. We are here to serve you. TOURS AND
        TRAVEL EXCURSIONS. GEO SITES VISIT. ZURU. HOTEL.AIR PORT.WORK.FAMILY
      </div>
      <About />
      <Destinations />
      <Contacts />
    </div>
  )
}
