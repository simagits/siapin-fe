import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";

export default function SkillCheck() {
  return (
    <div
      className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8  justify-center items-center"
      id="skill-check"
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center text-center md:text-left space-y-4">
        <Typography
          variant="h5"
          font="montserratAlternates"
          weight="bold"
          className="text-3xl text-right font-bold text-blue-900"
        >
          Cek Kecocokan <br /> Skill Kamu
        </Typography>
        <Typography
          variant="p"
          font="poppins"
          weight="medium"
          className="text-gray-700 text-right"
        >
          Temukan gap antara skill kamu dan permintaan industri. Dapatkan saran
          skill yang perlu dikembangkan.
        </Typography>
        <div className="flex justify-end mt-6">
          <Button variant="blue" size="sm" className="px-8 py-3 font-semibold">
            Analisis Skill Kamu
          </Button>
        </div>
      </div>

      {/* Right Illustration */}
      <div className="relative flex justify-center">
        <NextImage
          src="/landing-page/hero-section-4.png"
          width={500}
          height={500}
          alt="Skill Match Illustration"
        />

        {/* Chart Overlay */}
        <div className="absolute bottom-14">
          <NextImage
            src="/landing-page/chart-yellow.png"
            width={200}
            height={60}
            alt="Skill Chart"
          />
        </div>
      </div>
    </div>
  );
}
