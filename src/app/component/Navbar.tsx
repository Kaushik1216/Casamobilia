"use client";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React, { useEffect, useState  , useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn } from "../(main)/variants";
import '../globals.css'
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null);
  const handleclick = () => {
    setOpen(!open);
  };
  const logostyle = {
    width: "40%",
    height: "90%",
  };

  useEffect (()=>{
    let handler = (e)=>{
      if(!(ref!=null && ref.current.contains(e.target))){
        setOpen(false);
      }
    }
    document.addEventListener("mousedown" , handler);
  })
  return (
    <>
      <div className='navdiv' ref={ref}>
        <nav>
        {/* <nav style={{backgroundColor:`${color?`#E9E7E4`:``}`}} className={color?'navbg':''}> */}
          <div className="logo" >
            <Image
              priority={true}
              src="/logo.png"
              width={100}
              height={70}
              alt="Casamobilia logo"
              style={logostyle}
              quality={100}
            />
          </div>
          <div className="menu" onClick={handleclick} style={{display:`${open ? "none":""}`}}>
            MENU<span></span><span></span><span></span><span></span>
          </div>
          <div
            className={`${open ? "hamburger toggle" : ""}`}
            onClick={handleclick}
            style={{display:`${open ? "":"none"}`}}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <motion.li
                className={`${open ? "fade" : ""}`}
                onClick={handleclick}
                variants={fadeIn("left", 0.3, 80)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a>Home</a>
              </motion.li>
            </Link>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <motion.li
                className={`${open ? "fade" : ""}`}
                onClick={handleclick}
                variants={fadeIn("left", 0.5, 80)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a>About</a>
              </motion.li>
            </Link>
            <Link href="" style={{ textDecoration: "none" }}>
              <motion.li
                className={`${open ? "fade" : ""}`}
                onClick={handleclick}
                variants={fadeIn("left", 0.6, 80)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a>portfolio</a>
              </motion.li>
            </Link>
            <Link href="/project" style={{ textDecoration: "none" }}>
              <motion.li
                className={`${open ? "fade" : ""}`}
                onClick={handleclick}
                variants={fadeIn("left", 0.7, 80)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a>Projects</a>
              </motion.li>
            </Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <motion.li
                className={`${open ? "fade" : ""}`}
                onClick={handleclick}
                variants={fadeIn("left", 0.8, 80)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a>Contact Us</a>
              </motion.li>
            </Link>
            <li className={`${open ? "fade" : ""}`}>
              <motion.div
                className="navbarsocial"
                variants={fadeIn("left", 0.9, 80)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <InstagramIcon style={{ fontSize: "45px" }} />
                  </Grid>
                  <Grid item xs={4}>
                    <FacebookIcon style={{ fontSize: "45px" }} />
                  </Grid>
                  <Grid item xs={4}>
                    <WhatsAppIcon style={{ fontSize: "45px" }} />
                  </Grid>
                </Grid>
              </motion.div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
