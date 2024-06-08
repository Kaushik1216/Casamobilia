import { NextResponse } from 'next/server';
import * as fs from 'fs';

export const GET = async (req:Request , res:Response) =>{
    const projecttype = req.url.split("project/")[1];
    let data = await fs.promises.readFile("data/"+projecttype+".json", 'utf-8');
    data = JSON.parse(data);
    return NextResponse.json({status:200 ,data: data})
}
