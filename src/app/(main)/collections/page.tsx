"use client"
import React from 'react'
import Homeproject from '@/app/component/Homeproject'
import styles from './collections.module.css'
import Plx from 'react-plx'
export default function Collection() {
  return (
    <>
    <Plx 
      parallaxData={[
        {
          start: 0,
          duration: 500,
          properties: [
            {
              startValue: 0,
              endValue: 70,
              property: 'translateY',
            },
            {
              startValue: 1,
              endValue: 1.2,
              property: 'scale',
            }
          ],
        },
      ]}>
    <div className={styles.collectioncontainer}>
        <div className={styles.collectionintro}>
        <div className={styles.collectionhead}>OUR COLLECTIONS</div>
        <div className={styles.collectionpara}> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex dolores error fugiat dolorum quasi, minus nostrum voluptatum libero voluptas quibusdam porro aliquam reprehenderit sunt veritatis fugit obcaecati, esse ducimus. Ipsum iste veritatis animi nihil reiciendis ab, iusto rerum maxime a, harum dolores labore explicabo aliquid numquam fugiat qui reprehenderit?
        </div>
        </div>
    </div>
    </Plx>
    <div className={styles.collection}>
        <Homeproject/>
    </div>
    </>
  )
}
