import Link from "next/link";

const LegalLayout = ()=> {
  return (
    <div className=" bg-cyan-500">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto ">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            AdvocateListBD.com একটি তথ্যভিত্তিক ওয়েবসাইট। নিচের প্রতিটি পেইজ
        আমাদের ওয়েবসাইট ব্যবহারের শর্ত, গোপনীয়তা ও নীতিমালা ব্যাখ্যা করে।
          </h1>

          <nav className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/legal" className="text-blue-600 hover:underline">Legal Pages</Link>
            <Link href="/disclaimer" className="text-blue-600 hover:underline">Disclaimer</Link>
            <Link href="/terms" className="text-blue-600 hover:underline">Terms</Link>
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy</Link>
            <Link href="/lawyer-consent" className="text-blue-600 hover:underline">Lawyer Consent</Link>
            <Link href="/about" className="text-blue-600 hover:underline">About</Link>
            <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

     
    

     </div>
   
  
  );
}
export default LegalLayout;
