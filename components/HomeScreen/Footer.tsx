import Link from 'next/link'
import {
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6'

const Footer = () => {
  const socials = [
    {
      href: 'https://www.facebook.com/genosafaris.co.ke',
      label: 'Facebook',
      icon: FaFacebookF,
    },
    {
      href: 'https://www.instagram.com/geno_safaris_539_ke_/',
      label: 'Instagram',
      icon: FaInstagram,
    },
    {
      href: 'https://www.tiktok.com/@geno_safaris',
      label: 'TikTok',
      icon: FaTiktok,
    },
    { href: 'https://x.com/genosafaris', label: 'Twitter', icon: FaXTwitter },
  ]

  const briansSocials = [
    {
      href: 'https://www.facebook.com/profile.php?id=100070284942061',
      label: 'Facebook',
      icon: FaFacebookF,
    },
    { href: 'https://github.com/oluoko', label: 'Github', icon: FaGithub },
    {
      href: 'https://instagram.com/that_guy.brian',
      label: 'Instagram',
      icon: FaInstagram,
    },
    {
      href: 'https://www.linkedin.com/in/brianoluoko',
      label: 'Linkedin',
      icon: FaLinkedin,
    },
    {
      href: 'https://tiktok.com/@that_guy.brian',
      label: 'Tiktok',
      icon: FaTiktok,
    },
    { href: 'https://x.com/@oluoko_', label: 'Twitter', icon: FaXTwitter },
  ]
  return (
    <div className="w-full h-[270px] md:h-[350px] bg-black text-slate-400/80 p-2 md:px-10 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full h-10/12">
        <div className="grid my-4 md:my-2 mx-3 md:mx-6 content-start h-full">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 grid ">
            <span>Geno Safaris</span>
            <span className="text-sm md:text-base text-white/60">
              Beyond Expectations.
            </span>
          </h3>

          <span className=" text-xs">
            Copyrights © 2024 Geno Safaris. All Rights Reserved
          </span>
        </div>

        <div className="grid my-4 md:my-2 mx-3 md:mx-6 content-start  h-full">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 ">
            Follow us on:
          </h3>
          <p className="mb-2">
            Join the thousands of other followers on our social platforms and
            get our latest offers.
          </p>
          <div className="w-full flex gap-2">
            {socials.map((social) => (
              <Link href={social.href} key={social.href} target="_blank">
                <div className="rounded-full border hover:text-[#f97316] hover:border-[#f97316] border-slate-400/80 size-[30px] p-[5px]">
                  <social.icon className="size-full " />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid my-4 md:my-2 mx-3 md:mx-6 content-start h-full">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 ">
            Write to our email:
          </h3>
          <p className="mb-2">For any inquiries or feedback write to us at:</p>
          <a href="mailto:genosafaris@gmail.com" className="mb-2">
            <span className="text-white hover:text-[#f97316] ">
              genosafaris@gmail.com
            </span>
          </a>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 ">
            Quick Access
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/">
              <span className=" hover:text-[#f97316]">Home</span>
            </Link>
            <Link href="/destinations">
              <span className=" hover:text-[#f97316]">Destination</span>
            </Link>
            <Link href="/blog">
              <span className=" hover:text-[#f97316]">Blog</span>
            </Link>
          </div>
        </div>

        <div className="grid my-4 md:my-2 mx-3 md:mx-6 content-start  h-full">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 ">
            Created by:
          </h3>
          <p className="mb-2">
            Reach out to the developer of this site for any queries or
            suggestions.
          </p>
          <div className="w-full flex gap-2">
            {briansSocials.map((social) => (
              <Link href={social.href} key={social.href} target="_blank">
                <div className="rounded-full border hover:text-[#f97316] hover:border-[#f97316] border-slate-400/80 size-[30px] p-[5px]">
                  <social.icon className="size-full " />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
