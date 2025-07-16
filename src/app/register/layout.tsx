import { Metadata } from "next";
import RootLayout from "../layout"; // Importing the RootLayout
import { ReactNode } from "react";
import Scroll from "../components/Scroll"; // Scroll to top

// Overridding metadata for this specific page
export const metadata: Metadata = {
  title: "Nexus | Register ", // Page-specific title
};

export default function UseStateLayout({ children }: { children: ReactNode }) {
  return (
    <RootLayout>
      <Scroll />
      {children}
    </RootLayout>
  );
}