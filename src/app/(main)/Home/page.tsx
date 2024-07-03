'use client'
import React from 'react'
import HomeSection2 from '@/app/component/HomeSection2'
import Imagecarousel from '@/app/component/ImageCarousel'
import Homeproject from '@/app/component/Homeproject'
import Carousel from '@/app/component/Carousel'
import Plx from "react-plx";
import Feedback from '@/app/component/feedback/Feedback';
import Homecollection from '@/app/component/Homecollection/Homecollection'
import axios from 'axios'
interface Iimage {
  alt: string,
  srcleft: string,
  srcright:string,
  projectname:string,
  projectplace:string,
  bgcolor:string
}
export default function Home() {
  const [data, setData] = React.useState([{
    alt: "Vivek JI",
    srcleft: "/vivekji1.jpg",
    srcright: "/vivekji2.jpg",
    projectname: "Vivek JI",
    projectplace: "Delhi",
    bgcolor:"#192729"
  }])

  const fetchdata = async () => {
    try {
      const url = "/api/carousel";
      const res = await axios.get(url);
      var temp: Iimage[] = res.data.data;
      setData(temp);
    }
    catch (error) {
      alert("some error occur")
    }
  }

  React.useEffect(() => {
    fetchdata();
  }, [])
  return (
    <>
      {/* <Imagecarousel/> */}
      <Carousel key={1} images={data}/>
        <HomeSection2/>
        <Homecollection/>
        <Feedback/>
    </>
  )
}
