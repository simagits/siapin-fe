import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";


export default function HeroSection() {
  return (
    <section className="flex flex-row h-full w-full items-center justify-center p-8 bg-gradient-to text-white">
      <NextImage
        src="/landing-page/hero-kiri.png"
        width={500}
        height={500}
        alt="Hero Kiri"
        className="animate-bounce"
      />
      <div>
        <Typography
          variant="h4"
          font="montserratAlternates"
          weight="bold"
          className="text-center text-[#14226B] text-4xl mb-4"
        >
          Bareng SIAPIN
        </Typography>
        <Typography
          variant="h5"
          weight="bold"
          font="montserratAlternates"
          className="text-center text-[#14226B] "
        >
          Siap Hadapi Dunia Kerja
        </Typography>
        <Typography
          variant="h6"
          font="poppins"
          weight="medium"
          className="text-center mt-4 text-[#0D6B8B]"
        >
          Analisis kemampuanmu dan bangun karier impian sekarang juga!
        </Typography>
        <div className="flex justify-center mt-6">
          <Button variant="blue" size="sm" className="px-8 py-3 font-semibold">
            Get Started
          </Button>
        </div>
      </div>
      <NextImage
        src="/landing-page/hero-kanan.png"
        width={500}
        height={500}
        alt="Hero Kanan"
      />
    </section>
  );
}
