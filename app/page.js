import AboutComponent from "@/components/AboutComponent";
import CompanySection from "@/components/CompanySection";
import HeroSection from "@/components/ui/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
   <>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
   </>
  );
}
