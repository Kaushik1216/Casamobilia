import { NextResponse } from 'next/server';
import * as fs from 'fs';
import {productmodel} from '../../../../../models/projectSchema';
import {connectDB} from '../../../../../middleware/connectdb';

export const GET = async (req:Request , res:Response) =>{
    const projecttype = req.url.split("project/")[1];
    const connect = await connectDB();
    let products = await productmodel.find({projecttype:projecttype});
    // const data = JSON.parse(products);
    return NextResponse.json({status:200 ,data: products})
}