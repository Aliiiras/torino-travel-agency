import Header from "@/components/partials/Header";
import AuthProvider from "@/components/partials/provider/AuthProvider";
import Link from "next/link";
import Footer from "@/components/partials/Footer";


export default function ProfileLayout({ children }) {
  
  return (
    
    <AuthProvider>
      <Header/>
      <div className="p-10 grid grid-cols-4 gap-6 bg-gray-100">
        <ul className="border border-slate-200 divide-y  rounded-md col-span-1">
          <li className="p-2 flex flex-row gap-2 mr-2">
            <img src="/ico/profile-g.svg"></img>
            پروفایل من
          </li>
          <li className="p-2 flex flex-row gap-2 mr-2">
          <img src="/ico/tours.svg"></img>
            <Link href="/profile/my-tours">تور ها من</Link>
          </li>
          <li className="p-2 flex flex-row gap-2 mr-2">
          <img src="/ico/transac.svg"></img>
            <Link href="/profile/transactions">تراکنش ها</Link>
          </li>
        </ul>
        <main className="bg-white col-span-3 border-gray-200 rounded-lg border min-h-80">{children}</main>
      </div>
      <Footer/>
    </AuthProvider>
  );
}