"use client"
import React from 'react'
import styles from '../styles/project.module.css'
import { motion} from "framer-motion";
import Image from 'next/image';
import { fadeIn } from '../(main)/variants';
interface Idata {
    name: string,
    place: string,
    location: string,
    year: Number,
    bgimg: string
}
interface props {
    key: Number,
    data: Idata
}


const Projectcom: React.FC<props> = ({ key, data }) => {
      const arrow = {
        initial: { rotate: 0, scale: 1 },
        animate: { rotate: 90, scale: 1.5 },
      }
    return (
        <motion.div className={styles.container}
          initial="hidden"
          animate="hidden"
          whileHover="show"
        >
            <Image src={data.bgimg} alt='' layout='fill'/>
            <div className={styles.overlay}>
                <motion.p className={styles.head1} variants={fadeIn('right' ,0.1, 40)}>{data.name}</motion.p>
                <motion.p className={styles.head2} variants={fadeIn('right' ,0.2, 40)}>{data.place} {data.location}</motion.p>
                <motion.p className={styles.head3} variants={fadeIn('right' ,0.3, 40)} >{data.year}</motion.p>
            </div>
        </motion.div>
    )
}

export default Projectcom
