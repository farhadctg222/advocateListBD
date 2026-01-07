// // import connectDB from "../../connectdb";

// import connectDB from "../../../connectdb";



// import { ObjectId } from "mongodb";
// innerWidth // path ঠিক করুন

// export async function GET(request, { params }) {
//   const { id } = params;

//   try {
//     const db = await connectDB();
//     const collection = db.collection("lawyerBD");

//     const lawyer = await collection.findOne({
//       _id: new ObjectId(id),
//     });

//     if (!lawyer) {
//       return new Response(
//         JSON.stringify({ message: "Lawyer not found" }),
//         { status: 404 }
//       );
//     }

//     return new Response(JSON.stringify(lawyer), {
//       status: 200,
//     });

//   } catch (error) {
//     return new Response(
//       JSON.stringify({ error: error.message }),
//       { status: 500 }
//     );
//   }
// }





// e




export async function GET(request, { params }) {
  try {
    const db = await connectDB();
    const collection = db.collection("lawyerBD");

    const { id } = params || {};

    let data;
    if (id) {
      // যদি id থাকে, তাহলে একে খুঁজে নিয়ে আসুন
      data = await collection.findOne({ _id: new ObjectId(id) });

      if (!data) {
        return new Response(
          JSON.stringify({ message: "Lawyer not found" }),
          { status: 404 }
        );
      }
    } else {
      // id না থাকলে সব ডাটা নিয়ে আসুন
      data = await collection.find({}).toArray();
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API fetch error:", error);
    return new Response(
      JSON.stringify({ message: "Data fetch failed", error: error.message }),
      { status: 500 }
    );
  }
}


