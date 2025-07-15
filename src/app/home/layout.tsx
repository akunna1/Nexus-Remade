import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Leftbar from "@/components/Leftbar";
import Rightbar from "@/components/Rightbar";
import Navbar2 from "@/components/Navbar2";

// Overridding metadata for this specific page
export const metadata: Metadata = {
  title: "Nexus | Home", // Page-specific title
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Top Navbar always visible */}
      <Navbar />

      {/* Main content container */}
      <div className="flex mb-20 lg:mb-0">
        {/* Leftbar - hidden below lg */}
        <div className="hidden lg:block w-1/6">
          <Leftbar />
        </div>

        {/* Main content - full width on small, 3/5 md, 3/6 lg */}
        <main className="w-full md:w-3/5 lg:w-3/6">
          {children}
        </main>

        {/* Rightbar - hidden below md */}
        <div className="hidden md:block md:w-2/5 lg:w-2/6">
          <Rightbar />
        </div>
      </div>

      {/* Navbar2 always visible on small and medium */}
      <Navbar2 />
    </>
  );
}