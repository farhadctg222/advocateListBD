
// const { MongoClient, ServerApiVersion } = require('mongodb');

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version

// let db;
// const conectbd =  ()=> {

//    if(db){
//     return db
//    }

//     try {
//       const uri = "mongodb+srv://LawyerBD:d0OVmD1C46txxjtO@cluster0.fotua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//     // Connect the client to the server	(optional starting in v4.7)
//     console.log(process.env.local.DB_USER)
//     const client = new MongoClient(uri, {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//           }
//       });

// console.log("data base connected successfully") 



//      db = client.db('LawyerBD');
//      return db
//     }catch (error){
//         console.log(error)
//     }
  
// }
// export default conectbd;  


const { MongoClient, ServerApiVersion } = require('mongodb');


let db;
let client;

const connectDB = async () => {
  if (db) {
    return db;
  }

  try {
    const uri = process.env.MONGO_URI; // .env থেকে নিবে

    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect(); // ✅ MUST

    console.log("✅ Database connected successfully");

    db = client.db("LawyerBD");
    return db;

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDB;




