
import { AbiaTable } from "@/models/Nigeria";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newAbia = await AbiaTable.create(body);
    return NextResponse.json(newAbia, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const abias = await AbiaTable.find();
    return NextResponse.json(abias, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
