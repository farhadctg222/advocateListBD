

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {data.length === 0 ? (
    <p className="text-center text-red-600 font-bold animate-pulse">
      ⚠️ ডাটা পাওয়া যাচ্ছে না। অনুগ্রহ করে পরে আবার চেষ্টা করুন।
    </p>
  ) : (
    data.map((post, index) => {
      const slug = post._id;

      return (
        <div
          key={slug}
          className="
            ProfileCard
            bg-slate-50
            border border-gray-300
            rounded-xl
            p-4
            text-center
            shadow-sm
            transition-all
            duration-500
            ease-in-out
            hover:shadow-xl
            hover:-translate-y-2
            hover:bg-white
            animate-fadeIn
          "
          style={{
            animationDelay: `${index * 120}ms`,
          }}
        >
          {/* Image */}
          <div className="flex justify-center mb-3">
            <img
              src={post.image}
              alt={post.name}
              className="
                w-28 h-28
                rounded-full
                object-cover
                border-4 border-indigo-500
                transition-transform
                duration-500
                hover:scale-105
              "
            />
          </div>

          {/* Text */}
          <div className="space-y-1">
            <h1 className="text-lg font-bold text-indigo-700">
              {post.name}
            </h1>

            <h5 className="text-sm text-gray-700">
              {post.Education}
            </h5>

            <h6 className="text-sm text-red-600 font-semibold">
              {post.Specialist}
            </h6>

            <h5 className="text-sm text-gray-800">
              {post.Desination}
            </h5>

            <h5 className="text-sm font-bold text-gray-900">
              {post.workPlace}
            </h5>
          </div>

          {/* Button */}
          <Link href={`api/${slug}`}>
            <button
              className="
                mt-4
                px-4 py-2
                bg-indigo-600
                text-white
                rounded-full
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-indigo-700
                hover:scale-105
                active:scale-95
              "
            >
              See Chamber
            </button>
          </Link>
        </div>
      );
    })
  )}
</div>

  );
};

export default DataMainPageShow;
