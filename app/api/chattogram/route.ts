// app/api/route.ts

import connectDB from "@/connectdb";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const skip = (page - 1) * limit;

  const db = await connectDB();
  const collection = db.collection("lawyerBD");

  const data = await collection
    .find({})
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();

  return Response.json(data);
}
