"use client";

const safeJsonArray = (value) => {
  try {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return JSON.parse(value);
  } catch {
    return [];
  }
};

export default function LawyerCard({ lawyer }) {
  const practiceAreas = safeJsonArray(lawyer.practice_areas);
  const languages = safeJsonArray(lawyer.languages);

  const isActive = lawyer.status === "Active";

  return (
    <div className="bg-white border border-gray-200 text-center rounded-xl p-5 shadow-sm hover:shadow-lg transition">
      {/* Image */}
      <div className="flex justify-center mb-3">
        <img
          src={lawyer.image || "/default-lawyer.png"}
          alt={lawyer.name || "Lawyer"}
          onError={(e) => {
            e.currentTarget.src = "/default-lawyer.png";
          }}
          className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Basic Info */}
      <h2 className="font-bold text-lg text-slate-800">
        {lawyer.name}
      </h2>

      {lawyer.education && (
        <p className="text-sm text-gray-700 mt-1">{lawyer.education}</p>
      )}

      {lawyer.designation && (
        <p className="text-sm text-gray-600">{lawyer.designation}</p>
      )}

      {lawyer.court_level && (
        <p className="text-sm text-indigo-600 font-semibold mt-1">
          {lawyer.court_level}
        </p>
      )}

      {/* Tags */}
      {(practiceAreas.length > 0 || languages.length > 0) && (
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {practiceAreas.slice(0, 3).map((x, i) => (
            <span
              key={`pa-${i}`}
              className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100"
            >
              {x}
            </span>
          ))}

          {languages.slice(0, 2).map((x, i) => (
            <span
              key={`lang-${i}`}
              className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
            >
              {x}
            </span>
          ))}
        </div>
      )}

      {/* Action */}
      {isActive ? (
        <a href={`/lawyers/${lawyer.id}/${lawyer.slug}`}>
          <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:scale-[0.99] transition">
            See Chamber
          </button>
        </a>
      ) : (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm font-semibold text-yellow-800">
            বর্তমানে এই প্রোফাইলটি অ্যাকটিভ নয়
          </p>
          <p className="text-xs text-gray-600 mt-1">
            প্রয়োজন হলে সমন্বয়কের সাথে যোগাযোগ করতে পারেন।
          </p>

          {lawyer.coordinator_phone ? (
            <a
              href={`tel:${lawyer.coordinator_phone}`}
              className="mt-3 inline-block w-full"
            >
              <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                📞 Call Coordinator
              </button>
            </a>
          ) : (
            <p className="text-xs text-gray-500 mt-2">
              যোগাযোগ নম্বর আপডেট হয়নি
            </p>
          )}
        </div>
      )}
    </div>
  );
}
