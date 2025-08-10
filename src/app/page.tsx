import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import HeroSection from "./(container)/HeroSection";
import StatsSection from "./(container)/StatsSection";
import PredictionJob from "./(container)/PredictionJob";
import SkillCheck from "./(container)/SkillCheck";
import Testimoni from "./(container)/Testimoni";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[url('/images/landing-page/noisy-background.png')] bg-cover bg-no-repeat bg-fixed">
        <HeroSection />
        <StatsSection />
        <PredictionJob />
        <SkillCheck />
        <Testimoni />
      </main>
      <Footer />
    </>
  );
}
