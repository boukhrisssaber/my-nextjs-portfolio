"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useRef } from "react";
import type { Swiper as SwiperType } from 'swiper';
import type { SwiperRef } from 'swiper/react';

const reviews = [
  {
    platform: "Upwork",
    logo: "/upwork.svg",
    client: "Marie",
    country: "🇫🇷",
    text: `I had the pleasure of working with Saber on a cybersecurity assessment and pentesting project, and I’m extremely satisfied with the outcome. The quality of the work delivered was highly professional and exceeded my expectations. Communication throughout the project was clear, timely, and efficient. The final report was thorough, well-structured, and provided valuable insights. I highly recommend this freelancer to anyone looking for expert-level cybersecurity services. I look forward to working together again in the future.`
  },
  {
    platform: "Fiverr",
    logo: "/fiverr.svg",
    client: "David",
    country: "🇵🇹",
    text: `Saber Boukhriss truly impressed in the cybersecurity realm with his PROFESSIONAL documentation and excellent cooperation. His work was timely and polite, making the collaboration seamless. HIGHLY recommend working with him! 🙌`
  },
  {
    platform: "Fiverr",
    logo: "/fiverr.svg",
    client: "Manny",
    country: "🇬🇧",
    text: `The professionalism and the standard of work was exceptional. The task was completed to a very high extent and good quality. Also the communication and delivery time was fantastic. I would highly recommend as its something you can rely on.`
  },
  {
    platform: "Fiverr",
    logo: "/fiverr.svg",
    client: "Tommy",
    country: "🇯🇵",
    text: `Found lots of good things for me to patch, and it was very quick and easy to get started.`
  },
  {
    platform: "Fiverr",
    logo: "/fiverr.svg",
    client: "Muftah",
    country: "🇶🇦",
    text: `Dedicated to work, fast and respectful.`
  },
];

const faqs = [
  {
    q: "What services do you offer?",
    a: (
      <ul className="list-disc pl-6">
        <li>Penetration testing and vulnerability assessment</li>
        <li>Personal cybersecurity consultant</li>
        <li>Website security assessment, hardening and protection</li>
        <li>Cybersecurity awareness training</li>
        <li>WordPress malware removal and WordPress security</li>
        <li>Cloudflare Application Services assistance</li>
      </ul>
    )
  },
  {
    q: "How do I get started?",
    a: "Click one of the 'Hire me' buttons above or contact me directly for a custom quote."
  }
];

function QuoteIcon() {
  return (
    <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-teal-400 mb-2">
      <path d="M16 32c0-8 4-12 8-12v-4c-8 0-12 6-12 16h4zm16 0c0-8 4-12 8-12v-4c-8 0-12 6-12 16h4z" fill="currentColor"/>
    </svg>
  );
}

export default function HireMe() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  const handlePrev = () => {
    const swiperInstance = swiperRef.current?.swiper as SwiperType | undefined;
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };
  const handleNext = () => {
    const swiperInstance = swiperRef.current?.swiper as SwiperType | undefined;
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <section className="max-w-2xl mx-auto py-16 px-4 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent leading-tight" style={{lineHeight: '1.15', marginBottom: '1.5rem'}}>
          Ready to Work Together?
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          I deliver top-notch cybersecurity services with a proven track record on leading freelance platforms. My clients value my expertise, professionalism, and results-driven approach.
        </p>
      </div>

      {/* Reviews Slider */}
      <div className="w-full mb-14">
        <h2 className="text-2xl font-semibold text-center mb-8">What Clients Say</h2>
        <Swiper
          modules={[Pagination, A11y]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          className="pb-8"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          ref={swiperRef}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative flex flex-col items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl px-8 py-10 max-w-xl mx-auto">
                <QuoteIcon />
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100 text-center mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center gap-3 mt-2">
                  <Image src={review.logo} alt={review.platform + ' Logo'} width={28} height={28} className="rounded-full border border-gray-200 dark:border-gray-700" />
                  <span className="font-semibold text-gray-700 dark:text-gray-200">{review.client}</span>
                  <span className="text-xl">{review.country}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation arrows below the card */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-teal-900 shadow p-2 transition border border-gray-200 dark:border-gray-700 disabled:opacity-50"
            disabled={activeIndex === 0}
            style={{ width: 44, height: 44 }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next review"
            className="rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-teal-900 shadow p-2 transition border border-gray-200 dark:border-gray-700 disabled:opacity-50"
            disabled={activeIndex === reviews.length - 1}
            style={{ width: 44, height: 44 }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hire Me Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 w-full mb-14">
        <Link href="https://www.fiverr.com/s/Q7EGLR3" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow transition w-full sm:w-auto">
          <Image src="/fiverr.svg" alt="Fiverr Logo" width={28} height={28} />
          Hire me on Fiverr
        </Link>
        <span className="hidden sm:inline-block self-center text-gray-400 font-bold">or</span>
        <Link href="https://www.upwork.com/freelancers/~015f882658b91644c0?mp_source=share" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow transition w-full sm:w-auto">
          <Image src="/upwork.svg" alt="Upwork Logo" width={28} height={28} />
          Hire me on Upwork
        </Link>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          {faqs.map((faq, i) => (
            <li key={i}>
              <button
                className="w-full text-left font-semibold text-gray-800 dark:text-gray-200 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                {faq.q}
                <span className={`ml-2 transition-transform ${openFaq === i ? "rotate-90" : "rotate-0"}`}>▶</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 mt-2" : "max-h-0"}`}
                style={{}}
              >
                {typeof faq.a === 'string' ? (
                  <p className="text-gray-700 dark:text-gray-300 text-base pl-2 pr-4">{faq.a}</p>
                ) : (
                  <div className="text-gray-700 dark:text-gray-300 text-base pl-2 pr-4">{faq.a}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 