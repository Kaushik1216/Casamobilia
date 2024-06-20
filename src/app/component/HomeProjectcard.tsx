import React from 'react'
import {motion} from 'framer-motion'
import styles from '../styles/HomeProject.module.css'
import '../styles/HomeProject.module.css'
import { fadeIn } from '../(main)/variants'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
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
    const router = useRouter()
  return (
<>
{
(data.classname=='bannerimagebig') ?(

    <motion.div className={styles.projectcontainer}
    whileHover={{
        backgroundColor: data.bgcolor,
        transition: { delay: 0.2 }
    }}
    style={spacingcontainer}
                        onClick={() => router.push('/collections/'+((data.alt).toLowerCase()))}>
                        <motion.div className={styles.bannerimagebig}
                            // style={{
                            //     backgroundImage: `url(${data.src})`,
                            //     width:`${data.width}` 
                            // }}
                            variants={fadeIn("up", 0.2, 30)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.4 }}
                            whileHover={"hover"}
                            whileTap={"hover"}
                            >
                            <Image src={data.src} alt='' layout='fill'/>
                            <motion.p className={styles.projecthead}
                                variants={fadeIn("up", 0.2, 20)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.6 }}>
                                {data.alt}
                            </motion.p>
                        </motion.div>
                        {/* <motion.div className={styles.projectheadhover}>
                            <p>
                                Click to Explore More
                            </p>
                        </motion.div> */}
                                    <div className={styles.knowmore} onClick={() => router.push('/collections/'+((data.alt).toLowerCase()))}>Know More</div>
                    </motion.div>
) : (
    <motion.div className={styles.projectcontainer}
    whileHover={{
        backgroundColor: data.bgcolor,
        transition: { delay: 0.2 }
    }}
    style={spacingcontainer}
                        onClick={() => router.push('/collections/'+((data.alt).toLowerCase()))}>
                        <motion.div className={styles.bannerimagesmall}
                            // style={{
                            //     backgroundImage: `url(${data.src})`,
                            //     width:`${data.width}` 
                            // }}
                            variants={fadeIn("up", 0.2, 30)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.4 }}
                            whileHover={"hover"}
                            >
                            <Image src={data.src} alt='' layout='fill'/>
                            <motion.p className={styles.projecthead}
                                variants={fadeIn("up", 0.2, 20)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.6 }}>
                                {data.alt}
                            </motion.p>
                        </motion.div>
                        {/* <motion.div className={styles.projectheadhover}>
                            <p>
                                Click to Explore More
                            </p>
                        </motion.div> */}
  <div className={styles.knowmore} onClick={() => router.push('/collections/'+((data.alt).toLowerCase()))}>Know More</div>
                    </motion.div>
  )
}
</>
  )
}

export default HomeProjectcard;