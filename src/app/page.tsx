"use client";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DestinationsSection from "@/components/DestinationsSection";
import CuisineSection from "@/components/CuisineSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <SectionReveal style="circle">
          <AboutSection />
        </SectionReveal>
        <SectionReveal style="wipe-left">
          <DestinationsSection />
        </SectionReveal>
        <SectionReveal style="diamond">
          <CuisineSection />
        </SectionReveal>
        <SectionReveal style="inset">
          <GallerySection />
        </SectionReveal>
        <SectionReveal style="polygon">
          <VideoSection />
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
