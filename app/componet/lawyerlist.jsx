"use client";

import { useState } from "react";
import LawyerCard from "./lawyerCard";





const LIMIT = 10;

const LawyerList = ({ initialLawyers, total, buildingName }) => {
  const [lawyers, setLawyers] = useState(initialLawyers);
  const [offset, setOffset] = useState(initialLawyers.length);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);

    const res = await fetch(
      `/api/lawyers-by-building?buildingName=${encodeURIComponent(
        buildingName
      )}&offset=${offset}&limit=${LIMIT}`
    );

    const newLawyers = await res.json();

    setLawyers((prev) => [...prev, ...newLawyers]);
    setOffset((prev) => prev + newLawyers.length);
    setLoading(false);
  };

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {lawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>

      {/* Load More Button */}
      {offset < total && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
};

export default LawyerList;
