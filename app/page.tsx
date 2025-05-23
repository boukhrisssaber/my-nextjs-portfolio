import Image from "next/image";
import Me from "@/public/pdp-sqr-min.png";
import { client } from "../sanity/lib/client";
import Certifications from "./components/Certifications";

async function getCertifications() {
  const query = `*[_type == "certification"] | order(issueDate desc) {
    _id,
    title,
    issuer,
    logo,
    verificationUrl,
    issueDate,
    expiryDate,
    credentialId
  }`;
  
  return client.fetch(query);
}

export default async function Home() {
  const certifications = await getCertifications();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-8">
        <div className="relative">
          <Image
            alt="Picture of Saber Boukhriss"
            src={Me}
            className="h-48 w-48 rounded-full object-cover object-top shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            priority
          />
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            SB
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Saber Boukhriss
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Cybersecurity Specialist
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/boukhrisssaber" target="_blank" className="transition-all duration-300 hover:scale-110 hover:text-teal-500">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/saberbks/" target="_blank" className="transition-all duration-300 hover:scale-110 hover:text-teal-500">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
            </svg>
          </a>
          <a href="mailto:contact@boukhrisssaber.tn" target="_blank" className="transition-all duration-300 hover:scale-110 hover:text-teal-500">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
            </svg>
          </a>
          <a href="https://twitter.com/saberboukhriss" target="_blank" className="transition-all duration-300 hover:scale-110 hover:text-teal-500">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Content Sections */}
      <section className="space-y-8">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            👋 Hi, I'm Saber Boukhriss — a cybersecurity enthusiast based in Tunisia, on a mission to make digital spaces safer and smarter.

From securing Web Systems to guiding others in their security journey, I've built a career rooted in curiosity, resilience, and continuous learning. My passion lies in penetration testing, security monitoring, and creating awareness programs that demystify cybersecurity for teams and organizations.

I'm also the creator of CyberFlex (check the projects page), a cybertoolkit designed to simplify and centralize essential cybersecurity tools for professionals and learners alike.

When I'm not diving into logs or crafting security reports, you'll find me learning new languages or mentoring aspiring professionals in the field.
<br /><br />
🌐 Languages:<br />
Arabic (native), English (fluent), French (professional), German, Spanish, and, Japanese (basic)
<br />
<br />
🎓 Education:<br />
Master's in Information Systems Security – ISIM Gabes, University of Gabes (2023)
<br />
Applied License in Computer Science – ISI Mahdia, University of Monastir (2021)
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Experience & Achievements</h2>
          <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-2">
            <li>
                ⚙️ <b>Founder & Developer – CyberFlex (2024–Present)</b><br />
                Launched a web-based cybertoolkit offering free tools and utilities for security, development and design pros and students.
                Designed with usability, modularity, and security in mind.
                Tools include port scanner, Freelancing fees and rates calculators, and other many tools
            </li>
            <li>
              🛡️ <b>Junior Cybersecurity Specialist @ Securas Technologies (2023–2025)</b><br />
              At Securas, I handle a mix of penetration testing, SIEM analysis, user awareness, and even internal mentoring.<br />
              Impact: Introduced a new security solution that significantly improved team efficiency and detection speed in pentesting.
              I also help shape internal cybersecurity strategies and support virtualization environments.            </li>
          </ul>
        </div>
      </section>

      {/* Certifications Carousel Section */}
      <section className="w-full max-w-6xl mx-auto mt-8">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center">Certifications</h2>
          <Certifications certifications={certifications} />
        </div>
      </section>
    </div>
  );
}
