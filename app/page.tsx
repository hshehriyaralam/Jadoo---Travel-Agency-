import Navbar from "@/components/layout/navbar";
import Outlet from "@/components/layout/outlet";


export default function Home() {
  return (
   <div  className="w-full min-h-screen">
    <Navbar />
    <Outlet />
   </div>
  );
}
