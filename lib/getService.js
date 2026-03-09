import connectDB from '../connectdb';


export const getServices = async () => {
  try {
    const db = await connectDB();
    

    const [rows] = await db.execute(
      "SELECT * FROM services WHERE STATUS='Active' ORDER BY id DESC"
    );

    return rows;
  } catch (error) {
    console.error("DB Error:", error);
    return [];
  }
};