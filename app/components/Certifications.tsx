"use client";

import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Certification } from "../../sanity/types";

interface CertificationsProps {
  certifications: Certification[];
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  aws: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-700 dark:text-orange-300" },
  security: { bg: "bg-teal-100 dark:bg-teal-900/30", text: "text-teal-700 dark:text-teal-300" },
  cloud: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-300" },
  network: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-700 dark:text-purple-300" },
  compliance: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-300" },
  other: { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-600 dark:text-gray-400" },
};

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {certifications.map((cert) => {
        const logoUrl = cert.logo ? urlForImage(cert.logo)?.url() : null;
        const cat = cert.category || "other";
        const colors = categoryColors[cat] || categoryColors.other;
        return (
          <a
            key={cert._id}
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:border-teal-200 dark:hover:border-teal-800 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 shrink-0 rounded-lg overflow-hidden bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                {logoUrl ? (
                  <Image
                    src={logoUrl}
                    alt={`${cert.title} logo`}
                    width={40}
                    height={40}
                    className="object-contain w-full h-full p-0.5"
                  />
                ) : (
                  <svg className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                )}
              </div>
              <div className="min-w-0 flex-1">
                {cert.category && (
                  <span className={`inline-block px-1.5 py-0.5 text-[10px] font-semibold rounded uppercase mb-1 ${colors.bg} ${colors.text}`}>
                    {cat}
                  </span>
                )}
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {cert.issuer}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                  {formatDate(cert.issueDate)}
                  {cert.expiryDate && (
                    <span> - {formatDate(cert.expiryDate)}</span>
                  )}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
