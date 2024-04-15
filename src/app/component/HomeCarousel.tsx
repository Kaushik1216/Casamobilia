'use client'
import React from 'react'
// import Carousel from 'react-material-ui-carousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeCarouselItem from '@/app/component/HomeCarouselItem'
import styled from 'styled-components'
import styles from '../styles/HomeCorousel.module.css'

interface Iimage {
  alt:string,
  src:string,
  description:string
}

export default function HomeCarousel() {

var images:Iimage[] = [
  {
    alt:"Home Image 1",
    src:"/Home2.jpg",
    description:"Table Lamp , Cushions , Wall Hanging"
  },
  {
    alt:"Home Image 1",
    src:"/Home1.png",
    description:"Table Lamp , Cushions , Wall Hanging"
  }
]
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };
  return (
    <>
    <div className='warrapcontainer'>
      <div className="homecorousel" style={{position:"relative"}}>
      {/* <Carousel
      fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
    //   navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
    //       style: {
    //           backgroundColor: 'cornflowerblue',
    //           display:'block'
    //       }
    //   }} 
      navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
              display:'block'
          }
      }}
    NextIcon={<Nextslide/>}
      >
            {
                images.map( (image, i) => <HomeCarouselItem key={i} image={image}/> )
            }
        </Carousel> */}
        
        <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        customTransition="transform: scale(2, 0.5);"
        transitionDuration={500}
        swipeable={false}
        draggable={false}
        >
            {
                images.map( (image, i) => <HomeCarouselItem key={i} image={image}/> )
            }
        </Carousel>
      </div>
    </div>
    </>

  )
}


const Nextslide = ()=> {
    // componentstyle = {
    //     width: 49%;
    // text-align: right;
    // right: 0;
    // }
    const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    font-size: 100px;
    line-height: 600px;
    color: #fff;`
    const Label = styled.label`
    padding: 0 20px;
    // transition: opacity .2s;
    cursor: pointer;
    // width: 49%;
    height:100px;
    z-index:10;
    text-align: right;
    right: 0;
    opacity:1;
    display:'block'
    `
    // const Label = styled.label`
    // display: none;
    // position: absolute;
    // padding: 0 20px;
    // opacity: 0;
    // transition: opacity .2s;
    // cursor: pointer;
    // width: 49%;
    // text-align: right;
    // right: 0;
    // &:hover{
    //     opacity: 1;
    // }
    // `
    return (
        <>
        {/* <Div className="carousel-controls"> */}
        <Label className="next-slide" >
            <span style={{height:"100px"}}>&rsaquo;</span>
        </Label>
        {/* </Div> */}
        </>
    )
}