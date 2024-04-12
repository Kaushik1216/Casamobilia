import React from 'react'
import Head from 'next/head'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "about"
}
export default function About() {
  return (
    <>
    <div>

    <Head>
        <title>My page title</title>
      </Head>
    <div>this is about page</div>
    </div>
    </>
  )
}
