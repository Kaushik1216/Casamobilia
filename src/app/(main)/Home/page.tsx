'use client'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import HomeCarouselfirst from '@/app/component/HomeCarouselItem'
import HomeCarousel from '@/app/component/HomeCarousel'
import styles from "./Home.module.css"
import { Grid } from '@mui/material'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import HomeSection2 from '@/app/component/HomeSection2'
import Imagecarousel from '@/app/component/ImageCarousel'
export default function Home() {
  return (
    <>
      {/* <div className='warrapcontainer'> */}
      <Imagecarousel/>
        {/* <HomeCarousel /> */}
        <HomeSection2/>
        {/* </div> */}
    </>
  )
}
