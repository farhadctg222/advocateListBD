export default function ContactUs() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-indigo-100 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        
        <h1 className="text-3xl font-semibold text-indigo-900 mb-8 border-b border-indigo-200 pb-4 tracking-wide">
          যোগাযোগ করুন
        </h1>

        <p className="text-indigo-800 leading-relaxed text-lg mb-8">
          AdvocateListBD.com সম্পর্কিত যেকোনো প্রশ্ন, পরামর্শ, তথ্য সংশোধন,
          অভিযোগ বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করতে পারেন।
          আমরা যুক্তিসঙ্গত সময়ের মধ্যে উত্তর দেওয়ার চেষ্টা করি।
        </p>

        {/* Contact Info */}
        <div className="bg-indigo-50 rounded-xl p-6 mb-10 space-y-5 border border-indigo-200">
          <p className="text-indigo-900 text-lg flex items-center gap-3">
            <span className="text-indigo-600 text-2xl">📧</span>
            <span>
              <strong>ইমেইল:</strong> <a href="mailto:support@advocatelistbd.com" className="text-indigo-700 underline hover:text-indigo-900">support@advocatelistbd.com</a>
            </span>
          </p>
          <p className="text-indigo-900 text-lg flex items-center gap-3">
            <span className="text-indigo-600 text-2xl">📱</span>
            <span><strong>মোবাইল:</strong> <a href="tel:+8801XXXXXXXXX" className="text-indigo-700 underline hover:text-indigo-900">01XXXXXXXXX</a></span>
          </p>
          <p className="text-indigo-900 text-lg flex items-center gap-3">
            <span className="text-indigo-600 text-2xl">📍</span>
            <span><strong>ঠিকানা:</strong> বাংলাদেশ</span>
          </p>
        </div>

        {/* Important Note */}
        <div className="bg-white border-l-8 border-indigo-500 p-5 rounded-lg shadow-sm">
          <p className="text-indigo-900 font-semibold mb-2 text-lg">গুরুত্বপূর্ণ নোট</p>
          <p className="text-indigo-800 leading-relaxed text-sm md:text-base">
            AdvocateListBD.com কোনো আইনগত পরামর্শ প্রদান করে না।  
            আইন সংক্রান্ত সহায়তার জন্য অনুগ্রহ করে সরাসরি সংশ্লিষ্ট আইনজীবীর সাথে যোগাযোগ করুন।
          </p>
        </div>

      </div>
    </div>
  );
}
