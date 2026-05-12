"use client"

import Footer from "@/components/common/footer";
import Navbar from "@/components/layout/navbar";
import Outlet from "@/components/layout/outlet";


export default function Home() {
  return (
   <div  className="max-w-full  min-h-screen scrollbar">
    <Navbar />  
    <Outlet />
    <Footer />
   </div>
  );
}
