import React from 'react'
import styles from "../(main)/Home/Home.module.css"
import { Grid } from '@mui/material'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../(main)/variants'
export default function HomeSection2() {
  return (
    <>
        <div className={styles.homecontainer}>
          <motion.p className={styles.homehead}
          variants={fadeIn("left" , 0.2,40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:true,amount:0.7}}
          >VISUALIZE YOUR IDEAS</motion.p>
        <Grid container spacing={{xs:6,sm:8,md:8}} >
          <Grid container item  xs={12} md={3} sm={6}>
            <motion.div className={styles.block}
            variants={fadeIn("up" , 0.2,40)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true,amount:0.3}}
            whileHover={{ scale: 1.05 }}
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
         
          <Grid container item xs={12} md={3} sm={6}>
          <motion.div className={styles.block}
            variants={fadeIn("up" , 0.2,40)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true,amount:0.3}}
            whileHover={{ scale: 1.05 }}
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
            viewport={{once:true,amount:0.3}}
            whileHover={{ scale: 1.05 }}
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
            viewport={{once:true,amount:0.3}}
            whileHover={{ scale: 1.05 }}
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
    </>
  )
}
