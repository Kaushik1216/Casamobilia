'use client'
// @ts-ignore
import React from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Projectcom from '@/app/component/Projectcom';
import { redirect } from 'next/navigation'
interface ProjectProps {
  params: {
    type: string; // Define type for dynamic segment
  };
}
interface props {
  params: {
    type: string; // Define type for dynamic segment
  };
}
interface apidata {
 projectname:string,
 projectyear: string,
 projectplace: string,
 projectdesciption: string,
 backgroundimage:string,
 images: string[],
 projecttype:string
}
const Projects: React.FC<props> = async ({params}) => {
  // const router = useRouter(); // Not needed with props
  const [result , setresult]= React.useState([{
    "projectname": "Vivek JI",
    "projectyear": "2022",
    "projectplace": "Mumbai",
    "projectdesciption": "Project Project ProjectProjectProjectProjectProjectProjectProjectProjectProjectProject ProjectProject Project",
    "backgroundimage":"/vivekji1.jpg",
    "images": ["/vivekji1.jpg" , "/vivekji2.jpg"],
    "projecttype":"interior"

}])
  // var result:apidata[] = []
  // try{
  //   const url = `${process.env.BASE_URL}`+'api/project/'+(`${params.type}`).slice(0 , ((params.type).length - 1));
  //   const res = await axios.get(url);
  //   result = res.data.data;
  //   if(result.length==0){
  //     redirect("/");
  //   }
  // }
  // catch(error) {
  //    redirect("/");
  // }
  const fetchdata = async()=>{
    try{
      const url = `${process.env.BASE_URL}`+'api/project/'+`${params.type}`;
      // alert(url)
      // const url = "http://localhost:3000/api/project/interior";
      const res = await axios.get(url);
      var temp:apidata[] = res.data.data;
      console.log("Data , ", temp);
      if(temp.length==0){
        redirect("/");
      }
      setresult(temp)
    }
    catch(error) {
      redirect("/");
    }
  }

  React.useEffect(()=>{
    fetchdata();
  },[])

  return (
    <>
    <Grid
    container>
          {result.map((data:apidata,index:number) => (<Grid key={index} item xs={12} sm={6} md={4}>
              <Projectcom key={index} data={data} />
              </Grid>)
              )}

    </Grid>
            </>
  );
}

export default Projects;
// export async function getServerSideProps({ params }: ProjectProps) {
//     return {
//         props:params.type
//     }
// }