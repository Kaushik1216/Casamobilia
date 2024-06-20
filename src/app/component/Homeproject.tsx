import React from 'react'
import { Grid } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/HomeProject.module.css';
import { motion } from 'framer-motion'
import { fadeIn } from '../(main)/variants'
import HomeProjectcard from './HomeProjectcard';
type FadeDirection = "up" | "down" | "left" | "right";
interface Idata {
    src: string,
    alt: string,
    dir: FadeDirection,
    classname: string,
    bgcolor: string,
    pt:number,
    pb:number,
    pl:number,
    pr:number,
    width:string
}
var alldata: Idata[] = [
    {
        src: '/furniture.png',
        alt: 'SOFAS',
        dir: "right",
        classname: "bannerimagebig",
        bgcolor: '#D7D7D7',
        pt:25,
        pb:25,
        pl:10,
        pr:10,
        width:"100%"
    },
    {
        src: '/interior.png',
        alt: 'INTERIORS',
        dir: "left",
        classname: "bannerimagesmall",
        bgcolor: '#EDC935',
        pt:50,
        pb:0,
        pl:0,
        pr:0,
        width:"85%"
    },
    {
        src: '/buildings.png',
        alt: 'BUILDINGS',
        dir: "left",
        classname: "bannerimagesmall",
        bgcolor: '#2873FA',
        pt:0,
        pb:0,
        pl:0,
        pr:0,
        width:"100%"
    },
    {
        src: '/lighting.png',
        alt: 'LIGHTINGS',
        dir: "up",
        classname: "bannerimagesmall",
        bgcolor: '#F25D54',
        pt:0,
        pb:0,
        pl:0,
        pr:0,
        width:"75%"
    },
    {
        src: '/products.png',
        alt: 'PRODUCTS',
        dir: "up",
        classname: "bannerimagesmall",
        bgcolor: '#6B57B9',
        pt:30,
        pb:-20,
        pl:100,
        pr:0,
        width:"80%"
    },
    {
        src: '/hotels.png',
        alt: 'HOTELS',
        dir: "up",
        classname: "bannerimagebig",
        bgcolor: '#E667A6',
        pt:30,
        pb:0,
        pl:0,
        pr:10,
        width:"100%"
    }
]
const Homeproject: React.FC = () => {
    const slashMotion = {
        rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {
            opacity: 1,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeIn"
            }
        }
    };
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={6} sm={6}>
                    <HomeProjectcard data={alldata[0]} />
                </Grid>
                <Grid container xs={12} md={6} sm={6}>
                    <Grid item xs={12}>
                        <HomeProjectcard data={alldata[1]} />
                    </Grid>
                    <Grid item xs={12}>
                        <HomeProjectcard data={alldata[2]} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container xs={12} md={6} sm={6}>
                    <Grid item xs={12}>
                        <HomeProjectcard data={alldata[3]} />
                    </Grid>
                    <Grid item xs={12}>
                        <HomeProjectcard data={alldata[4]} />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                    <HomeProjectcard data={alldata[5]} />
                </Grid>
            </Grid>
        </>
    )
}

export default Homeproject;