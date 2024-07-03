// @ts-ignore
"use client"
import React from 'react'
import styles from '../collections.module.css'
import Image from 'next/image'
import { Grid } from '@mui/material'
import Plx from 'react-plx'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'
import axios from 'axios'
import { redirect } from 'next/navigation'
import Modal from '@mui/material/Modal';
import CollectionsIcon from '@mui/icons-material/Collections';
import Collmodal from '@/app/component/Collmodal';
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
    params: {
      type: string; // Define type for dynamic segment
    };
  }
const Projects: React.FC<props> = async ({params}) => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [type , settype] = React.useState((params.type).toUpperCase())
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const [result , setresult]= React.useState({
      collectionname: "sofa",
      firstdesciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab rerum eum magni. Tempore, deleniti qui minima non dolorem cum voluptas enim, harum eos ad maiores necessitatibus inventore amet facilis quidem nesciunt nisi. Assumenda, dolorum nam, perspiciatis alias quisquam eum sunt cupiditate id nihil officiis odit vero corrupti, enim possimus! ",
      seconddesciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab rerum eum magni. Tempore, deleniti qui minima non dolorem cum voluptas enim, harum eos ad maiores necessitatibus inventore amet facilis quidem nesciunt nisi. Assumenda, dolorum nam, perspiciatis alias quisquam eum sunt cupiditate id nihil officiis odit vero corrupti, enim possimus! ",
      thirddesciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab rerum eum magni. Tempore, deleniti qui minima non dolorem cum voluptas enim, harum eos ad maiores necessitatibus inventore amet facilis quidem nesciunt nisi. Assumenda, dolorum nam, perspiciatis alias quisquam eum sunt cupiditate id nihil officiis odit vero corrupti, enim possimus! ",
      fourthdesciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab rerum eum magni. Tempore, deleniti qui minima non dolorem cum voluptas enim, harum eos ad maiores necessitatibus inventore amet facilis quidem nesciunt nisi. Assumenda, dolorum nam, perspiciatis alias quisquam eum sunt cupiditate id nihil officiis odit vero corrupti, enim possimus! ",
      fifthdesciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab rerum eum magni. Tempore, deleniti qui minima non dolorem cum voluptas enim, harum eos ad maiores necessitatibus inventore amet facilis quidem nesciunt nisi. Assumenda, dolorum nam, perspiciatis alias quisquam eum sunt cupiditate id nihil officiis odit vero corrupti, enim possimus! ",
      firstimage:"/sofa1.jpg",
      secondimage:"/sofa2.jpg",
      thirdimage: "/sofa4.jpg",
      fourthimage: "/sofa5.jpg",
      fifthimage: "/sofa3.jpg",
      secondmodalimages: ["/sofa4.jpg","/sofa5.jpg","/sofa3.jpg"],
      secondmodaldescription: ["/sofa4.jpg","/sofa5.jpg","/sofa3.jpg"],
      thirdmodaldescription: ["/sofa4.jpg","/sofa5.jpg","/sofa3.jpg"],
      fourthmodaldescription: ["/sofa4.jpg","/sofa5.jpg","/sofa3.jpg"],
      fifthmodaldescription: ["/sofa4.jpg","/sofa5.jpg","/sofa3.jpg"],
      thirdmodalimages: ["/sofa5.jpg","/sofa4.jpg","/sofa5.jpg","/sofa3.jpg"],
      fourthmodalimages: ["/sofa3.jpg","/sofa4.jpg","/sofa5.jpg","/sofa3.jpg"],
      fifthmodalimages: ["/sofa4.jpg","/sofa5.jpg","/sofa3.jpg"]
  })

  const[modalimages , setmodalimages] = React.useState([]);
  const[modaldesription , setmodaldescription] = React.useState([]);
    React.useEffect(()=>{
      setWindowWidth(window.innerWidth);
    },[])

    const fetchdata = async()=>{
      try{
      const url = `${process.env.BASE_URL}`+'api/collection/'+(`${params.type}`).slice(0 , ((params.type).length - 1));
      const res = await axios.get(url);
      var temp:apidata[] = res.data.data;
      if(temp.length==0){
        redirect("/");
      }
      setresult(temp[0])
      }
      catch(error) {
        redirect("/");
      }
    }

    React.useEffect(()=>{
      fetchdata();
    },[])

    const modalopen = (i:number)=>{
      setOpen(true);
      setIndex(i);
    }
    return (
        <>
            <div className={styles.categorycontainer}>
                <Plx
                parallaxData={[
                    {
                      start: 0,
                      duration: 300,
                      properties: [
                        {
                          startValue: 0,
                          endValue: -50,
                          property: 'translateY',
                        },
                      ],
                    }
                  ]}>

                <div className={styles.centerdiv}>
                <div className={styles.collectionintro}>
                    <div className={styles.collectionhead}> COLLECTIONS / {type} </div>
                    <div className={styles.collectionpara}> {result.firstdesciption}</div>
                </div>
                </div>
        
                </Plx>
                <Plx
                parallaxData={[
                    {
                      start: 0,
                      duration: 500,
                      properties: [
                        {
                          startValue: 1,
                          endValue: 1.1,
                          property: 'scale',
                        },
                      ],
                    }
                  ]}>
                <div className={styles.imagecontainercoll}>
                    <div>
                    <Image src ={result.firstimage} alt='' layout='fill'/>
                    </div>
                </div>
                </Plx>
            
                <Grid container>
          <Grid item xs={12} md={6} sm={12}>
          <Plx
            parallaxData={[
              {
                start: 0,
                duration: 1200,
                properties: [
                  {
                    startValue: ((windowWidth>=620)?(600):100),
                    endValue: ((windowWidth>=1020)?(-40):-400),
                    property: 'translateY',
                  }
                ],
              }
            ]}
          >
            <div className={styles.imagecontainer1}>

              <p className={styles.collectiontext1}>{result.seconddesciption}</p>
              <div className={styles.collectionimage1}>
                <Image
                  src={result.secondimage}
                  alt=''
                  layout="fill"
                  className={styles.collectionimage}
                  />
              </div>
            </div>
          <div className={styles.collectioncontainer4info} onClick={()=>{modalopen(2)}}><CollectionsIcon fontSize="large"/></div>
          </Plx>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
          <Plx
            parallaxData={[
              {
                start: 100,
                duration: 1000,
                properties: [
                  {
                    startValue: ((windowWidth>=1020)?100:-40),
                    endValue: ((windowWidth>=1050)?600:0),
                    property: 'translateY',
                  },
                ],
              },
            ]}
          >
            <div className={styles.imagecontainer2}>
              <p className={styles.collectiontext2}>{result.thirddesciption}</p>
          <Plx
            parallaxData={[
              {
                start: 1000,
                duration: 1000,
                properties: [
                  {
                    startValue: 100,
                    endValue: -40,
                    property: 'translateY',
                  },
                ],
              },
            ]}
          >
              <div className={styles.collectionimage2}>
                <Image
                  src={result.thirdimage}
                  alt=''
                  layout="fill"
                  className={styles.collectionimage}
                />
              </div>
              <div className={styles.collectioncontainer4info} onClick={()=>{modalopen(3)}}><CollectionsIcon fontSize="large"/></div>
          </Plx>
            </div>
          </Plx>
          </Grid>
        </Grid>
        <div className={styles.collectioncontainerbt}>

        <Grid container>
            <Grid item xs={12} md={6} sm={6} padding={1}>
                <div className={styles.collectioncontainer2}>
                    <motion.div className={styles.collectiontext5}
                                variants={fadeIn("right", 0.3, 40)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.4 }}>
                        {result.fourthdesciption}
                    </motion.div>
                    <motion.div className={styles.collectioncontainer4}
                    variants={fadeIn("right", 0.5, 60)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.4 }}>
                        <Image
                            src={result.fourthimage}
                            alt=''
                            layout="fill"
                            className={styles.collectionimage}
                            />
                    </motion.div>
                </div>
                <div className={styles.collectioncontainer4info} onClick={()=>{modalopen(4)}}><CollectionsIcon fontSize="large"/></div>
            </Grid>
            <Grid item xs={12} md={6} sm={6} padding={1}>
                <div className={styles.collectioncontainer2}>
                        <motion.div className={styles.collectiontext5}
                        variants={fadeIn("left", 0.3, 40)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.4 }}>
                            {result.fifthdesciption}
                        </motion.div>
                        <motion.div className={styles.collectioncontainer4}
                        variants={fadeIn("left", 0.5, 60)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.4 }}>
                            <Image
                                src={result.fifthimage}
                                alt=''
                                layout="fill"
                                className={styles.collectionimage}
                                />
                        </motion.div>
                 </div>
                  <div className={styles.collectioncontainer4info} onClick={()=>{modalopen(5)}}><CollectionsIcon fontSize="large"/></div>
            </Grid>
        </Grid>
        </div>
        </div>
        {
         (open && <Collmodal key={index} data={result}/>)
        }
        </>
    )
}
export default Projects;