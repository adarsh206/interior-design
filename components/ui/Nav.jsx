import React from 'react'
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import Link from 'next/link';

const links = [
  {path: '/', name:'Home'},
  {path: '/about', name:'About'},
  {path: '/gallery', name:'Gallery'},
  {path: '/projects', name:'Projects'},
  {path: '/contact', name:'Contact'},
]
const Nav = ({containerStyle, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyle}`}>
      {
        links.map((link, index) => {
          return (
            <Link href={link.path} key={index} className={`uppercase ${linkStyles}`}>
            {link.path === path && (
              <motion.span 
              initial={{ y:"-100%" }}
              animate={{ y: 0}}
              transition={{ type: 'tween' }}
              layoutId='underline'
              className={`${underlineStyles}`}
              />
            )}  
            {link.name}
            </Link>
          )
        })
      }
    </nav>
  )
}

export default Nav