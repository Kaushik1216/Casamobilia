import React from 'react'
import { Paper, Button } from '@mui/material'
import Image from 'next/image'
import { useState , useEffect } from 'react'
import styles from '../styles/HomeCorousel.module.css'
import { motion ,useInView, inView} from "framer-motion"
import { useRef } from 'react'
interface Iimage {
    alt:string,
    src:string,
    description:string  
}

interface props{
    key:Number,
    image:Iimage
}
// https://www.sliderrevolution.com/resources/css-arrow/
// export default function HomeCarouselfirst() {
const  HomeCarouselfirst: React.FC<props> = ({key, image})=> {
      const ref = useRef(null);
      const isInView = useInView(ref);
      const [clientWidth, setClientWidth] = useState(0);
      const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    setClientWidth(window.innerWidth * 0.5);
    setClientHeight((window.innerHeight)*0.89);
  }, []);
    return (
        <>
        <Image
                src={image.src}
                alt={image.alt}
                 width={(clientWidth)}
                height={(clientHeight)} 
                />
        </>
    )
}

export default HomeCarouselfirst;