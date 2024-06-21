"use client"
import React from 'react'
import styles from '../styles/project.module.css'
import { motion} from "framer-motion";
import Image from 'next/image';
import { fadeIn } from '../(main)/variants';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState , useEffect } from 'react';
interface Idata {
   projectname:String,
  projectyear: String,
  projectplace: String,
  projectdesciption: String,
  backgroundimage:String,
  images: String[],
  projecttype:String
}
interface props {
    key: Number,
    data: Idata
}


const Projectcom: React.FC<props> = ({ key, data }) => {
      const [open, setOpen] = React.useState(false);
      const [images, setImages] = React.useState(data.images);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [current, setCurrent] = useState(0);
      const [autoPlay, setAutoPlay] = useState(true);
      let timeOut = null;
      console.log("project desc " , data.projectdesciption);
      useEffect(() => {
        timeOut =
          autoPlay &&
          setTimeout(() => {
            slideRight();
          }, 2500);
      });
    
      const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
      };
    
      const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
      };
    return (
        <>
        <motion.div className={styles.container}
          initial="hidden"
          animate="hidden"
          whileHover="show"
          >
            <Image src={data.backgroundimage} alt='' layout='fill'/>
            <div className={styles.overlay}>
                <motion.p className={styles.head1} variants={fadeIn('right' ,0.1, 40)}>{data.projectname}</motion.p>
                <motion.p className={styles.head2} variants={fadeIn('right' ,0.2, 40)}>{data.projectplace}</motion.p>
                <motion.p className={styles.head3} variants={fadeIn('right' ,0.3, 40)} >{data.projectyear}</motion.p>
            </div>
            <div className={styles.knowmore} onClick={handleOpen}>Know More</div>
        </motion.div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box> */}
    <div  className={styles.modalcontainer} >
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className={styles.carouselwrapper}>
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index == current
                  ? (`${styles.carouselcard} ${styles.carouselcardactive}`)
                  : `${styles.carouselcard}`
              }
            >
              <img className={styles.cardimage} src={image} alt="" />
            </div>
          );
        })}
        <div className={styles.carouselarrowleft} onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className={styles.carouselarrowright} onClick={slideRight}>
          &rsaquo;
        </div>
        <div className={styles.carouselpagination}>
          {(data.images).map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? `${styles.paginationdot}`+` `+`${styles.paginationdotactive}`
                    : `${styles.paginationdot}`
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
    <div className={styles.modalinfo}>

    <div className={styles.modalprojecthead}>{data.projectname}</div>
    <div className={styles.modalprojectplace}>{data.projectplace}</div>
    <div className={styles.modalprojectinfo}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex numquam voluptate veniam totam saepe. Iure, eaque. Sint, atque veniam et consequatur veritatis recusandae deleniti, officiis laudantium nulla tempora minima alias eveniet doloribus at totam. Ratione molestiae voluptatem ut error exercitationem repellendus veniam. Culpa ipsa aperiam asperiores maiores, sequi laudantium.

    </div>
    </div>
    <div className={styles.button} onClick={handleClose}>
          CLOSE
    </div>
    </div>
      </Modal>
        </>
    )
}

export default Projectcom
