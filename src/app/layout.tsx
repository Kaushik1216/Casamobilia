import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./globals"
const inter = Roboto({ weight:'400', subsets: ["latin"] });
import Navbar from "./component/Navbar";
import TopScroll from "./component/TopScroll";
import Footer from "./component/Footer";
// import Layout from "./(main)/page";
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export const metadata: Metadata = {
  title: {
    absolute:"",
    default:"Casamobilia",
    template:"Casamobilia | %s"
  },
  description:
      "",
  keywords:
      "",
  openGraph: {
      title: "",
      url: "",
      description:
          "",
      images: [
          {
              url: "",
              alt: "",
          },
      ],
  },

  robots: "index, follow",

  // metadataBase: new URL(""),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Navbar/> */}
      <body className={inter.className}>
        {/* <div className="container" style={{marginTop:"100px"}}> */}
            <Navbar/>
            <div className="maincontainer">
            {children} 
            </div>
            <Footer/>
            <TopScroll/> 
        {/* </div> */}
        </body>
    </html>
  );
}
// import React, { PropsWithChildren } from "react";
// // import Navbar from "../component/Navbar";

// const Layout = ({ children }: PropsWithChildren) => {
//   return (
//     <>
//       <Navbar />
//       {/* <div className="container">{children}</div> */}
//     </>
//   );
// };

// export d
// import "./globals.css";
// import type { AppProps } from "next/app";
// import Layout from "../app/(main)/page";
// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }
// export default MyApp;
