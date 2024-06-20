"use client"
import React from 'react'
import { Grid } from '@mui/material'
import styles from './homecollection.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn } from '@/app/(main)/variants'
import Plx from "framer-motion"
import { useRouter } from 'next/navigation'
export default function Homecollection() {
    const router = useRouter();
    return (
        <>
            <Grid container marginTop={10}>
                <Grid item xs={12} md={7} sm={7}>
                    <div className={styles.containerright}>
                        <Image src='/sofa3.jpg' alt='' fill />
                    </div>
                </Grid>
                <Grid item xs={12} md={5} sm={12}>
                    {/* <div className={styles.conleft}> */}
                    <div className={styles.containerleft}>

                        <div className={styles.collectionhead}>OURS PROJECTS</div>
                        <div className={styles.centerdiv}>
                            <div className={styles.collectionpara}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores eum mollitia ex, quasi praesentium quis quos tempora ad nulla!
                            </div>
                        </div>
                        <div className={styles.svgcontainer}>

                            <motion.svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.707 14.707" width="70px" height="600px" fill="#000000" stroke="#000000" stroke-width="0.00014707" transform="rotate(0)matrix(-1, 0, 0, -1, 0, 0)"
                                initial="hidden"
                                //  animate="visible"
                                whileInView="visible"
                            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.088242"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="6.275" y="0" width="0.05" height="150"></rect> </g> </g></motion.svg>
                        </div>
                        <div className={styles.elements}>
                            <motion.div className={styles.element}
                                variants={fadeIn("right", 0.2, 20)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 1 }}
                                onClick={() => router.push('/project/interiors')}><hr className={styles.hr} /><span className={styles.elementpara} >Interiors</span></motion.div>
                            <motion.div className={styles.element}
                                variants={fadeIn("right", 0.4, 30)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 1 }}><hr className={styles.hr} /><span className={styles.elementpara}>Projectype2</span></motion.div>
                            <motion.div className={styles.element}
                                variants={fadeIn("right", 0.6, 40)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 1 }}><hr className={styles.hr} /><span className={styles.elementpara}>Projectype3</span></motion.div>
                            <motion.div className={styles.element}
                                variants={fadeIn("right", 0.8, 50)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 1 }}><hr className={styles.hr} /><span className={styles.elementpara}>Projectype4</span></motion.div>
                            <motion.div className={styles.element}
                                variants={fadeIn("right", 1, 60)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 1 }}><hr className={styles.hr} /><span className={styles.elementpara}>Projectype5</span></motion.div>
                        </div>
                    </div>
                    {/* </div> */}
                </Grid>
            </Grid>
            {/* </div> */}
            {/* <div className={styles.container}> */}
            <Grid container marginTop={10}>

                <Grid item xs={12} md={5} sm={12} >
                    {/* <div className={styles.conleft}> */}
                    <div className={styles.containerleft2} >

                        <div className={styles.collectionhead} >COLLECTIONS</div>
                        <div className={styles.centerdiv}>
                            <div className={styles.collectionpara}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores eum mollitia ex, quasi praesentium quis quos tempora ad nulla!
                            </div>
                        </div>
                        <div className={styles.svgcontainer2}>

                            <motion.svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.707 14.707" width="70px" height="600px" fill="#000000" stroke="#000000" stroke-width="0.00014707" transform="rotate(0)matrix(-1, 0, 0, -1, 0, 0)"
                                initial="hidden"
                                //  animate="visible"
                                whileInView="visible"
                            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.088242"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="6.275" y="0" width="0.05" height="150"></rect> </g> </g></motion.svg>
                        </div>
                        <div className={styles.elements2}>
                            <motion.div className={styles.element}
                                variants={fadeIn("left", 0.2, 20)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 1 }}><hr className={styles.hr} /><span className={styles.elementpara}
                                    onClick={() => router.push('/collections/sofas')}>Sofas</span></motion.div>
                            <motion.div className={styles.element}
                                variants={fadeIn("left", 0.4, 30)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 1 }}><hr className={styles.hr} /><span className={styles.elementpara}>Collections2</span></motion.div>
                            <motion.div className={styles.element}
                                variants={fadeIn("left", 0.6, 40)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 1 }}><hr className={styles.hr} /><span className={styles.elementpara}>Collections3</span></motion.div>
                            <motion.div className={styles.element}
                                variants={fadeIn("left", 0.8, 50)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 1 }}><hr className={styles.hr} /><span className={styles.elementpara}>Collections4</span></motion.div>
                            <motion.div className={styles.element}
                                variants={fadeIn("left", 1, 60)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 1 }}><hr className={styles.hr} /><span className={styles.elementpara}>Collections5</span></motion.div>
                        </div>
                    </div>
                    {/* </div> */}
                </Grid>
                <Grid item xs={12} md={7} sm={7}>
                    <div className={styles.containerright}>
                        <Image src='/sofa1.jpg' alt='' fill />
                    </div>
                </Grid>
            </Grid>
            {/* </div> */}
        </>
    )
}
