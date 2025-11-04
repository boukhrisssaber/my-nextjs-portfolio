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
          <a href="mailto:boukhrisssaber@gmail.com" target="_blank" className="transition-all duration-300 hover:scale-110 hover:text-teal-500">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
            </svg>
          </a>
          <a href="https://twitter.com/saberboukhriss" target="_blank" className="transition-all duration-300 hover:scale-110 hover:text-teal-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-8 h-8">
            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>    
          </a>
        </div>
      </section>

      {/* Content Sections */}
      <section className="space-y-8">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            👋 Hi, I'm Saber Boukhriss, a cybersecurity enthusiast based in Tunisia, on a mission to make digital spaces safer and smarter.

From securing Web Systems to guiding others in their security journey, I've built a career rooted in curiosity, resilience, and continuous learning. My passion lies in penetration testing, security monitoring, and creating awareness programs that demystify cybersecurity for teams and organizations.

I'm also the creator of CyberFlex and Nexthire (check the projects page), and some other stuff.

When I'm not diving into logs or writing security reports, you'll find me learning new languages or mentoring aspiring professionals in the field.
<br /><br />
🌐 Languages:<br />
Arabic (native), English (professional), French (conversational), German (basic), Spanish (basic), and Japanese (basic)
<br />
<br />
🎓 Education:<br />
Master's in Cybersecurity and Intelligent industry – FSS Sfax, University of Sfax (2025)
<br />
Master's in Information Systems Security – ISIM Gabes, University of Gabes (2023)
<br />
Applied License in Computer Science – ISI Mahdia, University of Monastir (2021)
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Experience & Achievements</h2>
          <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-2">
          <li>
              💼 <b>Cybersecurity Consultant – GRC @ DefensyLAB (2025)</b><br />
              At DefensyLAB, I specialize in Governance, Risk, and Compliance, helping clients align with ISO/IEC 27001, 27002, and 27005 standards through tailored security policies and risk frameworks.<br />
              Impact: Wrote comprehensive security policies and procedures that improved client compliance posture.
              I also design awareness programs to foster a strong security culture and formalize security processes to ensure audit readiness.
          </li>
            <li>
              🛡️ <b>Junior Cybersecurity Specialist @ Securas Technologies (2023–2025)</b><br />
              At Securas, I handle a mix of penetration testing, SIEM analysis, user awareness, and even internal mentoring.<br />
              Impact: Introduced a new security solution that significantly improved team efficiency and detection speed in pentesting.
              I also help shape internal cybersecurity strategies and support virtualization environments.            
            </li>
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
