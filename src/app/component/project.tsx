import React from 'react'

interface props{
    projecttype:string
}
const  project: React.FC<props> = ({projecttype})=>{
  return (
    <div>{projecttype}</div>
  )
}

export default project;
