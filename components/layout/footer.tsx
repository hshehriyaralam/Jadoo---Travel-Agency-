import Image from 'next/image'
import React from 'react'
import fb from '@/public/footer/fb.png'
import insta from '@/public/footer/insta.png'
import  X from '@/public/footer/twiter.png'
import  googlePlay  from '@/public/footer/GooglePlay.png'
import  PlayStore from '@/public/footer/PlayStore.png'

const Footer = () => {
  const headingStyle = `text-[#080809] font-semibold   text-[20px] lg:text-left text-center overflow-hidden `
  const liStyling = 'list-none  text-[#5E6282] text-[16px] font-medium lg:text-left text-center  '
  return (
    <section  className='w-full mx-auto px-6'>
      <div  className='max-w-[1617px] min-h-[250px] my-4  '>
        <div className='flex   flex-col lg:flex-row    items-center justify-center lg:gap-20  gap-6'>

          {/* logo */}
          <div  className='hidden lg:flex flex-col  justify-center  max-w-[200px]  '>
            <h2 className='font-poppins text-[44px] text-[#181E4B]  font-medium '>Jadoo.</h2>
            <p  className='text-[#5E6282] font-poppins text-[13px] -font-medium '>Book your trip in minute, get full Control for much longer.</p>
          </div>


          {/* Company */}
          <div  className='flex flex-col  gap-4'>
              <p  className={`${headingStyle}`} >Company</p>

              <div  className={`${liStyling}`}>
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
              </div>
          </div>


          {/* Contact */}
                <div  className='flex flex-col  gap-4'>
              <p  className={`${headingStyle}`} >Contact</p>

              <div  className={`${liStyling}`}>
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affilates</li>
              </div>
          </div>

          {/* More */}
            <div  className='flex flex-col  gap-4'>
              <p  className={`${headingStyle}`} >More</p>

              <div  className={`${liStyling}`}>
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
              </div>
          </div>


             {/* logo */}
          <div  className='lg:hidden flex flex-col  justify-center  items-center  max-w-[200px]  lg:my-0 my-8  '>
            <h2 className='font-poppins text-[44px] text-[#181E4B]  font-medium '>Jadoo.</h2>
            <p  className='text-[#5E6282]  text-[13px] font-medium  text-center '>Book your trip in minute, get full Control for much longer.</p>
          </div>

          
          <div    className='flex flex-col gap-4 items-start'>
            <div  className='flex items-center gap-2 '>
              <Image
              src={fb}
              width={60}
              height={60}
              alt='fb-logo'
              />
                   <Image
              src={insta}
              width={60}
              height={60}
              alt='fb-logo'
              />
                   <Image
              src={X}
              width={60}
              height={60}
              alt='fb-logo'
              />
            </div>
            <div  className='flex flex-col gap-2  mx-3'>
            <p  className='text-[#5E6282]/70 font-medium '>Discover our app</p>
            <div className='flex items-center gap-2'>
                   <Image
              src={googlePlay}
               width={100}
               height={100}
               alt='fb-logo'
               />
                   <Image
              src={PlayStore}
              width={100}
              height={100}
              alt='fb-logo'
              />
            </div>
              </div>
          </div>
        </div>
        <p  className='text-[#5E6282] text-center lg:mt-14  mt-8'>All rights reserved@jado.co</p>
      </div>
    </section>
  )
}

export default React.memo(Footer)  
