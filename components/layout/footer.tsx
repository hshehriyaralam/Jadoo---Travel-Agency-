"use client"
import Image from 'next/image'
import React from 'react'
import fb from '@/public/footer/fb.png'
import insta from '@/public/footer/insta.png'
import  X from '@/public/footer/twiter.png'
import  googlePlay  from '@/public/footer/googlePlay.png'
import  PlayStore from '@/public/footer/appStore.png'
import { motion } from "framer-motion";


const Footer = () => {
  const headingStyle = `text-[#080809] font-semibold   text-[20px] text-left  overflow-hidden `
  const liStyling = 'list-none  text-[#5E6282] text-[16px] font-medium text-left    cursor-pointer'
  return (
     <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration:  0.6}}
        >

    <section  className='w-full mx-auto px-6'>
      <div  className='max-w-[1617px] min-h-[250px] '>
        <div className={`hidden lg:flex   flex-col lg:flex-row    items-center justify-center lg:gap-20  gap-6 `}>

          {/* logo */}
          <div  className='flex flex-col  justify-center  max-w-[200px] items-center '>
            <h2 className='font-poppins text-[44px] text-[#181E4B]  font-medium '>Jadoo.</h2>
            <p  className='text-[#5E6282] font-poppins text-[13px] font-medium text-center '>Book your trip in minute, get full Control for much longer.</p>
          </div>


          {/* Company */}
          <div  className='flex flex-col  gap-4'>
              <p  className={`${headingStyle}`} >Company</p>

              <div  className={`${liStyling} `}>
                <li  className='hover:text-orange-600'>About</li>
                <li className='hover:text-orange-600'>Careers</li>
                <li className='hover:text-orange-600'>Mobile</li>
              </div>
          </div>


          {/* Contact */}
                <div  className='flex flex-col  gap-4'>
              <p  className={`${headingStyle}`} >Contact</p>

              <div  className={`${liStyling}`}>
                <li className='hover:text-orange-600'>Help/FAQ</li>
                <li className='hover:text-orange-600'>Press</li>
                <li className='hover:text-orange-600'>Affilates</li>
              </div>
          </div>

          {/* More */}
            <div  className='flex flex-col  gap-4'>
              <p  className={`${headingStyle}`} >More</p>

              <div  className={`${liStyling}`}>
                <li className='hover:text-orange-600'>Airlinefees</li>
                <li className='hover:text-orange-600'>Airline</li>
                <li className='hover:text-orange-600'>Low fare tips</li>
              </div>
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
            <p  className='text-[#5E6282]/70 font-medium text-center '>Discover our app</p>
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






        {/*  for mobile  */}
   <div className={`lg:hidden flex flex-col  w-full  items-center    gap-10`}>
 
        <div className='flex items-center  justify-center gap-x-20      w-full '>
          {/* Company */}
          <div  className='flex flex-col gap-4   '>
              <p  className={`${headingStyle}`} >Company</p>

              <div  className={`${liStyling} `}>
                <li  className='hover:text-orange-600'>About</li>
                <li className='hover:text-orange-600'>Careers</li>
                <li className='hover:text-orange-600'>Mobile</li>
              </div>
          </div>

              {/* Contact */}
                <div  className='flex flex-col  gap-4 '>
              <p  className={`${headingStyle}`} >Contact</p>

              <div  className={`${liStyling}`}>
                <li className='hover:text-orange-600'>Help/FAQ</li>
                <li className='hover:text-orange-600'>Press</li>
                <li className='hover:text-orange-600'>Affilates</li>
              </div>
          </div>
        </div>


      
        <div className='flex items-start  justify-center gap-x-14      w-full'>
          {/* More */}
            <div  className='flex flex-col  gap-4   '>
              <p  className={`${headingStyle}  mx-1`} >More</p>

              <div  className={`${liStyling}  mx-1`}>
                <li className='hover:text-orange-600'>Airlinefees</li>
                <li className='hover:text-orange-600'>Airline</li>
                <li className='hover:text-orange-600'>Low fare tips</li>
              </div>
          </div>



          {/* logos */}
          <div  className='flex flex-col  justify-center  max-w-[100px] items-center  '>
            <h2 className='font-poppins lg:text-[44px]  text-[28px] text-[#181E4B]  font-medium '>Jadoo.</h2>
            <p  className='text-[#5E6282] font-poppins text-[13px] font-medium text-center '>Book your trip in minute, get full Control for much longer.</p>
          </div>

      </div>


          
          <div    className='flex flex-col gap-4 items-start  my-4'>
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
            <p  className='text-[#5E6282]/70 font-medium   text-center'>Discover our app</p>
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
        <p  className='text-[#5E6282] text-center lg:mt-14  my-8 '>All rights reserved@jado.co</p>
      </div>
    </section>
        </motion.div>

  )
}

export default React.memo(Footer)  
