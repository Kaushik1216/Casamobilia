import React from 'react'
import Head from 'next/head'
import { Metadata } from 'next'
import { Grid } from '@mui/material'
export const metadata: Metadata = {
    title: "about"
}
import Image from 'next/image'
export default function About() {
  return (
    <>
    <div className='warrapcontainer'>
    <div>
      <Grid container>
      <Grid item xs={12} md={6} sm={6}>
        <div>
          <Image
            src=''
            alt=''
            width={100}
            height={100}
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6} sm={6}>
          <div className='abouttext1'>
          The name “CASA MOBILIA” defines Finest Bespoke Furniture & Interiors. The brand embodies global refinement and an indigenous design sense, reflective of a contemporary & timeless design.

          Casa Mobilia by Aakarshan Furniture Systems was founded in 2012 by Ankit Agarwal & Sadhna Goyal to take care of the retail end of the business of design. Casa Mobilia is the place where all high end furniture & interior design ideas can find their expression. The designer furniture store showcases unique pieces that highlight the intrinsic quality of both the traditional and a new India and hosts a truly stunning array of topical pieces in an exciting range of colours and styles which are customizable based on client requirements. Our benchmarks for quality craftsmanship coupled with design innovation makes every piece a collectable and every collection an artistic legacy.

          The Casa Mobilia store epitomizes luxurious elements and experimental shapes taking life-style design to a new realm of sheer indulgence. Mr. Ankit’s collection has everything from sofas and tables, cushions, Beds and Led Units, Dinings and Buffets & anything/everything in furniture.

          As Mr. Ankit puts it, ‘I have always given my imagination a free run. What emerges is really a fusion of modern and contemporary’. So one might refer to his style as a mix of tradition and today but he is happy being called a “contemporary classic”.

          Ankit Agarwal’s exceptional taste and unconventional approach to design has made his one of the most sought after Furniture designers & Interior executers in India. From fabrics to furniture, home décor to curtains his designs are luxurious yet vibrant at the same time. His accomplishments can be attributed to his talent, drive, determination and a pure love for beauty in design.

          Casa Mobilia by Aakarshan Furniture Systems have evolved into pioneers nationally. Ankit Agarwal’s designs encompasses an array of private and commercial projects while Casa Mobilia enhances the evolution of design with revered regular launches of awe inspiring new collections from its design studios.

          The lineage of artistic influence reverberates in every project with a design philosophy focusing on innovation and sustainability while emphasizing a refined use of art, magnificent objects, patterns, strong silhouettes, textures and a sophisticated color palette, that is balanced to provide a refined original signature.

          In a synopsis, Casa Mobilia endeavors to constantly better its best, and continue to be recognized as Delhi Ncr’s foremost luxury furniture & interiors brand.
          </div>
      </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={6} sm={6} paddingTop={10}>
        <div className='abouttext1'>
          The name “CASA MOBILIA” defines Finest Bespoke Furniture & Interiors. The brand embodies global refinement and an indigenous design sense, reflective of a contemporary & timeless design.

          Casa Mobilia by Aakarshan Furniture Systems was founded in 2012 by Ankit Agarwal & Sadhna Goyal to take care of the retail end of the business of design. Casa Mobilia is the place where all high end furniture & interior design ideas can find their expression. The designer furniture store showcases unique pieces that highlight the intrinsic quality of both the traditional and a new India and hosts a truly stunning array of topical pieces in an exciting range of colours and styles which are customizable based on client requirements. Our benchmarks for quality craftsmanship coupled with design innovation makes every piece a collectable and every collection an artistic legacy.

          The Casa Mobilia store epitomizes luxurious elements and experimental shapes taking life-style design to a new realm of sheer indulgence. Mr. Ankit’s collection has everything from sofas and tables, cushions, Beds and Led Units, Dinings and Buffets & anything/everything in furniture.

          As Mr. Ankit puts it, ‘I have always given my imagination a free run. What emerges is really a fusion of modern and contemporary’. So one might refer to his style as a mix of tradition and today but he is happy being called a “contemporary classic”.

          Ankit Agarwal’s exceptional taste and unconventional approach to design has made his one of the most sought after Furniture designers & Interior executers in India. From fabrics to furniture, home décor to curtains his designs are luxurious yet vibrant at the same time. His accomplishments can be attributed to his talent, drive, determination and a pure love for beauty in design.

          Casa Mobilia by Aakarshan Furniture Systems have evolved into pioneers nationally. Ankit Agarwal’s designs encompasses an array of private and commercial projects while Casa Mobilia enhances the evolution of design with revered regular launches of awe inspiring new collections from its design studios.

          The lineage of artistic influence reverberates in every project with a design philosophy focusing on innovation and sustainability while emphasizing a refined use of art, magnificent objects, patterns, strong silhouettes, textures and a sophisticated color palette, that is balanced to provide a refined original signature.

          In a synopsis, Casa Mobilia endeavors to constantly better its best, and continue to be recognized as Delhi Ncr’s foremost luxury furniture & interiors brand.
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={6} paddingTop={10}>
        <div>
          <Image
            src=''
            alt=''
            width={100}
            height={100}
          />
        </div>
        </Grid>
      </Grid>
    </div>
    </div>
    </>
  )
}
