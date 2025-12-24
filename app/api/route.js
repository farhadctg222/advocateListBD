// import connectDB from "../../connectdb";

import connectDB from "../../connectdb";



// ;

// export async function GET() {
//   try {
//     const db = await connectDB;
//     const collection = db.collection("lawyerBD");

//     const services = await collection.find({}).toArray();

//     return new Response(
//       JSON.stringify({
//         message: "data fetched successfully",
//         services,
//       }),
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error(error);

//     return new Response(
//       JSON.stringify({
//         message: "data not fetched",
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// }




export async function GET() {
  try {
    const db = await connectDB()
    const collection = db.collection("lawyerBD"); // এখানে আপনার collection নাম ঠিক আছে কিনা চেক করুন

    const services = await collection.find({}).toArray();

    return new Response(
      JSON.stringify({
        message: "Data fetched successfully",
        services,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("API fetch error:", error);
    return new Response(
      JSON.stringify({
        message: "Data fetch failed",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
