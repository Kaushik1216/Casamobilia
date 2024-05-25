import React from 'react'
import {motion} from 'framer-motion'
import styles from '../styles/HomeProject.module.css'
import '../styles/HomeProject.module.css'
import { fadeIn } from '../(main)/variants'
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
    width:string,
}

interface props{
    data:Idata
}

const  HomeProjectcard: React.FC<props> = ({data})=>{
    const slashMotion = {
        rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {
          opacity: 1,
          transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeIn"
          }
        }};
    const spacingcontainer = {
        paddingTop:data.pt,
        paddingBottom:data.pb,
        paddingRight:data.pr,
        paddingLeft:data.pl
    }
  return (
    <motion.div className={styles.projectcontainer}
                        whileHover={{
                            backgroundColor: data.bgcolor,
                            transition: { delay: 0.2 }
                        }}
                    style={spacingcontainer}>
                        <motion.div className={data.classname}
                            style={{
                                backgroundImage: `url(${data.src})`,
                                width:`${data.width}`
                            }
                            }
                            variants={fadeIn("up", 0.2, 30)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            whileHover={"hover"}
                        >
                        <div className={styles.projectheadhover}>
                            <motion.p 
                                initial="rest"
                                variants={slashMotion}
                            >
                                Click to Explore More
                            </motion.p>
                        </div>
                            <motion.p className={styles.projecthead}
                                variants={fadeIn("up", 0.2, 20)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}>
                                {data.alt}
                            </motion.p>
                        </motion.div>
                    </motion.div>
  )
}

export default HomeProjectcard;