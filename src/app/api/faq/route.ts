import { NextResponse } from 'next/server';
import {faqmodel} from '../../../../models/faqSchema';
import {connectDB} from '../../../../middleware/connectdb';

export const GET = async (req:Request , res:Response) =>{
    const connect = await connectDB();
    let faqs = await faqmodel.find();
    return NextResponse.json({status:200 ,data: faqs})
}
