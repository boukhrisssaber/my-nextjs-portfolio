"use client";

import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Certification } from "../../sanity/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

interface CertificationsProps {
  certifications: Certification[];
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toISOString().slice(0, 10);

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <div className="relative py-4">
      {/* Optional: subtle background separation, can be removed if not needed */}
      {/* <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-white/60 dark:from-[#181c2f]/60 dark:via-transparent dark:to-[#232946]/60 pointer-events-none"></div> */}
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1.2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="w-full max-w-2xl mx-auto z-10"
        style={{ paddingBottom: "3rem" }}
      >
        {certifications.map((cert) => {
          const logoUrl = cert.logo ? urlForImage(cert.logo)?.url() : null;
          return (
            <SwiperSlide key={cert._id}>
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-between text-center p-8 bg-white/80 dark:bg-[#232946]/80 backdrop-blur-md rounded-2xl shadow-2xl min-h-[360px] min-w-[320px] max-w-[360px] mx-auto border border-gray-200/60 dark:border-[#232946]/60 transition-transform duration-300 hover:scale-105 hover:shadow-3xl group"
                style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
              >
                <div className="relative w-20 h-20 flex-shrink-0 mx-auto mb-4 rounded-xl overflow-hidden shadow-md bg-white/60 dark:bg-[#232946]/60">
                  {logoUrl ? (
                    <Image
                      src={logoUrl}
                      alt={`${cert.title} logo`}
                      fill
                      className="object-contain rounded"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
                      <span className="text-xs text-gray-500">No Logo</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    Issued {formatDate(cert.issueDate)}
                    {cert.expiryDate && (
                      <> · Expires {formatDate(cert.expiryDate)}</>
                    )}
                  </p>
                </div>
                <div>
                  <svg
                    className="w-5 h-5 text-gray-400 inline-block group-hover:text-teal-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
        {/* Custom Navigation Arrows */}
        <div className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/70 dark:bg-[#232946]/70 rounded-full shadow-lg cursor-pointer hover:bg-teal-500 hover:text-white transition-all border border-gray-200/60 dark:border-[#232946]/60">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </div>
        <div className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/70 dark:bg-[#232946]/70 rounded-full shadow-lg cursor-pointer hover:bg-teal-500 hover:text-white transition-all border border-gray-200/60 dark:border-[#232946]/60">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </div>
      </Swiper>
    </div>
  );
} 