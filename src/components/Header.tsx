import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const links = [
    { href: '/', label: 'Home' }
]

const Header = () => {

    const {locale} = useRouter();
    return (
        <header className='w-full h-fit px-10 py-3 sticky font-lato border-b border-[#967fa5]'>
            <div className='w-full h-fit flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-4'>
                    {links.map((link, linkIndex) => (
                        <Link
                            key={linkIndex}
                            href={link.href}
                            className='text-[#1e1d22] hover:text-[#AC6DDE] transition-colors font-lato font-bold text-lg'
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className='flex flex-row gap-4'>
                    <span className='text-[#1e1d22] font-bold text-lg'>Language</span>
                    <select name="" id="" className='min-w-[200px] bg-white rounded-[3px] px-2 text-[#1e1d22] border-black border'>
                        <option>{locale}</option>
                    </select>
                </div>
            </div>
        </header>
    )
}

export default Header