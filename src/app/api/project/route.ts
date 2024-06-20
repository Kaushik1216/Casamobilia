import { NextResponse } from 'next/server';
// import * as fs from 'fs';
import {productmodel} from '../../../../models/projectSchema';
import {connectDB} from '../../../../middleware/connectdb';

export const GET = async (req:Request , res:Response) =>{
    // let data = await fs.promises.readFile("data/furniture.json", 'utf-8');
    const connect = await connectDB();
    let products = await productmodel.find();
    // const data = JSON.parse(products);
    return NextResponse.json({status:200 ,data: products})
}
// export const GET = async (req:Request , res:Response) =>{
//     let data = await fs.promises.readFile("data/furniture.json", 'utf-8');
//     data = JSON.parse(data);
//     return NextResponse.json({status:200 ,data: data})
// }

// export async function connectDB(GET); 
