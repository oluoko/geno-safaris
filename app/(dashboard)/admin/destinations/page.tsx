'use client'

import { UploadButton } from '@/utils/uploadthing'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Image from 'next/image'
import smallImageTemplate from '@/public/company images/vanPhone.jpg'
import largeImageTemplate from '@/public/company images/bus.jpg'

const Destinations = () => {
  const [mobileImageUrl, setMobileImageUrl] = useState<string>('')
  const [laptopImageUrl, setLaptopImageUrl] = useState<string>('')
  const createDestination = async () => {
    toast.success('Destination created successfully')
  }
  return (
    <div>
      <h2 className="font-bold text-2xl mb-2 md:mb-4">Destinations</h2>

      <div className="grid md:flex justify-between w-full gap-4">
        {/* form for uploading  images */}
        <div className="w-full md:w-1/2 flex justify-between gap-2">
          <div className="small-image-upload">
            <div className="">Upload Destination image for small screens</div>

            <div className="rounded-xl p-2 bg-slate-400/30  text-white text-sm md:text-xl my-2 hover:bg-[#f97316] hover:text-black">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log('Files:: ', res)
                  setMobileImageUrl(res[0].url)
                  toast.success('Image uploaded successfully')
                }}
                onUploadError={(error: Error) => {
                  toast.error(`Error While Uploading image! : ${error.message}`)
                }}
              />
            </div>
            <div className=""></div>
          </div>
          <div className="large-image-upload">
            <div className="">Upload Destination image for large screens</div>

            <div className="rounded-xl p-2 bg-slate-400/30  text-white text-sm md:text-xl my-2 hover:bg-[#f97316] hover:text-black">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log('Files:: ', res)
                  setLaptopImageUrl(res[0].url)
                  toast.success('Image uploaded successfully')
                }}
                onUploadError={(error: Error) => {
                  toast.error(`Error While Uploading image! : ${error.message}`)
                }}
              />
            </div>
            <div className=""></div>
          </div>
        </div>
        {/* form for uploading other details */}{' '}
        <div className="w-full md:w-1/3">
          <div className="grid grid-cols-2">
            {mobileImageUrl !== '' ? (
              <Image
                src={mobileImageUrl}
                alt="Uploaded Image"
                width={100}
                height={200}
                className="rounded-xl  my-1  object-cover"
              />
            ) : (
              <Image
                src={smallImageTemplate}
                alt="small screen image template"
                width={100}
                className="rounded-xl my-1 object-cover"
              />
            )}
            {laptopImageUrl !== '' ? (
              <Image
                src={laptopImageUrl}
                alt="Uploaded Image"
                width={200}
                height={100}
                className="rounded-xl  my-1 object-cover"
              />
            ) : (
              <Image
                src={largeImageTemplate}
                alt="small screen image template"
                width={200}
                className="rounded-xl my-1  object-cover"
              />
            )}
          </div>
        </div>
      </div>

      <div
        className="rounded-xl p-2 bg-slate-400/30 text-white text-sm md:text-xl flex justify-center hover:bg-[#f97316] hover:text-black cursor-pointer"
        onClick={() => createDestination()}
      >
        Create Destination
      </div>
    </div>
  )
}

export default Destinations
