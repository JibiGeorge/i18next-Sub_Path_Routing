import React, { ReactNode } from 'react'
import Header from './Header';

interface LayoutProps {
    children: ReactNode;
  }

  const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full h-screen bg-white'>
        <Header/>
        {children}
    </div>
  )
}

export default Layout