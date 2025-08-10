import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";
import { FaSearch } from "react-icons/fa";

const PredictionResultPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-fixed bg-cover bg-center p-8 relative" style={{ backgroundImage: "url('/images/noisy-background.png')" }}>
      {/* Illustration left bottom */}
      <div className="absolute bottom-6 left-6">
        <NextImage
          src="/landing-page/hero-kiri.png"
          width={120}
          height={120}
          alt="Money"
        />
      </div>

      {/* Illustration right top */}
      <div className="absolute top-6 right-6">
        <NextImage
          src="/landing-page/hero-kanan.png"
          width={120}
          height={120}
          alt="Hero"
        />
      </div>

      {/* Header Section */}
      <div className="text-center mb-8">
        <Typography
          variant="h4"
          font="montserratAlternates"
          weight="bold"
          className="text-sky-900 text-3xl mb-2"
        >
          Prediksi Pekerjaan Masa Depan
        </Typography>
        <Typography
          variant="h6"
          font="poppins"
          weight="medium"
          className="text-sky-900"
        >
          Perkiraan kebutuhan tenaga kerja per sektor dan wilayah dalam 6-12 bulan ke depan.
        </Typography>
      </div>

      {/* Filter Section */}
      <div className="flex gap-2 justify-center mb-6">
        <Button variant="blue" size="sm" className="px-4 py-2">
          Fullstack Developer
        </Button>
        <Button variant="blue" size="sm" className="px-4 py-2">
          Jakarta
        </Button>
        <Button variant="blue" size="sm" className="px-4 py-2">
          6-7 bulan
        </Button>
        <Button variant="blue" size="sm" className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white">
          <FaSearch />
        </Button>
      </div>

      {/* Result Section */}
      <div className="bg-sky-200/80 rounded-2xl shadow-lg p-6 w-full max-w-2xl text-center relative z-10 mb-4">
        <Typography
          variant="h5"
          font="montserratAlternates"
          weight="bold"
          className="text-sky-900 mb-4"
        >
          Job Demand Trend: Fullstack Developer
        </Typography>

        {/* Chart Placeholder */}
        <div className="flex bg-sky-100 p-4 rounded-lg justify-center items-center">
          <div className="text-left text-sky-900 text-sm mb-2">
            <NextImage
              src="/job-trend/grafik.png"
              width={500}
              height={500}
              alt="Grafik"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default PredictionResultPage;