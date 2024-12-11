'use client'

import { toast } from 'react-toastify'

const Destinations = () => {
  const createDestination = async () => {
    toast.success('Destination created successfully')
  }
  return (
    <div>
      <h2 className="font-bold text-2xl mb-2 md:mb-4">Destinations</h2>

      <div
        className="rounded-xl p-2 bg-slate-400/30 text-white text-sm md:text-xl"
        onClick={() => createDestination()}
      >
        Create Destination
      </div>
    </div>
  )
}

export default Destinations
