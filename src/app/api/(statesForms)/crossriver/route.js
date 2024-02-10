
import { CrossRiverTable } from "@/models/Nigeria";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newcrossRivers = await CrossRiverTable.create(body);
    return NextResponse.json(newcrossRivers, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const crossRivers = await CrossRiverTable.find();
    return NextResponse.json(crossRivers, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
