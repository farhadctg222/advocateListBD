import mysql from "mysql2/promise";

let connection = null;


const connectDB = async () => {
  if (connection) {
    return connection;
  }

  try {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || "localhost",
      user: process.env.MYSQL_USER || "root",
      password: "", // XAMPP এ সাধারণত password নাই
      database: process.env.MYSQL_DATABASE || "advocate_list_bd",
      port: Number(process.env.MYSQL_PORT) || 3306,
    });

    console.log("✅ MySQL database connected successfully");
    return connection;

  } catch (error) {
    console.error("❌ MySQL connection failed:", error);
    throw error;
  }
};

export default connectDB;





