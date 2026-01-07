export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-cyan-50 to-blue-100 px-4">
      <h1 className="text-9xl font-extrabold text-cyan-600 mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 mb-4">
        Oops! পেজটি পাওয়া যায়নি
      </h2>
      <p className="text-lg text-slate-600 mb-8 max-w-md text-center">
        আপনি যে পেজটি খুঁজছেন সেটি হয়তো মুছে ফেলা হয়েছে অথবা নাম পরিবর্তন করা হয়েছে অথবা পেজটি কখনোই তৈরি হয়নি।
      </p>
      <a
        href="/"
        className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg shadow hover:bg-cyan-700 transition"
      >
        হোমপেজে ফিরুন
      </a>
    </div>
  );
}
