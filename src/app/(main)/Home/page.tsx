'use client'
import React from 'react'
import HomeSection2 from '@/app/component/HomeSection2'
import Imagecarousel from '@/app/component/ImageCarousel'
import Homeproject from '@/app/component/Homeproject'
export default function Home() {
  return (
    <>
      {/* <div className='warrapcontainer'> */}
      <Imagecarousel/>
        {/* <HomeCarousel /> */}
        <HomeSection2/>
        <Homeproject/>
        {/* </div> */}
    </>
  )
}
