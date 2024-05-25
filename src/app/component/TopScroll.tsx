'use client'
import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export default function TopScroll() {
  return (
    <ScrollToTop
    className="Totop"
    smooth
    component={
      <p >
        <KeyboardArrowUpIcon style={{fontSize:"30px",fontWeight:"large"}}/>
      </p>
    }
    style={{ color: "#141414", margin: "0 auto" ,background:"#E9E7E4",boxShadow: '#E9E7E4'}}
  />
  )
}
