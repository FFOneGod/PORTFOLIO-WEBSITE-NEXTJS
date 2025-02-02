import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-36 mx-auto mb-2' alt='' />

        <div className="w-max flex items-center gap-2 mx-auto">
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} className='w-6' alt='' />
            greatstackdev@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 William Mark. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://instagram.com/emmanuelmraimi">GitHub</a></li>
            <li><a target='_blank' href="https://instagram.com/emmanuelmraimi">LinkedIn</a></li>
            <li><a target='_blank' href="https://instagram.com/emmanuelmraimi">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
