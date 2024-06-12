import React from 'react'
import { Grid } from '@mui/material'
import Image from 'next/image'
// import '../'
export default function Contact() {
  return (
    <>
    <div className='contactpage'>

    <Grid container>
        <Grid item xs={12} md={6} sm={12} lg={6}>
        <div className='contact'>

           <Image
           src='/map.png'
           alt='map image'
           layout='fill'
           className='imageclass'/>
           </div>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
            <div className='contactus'>CONTACT US</div>
        <div className="formcontainer">
            <div className="app-form">
                <div className="app-form-group">
                <input className="app-form-control" placeholder="NAME"/>
                </div>
                <div className="app-form-group">
                <input className="app-form-control" placeholder="EMAIL"/>
                </div>
                <div className="app-form-group">
                <input className="app-form-control" placeholder="SUBJECT"/>
                </div>
                <div className="app-form-group">
                <input className="app-form-control" placeholder="CONTACT NO"/>
                </div>
                <div className="app-form-group message">
                <textarea className="app-form-control" placeholder="MESSAGE" rows={5}></textarea>
                </div>
                <div className="app-form-group sendbutton">
                <button className="app-form-button2">SEND</button>
                </div>
                <div className='app-form-group'>
                <button className="app-form-button1">CANCEL</button>
                </div>
                {/* <div className="app-form-group contactbuttons">
                </div> */}
            </div>
        </div>
        </Grid>
    </Grid>
    </div>
    </>
  )
}
