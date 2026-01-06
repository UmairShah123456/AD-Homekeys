import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/AboutUs";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import CTASection from "@/components/Home/CTASection";

export const metadata: Metadata = {
  title: "AD Homekeys - Serviced Accommodation Provider",
  description: "AD Homekeys provides quality serviced accommodation across the UK, working with Local Authorities to support those who need it most.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <CTASection />
    </main>
  );
}
