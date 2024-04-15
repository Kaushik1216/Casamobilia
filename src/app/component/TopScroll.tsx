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
    style={{ color: "#FFA400", margin: "0 auto" ,background:"#0A0A0A",boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.5)'}}
  />
  )
}
