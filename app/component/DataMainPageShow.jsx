"use client";

import Link from "next/link";
import "./Division.css";
import { useEffect, useState } from "react";
import Loading from "./loading";

const createSession = async () => {
  try {
    const res = await fetch("/api/auth/session", {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    return res.ok;
  } catch (error) {
    console.error("Session create failed:", error);
    return false;
  }
};

const getData = async () => {
  try {
    // 1) আগে session তৈরি
    const sessionOk = await createSession();
    if (!sessionOk) {
      console.error("Session was not created");
      return [];
    }

    // 2) তারপর protected api call
    const res = await fetch("/api", {
      method: "GET",
      credentials: "include",
      cache: "no-store",
      headers: {
        "x-site-request": "advocatelistbd",
      },
    });

    if (!res.ok) {
      console.error("API fetch failed:", res.status);
      return [];
    }

    const result = await res.json();

    // যদি API array return করে
    if (Array.isArray(result)) return result;

    // যদি API {data: [...]} return করে
    if (Array.isArray(result?.data)) return result.data;

    return [];
  } catch (e) {
    console.error("Data fetch error:", e);
    return [];
  }
};

export default function DataMainPageShow() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    (async () => {
      setLoading(true);

      const lawdata = await getData();
      const finalData = [...lawdata].reverse().slice(0, 9);

      if (!ignore) {
        setData(finalData);
        setLoading(false);
      }
    })();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center py-12">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center animate-bounce">
              <span className="text-3xl">🔒</span>
            </div>
            <span className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping"></span>
          </div>

          <div className="mt-6 bg-red-50 border border-red-300 rounded-xl px-6 py-4 shadow-md">
            <p className="text-center text-red-600 font-semibold text-lg">
              ⚠️ ডাটা পাওয়া যাচ্ছে না
            </p>
            <p className="text-center text-red-500 text-sm mt-1">
              অনুগ্রহ করে পরে আবার চেষ্টা করুন
            </p>
          </div>
        </div>
      ) : (
        data.map((post, index) => (
          <div
            key={post.id || post.slug || index}
            className="ProfileCard bg-slate-50 border border-gray-300 rounded-xl p-3 text-center shadow-sm transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:bg-white"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="flex justify-center mb-3">
              <img
                src={post.image || "/default-lawyer.jpg"}
                alt={post.name || "Lawyer"}
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-lg font-bold text-indigo-700">
                {post.name || "No Name"}
              </h1>
              <h5 className="text-sm text-gray-700">{post.education || ""}</h5>
              <h6 className="text-sm text-red-600 font-semibold">
                {post.specialist || ""}
              </h6>
              <h5 className="text-sm text-gray-800">{post.designation || ""}</h5>
              <h2 className="text-sm font-bold text-red-700">
                {post.court_level || ""}
              </h2>
            </div>

            {post.status === "Active" ? (
              <Link href={`/lawyers/${post.id}/${post.slug}`}>
                <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                  See Chamber
                </button>
              </Link>
            ) : (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded-lg text-center">
                <p className="text-sm font-semibold text-yellow-700">
                  ⚠️ এই মুহূর্তে চেম্বারটি সক্রিয় নেই
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  অনুগ্রহ করে সমন্বয়কের সাথে যোগাযোগ করুন
                </p>

                {post.coordinator_phone ? (
                  <a
                    href={`tel:${post.coordinator_phone}`}
                    className="mt-3 inline-block w-full"
                  >
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                      📞 Call Co-ordinator
                    </button>
                  </a>
                ) : (
                  <p className="text-xs text-red-500 mt-2">
                    📵 ফোন নম্বর পাওয়া যায়নি
                  </p>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}