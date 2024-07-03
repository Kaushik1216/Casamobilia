import { NextResponse } from 'next/server';
import {connectDB} from '../../../../middleware/connectdb';
import {carouselmodel} from '../../../../models/carouselSchema'
export const GET = async (req:Request , res:Response) =>{
    const connect = await connectDB();
    let faqs = await carouselmodel.find();
    return NextResponse.json({status:200 ,data: faqs})
}
