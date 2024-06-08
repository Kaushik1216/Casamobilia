'use server'
import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter hook
import axios from 'axios';
import { Grid } from '@mui/material';
import Projectcom from '@/app/component/Projectcom';
interface ProjectProps {
  params: {
    type: string; // Define type for dynamic segment
  };
}
interface props {
    par: {
        type: string; // Define type for dynamic segment
    };
}
interface apidata {
  name:string,
  place:string,
  location:string,
  year:Number,
  bgimg:string
}
const Projects: React.FC<props> = async ({params}) => {
  // const router = useRouter(); // Not needed with props
  const url = `${process.env.BASE_URL}`+'api/project/'+(`${params.type}`).slice(0 , ((params.type).length - 1));
  const res = await axios.get(url);
  console.log("cnesv ->:  " , res);
  var result:apidata[] = res.data.data;
  console.log("now data->:  " , result);
  return (
    
    <Grid
    container>
          {
            result.map((data, i) => (<Grid item xs={12} sm={6} md={4}>
              <Projectcom key={i} data={data} />
              </Grid>)
              )
          }

    </Grid>
  );
}

export default Projects;
// export async function getServerSideProps({ params }: ProjectProps) {
//     return {
//         props:params.type
//     }
// }