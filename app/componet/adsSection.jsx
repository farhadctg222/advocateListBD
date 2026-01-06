import Image from "next/image";

export default function ServiceAds() {
  const services = [
    {
      id: 1,
      title: "Stamp Vendor",
      subtitle: "Government Licensed",
      image: "https://i.ibb.co/bW8VGFZ/farhad.png",
      desc: "নন-জুডিশিয়াল স্ট্যাম্প, কোর্ট ফি ও রেভিনিউ স্ট্যাম্প",
      phone: "tel:01305573617",
    },
    {
      id: 2,
      title: "Notary Public",
      subtitle: "Affidavit & Attestation",
      image: "https://i.ibb.co/TBvQSG2N/IMG-20251211-161141.jpg",
      desc: "নোটারি সত্যায়ন, হলফনামা ও ভেরিফিকেশন",
      phone: "tel:01305573617",
    },
    {
      id: 3,
      title: "Deed Writer",
      subtitle: "Registered Deed Service",
      image: "/ads/deed.jpg",
      desc: "দলিল লেখা, রেজিস্ট্রেশন ও খসড়া প্রস্তুত",
      phone: "tel:01305573617",
    },
    {
      id: 4,
      title: "Justice Book Seller",
      subtitle: "Law & Court Books",
      image: "https://i.ibb.co/4R8q5YF/127.png",
      desc: "আইন বিষয়ক বই, জাস্টিস বুক ও কোর্ট গাইড",
      phone: "tel:01305573617",
    },
  ];

  return (
    <section className="bg-linear-to-br from-slate-100 to-emerald-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-800 mb-10">
          Our Sponser
        </h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className=" h-40 w-full">
                <img 
  src={item.image}
  alt={item.title}
  className="w-full h-60 aspect-4/3 object-cover rounded-t-xl"
/>

              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-slate-800">
                  {item.title}
                </h3>
                <p className="text-xs text-emerald-600 mb-2">
                  {item.subtitle}
                </p>

                <p className="text-sm text-slate-600 mb-4">
                  {item.desc}
                </p>

                {/* Call Button */}
                <a
                  href={item.phone}
                  className="block w-full bg-emerald-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-emerald-700 transition"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
