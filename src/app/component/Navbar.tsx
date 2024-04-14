'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleclick = () => {
    setOpen(!open);
  }
  const logostyle = {
    width: "40%",
    height: "90%"
  }
  return (
    <>
      <div>
        <nav>
          <div className="logo">
                <Image
                  priority={true}
                  src="/logo.png"
                  width={115}
                  height={70}
                  alt="Casamobilia logo"
                  style={logostyle}
                  quality={100}
                />
          </div>
          <div className={`hamburger ${open ? 'toggle' : ''}`} onClick={handleclick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            <Link href='/' style={{ textDecoration: 'none' }}><li className={`${open ? 'fade' : ''}`} onClick={handleclick}><a  >Home</a></li></Link>
            <Link href='/about' style={{ textDecoration: 'none' }}><li className={`${open ? 'fade' : ''}`} onClick={handleclick}><a >About</a></li></Link>
            <Link href='' style={{ textDecoration: 'none' }}><li className={`${open ? 'fade' : ''}`} onClick={handleclick}><a >portfolio</a></li></Link>
            <Link href='' style={{ textDecoration: 'none' }} ><li className={`${open ? 'fade' : ''}`} onClick={handleclick}><a >Projects</a></li></Link>
            <Link href='' style={{ textDecoration: 'none' }}><li className={`${open ? 'fade' : ''}`} onClick={handleclick}><a >Contact Us</a></li></Link>
          </ul>
        </nav>
      </div>
    </>
  )
}
