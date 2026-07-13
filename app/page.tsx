import Image from "next/image";
import Me from "@/public/pdp-sqr-min.png";
import { client } from "./lib/sanity";
import Certifications from "./components/Certifications";
import SkillsRadar from "./components/SkillsRadar";

async function getCertifications() {
  const query = `*[_type == "certification"] | order(issueDate desc) {
    _id,
    title,
    issuer,
    logo,
    verificationUrl,
    issueDate,
    expiryDate,
    credentialId,
    category
  }`;
  
  return client.fetch(query);
}

export default async function Home() {
  const certifications = await getCertifications();

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-teal-950 dark:from-gray-950 dark:via-gray-950 dark:to-teal-950/80 rounded-3xl overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 0h40v40H0z' fill='none' stroke='%23fff' stroke-width='1'/%3e%3c/svg%3e")`,
        }} />
        
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full blur-lg opacity-30" />
            <Image
              alt="Saber Boukhriss"
              src={Me}
              className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-full object-cover object-top shadow-2xl ring-4 ring-teal-500/20"
              priority
            />
          </div>
          
          <div className="text-center sm:text-left space-y-4">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Saber <span className="text-teal-400">Boukhriss</span>
              </h1>
              <p className="text-base sm:text-lg text-teal-300/80 font-medium">
                Cybersecurity Product Owner & SOC Lead
              </p>
            </div>
            
            <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
              Leading security product strategy and SOC operations at Autobiz (Stellantis Group). ISO 27001 Lead Auditor & CEH certified. Focused on AWS cloud security.
            </p>

            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/saberbks/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium transition-colors"
              >
                <svg viewBox="0 0 1024 1024" fill="currentColor" className="w-4 h-4">
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/boukhrisssaber"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors backdrop-blur-sm"
              >
                <svg viewBox="0 0 1024 1024" fill="currentColor" className="w-4 h-4">
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:boukhrisssaber@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors backdrop-blur-sm"
              >
                <svg viewBox="0 0 1024 1024" fill="currentColor" className="w-4 h-4">
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
                </svg>
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Experience - takes 3 columns */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">Experience</h2>
          <div className="space-y-5">
            {[
              {
                role: "Cybersecurity Product Owner & SOC Lead",
                company: "Autobiz (Stellantis Group)",
                date: "Nov 2025 - Present",
                bullets: [
                  "Spearhead the cybersecurity product roadmap (IAM, SIEM, DLP, EDR) aligned with Stellantis group standards.",
                  "Direct the SOC team: incident detection, response strategies, and proactive threat intelligence.",
                  "Manage the security backlog using Agile/Scrum, bridging DevSecOps teams and business stakeholders.",
                  "Ensure compliance with NIS2, GDPR, and ISO 27001. Monitor security KPIs and ROI metrics.",
                  "Drive AWS cloud security posture: IAM policies, GuardDuty, Security Hub, and infrastructure hardening.",
                ],
              },
              {
                role: "Cybersecurity Consultant in GRC",
                company: "DefensyLAB",
                date: "May 2025 - Aug 2025",
                bullets: [
                  "Developed security policies and risk management frameworks per ISO/IEC 27001, 27002, and 27005.",
                  "Conducted gap analyses and compliance assessments for regulatory audits.",
                  "Designed cybersecurity awareness programs: interactive sessions, gamified training, and presentations.",
                ],
              },
              {
                role: "Cybersecurity Specialist",
                company: "Securas Technologies",
                date: "Jul 2023 - Mar 2025",
                bullets: [
                  "Executed penetration tests and vulnerability assessments. Monitored SIEM, IDS/IPS, and firewall logs.",
                  "Architected and deployed a SaaS-based vulnerability scanner, reducing assessment time and costs.",
                  "Managed Cloud Security Posture (CSPM) and IAM within Microsoft Azure (Sentinel, Defender, Azure AD).",
                ],
              },
            ].map((job, idx) => (
              <div key={idx} className="relative pl-5 border-l-2 border-teal-200 dark:border-teal-800">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-500 ring-2 ring-white dark:ring-gray-900" />
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{job.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{job.company} | {job.date}</p>
                <ul className="mt-2 space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5">
                      <span className="text-teal-500 mt-0.5 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Skills + Focus */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills Radar */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <SkillsRadar />
          </div>

          {/* Core Focus */}
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-3">Core Focus</h2>
            <div className="space-y-2.5">
              {[
                { icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z", label: "SOC Operations & Incident Response" },
                { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", label: "GRC & Compliance (ISO 27001, NIS2, GDPR)" },
                { icon: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z", label: "Penetration Testing & Vulnerability Mgmt" },
                { icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605", label: "Security Product Strategy & Roadmaps" },
                { icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418", label: "AWS Cloud Security (IAM, GuardDuty, Security Hub)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-3">Education</h2>
            <div className="space-y-3">
              {[
                { degree: "Professional Master's in Cybersecurity & Intelligent Industry", school: "FSS, University of Sfax", year: "2025" },
                { degree: "Professional Master's in Information Systems Security", school: "ISIM Gabes, University of Gabes", year: "2023" },
                { degree: "Applied License in Computer Science", school: "ISI Mahdia, University of Monastir", year: "2021" },
              ].map((edu, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white leading-tight">{edu.degree}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">{edu.school} | {edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <section>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4 text-center">Certifications</h2>
          <Certifications certifications={certifications} />
        </div>
      </section>
    </div>
  );
}
