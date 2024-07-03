import { NextResponse } from 'next/server';
import * as fs from 'fs';
import {connectDB} from '../../../../../middleware/connectdb';
import {collectionmodel} from '../../../../../models/collectionSchema'
export const GET = async (req:Request , res:Response) =>{
    const projecttype = (req.url.split("collection/")[1]);
    console.log("collection" , projecttype);
    const connect = await connectDB();
    let products = await collectionmodel.find({collectionname:projecttype});
    // const data = JSON.parse(products);
    return NextResponse.json({status:200 ,data: products})
}