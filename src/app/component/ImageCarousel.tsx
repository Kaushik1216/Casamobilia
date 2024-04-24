'use client'
import React from 'react'
import { useState , useEffect } from 'react'
import styles from '../styles/imageCorousel.module.css'
import HomeCarouselItem from '@/app/component/HomeCarouselItem'
interface imageContainer {
    clientWidth: number;
    scrollLeft: number;
}
// interface Iimage {
//     alt1:string,
//     src1:string,
//     description1:string
//     alt2:string,
//     src2:string,
//     description2:string
//     colorbg2:string
// }
interface Iimage {
    alt:string,
    src:string,
    description:string
}
var images:Iimage[] = [
    {
      alt:"Home Image 1",
      src:"/Home2.jpg",
      description:"Table Lamp , Cushions , Wall Hanging"
    },
    {
      alt:"Home Image 1",
      src:"/image5.jpg",
      description:"Table Lamp , Cushions , Wall Hanging"
    },
    {
      alt:"Home Image 1",
      src:"/images6.jpg",
      description:"Table Lamp , Cushions , Wall Hanging"
    },
    {
      alt:"Home Image 1",
      src:"/images4.jpg",
      description:"Table Lamp , Cushions , Wall Hanging"
    },
    {
      alt:"Home Image 1",
      src:"/images9.jpg",
      description:"Table Lamp , Cushions , Wall Hanging"
    },
    {
      alt:"Home Image 1",
      src:"/Home1.png",
      description:"Table Lamp , Cushions , Wall Hanging"
    },
    {
      alt:"Home Image 1",
      src:"/Home1.png",
      description:"Table Lamp , Cushions , Wall Hanging"
    },
    {
      alt:"Home Image 1",
      src:"/Home1.png",
      description:"Table Lamp , Cushions , Wall Hanging"
    }
  ]

// var images:Iimage[] = [
//     {
//       alt1:"Home Image 1",
//       src1:"/Home2.jpg",
//       description1:"Table Lamp , Cushions , Wall Hanging",
//       alt2:"Home Image 2",
//       src2:"/image5.jpg",
//       description2:"Table Lamp , Cushions , Wall Hanging",
//       colorbg2:'red'
//     },
//     {
//       alt1:"Home Image 3",
//       src1:"/images6.jpg",
//       description1:"Table Lamp , Cushions , Wall Hanging",
//       alt2:"Home Image 4",
//       src2:"/images4.jpg",
//       description2:"Table Lamp , Cushions , Wall Hanging",
//       colorbg2:'red'
//     },
//     {
//       alt1:"Home Image 5",
//       src1:"/images9.jpg",
//       description1:"Table Lamp , Cushions , Wall Hanging",
//       alt2:"Home Image 6",
//       src2:"/Home1.png",
//       description2:"Table Lamp , Cushions , Wall Hanging",
//       colorbg2:'red'
//     }
// ] 
const Imagecarousel = () => {

    const btnpressprev = () => {
        var box1: imageContainer | null = document.querySelector('.imagecontainer1');
        // console.log("prev prev call" , box);
        if (!box1) return; // Handle the case where box is null
        // console.log("prev prev call 2");

        const width = box1.clientWidth;
        box1.scrollLeft = box1.scrollLeft - width;
        var box2: imageContainer | null = document.querySelector('.imagecontainer2');
        if (!box2) return; // Handle the case where box is null

        box2.scrollLeft = box2.scrollLeft - width;
    }

    const btnpressnext = () => {
        var box1: imageContainer | null = document.querySelector('.imagecontainer1');
        if (!box1) return; // Handle the case where box is null
        console.log("before minus " , box1.clientWidth)
        const width = box1.clientWidth;
        box1.scrollLeft = box1.scrollLeft + width;
        var box2: imageContainer | null = document.querySelector('.imagecontainer2');
        if (!box2) return; // Handle the case where box is null
        box2.scrollLeft = box2.scrollLeft + width;
        console.log("after minus " , box1.clientWidth)
    }

    return (
        <div className='imagecarousel'>
            <button className='prebtn' onClick={btnpressprev}><p>&lt;</p></button>
            <button className='nextbtn' onClick={btnpressnext}><p>&gt;</p></button>
            {/* <div className='imagecontainer'> */}
            {/* {
                images.map( (image, i) => <HomeCarouselItem key={i} image={image}/> )
            } */}
            <div className='carouselcontainer '>

            <div className='leftimage imagecontainer1'>
                {
                    images.map( (image, i) => <HomeCarouselItem key={i} image={image}/> )
                }
            </div>
            <div className='rightimage imagecontainer2'>
                {/* <div className='rightborder'> */}
                    {
                        images.map( (image, i) => <HomeCarouselItem key={i} image={image}/> )
                    } 
                {/* </div> */}
            </div>
            </div>
            {/* </div> */}
        </div>

    )
}

export default Imagecarousel