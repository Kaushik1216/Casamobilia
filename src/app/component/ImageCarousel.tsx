'use client'
import React from 'react'
import { useState, useEffect ,useRef} from 'react'
import styles from '../styles/imageCorousel.module.css'
import HomeCarouselItem from '@/app/component/HomeCarouselItem'
import HomeCarouselItem2 from '@/app/component/HomeCarouselItem2'

interface imageContainer {
  clientWidth: number;
  scrollLeft: number;
}

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

const Imagecarousel = () => {
  const [countmove, setcountmove] = useState(0);
  const [isend, setisend] = useState(false);

  const btnpressprev = () => {
    var box1: imageContainer | null = document.querySelector('.imagecontainer1');
    if (!box1) return; // Handle the case where box is null

    const width = box1.clientWidth;
    box1.scrollLeft = box1.scrollLeft - width-10;
    var box2: imageContainer | null = document.querySelector('.imagecontainer2');
    if (!box2) return; // Handle the case where box is null

    box2.scrollLeft = box2.scrollLeft - width-2;
    setcountmove((prevval) => prevval-1);
  }

  const btnpressnext = () => {
    var box1: imageContainer | null = document.querySelector('.imagecontainer1');
    if (!box1) return; // Handle the case where box is null
    const width = box1.clientWidth;
    box1.scrollLeft = box1.scrollLeft + width+10;
    var box2: imageContainer | null = document.querySelector('.imagecontainer2');
    if (!box2) return; // Handle the case where box is null
    box2.scrollLeft = box2.scrollLeft + width+2;
    // console.log("after minus ", box1.clientWidth);
    setcountmove((prevval) => prevval+1);
  }
  const myStyle = {
    border: `5% solid #ccc`, // Adjust border style, width, and color as needed
  };
  const timeoutRef = useRef(null);

  setTimeout(() => {
    if(countmove<=(2*images.length) && (!isend)) {
      setisend(()=>false);
      btnpressnext();
      if(countmove>=(2*images.length)) {
        setisend(()=> true);
        setcountmove(() => 2*images.length);
      }
    }else {
      setisend(()=>true);
      btnpressprev();
      if(countmove<=1){
        setisend(()=>false);
        setcountmove(()=>0);
      }
    }
  }, 7000);

  return (
    <div className='imagecarousel'>
      <button className='prebtn' onClick={btnpressprev} style={{ display: `${(countmove == 0) ? "none" : "block"}` }}><p>
      <svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"></path> </g></svg></p></button>
      <button className='nextbtn' onClick={btnpressnext} style={{ display: `${(countmove >= (2*images.length)) ? "none" : "block"}` }}>
        <p>
        <svg fill="#000000" height="200px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"></path> </g> </g> </g></svg>
        </p>
        </button>
      <div className='carouselcontainer '>

        <div className='leftimage imagecontainer1'>
          {
            images.map((image, i) => <HomeCarouselItem key={i} image={image} />)
          }
          {/* <HomeCarouselItem key={countmove} image={images[countmove]} /> */}
        </div>
        <div className='rightimage imagecontainer2'>
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