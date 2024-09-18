import { NextRequest } from "next/server";

export function GET(){
    //database logic
    return Response.json({
        email : "harshupahade@gmail.com",
        name : "harshit"
    })
}
export function POST(req : NextRequest){
    //extract body
}