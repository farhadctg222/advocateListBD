// "use client";
// import  '../componet/Division.css'
// import { useEffect, useState } from "react";

// export default function DataMainPageShow() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const limit = 10;

//   const fetchData = async (pageNumber) => {
//     setLoading(true);
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API_URL}/api?page=${pageNumber}&limit=${limit}`
//     );
//     const newData = await res.json();
//     setData((prev) => [...prev, ...newData]);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData(1); // প্রথম ১০টা
//   }, []);

//   return (
//     <div className="space-y-4">
//       {/* DATA LIST */}
//       {data.map((post, index) => (
//          <div
//               className="ProfileCard"
//               key={index}
//               style={{
//                 border: "1px solid black",
//                 margin: "3px",
//                 textAlign: "center",
//                 backgroundColor: "#f0f0f0",
//               }}
//             >
//               <div className="image">
//                 <img src={post.image} alt={post.name} />
//               </div>

//               <div className="nameHeader">
//                 <h1 style={{ color: "#2a7fba" }}>{post.name}</h1>
//                 <h5>{post.Education}</h5>
//                 <h6 style={{ color: "red" }}>{post.Specialist}</h6>
//                 <h5>{post.Desination}</h5>
//                 <h5 className="font-bold">{post.workPlace}</h5>

//                 {/* <Link href={`api/${post._id}`}>
//                   <button className="seeChamber">See Chamber</button>
//                 </Link> */}
//               </div>
//             </div>
//       ))}

//       {/* LOAD MORE */}
//       <div className="text-center">
//         <button
//           onClick={() => {
//             const nextPage = page + 1;
//             setPage(nextPage);
//             fetchData(nextPage);
//           }}
//           disabled={loading}
//           className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
//         >
//           {loading ? "Loading..." : "Load More"}
//         </button>
//       </div>
//     </div>
//   );
// }
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-50 rounded-lg shadow-md">
  <Link href="/dhaka">
    <button className="bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700 transition">
      Ainjib Douel Bhabon
    </button>
  </Link>
  <Link href="/chattogram">
    <button className="bg-green-600 text-white px-5 py-3 rounded-md shadow hover:bg-green-700 transition">
      Annex Bhabon
    </button>
  </Link>
  <Link href="/rajshahi">
    <button className="bg-purple-600 text-white px-5 py-3 rounded-md shadow hover:bg-purple-700 transition">
      Annex Bhabon
    </button>
  </Link>
  <Link href="/sylhet">
    <button className="bg-pink-600 text-white px-5 py-3 rounded-md shadow hover:bg-pink-700 transition">
      Shapla Bhabon
    </button>
  </Link>
  <Link href="/rangpur">
    <button className="bg-yellow-500 text-gray-900 px-5 py-3 rounded-md shadow hover:bg-yellow-600 transition">
      Douel Bhabon
    </button>
  </Link>
  <Link href="/khulna">
    <button className="bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:bg-indigo-700 transition">
      Khulna
    </button>
  </Link>
  <Link href="/barisal">
    <button className="bg-red-600 text-white px-5 py-3 rounded-md shadow hover:bg-red-700 transition">
      Barisal
    </button>
  </Link>
  <Link href="/mymensingh">
    <button className="bg-teal-600 text-white px-5 py-3 rounded-md shadow hover:bg-teal-700 transition">
      Mymensingh
    </button>
  </Link>
</div>

  );
};

export default page;