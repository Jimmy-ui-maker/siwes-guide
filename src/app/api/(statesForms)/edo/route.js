
import { EdoTable } from "@/models/Nigeria";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newedo = await EdoTable.create(body);
    return NextResponse.json(newedo, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const edo = await EdoTable.find();
    return NextResponse.json(edo, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
