import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";

export default function PredictionJob() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      {/* Left Illustration */}
      <div className="relative flex justify-center">
        <NextImage
          src="/landing-page/hero-section-3.png"
          width={500}
          height={500}
          alt="Hero Kanan"
        />

        {/* Blur Card */}
        <div className="absolute bottom-24 left-12 transform  bg-white/50 backdrop-blur-md rounded-xl shadow-md px-6 py-4 space-y-3">
          <p className="text-blue-900 font-medium">UI Designer</p>
          <p className="text-blue-900 font-medium">Fullstack Dev.</p>
          <p className="text-blue-900 font-medium">Project Analyst</p>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center text-center md:text-left space-y-4">
        <Typography
          variant="h5"
          font="montserratAlternates"
          weight="bold"
          className="text-3xl font-bold text-blue-900"
        >
          Prediksi Pekerjaan <br /> Masa Depan
        </Typography>
        <Typography
          variant="p"
          font="poppins"
          weight="medium"
          className="text-gray-700"
        >
          Perkirakan kebutuhan tenaga kerja per sektor dan wilayah dalam 6–12
          bulan ke depan.
        </Typography>
        <div>
          <Button variant="blue" size="sm" className="px-8 py-3 font-semibold">
            Lihat Prediksi
          </Button>
        </div>
      </div>
    </div>
  );
}
