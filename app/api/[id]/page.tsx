export const dynamic = "force-dynamic";
import { ObjectId } from "mongodb";
import connectDB from "@/connectdb";


type PageProps = {
  params: Promise<{ id: string }>;
};


const Page = async ({ params }: PageProps) => {
  const { id } = await params; // ❌ await লাগবে না

  console.log(id)
  const db = await connectDB();
  const collection = db.collection("lawyerBD");

  // 🔎 _id দিয়ে ডাটা খোঁজা
  const data = await collection.findOne({
    _id: new ObjectId(id),
  });
  console.log(data)

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-cyan-50 to-blue-100 px-4">
      <h1 className="text-9xl font-extrabold text-cyan-600 mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 mb-4">
        Oops! পেজটি পাওয়া যায়নি
      </h2>
      <p className="text-lg text-slate-600 mb-8 max-w-md text-center">
        আপনি যে পেজটি খুঁজছেন সেটি হয়তো মুছে ফেলা হয়েছে অথবা নাম পরিবর্তন করা হয়েছে অথবা পেজটি কখনোই তৈরি হয়নি।
      </p>
      <a
        href="/"
        className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg shadow hover:bg-cyan-700 transition"
      >
        হোমপেজে ফিরুন
        <br />
      </a>
    </div>
    ); 
      

  }
  
const  {
    name,
    Education,
    Desination,
    ChamberName,
    workPlace,
    image,
    Specialist,
    phone,
    ChamberAddress} = data;

  return (
   
     <div className="flex justify-center bg-gray-100 py-6 print:bg-white print:py-0">
      {/* A4 Page */}
      <div
        className="bg-white text-black shadow-lg print:shadow-none"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "20mm",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-6 border-b-2 pb-4">
          <div className="w-32 h-42 border">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-lg mt-1">{Education}</p>
            <p className="font-semibold mt-1">{Desination}</p>
            <p className="text-sm">{workPlace}</p>
            <p className="text-red-600 font-medium mt-1">
              Specialist: {Specialist}
            </p>
          </div>
        </div>

        {/* Chamber Info */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1">
            Chamber Information
          </h2>

          <table className="w-full mt-3 border border-collapse">
            <tbody>
              <tr>
                <td className="border p-2 font-semibold w-1/3">
                  Chamber Name
                </td>
                <td className="border p-2">{ChamberName}</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">
                  Chamber Address
                </td>
                <td className="border p-2">{ChamberAddress}</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Phone</td>
                <td className="border p-2">{phone}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* About */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1">
            About the {name}
          </h2>

          <p className="mt-3 text-justify leading-7">
            I am a practicing advocate dedicated to providing legal services
            with honesty, professionalism, and commitment. I regularly handle
            court matters and client consultations with responsibility and
            transparency. My goal is to ensure proper legal guidance and justice
            for every client.
          </p>
        </div>

        {/* Signature Section */}
        <div className="mt-16 flex justify-between items-end">
          <div>
            <p className="border-t pt-1 w-48 text-center">
              Client Signature
            </p>
          </div>

          <div className="text-right">
            <p className="font-semibold">{name}</p>
            <p className="border-t pt-1 w-48 text-center ml-auto">
              Advocate Signature
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm">
          <p>
            Printed Profile – Advocate & Chamber Details
          </p>
        </div>
      </div>
    </div>
  );
  
}
//bangladesh


export default Page;
