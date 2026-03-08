// import connectDB from "@/connectdb";


// export const getServices = async () => {
//   try {
//     const db = await connectDB();
//     console.log(db)

//     const [rows] = await db.execute(
//       "SELECT * FROM service WHERE STATUS='Active' ORDER BY id DESC"
//     );

//     return rows;
//   } catch (error) {
//     console.error("DB Error:", error);
//     return [];
//   }
// };