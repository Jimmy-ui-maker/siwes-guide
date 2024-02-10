
import { BayelsaTable } from "@/models/Nigeria";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newbayelsa = await BayelsaTable.create(body);
    return NextResponse.json(newbayelsa, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const bayelsa = await BayelsaTable.find();
    return NextResponse.json(bayelsa, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
