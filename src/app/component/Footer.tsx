"use client";
import React from 'react'
import styles from '../styles/footer.module.css'
import Image from 'next/image';
import { motion } from "framer-motion";
import { Grid } from '@mui/material';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { YouTube } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import path from 'path';
import Link from 'next/link'
export default function Footer() {
    const currentYear = new Date().getFullYear();
    const logostyle = {
        width: "40%",
        height: "90%",
    };
    const svgVariants = {
        hidden: { rotate: -45 },
        visible: {
            rotate: 0,
            transition: { duration: 2 }
        }
    }

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 2,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }

    return (
        <>
        
        <div className={styles.footercontainer}>
            <div className={styles.socialdiv}>
                <motion.hr className={styles.socialhr} variants={pathVariants}
                                initial="hidden"
                                whileInView="visible"/>

                <motion.div
                >
                    <Grid container spacing={2}>
                        <Grid item>
                            <motion.svg id="instagram"  className={styles.footersvg} fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 169.063 169.063"
                                variants={svgVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover={{ scale: 1.05}}
                                >
                                <motion.path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"  d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                          c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                          c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                          c17.455,0,31.656,14.201,31.656,31.655V122.407z"
                          variants={pathVariants} />
                                <motion.path  fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                          C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                          c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"variants={pathVariants} />
                                <motion.path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-width="2" fill="#000000" stroke-linecap="round" stroke-linejoin="round" d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                          c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                          C135.661,29.421,132.821,28.251,129.921,28.251z" variants={pathVariants} />
                            </motion.svg>
                        </Grid>
                        <Grid item>
                            <motion.svg className={styles.footersvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                variants={svgVariants}
                                initial="hidden"
                                whileInView="visible" whileHover={{ scale: 1.05 }}>
                                <motion.path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"    d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" variants={pathVariants} ></motion.path> </motion.svg>
                        </Grid>
                        <Grid item>
                            <motion.svg className={styles.footersvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" variants={svgVariants}
                                initial="hidden"
                                whileInView="visible" whileHover={{ scale: 1.05 }}>
                                <motion.path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round"  d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#0F0F0F" variants={pathVariants}></motion.path>
                                <motion.path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"   d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"  variants={pathVariants}></motion.path></motion.svg>
                        </Grid>
                        <Grid item>
                            <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className={styles.footersvg} fill="none" viewBox="0 0 30 30" variants={svgVariants}
                                initial="hidden"
                                whileInView="visible" whileHover={{ scale: 1.05 }}>
                                <motion.path fill-rule="evenodd" clip-rule="evenodd" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="circle"  d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" variants={pathVariants}></motion.path>
                            </motion.svg>
                        </Grid>

                        <Grid item>
                            <motion.svg className={styles.footersvg} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                                variants={svgVariants}
                                initial="hidden"
                                whileInView="visible" whileHover={{ scale: 1.05 }}>
                                <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" variants={pathVariants}></motion.path>
                                <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" variants={pathVariants}></motion.path>
                            </motion.svg>
                        </Grid>
                    </Grid>
                </motion.div>
                <motion.hr className={styles.socialhr} variants={pathVariants}
                                initial="hidden"
                                whileInView="visible" />
            </div>
            <div>
                <div>
                <Image
                    priority={true}
                    src="/logo.png"
                    width={110}
                    height={50}
                    alt="Casamobilia logo"
                    quality={100}
                    />
                </div>
            </div>
            <div className={styles.footerlink}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item><Link href="/">Home</Link></Grid>
                    <Grid item><Link href="/about">About</Link></Grid>
                    <Grid item><Link href="/collections">Collections</Link></Grid>
                    <Grid item><Link href="/project">Projects</Link></Grid>
                    <Grid item><Link href="/contact">Contact Us</Link></Grid>
                </Grid>
            </div>
            <p>Copyright © {currentYear} CasaMobilia • All Rights Reserved</p>
        </div>
        
      </>
    )
}
