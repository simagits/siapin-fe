import Typography from "@/components/Typography";

export default function StatsSection() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      {/* Stats */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-wrap justify-center gap-8 translate-y-14">
        {[
          { value: "14k +", label: "jobs available" },
          { value: "98%", label: "big companies" },
          { value: "2.6k", label: "job applied" },
          { value: "4.9", label: "client satisfaction" },
        ].map((stat, index) => (
          <div className="text-center" key={index}>
            <Typography
              variant="h6"
              font="poppins"
              weight="bold"
              className="text-2xl text-yellow-700"
            >
              {stat.value}
            </Typography>
            <Typography
              variant="p"
              font="poppins"
              weight="medium"
              className="text-sm text-yellow-500"
            >
              {stat.label}
            </Typography>
          </div>
        ))}
      </div>

      {/* About Us */}
      <div className="bg-yellow-400 rounded-2xl p-8 max-w-3xl text-center pt-20">
        <Typography
          variant="h5"
          font="montserratAlternates"
          weight="bold"
          className="text-2xl text-red-700 mb-4"
        >
          About Us
        </Typography>
        <Typography
          variant="p"
          font="poppins"
          weight="medium"
          className="text-black leading-relaxed"
        >
          SIAPIN adalah platform yang membantu pencari kerja dan mahasiswa
          mempersiapkan diri menghadapi dunia kerja melalui data pasar, analisis
          skill, dan rekomendasi jalur karier. Dengan fitur seperti Job Demand,
          Skill Analyzer, dan Career Path, SIAPIN hadir untuk membantumu bukan
          hanya mencari kerja, tapi benar-benar siap bekerja.
        </Typography>
      </div>
    </div>
  );
}
