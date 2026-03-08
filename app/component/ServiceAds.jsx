const getServices = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/service`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return [];
    
    const data = await res.json();
    console.log(data)

    // যদি array না আসে, তাহলেও crash হবে না
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return [];
  }
};

export async function generateMetadata() {
  const title =
    "Sponsor Legal Services in Bangladesh | Stamp Vendor, Notary, Deed Writer";

  const description =
    "Government licensed stamp vendor, notary public, deed writer and legal sponsor services in Bangladesh. Call directly for affidavit, stamp & court services.";

  const url = "https://advocatelistbd.com";
  const image = "https://advocatelistbd.com/seo/service-ads.jpg";

  return {
    title,
    description,
    keywords: [
      "Stamp Vendor Bangladesh",
      "Notary Public Bangladesh",
      "Deed Writer Service",
      "Court Stamp Buy",
      "Affidavit Service Bangladesh",
      "Legal Sponsor Services",
      "Lawyer Bangladesh Services",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Lawyer Bangladesh",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Sponsor Legal Services in Bangladesh",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

const ServiceAds = async () => {
  const services = await getServices();

  return (
    <section className="bg-linear-to-br from-slate-100 to-emerald-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-800 mb-10">
          Our Sponsor Services
        </h2>

        {!services || services.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-10 text-center">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              No Services Found
            </h3>
            <p className="text-slate-500 text-sm">
              বর্তমানে কোনো সার্ভিস পাওয়া যায়নি। অনুগ্রহ করে পরে আবার চেষ্টা করুন।
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <div
                key={item?.id || index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <div className="w-full h-44 bg-white flex items-center justify-center">
                  <img
                    src={item?.image || "/placeholder.jpg"}
                    alt={item?.title || "Service image"}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {item?.title || "Untitled Service"}
                  </h3>

                  <p className="text-xs text-emerald-600 mb-2">
                    {item?.subtitle || "Service Subtitle"}
                  </p>

                  <p className="text-sm text-slate-600 mb-4">
                    {item?.description || "Service description not available."}
                  </p>

                  {item?.phone ? (
                    <a
                      href={`tel:${item.phone}`}
                      className="block w-full bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition"
                    >
                      📞 Call Now
                    </a>
                  ) : (
                    <button
                      disabled
                      className="block w-full bg-slate-300 text-slate-600 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
                    >
                      Phone Not Available
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceAds;