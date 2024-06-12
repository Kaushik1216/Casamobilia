"use client"
import React from 'react'
import Head from 'next/head'
import { Metadata } from 'next'
import { Grid } from '@mui/material'
import styles from './about.module.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
// export const metadata: Metadata = {
//     title: "about"
// }
import Video from 'next-video';
import BackgroundVideo from 'next-video/background-video'
import Image from 'next/image'
export default function About() {
  return (
    <>
    {/* <BackgroundVideo src='/logoreveal.mp4' className={styles.aboutvideo}/> */}
    
    <div className={styles.warrapcontainer}>
    <motion.p className={styles.abouthead}
    variants={fadeIn("left" , 0.2,40)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:true,amount:0.7}}>About</motion.p>
        
      <Grid container>
      <Grid item xs={12} md={12} sm={12}>
          <motion.div className={styles.abouttext1}
          variants={fadeIn("up" , 0.2,40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:true,amount:0.2}}>
          The name “CASA MOBILIA” defines Finest Bespoke Furniture & Interiors. The brand embodies global refinement and an indigenous design sense, reflective of a contemporary & timeless design.
           Casa Mobilia by Aakarshan Furniture Systems was founded in 2012 by Ankit Agarwal & Sadhna Goyal to take care of the retail end of the business of design. Casa Mobilia is the place where all high end furniture & interior design ideas can find their expression. 

          </motion.div>
      </Grid>
      </Grid>
      <Grid container className={styles.videocontainer}>
      <Grid items xs={12}>
      <div className={styles.aboutvideo}>
            <BackgroundVideo className={styles.aboutvid}src='/logoreveal.mp4'/>
      </div>
      </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12} md={6} sm={6} paddingTop={10}>
        <motion.div className={styles.imagecontainer}
        variants={fadeIn("right" , 0.2,50)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true,amount:0.2}}>
          <Image
            src='/ankit.jpeg'
            alt=''
            layout="fill"
            className={styles.aboutimage}
            />
        </motion.div>
        </Grid>
        <Grid item xs={12} md={6} sm={6} paddingTop={10}>
          <motion.div className={styles.abouthead2}
          variants={fadeIn("left" , 0.2,20)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:true,amount:0.2}}
          >
            Director
          </motion.div>
        <motion.div className={styles.abouttext2}
         variants={fadeIn("left" , 0.2,20)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:true,amount:0.2}}
         >
    
          Casa Mobilia by Aakarshan Furniture Systems was founded in 2012 by Ankit Agarwal & Sadhna Goyal to take care of the retail end of the business of design. Casa Mobilia is the place where all high end furniture & interior design ideas can find their expression. The designer furniture store showcases unique pieces that highlight the intrinsic quality of both the traditional and a new India and hosts a truly stunning array of topical pieces in an exciting range of colours and styles which are customizable based on client requirements. Our benchmarks for quality craftsmanship coupled with design innovation makes every piece a collectable and every collection an artistic legacy.

          In a synopsis, Casa Mobilia endeavors to constantly better its best, and continue to be recognized as Delhi Ncr’s foremost luxury furniture & interiors brand.
          </motion.div>
        </Grid>
        
      </Grid>
    </div>
    <div>
    </div>
    </>
  )
}
