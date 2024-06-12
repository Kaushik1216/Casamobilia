import React from 'react'
import { Paper, Button } from '@mui/material'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/HomeCorousel.module.css'
import { motion, useInView, inView } from "framer-motion"
import { useRef } from 'react'
import { Opacity } from '@mui/icons-material'

interface Iimage {
    alt: string,
    srcleft: string,
    srcright:string,
    projectname:string,
    projectplace:string,
    bgcolor:string
}

interface props {
    key: Number,
    image: Iimage
}
// https://www.sliderrevolution.com/resources/css-arrow/
// export default function HomeCarouselfirst() {
const HomeCarouselfirst: React.FC<props> = ({ key, image }) => {
    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
        width: "100%"
    }
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [clientWidth, setClientWidth] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    useEffect(() => {
        console.log(" width : " , window.innerWidth);
        console.log(" height : " , window.innerHeight);
        setClientWidth(window.innerWidth * 0.40);
        setClientHeight((window.innerHeight) * 0.691);
    }, []);
    const myStyle = {
        border: `${window.innerWidth * 0.048}px solid ${image.bgcolor}`
    };
    // console.log("me :      ",{key}," : ", clientWidth);
   const animVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1}
        }
    }
    return (
        <>
        <div style ={myStyle} className={styles.rightimagecontainer}>
            <Image
                src={image.srcright}
                alt={image.alt}
                width={(clientWidth)}
                height={(clientHeight)}
                style={{marginBottom:"-4px"}}
                />
            {/* <motion.div className={styles.rightcontainertext}
            variants={animVariants}
            initial="hidden"
            whileInView="visible"> */}
            <div className={styles.rightcontainertext}>

                <p style={{fontSize:"18px" , fontWeight:"bolder"}}>{image.projectname}</p>
                <p style={{fontSize:"15px"}}>{image.projectplace}</p>
            </div>
            {/* </motion.div> */}
        </div>

        </>
    )
}

export default HomeCarouselfirst;