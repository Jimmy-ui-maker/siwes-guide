
import { ZamfaraTable } from "@/models/Nigeria";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newBody = await ZamfaraTable.create(body);
    return NextResponse.json(newBody, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const fetchs = await ZamfaraTable.find();
    return NextResponse.json(fetchs, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
