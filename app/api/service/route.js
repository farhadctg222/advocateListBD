import connectDB from "@/connectdb"
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();

    const [rows] = await db.query(
      "SELECT * FROM services WHERE status='Active' ORDER BY id DESC"
    );

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}
