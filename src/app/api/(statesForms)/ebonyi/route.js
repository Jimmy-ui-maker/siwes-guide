
import { EbonyiTable } from "@/models/Nigeria";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newebonyi = await EbonyiTable.create(body);
    return NextResponse.json(newebonyi, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const ebonyi = await EbonyiTable.find();
    return NextResponse.json(ebonyi, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
