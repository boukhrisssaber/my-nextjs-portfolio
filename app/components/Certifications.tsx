"use client";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Certification } from "@/sanity/types";

interface CertificationsProps {
  certifications: Certification[];
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toISOString().slice(0, 10);

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certifications.map((cert) => {
        const logoUrl = cert.logo ? urlForImage(cert.logo)?.url() : null;
        return (
          <a
            key={cert._id}
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-3 text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative w-16 h-16 flex-shrink-0 mx-auto">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={`${cert.title} logo`}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
                  <span className="text-xs text-gray-500">No Logo</span>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {cert.issuer}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Issued {formatDate(cert.issueDate)}
                {cert.expiryDate && (
                  <> · Expires {formatDate(cert.expiryDate)}</>
                )}
              </p>
            </div>
            <div>
              <svg
                className="w-5 h-5 text-gray-400 inline-block"
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
        );
      })}
    </div>
  );
} 