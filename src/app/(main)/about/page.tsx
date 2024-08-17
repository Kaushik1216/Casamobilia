"use client"
// @ts-ignore
import React, { useEffect } from 'react'
import Head from 'next/head'
import { Metadata } from 'next'
import { Grid } from '@mui/material'
import styles from './about.module.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useState } from 'react'
import Plx from "react-plx";

import Video from 'next-video';
import BackgroundVideo from 'next-video/background-video'
import Image from 'next/image'
export default function About() {
  const [windowWidth, setWindowWidth] = useState(0);
    useEffect(()=>{
      if(typeof window!== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    },[])
    return (
    <>
      {/* <BackgroundVideo src='/logoreveal.mp4' className={styles.aboutvideo}/> */}

      <Grid container className={styles.videocontainer}>
        <Grid item xs={12}>
          <Plx
            parallaxData={[
              {
                start: 0,
                duration: 600,
                properties: [
                  {
                    startValue: 1,
                    endValue: 0.9,
                    property: 'opacity',
                  },
                  {
                    startValue: 1,
                    endValue: 1.2,
                    property: 'scale',
                  },
                  {
                    startValue: 0,
                    endValue: 50,
                    property: 'translateY',
                  },
                ],
              },
            ]}
          >
          <div className={styles.warrapcontainer2}>

            <div className={styles.aboutvideo}>
              <BackgroundVideo className={styles.aboutvid} src='/logoreveal.mp4' />
            </div>
          </div>
          </Plx>
        </Grid>
      </Grid>

      <div className={styles.warrapcontainer}>
        <Grid container>
          <Grid item xs={12} md={6} sm={12}>
          <Plx
            parallaxData={[
              {
                start: 0,
                duration: 1200,
                properties: [
                  {
                    startValue: ((windowWidth>=620)?(600):-50),
                    endValue: ((windowWidth>=1020)?(-40):-400),
                    property: 'translateY',
                  }
                ],
              }
            ]}
          >
            <div className={styles.imagecontainer1}>

              <p className={styles.abouttext1}>The name “CASA MOBILIA” defines Finest Bespoke Furniture & Interiors. The brand embodies global refinement and an indigenous design sense, reflective of a contemporary & timeless design.
                Casa Mobilia by Aakarshan Furniture Systems was founded in 2012 by Ankit Agarwal & Sadhna Goyal to take care of the retail end of the business of design. Casa Mobilia is the place where all high end furniture & interior design ideas can find their expression.</p>
              <div className={styles.aboutimage1}>
                <Image
                  src='/aboutimage1.png'
                  alt=''
                  layout="fill"
                  className={styles.aboutimage}
                  />
              </div>
            </div>
          </Plx>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
          <Plx
            parallaxData={[
              {
                start: 0,
                duration: 1000,
                properties: [
                  {
                    startValue: ((windowWidth>=1020)?-40:-40),
                    endValue: ((windowWidth>=1050)?600:0),
                    property: 'translateY',
                  },
                ],
              },
            ]}
          >
            <div className={styles.imagecontainer2}>
              <p className={styles.abouttext2}>The name “CASA MOBILIA” defines Finest Bespoke Furniture & Interiors. The brand embodies global refinement and an indigenous design sense, reflective of a contemporary & timeless design.
                Casa Mobilia by Aakarshan Furniture Systems was founded in 2012 by Ankit Agarwal</p>
          <Plx
            parallaxData={[
              {
                start: 0,
                duration: 1000,
                properties: [
                  {
                    startValue: 100,
                    endValue: -40,
                    property: 'translateY',
                  },
                ],
              },
            ]}
          >
              <div className={styles.aboutimage2}>
                <Image
                  src='/aboutimage2.png'
                  alt=''
                  layout="fill"
                  className={styles.aboutimage}
                />
              </div>
          </Plx>
            </div>
          </Plx>
          </Grid>
        </Grid>
      </div>
        <Grid container>
          <Grid item xs={12} md={12} sm={12}>
            <div className={styles.imagecontainer3}>
              <div className={styles.aboutimage3}>
              <img src="/vivekji1.jpg" alt="" className={styles.aboutbg}/>
              
              <motion.h1 className={styles.abounttext4}
               variants={fadeIn("up", 0.2, 50)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.2 }}
               >
                BRAND HISTORY
              </motion.h1>
              <motion.div className={styles.abouttext3}
              variants={fadeIn("up", 0.6, 50)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              >

                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quos nihil maiores ipsa molestias dolor cumque incidunt, esse dolorum necessitatibus ratione consequatur cum. Laboriosam culpa in quia cupiditate facere amet quisquam ex expedita, modi ducimus et optio eum placeat voluptate voluptates impedit sunt perspiciatis itaque nobis.
              </motion.div>
              </div>
            </div>
          </Grid>
        </Grid >
        <div className="warrapcontainer">
        <Grid container>
          <Grid item xs={12} md={6} sm={6} paddingTop={10}>
            <motion.div className={styles.imagecontainer}
              variants={fadeIn("right", 0.2, 50)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}>
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
              variants={fadeIn("left", 0.2, 20)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              Director
            </motion.div>
            <motion.div className={styles.abouttext2}
              variants={fadeIn("left", 0.2, 20)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >

              Casa Mobilia by Aakarshan Furniture Systems was founded in 2012 by Ankit Agarwal & Sadhna Goyal to take care of the retail end of the business of design. Casa Mobilia is the place where all high end furniture & interior design ideas can find their expression. The designer furniture store showcases unique pieces that highlight the intrinsic quality of both the traditional and a new India and hosts a truly stunning array of topical pieces in an exciting range of colours and styles which are customizable based on client requirements. Our benchmarks for quality craftsmanship coupled with design innovation makes every piece a collectable and every collection an artistic legacy.

              In a synopsis, Casa Mobilia endeavors to constantly better its best, and continue to be recognized as Delhi Ncr’s foremost luxury furniture & interiors brand.
            </motion.div>
          </Grid>

        </Grid>
          </div>
        
      <div>
      </div>
      <div className={styles.aboutmission}>
        <div className={styles.missioncontainer}>

        <motion.p className={styles.abouthead}
        variants={fadeIn("up", 0.2, 20)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}>OUR MISSION & VALUES</motion.p>
        <div className="">
          <motion.div className={styles.aboutmissionhead}
          variants={fadeIn("up", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}>
          MISSION
          </motion.div>
          <motion.div className={styles.aboutmissionpara}
          variants={fadeIn("up", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}>
          To produce and distribute the highest quality of luxury furniture products that stand for Design,
          Quality, Innovation and Value.
          </motion.div>
        </div>
        <div className="">
          <motion.div className={styles.aboutmissionhead}
          variants={fadeIn("up", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}>
          VISION
          </motion.div>
          <motion.div className={styles.aboutmissionpara}
          variants={fadeIn("up", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}>
          To become the leading manufacturing house for bespoke furniture in the world, catering to build luxurious
masterpieces that are desired and appreciated by not only the most elite, but also the most learned
and demanding industry architects, designers and consultants.
          </motion.div>
        </div>
        <div className="">
          <motion.div className={styles.aboutmissionhead}
          variants={fadeIn("up", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}>
          VALUES
          </motion.div>
          <motion.div className={styles.aboutmissionpara}
          variants={fadeIn("up", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}>
          To produce and distribute the highest quality furniture products
that stand for design, quality, innovation and value.
          </motion.div>
        </div>
        </div>
      </div>
    </>
  )
}
