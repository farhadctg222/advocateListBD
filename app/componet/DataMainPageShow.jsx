

import Link from "next/link";
import  './Division.css'

// const getData = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api`,
//     {
//       cache: "no-store",
//       next: { revalidate: 10 }, // Next.js App Router way
//     }
//   );
// console.log(res)
//   if (!res.ok) {
//     return <h1> Data Fetch Not Show </h1>;
//   }

//   return res.json();
// };
const getData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api`,
      {revalidate: 10 }
      
    );

    if (!res.ok) {
      console.error("API response not ok");
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Data fetch failed:", error);
    return [];
  }
};



const DataMainPageShow = async () => {
  const lawdata = await getData();
  // const services = lawdata
  // const revised = [...services].reverse();
  // const data = revised.slice(0, 10);
  const data = [...(lawdata || [])].reverse().slice(0, 10);
  console.log(data)


  

  return (
     <div>
      {data.length === 0 ? (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
          ⚠️ ডাটা পাওয়া যাচ্ছে না। অনুগ্রহ করে পরে আবার চেষ্টা করুন।
        </p>
      ) : (
        data.map((post) => {
          const slug = post._id;

          return (
            <div
              className="ProfileCard"
              key={slug}
              style={{
                border: "1px solid black",
                margin: "3px",
                textAlign: "center",
                backgroundColor: "#f0f0f0",
              }}
            >
              <div className="image">
                <img src={post.image} alt={post.name} />
              </div>

              <div className="nameHeader">
                <h1 style={{ color: "#2a7fba" }}>{post.name}</h1>
                <h5>{post.Education}</h5>
                <h6 style={{ color: "red" }}>{post.Specialist}</h6>
                <h5>{post.Desination}</h5>
                <h5 className="font-bold">{post.workPlace}</h5>

                <Link href={`api/${slug}`}>
                  <button className="seeChamber">See Chamber</button>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DataMainPageShow;
