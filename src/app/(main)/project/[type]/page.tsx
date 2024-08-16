// @ts-ignore
"use client"

import React from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Projectcom from '@/app/component/Projectcom';
import { redirect } from 'next/navigation'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
interface ProjectProps {
  params: {
    type: string; // Define type for dynamic segment
  };
}
// interface props {
//   params: {
//     type: string; // Define type for dynamic segment
//   };
// }
interface apidata {
 projectname:string,
 projectyear: string,
 projectplace: string,
 projectdesciption: string,
 backgroundimage:string,
 images: string[],
 projecttype:string
}
interface props {
  params: {
    type: string; // Define type for dynamic segment
  };
}
const Projects: React.FC<props> = async ({params}) => {
  // const router = useRouter(); // Not needed with props
  const [result , setresult]= React.useState([
    {
        "projectname": "Krishnakunj",
        "projectyear": "2023",
        "projectplace": "Delhi NCR",
        "projectdesciption": "Project Project ProjectProjectProjectProjectProjectProjectProjectProjectProjectProject ProjectProject Project",
        "backgroundimage":"/krishnakunj1.jpg",
        "images": ["krishnakunj2.jpg" , "krishnakunj1.jpg"],
        "projecttype":"interior"
    },
    {
        "projectname": "Vivek JI",
        "projectyear": "2022",
        "projectplace": "Mumbai",
        "projectdesciption": "Project Project ProjectProjectProjectProjectProjectProjectProjectProjectProjectProject ProjectProject Project",
        "backgroundimage":"/vivekji1.jpg",
        "images": ["/vivekji1.jpg" , "/vivekji2.jpg"],
        "projecttype":"interior"

    },
    {
        "projectname": "Krishnakunj",
        "projectyear": "2023",
        "projectplace": "Delhi NCR",
        "projectdesciption": "Project Project ProjectProjectProjectProjectProjectProjectProjectProjectProjectProject ProjectProject Project",
        "backgroundimage":"/krishnakunj1.jpg",
        "images": ["krishnakunj2.jpg" , "krishnakunj1.jpg"],
        "projecttype":"interior"
    },
    {
        "projectname": "Vivek JI",
        "projectyear": "2022",
        "projectplace": "Mumbai",
        "projectdesciption": "Project Project ProjectProjectProjectProjectProjectProjectProjectProjectProjectProject ProjectProject Project",
        "backgroundimage":"/vivekji1.jpg",
        "images": ["/vivekji1.jpg" , "/vivekji2.jpg"],
        "projecttype":"interior"

    },
    {
        "projectname": "Krishnakunj",
        "projectyear": "2023",
        "projectplace": "Delhi NCR",
        "projectdesciption": "Project Project ProjectProjectProjectProjectProjectProjectProjectProjectProjectProject ProjectProject Project",
        "backgroundimage":"/krishnakunj1.jpg",
        "images": ["krishnakunj2.jpg" , "krishnakunj1.jpg"],
        "projecttype":"kitchen"
    },
    {
        "projectname": "Vivek JI",
        "projectyear": "2022",
        "projectplace": "Mumbai",
        "projectdesciption": "Project Project ProjectProjectProjectProjectProjectProjectProjectProjectProjectProject ProjectProject Project",
        "backgroundimage":"/vivekji1.jpg",
        "images": ["/vivekji1.jpg" , "/vivekji2.jpg"],
        "projecttype":"kitchen"

    }])

  React.useEffect(()=>{
    const fetchdata = async()=>{
      try{
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}`+'api/project/'+`${params.type}`;
        const res = await axios.get(url);
        setresult(res.data.data);
        redirect("/project/interior");
      }
      catch(error) {
        redirect("/");
      }
    }
    fetchdata();
  },[])

  return (
    <>
    <Grid
    container>
          {result && (result).map((data:apidata,index:number) => (<Grid key={index} item xs={12} sm={6} md={4}>
              <Projectcom key={index} data={data} />
              </Grid>)
              )}

    </Grid>
            </>
  );
}

export default Projects;