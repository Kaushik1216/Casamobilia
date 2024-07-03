"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./feedback.css";
import { Avatar } from "@material-ui/core";
import { motion } from "framer-motion"
import { fadeIn } from "@/app/(main)/variants";
import axios from "axios";
import { Redirect } from "next";
import { redirect } from 'next/navigation'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Image from 'next/image'
interface apidata {
  content: string,
  Name: string
}
// const PreviousBtn = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
//     </div>
//   );
// };
// const NextBtn = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
//     </div>
//   );
// };
const Feedback = () => {
  const [data, setData] = React.useState([{ content: "kaushik", Name: "Kaushik" }])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const fetchdata = async () => {
    try {
      const url = "/api/faq";
      const res = await axios.get(url);
      var temp: apidata[] = res.data.data;
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
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="testimonialdiv" style={{ textAlign: "center" }}>
        <p className="testimonialhead">OUR CUSTOMERS FEEDBACK</p>
        <div className="test1">
          <Slider {...settings}>
            {data.map((item: apidata) => (
              <Card content={item.content} Name={item.Name} key={4} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
interface CardProps {
  content: string;
  Name: string;
  key: number; // It's unusual to pass `key` as a prop, but assuming you need it for some reason.
}

const Card: React.FC<CardProps> = ({ content, Name ,key}) => {
  return (
    <div className="testimonialcontainer">
      <div className="text1">
        <p>
          {content}
        </p>
        <p style={{ fontStyle: "italic", marginTop: 25 }}>
          {Name}
        </p>
      </div>
    </div>
  );
};

export default Feedback;
