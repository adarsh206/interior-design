'use client';

import React from 'react'
import ThemeToggler from './ThemeToggler'
import Logo from './ui/Logo';
import Nav from './ui/Nav';
import Mobilenavigation from './ui/Mobilenavigation';

const Header = () => {
  return (
    <header>
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
                {/**Logo Section */}
                <Logo />
                <div>
                  {/** Nav Section */}
                   <Nav />
                    {/** Theme Toggler */}
                    <ThemeToggler />

                    {/**Mobile Navigation */}
                    <div>
                      <Mobilenavigation />
                    </div>
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header