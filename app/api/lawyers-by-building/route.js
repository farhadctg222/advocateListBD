import connectDB from "@/connectdb";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const buildingName = searchParams.get("buildingName");
    const offset = Number(searchParams.get("offset") || 0);
    const limit = Number(searchParams.get("limit") || 10);

    if (!buildingName) {
      return NextResponse.json(
        { message: "buildingName missing" },
        { status: 400 }
      );
    }

    const db = await connectDB();

    const [rows] = await db.query(
      "SELECT * FROM lawyers WHERE buildingName = ? ORDER BY id DESC LIMIT ? OFFSET ?",
      [buildingName, limit, offset]
    );

    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Data fetch failed", error: error.message },
      { status: 500 }
    );
  }
}
