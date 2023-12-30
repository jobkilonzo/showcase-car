import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {footerLinks} from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16
        px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
            <h2 className='font-semibold'>CarHire</h2>
         
                <p className='text-base text-gray-700'>Carhire {new Date().getFullYear()} <br/>
                All rights reserved &copy;
                </p>
            </div>
            <div className='footer__links'>
                {footerLinks.map((links) => (
                    <div key={links.title} className='footer__link'>
                        <h3 className='font-bold'>{links.title}</h3>
                        {links.links.map((item) => (
                            <Link key={item.title} 
                             href={item.url}
                             className='text-gray-500'
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            </div>
            <div className='flex justify-between items-center flex-wrap mt-10
            border-t border-gray-100 sm:px-16 px-6 py-10'>
                <p>@{new Date().getFullYear()} Carhire. All rights Reserved</p>
                <div className='footer__copyrights-link'>
                    <Link href="/" className='text-gray-500'>
                        Privacy Policy
                    </Link>
                    <Link href="/" className='text-gray-500'>
                            Terms of Use
                    </Link>
                </div>
            </div>
        
    </footer>
  )
}

export default Footer