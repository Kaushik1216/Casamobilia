'use client'
import React from 'react'
import { useState, useEffect ,useRef} from 'react'
import styles from '../styles/imageCorousel.module.css'
import HomeCarouselItem from '@/app/component/HomeCarouselItem'
import HomeCarouselItem2 from '@/app/component/HomeCarouselItem2'
import { count } from 'console'
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
  alt: string,
  src: string,
  description: string
}
var images: Iimage[] = [
  {
    alt: "Home Image 1",
    src: "/Home2.jpg",
    description: "Table Lamp , Cushions , Wall Hanging"
  },
  {
    alt: "Home Image 1",
    src: "/image5.jpg",
    description: "Table Lamp , Cushions , Wall Hanging"
  },
  {
    alt: "Home Image 1",
    src: "/images6.jpg",
    description: "Table Lamp , Cushions , Wall Hanging"
  },
  {
    alt: "Home Image 1",
    src: "/images4.jpg",
    description: "Table Lamp , Cushions , Wall Hanging"
  },
  {
    alt: "Home Image 1",
    src: "/images9.jpg",
    description: "Table Lamp , Cushions , Wall Hanging"
  },
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
  const [countmove, setcountmove] = useState(0);
  const [isend, setisend] = useState(false);

  const btnpressprev = () => {
    var box1: imageContainer | null = document.querySelector('.imagecontainer1');
    if (!box1) return; // Handle the case where box is null

    const width = box1.clientWidth;
    box1.scrollLeft = box1.scrollLeft - width - 17;
    var box2: imageContainer | null = document.querySelector('.imagecontainer2');
    if (!box2) return; // Handle the case where box is null

    box2.scrollLeft = box2.scrollLeft - width - 17;
    setcountmove(countmove - 1);
  }

  const btnpressnext = () => {
    var box1: imageContainer | null = document.querySelector('.imagecontainer1');
    if (!box1) return; // Handle the case where box is null
    console.log("before minus ", box1.clientWidth)
    const width = box1.clientWidth;
    box1.scrollLeft = box1.scrollLeft + width + 17;
    var box2: imageContainer | null = document.querySelector('.imagecontainer2');
    if (!box2) return; // Handle the case where box is null
    box2.scrollLeft = box2.scrollLeft + width + 17;
    // console.log("after minus ", box1.clientWidth);
    setcountmove(countmove + 1);
  }
  const myStyle = {
    border: '74px solid #ccc', // Adjust border style, width, and color as needed
  };
  const timeoutRef = useRef(null);

  setTimeout(() => {
    if(countmove<=images.length-1 && (!isend)) {
      // setisend(false);
      btnpressnext();
      if(countmove>=images.length-1) {
        setcountmove(() => images.length-1);
        setisend(()=> true);
      }
    }else {
      // setisend(true);
      btnpressprev();
      if(countmove<=0){
        setcountmove(()=>0);
        setisend(()=>false);
      }
    }
  }, 10000);

  return (
    <div className='imagecarousel'>
      <button className='prebtn' onClick={btnpressprev} style={{ display: `${(countmove == 0) ? "none" : "block"}` }}><p>
      <svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg></p></button>
      <button className='nextbtn' onClick={btnpressnext} style={{ display: `${(countmove >= images.length - 1) ? "none" : "block"}` }}>
        <p>
        <svg fill="#000000" height="200px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"></path> </g> </g> </g></svg>
        </p>
        {/* <p>&gt;</p> */}
        </button>
      <div className='carouselcontainer '>

        <div className='leftimage imagecontainer1'>
          {
            images.map((image, i) => <HomeCarouselItem key={i} image={image} />)
          }
          {/* <HomeCarouselItem key={countmove} image={images[countmove]} /> */}
        </div>
        <div className='rightimage imagecontainer2' style={myStyle}>
          {
            images.map((image, i) => <HomeCarouselItem2 key={i} image={image} />)
          }
          {/* <HomeCarouselItem2 key={countmove} image={images[countmove]} /> */}
        </div>
      </div>
    </div>

  )
}

export default Imagecarousel