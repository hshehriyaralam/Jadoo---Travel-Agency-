import Image from 'next/image'
import React from 'react'
import logo from '@/public/hero/Logo.webp'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const navLinks = [
    {
      id : 1,
      text : 'Desitnations',
      link : '/',
      border : false,

    },
     {
      id : 2,
      text : 'Hotels',
      link : '/',
      border : false,

    },
     {
      id : 3,
      text : 'Flight',
      link : '/',
      border : false,

    },
     {
      id : 4,
      text : 'Booking',
      link : '/',
      border : false,

    },
     {
      id : 5,
      text : 'Login',
      link : '/',
      border : false
    },
    {
      id : 6,
      text : 'SignUp',
      link : '/',
      border : true
    },


  ]
  return (
    <div  className=' w-full py-6  flex  justify-between   z-50   '>
      {/* logo div */}
      <Link
      href={'/'}
      className='mx-20'>
        <Image
        width={120}
        height={120}
        src={logo}
        alt='logo'
        />
      </Link>

      <div  className='flex  items-center gap-8  py-1  mt-2 mx-24 '>
        {
          navLinks.map((link) => (
            <Link  
             key={link.id}
             href={`${link.link}`}>
            <ul >
              <li
               className={`text-[#212832] font-semibold  font-md   cursor-pointer     px-2  ${link.border && 'border  rounded  py-0.5'}`} >{link.text}</li>
              </ul>
               </Link>
          ))
        }

        <div  className='flex items-center  font-semibold  group  relative  cursor-pointer'>
          <p>EN</p>
          <ChevronDown  className='text-black w-5 h-5   group-hover:rotate-180  transition duration-300 ' />
        </div>

      </div>
    </div>
  )
}

export default React.memo(Navbar)
