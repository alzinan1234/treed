import Company from "@/components/Company";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Slash from "@/components/Slash";
import Story from "@/components/Story";
import TreediCarpooling from "@/components/TreediCarpooling";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Company/>
      <TreediCarpooling/>
      <Slash/>
      <Offers/>
      <Story/>
      <Footer/>
    </div>
  );
}
