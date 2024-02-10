
import { BauchiTable } from "@/models/Nigeria";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newBauchi = await BauchiTable.create(body);
    return NextResponse.json(newBauchi, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const bauchi = await BauchiTable.find();
    return NextResponse.json(bauchi, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
