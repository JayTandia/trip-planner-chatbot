import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

    const menuOptions = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Pricing',
            path: '/pricing'
        },
        {
            name: 'Contact Us',
            path: '/contact-us'
        }
    ]

  return (
    <div className='flex justify-between items-center py-4 px-8'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
            <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
            <h2 className='font-bold'>Agentic Trip Planner</h2>
        </div>

        {/* nav iten */}
        <div className='flex gap-8 items-center'>
            {menuOptions.map((menu, index) => (
                <Link key={index} href={menu.path}>
                    <h2 className='text-lg hover:scale-105 transition-all cursor-pointer hover:text-primary'>{menu.name}</h2>
                </Link>
            ))}
        </div>

        {/* btn */}
        <Button>Get Started</Button>
    </div>
  )
}

export default Header