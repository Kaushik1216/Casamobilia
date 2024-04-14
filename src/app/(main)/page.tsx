import Image from "next/image";
import Home from "./Home/page";
import Head from "next/head";
// import Navbar from "../component/Navbar";
export default function Top() {
  // const [open , setOpen] = useState(false);

  // const handleclick = () =>{
  //   setOpen(!open);
  // }
  return (
    <>

      <Home/>
    </>
  );
}
import React, { PropsWithChildren } from "react";
import Navbar from "../component/Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
};

// export default Layout;
