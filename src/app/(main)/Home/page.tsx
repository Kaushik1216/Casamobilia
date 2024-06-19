'use client'
import React from 'react'
import HomeSection2 from '@/app/component/HomeSection2'
import Imagecarousel from '@/app/component/ImageCarousel'
import Homeproject from '@/app/component/Homeproject'
import Carousel from '@/app/component/Carousel'
import Plx from "react-plx";
import Feedback from '@/app/component/feedback/Feedback'
interface Iimage {
  alt: string,
  srcleft: string,
  srcright:string,
  projectname:string,
  projectplace:string,
  bgcolor:string
}
var images: Iimage[] = [
  {
    alt: "Ambus 1",
    srcleft: "/ambus1.jpg",
    srcright: "/ambus2.jpg",
    projectname: "Ambus",
    projectplace: "Delhi",
    bgcolor:"#746867"
  },
  {
    alt: "Krishna Kunj",
    srcleft: "/krishnakunj1.jpg",
    srcright: "/krishnakunj2.jpg",
    projectname: "Krishna Kunj",
    projectplace: "Delhi Sec 11",
    bgcolor:"#9C956D"
  },
  {
    alt: "PP Steel",
    srcleft: "/ppsteel1.jpg",
    srcright: "/ppSteel2.jpg",
    projectname: "PP Steel",
    projectplace: "Delhi - sec 42",
    bgcolor:"#6F7271"
  },
  {
    alt: "Vivek JI",
    srcleft: "/vivekji1.jpg",
    srcright: "/vivekji2.jpg",
    projectname: "Vivek JI",
    projectplace: "Delhi",
    bgcolor:"#192729"
  }
]

export default function Home() {
  return (
    <>
      {/* <Imagecarousel/> */}
      <Carousel key={1} images={images}/>
        <HomeSection2/>
        <Homeproject/>
        <Feedback/>
    </>
  )
}
