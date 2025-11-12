import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const useCases = [
  {
    title: "Appointment Booking Calls",
    description:
      "Identify patient needs and screen appointment preferences. Automate scheduling for better efficiency and improved conversions.",
    stats: [
      { number: "50K+", label: "Appointment booking calls processed" },
      { number: "15", label: "Active healthcare clients" },
    ],
    brands: ["PharmaEasy", "Practo"],
    color: "bg-orange-100",
  },
  {
    title: "Recruitment Calls",
    description:
      "Identify qualified candidates and screen job fit. Automate initial interviews for better placement rates.",
    stats: [
      { number: "120K+", label: "Candidate screening calls conducted" },
      { number: "10", label: "Active hiring campaigns" },
    ],
    brands: ["BetterPlace", "Aasaanjobs", "Flexiple"],
    color: "bg-white",
  },
  {
    title: "Customer Support",
    description:
      "Identify potential issues and help customers. Automate operations for better customer experience.",
    stats: [
      { number: "100K+", label: "Total Calls done" },
      { number: "5", label: "Ongoing projects" },
    ],
    brands: ["CRED", "Practo"],
    color: "bg-blue-50",
  },
];

const RinggUseCases = () => {
  return (
    <section className="py-20 bg-[#fffaf5] text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">
        Ringg AI Use Cases
      </h2>
      <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
        Ringg AI turns voice interactions into automated workflows that ease
        workload and enhance satisfaction.
      </p>

      {/* Swiper Carousel */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {useCases.map((useCase, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-8 rounded-2xl shadow-md ${useCase.color} transition-transform hover:scale-[1.03]`}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {useCase.description}
                </p>
                <div className="flex justify-center gap-6 mb-6">
                  {useCase.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-lg font-bold text-gray-800">
                        {stat.number}
                      </p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <button className="bg-black text-white px-5 py-2 rounded-lg text-sm mb-4 hover:bg-gray-800 transition">
                  ▶ Live Call
                </button>

                <div className="border-t border-gray-200 pt-4 text-xs text-gray-500 flex justify-center gap-4">
                  {useCase.brands.map((brand, j) => (
                    <span key={j}>{brand}</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RinggUseCases;
