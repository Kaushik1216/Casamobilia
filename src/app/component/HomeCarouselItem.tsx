import React from 'react'
import { Paper, Button } from '@mui/material'
import Image from 'next/image'
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
    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
        width:"100%"
      }
      const ref = useRef(null);
      const isInView = useInView(ref);
    return (
            // <motion.div className={styles.imagediv} 
            // ref={ref}
            // initial={{opacity:0}}
            // animate={isInView?{opacity:1}:{opacity:0}}
            // transition={{duration:0.5}}
            // >
        <Paper>
            {/* <h2>{item.name}</h2>
            <p>{item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button> */}
            {/* <inView>

            </inView> */}
            <div className={styles.imagediv} >
            <Image
                src={image.src}
                alt={image.alt}
                // className={styles.imageCorousel}
                // // layout="fill"
                // width={1200}
                // height={600}
                fill={true}
                // object-fit= "cover"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // style={imageStyle}
                />
            </div>
        </Paper>
            // </motion.div>
    )
}

export default HomeCarouselfirst;