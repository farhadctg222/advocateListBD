import connectdb from "@/connectdb";
import LawyerList from "@/components/LawyerList";

const LIMIT = 10;

/* ===================== ✅ DYNAMIC SEO ===================== */
export async function generateMetadata({ params }) {
  const { buildingSlug } = await params;

  const buildingName = buildingSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${buildingName} Lawyer List | Advocate & Chamber Directory`,
    description: `${buildingName}-এ অবস্থিত অভিজ্ঞ আইনজীবী ও অ্যাডভোকেটদের তালিকা। চেম্বার, যোগাযোগ ও বিশেষজ্ঞতা দেখুন।`,
    keywords: [
      `${buildingName} lawyer`,
      `${buildingName} advocate`,
      `${buildingName} chamber`,
      "Bangladesh lawyer",
      "Advocate directory",
    ],
    openGraph: {
      title: `${buildingName} Lawyers`,
      description: `${buildingName}-এর আইনজীবীদের যাচাইকৃত তালিকা`,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

/* ===================== ✅ PAGE ===================== */
export default async function BuildingPage({ params }) {
  const { buildingSlug } = await params;
  const db = await connectdb();

  const buildingName = buildingSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // ✅ first 10
  const [lawyers] = await db.query(
    "SELECT * FROM lawyers WHERE buildingName = ? ORDER BY id DESC LIMIT ?",
    [buildingName, LIMIT]
  );

  // ✅ total count
  const [[{ total }]] = await db.query(
    "SELECT COUNT(*) as total FROM lawyers WHERE buildingName = ?",
    [buildingName]
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🏢 {buildingName}</h1>

      <LawyerList
        initialLawyers={lawyers}
        total={total}
        buildingName={buildingName}
      />
    </div>
  );
}
