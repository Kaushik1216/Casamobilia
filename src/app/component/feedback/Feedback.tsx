import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./feedback.css";
import { Avatar } from "@material-ui/core";
import {motion} from "framer-motion"
import { fadeIn } from "@/app/(main)/variants";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Image from 'next/image'
const data = [
    {   
        content:"Good collection of home as well as office furniture is available at this shop.Dealing staff is well behaved.The rates of the shop are on the higher side.Limited parking facility outside the showroom.",
        Name:"Kill Bill"
    },
    {
        content:"They have got decent variety of office furniture in display which made my job very easy to select my office furniture. Must visit for any furniture requirement.",
        Name:"Aradhana Rawat"
    },
    {
        content:"I had the requirement for some workstations for my office & they did the job brilliantly with perfect finishes. Highly recommend Aakarshan Furniture Systems at tikona park for Furniture requirements.",
        Name:"Ashwani Kaushik"
    },
    {
        content:"There is a difference between bespoke furniture of any other brand , and bespoke furniture by Casa mobilia! Excellent pieces purchased for my new office space. Great team of youth !",
        Name:"Ani Bhawsar"
    },
    {
        content:"Quality product. Services are very gud.Every detailing of product is personality checked..must visit place....custome made table by Aakarshan furniture was perfect.",
        Name:"hema agarwal"
    },
    {
        content:"Super cool team of young professionals with decent variety of residential and office furniture. keep the good work going ",
        Name:"Deepa Agarwal"
    }
]
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Feedback = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: true,
      };
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center"}}
    >
      <div className= "testimonialdiv"style={{textAlign: "center" }}>
        <p className="testimonialhead">OUR CUSTOMERS FEEDBACK</p>
        <div className="test1">
        <Slider {...settings} prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          {data.map((item )=>(
              <Card content = {item.content} Name = {item.Name}/>
              ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

const Card = ({content ,Name}) => {
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
