import Image from 'next/image'

const AuthImage = ({ textColor }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div
        className={`text-xl md:text-2xl font-bold w-2/3 mb-4 text-${textColor}`}
      >
        Welcome to Geno Safaris. For the best travel experience in East Africa.
        Tours and Travel Hotel, Airport,City to City , Private Transfers. Pick
        ups and Drop off.
      </div>
      <Image
        src="/company images/logo/logo1.png"
        alt="Geno Safaris Logo"
        width={320}
        height={180}
        className="w-2/5"
      />
      <div className={`text-5xl mt-4 text-${textColor}`}>
        Beyond Expectations
      </div>
    </div>
  )
}

export default AuthImage
