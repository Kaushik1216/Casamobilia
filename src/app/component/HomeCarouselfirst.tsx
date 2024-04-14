import React from 'react'
import { Paper, Button } from '@mui/material'

interface Iitem {
    name:string,
    description:string
}

interface props{
    key:Number,
    item:Iitem
}

// export default function HomeCarouselfirst() {
const  HomeCarouselfirst: React.FC<props> = ({key , item})=> {
    return (
        <Paper>
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default HomeCarouselfirst;