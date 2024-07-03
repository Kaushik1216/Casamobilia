// @ts-ignore
import React from 'react'
import styles from '../styles/project.module.css'
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
interface Idata {
 images: string[],
 descriptions: string[]
}
interface apidata {
  collectionname: string,
  firstdesciption:string,
  seconddesciption:string,
  thirddesciption:string,
  fourthdesciption:string,
  fifthdesciption:string,
  firstimage:string,
  secondimage:string,
  thirdimage:string,
  fourthimage:string,
  fifthimage:string,
  secondmodalimages: string[],
  secondmodaldescription:string[],
  thirdmodaldescription:string[],
  thirdmodalimages: string[],
  fourthmodalimages: string[],
  fourthmodaldescription:string[],
  fifthmodalimages: string[]
  fifthmodaldescription:string[],
 }
interface props {
   key: Number,
   data: apidata
}

const Collmodal: React.FC<props> = ({ key, data }) => {
  const [open, setOpen] = React.useState(true);
  const [images, setImages] = React.useState(["/sofa4.jpg","/sofa5.jpg","/sofa3.jpg"]);
  const [description, setDescription] = React.useState(["/sofa4.jpg","/sofa5.jpg","/sofa3.jpg"]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut: NodeJS.Timeout | Boolean | Number;
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const modalopen = (index:Number)=>{
    setOpen(true);
    if(index==2) {
      setImages((data.secondmodalimages));
      setDescription((data.secondmodaldescription));
    } else if(index==3) {
      setImages((data.secondmodalimages));
      setDescription((data.secondmodaldescription));
    } else if(index==4) {
      setImages((data.secondmodalimages));
      setDescription((data.secondmodaldescription));
    } else {
      setImages((data.secondmodalimages));
      setDescription((data.secondmodaldescription));
    }
  }
  useEffect(()=>{
    modalopen(key);
  },[])
  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
return (
    <>
<Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
  <div  className={styles.modalcontainer} >
<div
  className="carousel"
  onMouseEnter={() => {
    setAutoPlay(false);
    }}
    onMouseLeave={() => {
      setAutoPlay(true);
      }}
      >
      <div className={styles.carouselwrapper}>
      {images.map((image, index) => {
        return (
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
            {images.map((_, index) => {
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
                
                <div className={styles.modalprojectplace}>kaushik{description[current]}</div>
                <div className={styles.modalprojectinfo}> {description[current]}
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

export default Collmodal;