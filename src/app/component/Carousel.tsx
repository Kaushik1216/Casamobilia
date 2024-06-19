import { useEffect } from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
// import "../style/Carousel.css";
interface Iimage {
    alt: string,
    srcleft: string,
    srcright:string,
    projectname:string,
    projectplace:string,
    bgcolor:string
}
interface props{
    key:Number,
    images:Iimage[]
}
const  Carousel: React.FC<props> = ({key, images})=> {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [color  , setcolor] = useState(images[0].bgcolor);
  const [text1  , settext1] = useState(images[0].projectname);
  const [text2  , settext2] = useState(images[0].projectplace);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      },6000);
  });

  const slideRight = async () => {
    setAutoPlay(()=>false);
    setCurrent(current === images.length - 1 ? 0 : current + 1);
    setcolor(images[current === images.length - 1 ? 0 : current + 1].bgcolor)
    settext1(images[current === images.length - 1 ? 0 : current + 1].projectname)
    settext2(images[current === images.length - 1 ? 0 : current + 1].projectplace)
    // setTimeout(() => {console.log("right timer called")}, 3000);
    // await sleep(3);
    setAutoPlay(true);
};

const slideLeft = async () => {
    setAutoPlay(()=>false);
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    setcolor(images[current === 0 ? images.length - 1 : current - 1].bgcolor)
    settext1(images[current === 0 ? images.length - 1 : current - 1].projectname)
    settext2(images[current === 0 ? images.length - 1 : current - 1].projectplace)
    // setTimeout(() => {console.log("left timer called")}, 3000);
    setAutoPlay(()=>true);
};
  return (
    <div className="carouselcontainer">

    <Grid container>

  <Grid item xs={12} sm={12} md={6} ls={6}>

        <div className="carouselleft" style={{backgroundColor:`${color}`}}>

        <div
        className="carousel carousel1"
        // onMouseEnter={() => {
        //     setAutoPlay(false);
        //     clearTimeout(timeOut);
        // }}
        // onMouseLeave={() => {
        //     setAutoPlay(true);
        // }}
        >
        <div className="carousel_wrapper">
            {images.map((image, index) => {
                return (
                    /* (condition) ? true : false */
                    
                    <div
                    key={index}
                    className={
                        index == current
                        ? "carousel_card carousel_card-active"
                        : "carousel_card"
                    }
                    >
                <img className="card_image" src={image.srcleft} alt="" />
                <div className="card_overlay">
                    <h2 className="card_title">{image.projectname}</h2>
                </div>
                </div>
            );
        })}
            {/* <div className="carousel_arrow_left" onClick={()=>{slideLeft}}>
            &lsaquo;
            </div>
            <div className="carousel_arrow_right" onClick={()=>{slideRight}}>
            &rsaquo;
            </div> */}
            {/* <div className="carousel_pagination">
            {images.map((_, index) => {
                return (
                    <div
                    key={index}
                    className={
                        index == current
                        ? "pagination_dot pagination_dot-active"
                        : "pagination_dot"
                    }
                    onClick={() => setCurrent(index)}
                    ></div>
                    );
                })}
            </div> */}
        </div>
        </div>
        </div>
    </Grid>
  <Grid item xs={12} sm={12} md={6} ls={6}>

        <div className="carouselright" style={{backgroundColor:`${color}`}}>

        <div
        className="carousel carousel2"
        >
        <div className="carousel_wrapper">
            {images.map((image, index) => {
                return (
                    /* (condition) ? true : false */
                    
                    <div
                    key={index}
                    className={
                        index == current
                        ? "carousel_card carousel_card-active"
                        : "carousel_card"
                    }
                    >
                <img className="card_image" src={image.srcright} alt="" />
                <div className="card_overlay">
                    <h2 className="card_title">{image.projectname}</h2>
                </div>
                </div>
            );
            })}
            {/* <div className="carousel_arrow_left" onClick={slideLeft}>
            &lsaquo;
            </div>
            <div className="carousel_arrow_right" onClick={slideRight}>
            &rsaquo;
            </div>
            <div className="carousel_pagination">
            {images.map((_, index) => {
                return (
                    <div
                    key={index}
                    className={
                        index == current
                        ? "pagination_dot pagination_dot-active"
                        : "pagination_dot"
                    }
                    onClick={() => setCurrent(index)}
                    ></div>
                );
            })}
        </div> */}
        </div>
        </div>
        </div>
    </Grid>
    </Grid>
    {/* <div className="carousel_arrow_left" onClick={slideLeft}>
            &lsaquo;
            </div>
            <div className="carousel_arrow_right" onClick={slideRight}>
            &rsaquo;
            </div> */}
            {/* <div className="carousel_pagination">
            {images.map((_, index) => {
                return (
                    <div
                    key={index}
                    className={
                        index == current
                        ? "pagination_dot pagination_dot-active"
                        : "pagination_dot"
                        }
                        onClick={() => setCurrent(index)}
                        ></div>
                    );
                })}
            </div> */}
    <div className="imagetextcontainer1">
        <p className="imagetext1">{text1} , {text2}</p>
    </div>
    <div className="imagetextcontainer2">
        <p className="imagetext1">{text1} , {text2}</p>
    </div>
    </div>
  );
}

export default Carousel;
