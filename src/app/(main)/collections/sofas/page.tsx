"use client"
import React from 'react'
import styles from '../collections.module.css'
import Image from 'next/image'
import { Grid } from '@mui/material'
import Plx from 'react-plx'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'
export default function Sofas() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(()=>{
      setWindowWidth(window.innerWidth);
    })
    return (
        <>
            <div className={styles.categorycontainer}>
                <Plx
                parallaxData={[
                    {
                      start: 0,
                      duration: 300,
                      properties: [
                        {
                          startValue: 0,
                          endValue: -50,
                          property: 'translateY',
                        },
                      ],
                    }
                  ]}>

                <div className={styles.centerdiv}>
                <div className={styles.collectionintro}>
                    <div className={styles.collectionhead}> COLLECTIONS / SOFAS </div>
                    <div className={styles.collectionpara}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab rerum eum magni. Tempore, deleniti qui minima non dolorem cum voluptas enim, harum eos ad maiores necessitatibus inventore amet facilis quidem nesciunt nisi. Assumenda, dolorum nam, perspiciatis alias quisquam eum sunt cupiditate id nihil officiis odit vero corrupti, enim possimus! </div>
                </div>
                </div>
        
                </Plx>
                <Plx
                parallaxData={[
                    {
                      start: 0,
                      duration: 500,
                      properties: [
                        {
                          startValue: 1,
                          endValue: 1.1,
                          property: 'scale',
                        },
                      ],
                    }
                  ]}>
                <div className={styles.imagecontainercoll}>
                    <div>
                    <Image src ='/sofa1.jpg' alt='' layout='fill'/>
                    </div>
                </div>
                </Plx>
            
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

              <p className={styles.collectiontext1}>The name “CASA MOBILIA” defines Finest Bespoke Furniture & Interiors. The brand embodies global refinement and an indigenous design sense, reflective of a contemporary & timeless design.
                Casa Mobilia by Aakarshan Furniture Systems was founded in 2012 by Ankit Agarwal & Sadhna Goyal to take care of the retail end of the business of design. Casa Mobilia is the place where all high end furniture & interior design ideas can find their expression.</p>
              <div className={styles.collectionimage1}>
                <Image
                  src='/sofa2.jpg'
                  alt=''
                  layout="fill"
                  className={styles.collectionimage}
                  />
              </div>
            </div>
          </Plx>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
          <Plx
            parallaxData={[
              {
                start: 100,
                duration: 1000,
                properties: [
                  {
                    startValue: ((windowWidth>=1020)?100:-40),
                    endValue: ((windowWidth>=1050)?600:0),
                    property: 'translateY',
                  },
                ],
              },
            ]}
          >
            <div className={styles.imagecontainer2}>
              <p className={styles.collectiontext2}>The name “CASA MOBILIA” defines Finest Bespoke Furniture & Interiors. The brand embodies global refinement and an indigenous design sense, reflective of a contemporary & timeless design.
                Casa Mobilia by Aakarshan Furniture Systems was founded in 2012 by Ankit Agarwal</p>
          <Plx
            parallaxData={[
              {
                start: 1000,
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
              <div className={styles.collectionimage2}>
                <Image
                  src='/sofa4.jpg'
                  alt=''
                  layout="fill"
                  className={styles.collectionimage}
                />
              </div>
          </Plx>
            </div>
          </Plx>
          </Grid>
        </Grid>
        <div className={styles.collectioncontainerbt}>

        <Grid container>
            <Grid item xs={12} md={6} sm={6} padding={1}>
                <div className={styles.collectioncontainer2}>
                    <motion.div className={styles.collectiontext5}
                                variants={fadeIn("right", 0.3, 40)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.4 }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta tempore id in necessitatibus, atque reiciendis alias sint repellendus praesentium odit libero magni perferendis quam nam, beatae ab. A quasi ad sit nulla voluptatum voluptate perferendis earum optio. Ipsa officia aperiam, fugit quia facilis, est illo sit nemo, at reprehenderit obcaecati!
                    </motion.div>
                    <motion.div className={styles.collectioncontainer4}
                    variants={fadeIn("right", 0.5, 60)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.4 }}>
                        <Image
                            src='/sofa5.jpg'
                            alt=''
                            layout="fill"
                            className={styles.collectionimage}
                            />
                    </motion.div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} sm={6} padding={1}>
                <div className={styles.collectioncontainer2}>
                        <motion.div className={styles.collectiontext5}
                        variants={fadeIn("left", 0.3, 40)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.4 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta tempore id in necessitatibus, atque reiciendis alias sint repellendus praesentium odit libero magni perferendis quam nam, beatae ab. A quasi ad sit nulla voluptatum voluptate perferendis earum optio. Ipsa officia aperiam, fugit quia facilis, est illo sit nemo, at reprehenderit obcaecati!
                        </motion.div>
                        <motion.div className={styles.collectioncontainer4}
                        variants={fadeIn("left", 0.5, 60)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.4 }}>
                            <Image
                                src='/sofa3.jpg'
                                alt=''
                                layout="fill"
                                className={styles.collectionimage}
                                />
                        </motion.div>
                 </div>
            </Grid>
        </Grid>
        </div>
        </div>
        </>
    )
}
