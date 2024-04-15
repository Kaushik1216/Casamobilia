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
export default function Home() {
  return (
    <>
      <div className='warrapcontainer'>
        <HomeCarousel />
        <div className={styles.homecontainer}>
          <p className={styles.homehead}>VISUALIZE YOUR IDEAS</p>
        <Grid container spacing={{xs:6,sm:8,md:8}} >
          <Grid container item  xs={12} md={3} sm={6}>
            <motion.div className={styles.block}
            variants={fadeIn("up" , 0.2,40)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            >
              <div className={styles.homelogo}>
              <Image
              src="/Group2.png"
              width={40}
              height={40}
              alt='Workflow'
              ></Image>
              </div>
              <p  className={styles.homesubhead}>Smooth Workflow</p>
              <p className={styles.homepara}>We provide a very smooth and easy workflow of interior design</p>
            </motion.div>
          </Grid>
         
          <Grid container item  xs={12} md={3} sm={6}>
          <motion.div className={styles.block}
            variants={fadeIn("up" , 0.2,40)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            >
              <div className={styles.homelogo}>
              <Image
              src="/Group3.png"
              width={40}
              height={40}
              alt='Workflow'
              ></Image>
              </div>
              <p  className={styles.homesubhead}>Qualified Designer</p>
              <p className={styles.homepara}>Our employees are best of the field across the city</p>
            </motion.div>
          </Grid>
          <Grid container item  xs={12} md={3} sm={6}>
          <motion.div className={styles.block}
            variants={fadeIn("up" , 0.2,40)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            >
              <div className={styles.homelogo}>
              <Image
              src="/Group1.png"
              width={40}
              height={40}
              alt='Workflow'
              ></Image>
              </div>
              <p  className={styles.homesubhead}>High-End Design</p>
              <p className={styles.homepara}>We deliver the best service in the market</p>
            </motion.div>
          </Grid>
          <Grid container item  xs={12} md={3} sm={6}>
          <motion.div className={styles.block}
            variants={fadeIn("up" , 0.2,40)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            >
              <div className={styles.homelogo}>
              <Image
              src="/Group4.png"
              width={40}
              height={40}
              alt='Workflow'
              ></Image>
              </div>
              <p  className={styles.homesubhead}>Trusted Platform</p>
              <p className={styles.homepara}>Reliability you can count on, quality that speaks for itself</p>
            </motion.div>
          </Grid>
        </Grid>
      </div>
        </div>
    </>
  )
}
