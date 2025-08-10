import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

export default function Testimoni() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Section Title */}
      <Typography
        variant="h5"
        font="montserratAlternates"
        weight="bold"
        className="text-3xl text-[#B64216] text-center"
      >
        Kamu Juga Bisa Siap, Seperti Mereka
      </Typography>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Left - Images */}
        <div className="flex flex-col items-center space-y-4">
          <NextImage
            src="/landing-page/hero-section-5.png"
            width={220}
            height={140}
            alt="Person Testimonial"
            className="object-cover"
          />
        </div>

        {/* Right - Testimonial Card */}
        <div className="bg-[#FFD86F] max-w-xl rounded-2xl p-8 shadow-md space-y-4">
          <Typography
            variant="p"
            font="poppins"
            weight="medium"
            className="text-brown-800"
          >
            “Setelah lulus, aku sempat bingung harus mulai dari mana. Tapi fitur
            Skill Analyzer di SIAPIN bantu aku ngerti skill apa yang kurang dan
            harus aku tingkatkan. Sekarang aku jadi lebih percaya diri apply
            kerja.”
          </Typography>

          <div>
            <Typography
              variant="p"
              font="poppins"
              weight="semibold"
              className="text-brown-900"
            >
              Raka
            </Typography>
            <Typography
              variant="p"
              font="poppins"
              weight="regular"
              className="text-brown-700"
            >
              Fresh Graduate Teknik Informatika
            </Typography>
          </div>

          {/* Rating */}
          <div className="flex space-x-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
