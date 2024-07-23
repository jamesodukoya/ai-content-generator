"use client"
import { FileClockIcon, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path:'/dashboard'
        },
        {
            name: 'History',
            icon: FileClockIcon,
            path:'/dashboard/history'
        },
        {
            name: 'Billing',
            icon: Wallet,
            path:'/dashboard/billing'
        },
        {
            name: 'Settings',
            icon: Settings,
            path:'/dashboard/settings'
        }
    ]

    const path = usePathname();
    useEffect(() => {
        console.log(path)
    },[])

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
          <Image src={'/logo.svg'} alt='logo' height={120} width={100}/>
        </div>
        <hr className='my-6 border' />  
        <div className='mt-3'>
              {MenuList.map((menu, index) => (
                  <div className={`flex gap-2 mb-2 p-3
                  hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                  ${path==menu.path&&'bg-primary text-white'}
                  `}>
                      <menu.icon className='h-6 w-6'/>
                      <h2>{menu.name}</h2>
                  </div>
              ))}
        </div>  
    </div>
  )
}

export default SideNav