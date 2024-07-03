"use client"
import React from 'react'
import styles from './project.module.css'
import { Grid } from '@mui/material'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import Plx from 'react-plx'
import { useRouter } from 'next/navigation'
export default function Project() {
  const router = useRouter()
  return (
    <>
    <div className={styles.projectcontainer}>
      <Plx 
      parallaxData={[
        {
          start: 0,
          duration: 500,
          properties: [
            {
              startValue: 0,
              endValue: -200,
              property: 'translateY',
            },
          ],
        },
      ]}>
        <div className={styles.headcontainer}>
          <div className={styles.projecthead}>
        <div className={styles.collectionhead}>OUR PROJECTS</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius earum cupiditate provident amet deleniti, repellat corporis consequatur, fuga doloremque assumenda dolores fugit sunt adipisci optio soluta aperiam totam dolore molestiae ducimus odio quasi. Tempora voluptas delectus architecto tempore quos quis adipisci earum minus temporibus. Numquam qui inventore sed laudantium aperiam rerum? Rem qui ut, harum similique
          </div>
        </div>
      </Plx>
        <Grid container>
          <Grid item xs={12} md={6} sm={6} padding={1}
          onClick={() => router.push('/project/interiors')}>
            <motion.div className={styles.projecttypecontainer}
             variants={fadeIn("right", 0.2, 40)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true, amount: 0.5 }}>
            <Image src='/ambus1.jpg' alt='' layout='fill'/>
            <div className={styles.overlay}></div>
            <div className={styles.projecttypename}>Interiors</div>
            <div className={styles.knowmore} onClick={() => router.push('/project/interiors')}>Explore</div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} sm={6} padding={1}>
          <motion.div className={styles.projecttypecontainer}
          variants={fadeIn("left", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}>
            <Image src='/ambus2.jpg' alt='' layout='fill'/>
            <div className={styles.overlay}></div>
            <div className={styles.projecttypename}>Interiors</div>
            <div className={styles.knowmore} onClick={() => router.push('/project/interiors')}>Explore</div>

            </motion.div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} sm={6} padding={1}>
            <motion.div className={styles.projecttypecontainer}
            variants={fadeIn("right", 0.2, 40)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}>
            <Image src='/krishnakunj1.jpg' alt='' layout='fill'/>
            <div className={styles.overlay}></div>
            <div className={styles.projecttypename}>Interiors</div>
            <div className={styles.knowmore} onClick={() => router.push('/project/interiors')}>Explore</div>

            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} sm={6} padding={1}>
          <motion.div className={styles.projecttypecontainer}
          variants={fadeIn("left", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}>
            <Image src='/krishnakunj2.jpg' alt='' layout='fill'/>
            <div className={styles.overlay}></div>
            <div className={styles.projecttypename}>Interiors</div>
            <div className={styles.knowmore} onClick={() => router.push('/project/interiors')}>Explore</div>

            </motion.div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} sm={6} padding={1}>
            <motion.div className={styles.projecttypecontainer}
            variants={fadeIn("right", 0.2, 40)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}>
            <Image src='/ppsteel1.jpg' alt='' layout='fill'/>
            <div className={styles.overlay}></div>
            <div className={styles.projecttypename}>Interiors</div>
            <div className={styles.knowmore} onClick={() => router.push('/project/interiors')}>Explore</div>

            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} sm={6} padding={1}>
          <motion.div className={styles.projecttypecontainer}
          variants={fadeIn("left", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}>
            <Image src='/ppsteel2.jpg' alt='' layout='fill'/>
            <div className={styles.overlay}></div>
            <div className={styles.projecttypename}>Interiors</div>
            <div className={styles.knowmore} onClick={() => router.push('/project/interiors')}>Explore</div>

            </motion.div>
          </Grid>
        </Grid>
    </div>
    </>
  )
}
