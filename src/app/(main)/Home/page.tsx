'use client'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import HomeCarouselfirst from '@/app/component/HomeCarouselfirst'

interface Iitem {
  name:string,
  description:string
}

export default function Home() {

  var items:Iitem[] = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

  return (
    <>
    <div className='warrapcontainer'>
      <div className="homecorousel">
      <Carousel>
            {
                items.map( (item, i) => <HomeCarouselfirst key={i} item={item} /> )
            }
        </Carousel>
      </div>
    </div>
    </>

  )
}
