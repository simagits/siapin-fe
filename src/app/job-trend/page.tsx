"use client";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";
import { FaSearch } from "react-icons/fa";
import { SUCCESS_TOAST, showToast } from "@/components/Toast";
import Link from "next/link";


const PredictionPage = () => {
  const handleFeatures = () => {
    showToast("Fitur masih dikembangkan, langsung klik search!", SUCCESS_TOAST);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center p-8 relative" style={{ backgroundImage: "url('/images/landing-page/noisy-background.png')" }}>
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

      {/* Card */}
      <div className="bg-sky-200/80 rounded-2xl shadow-lg p-8 w-full max-w-md text-center relative z-10">
        <Typography
          variant="h5"
          font="montserratAlternates"
          weight="bold"
          className="text-sky-900 text-2xl mb-2"
        >
          Prediksi Pekerjaan Masa Depan
        </Typography>
        <Typography
          variant="p"
          font="poppins"
          weight="medium"
          className="text-sky-900 mb-6"
        >
          Perkiraan kebutuhan tenaga kerja per sektor dan wilayah dalam 6-12 bulan ke depan.
        </Typography>

        {/* Buttons */}
        <div className="flex gap-2 justify-center mb-4">
          <Button variant="blue" size="sm" className="px-4 py-2"
            onClick={handleFeatures}>
            Pilih Sektor/Industri
          </Button>
          <Button variant="blue" size="sm" className="px-4 py-2"
            onClick={handleFeatures}>
            Pilih Wilayah
          </Button>
          <Button variant="blue" size="sm" className="px-4 py-2"
            onClick={handleFeatures}>
            Waktu Prediksi
          </Button> 
          <Button variant="blue" size="sm" className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white">
            <Link href="/job-trend/result">
              <FaSearch className="text-white" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;