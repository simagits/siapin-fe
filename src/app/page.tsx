"use client";

import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import HeroSection from "./(container)/HeroSection";
import StatsSection from "./(container)/StatsSection";
import PredictionJob from "./(container)/PredictionJob";
import SkillCheck from "./(container)/SkillCheck";
import Testimoni from "./(container)/Testimoni";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
    useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[url('/images/landing-page/noisy-background.png')] bg-cover bg-no-repeat">
      <div data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        <HeroSection />
      </div>
      <div data-aos="fade-up">
        <StatsSection />
      </div>
      <div  className="flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom">
        <PredictionJob />
      </div>
      <div             className="flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom">
        <SkillCheck />
      </div>
      <div data-aos="fade-up">
        <Testimoni />
      </div>
      </main>
      <Footer />
    </>
  );
}
