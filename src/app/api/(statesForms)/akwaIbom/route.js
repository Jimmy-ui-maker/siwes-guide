
import { AkwaIbomTable } from "@/models/Nigeria";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newAkwa = await AkwaIbomTable.create(body);
    return NextResponse.json(newAkwa, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const akwaIbom = await AkwaIbomTable.find();
    return NextResponse.json(akwaIbom, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
