import connectDB from "@/connectdb"
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id, slug } = await params;

    // safety
    if (!id || !slug) {
      return NextResponse.json(
        { message: "Missing id or slug" },
        { status: 400 }
      );
    }

    const db = await connectDB();

    // ✅ id + slug match (duplicate slug safe)
    const [rows] = await db.execute(
      "SELECT * FROM lawyers WHERE id = ? AND slug = ? LIMIT 1",
      [id, slug]
    );

    const data = rows?.[0];

    if (!data) {
      return NextResponse.json(
        { message: "Lawyer not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API fetch error:", error);
    return NextResponse.json(
      { message: "Data fetch failed", error: error.message },
      { status: 500 }
    );
  }
}
