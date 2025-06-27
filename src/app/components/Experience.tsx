// src/app/components/Experience.tsx

import React from 'react';

// Paste the updated 'experiences' array from Step 1 here
const experiences = [
  // Technical Specialist - TDCX (Rehired)
  {
    role: 'Technical Specialist - Google Technical Solutions (Rehired)',
    company: 'TDCX',
    location: 'Kuala Lumpur',
    date: 'Sep 2024 - Present',
    [cite_start]summary: 'Rehired to resume responsibilities as a Technical Specialist, highlighting my proven expertise and performance in Google Tracking solutions.', // [cite: 5]
    responsibilities: [
      [cite_start]'Continue specializing in implementing and managing Google Tracking tools, including Google Ads, Google Analytics, Google Tag Manager, and Google Merchant Center.', // [cite: 5]
      [cite_start]'Maintain exceptional performance in consulting, technical support, and communication, reinforcing client trust and satisfaction.', // [cite: 5]
    ],
  },
  // Technical Hosting Support Engineer - PT. World Host Group
  {
    role: 'Technical Hosting Support Engineer',
    company: 'PT. World Host Group',
    location: 'Bali',
    [cite_start]date: 'Feb 2024 - Aug 2024', // [cite: 5]
    [cite_start]summary: 'I excel at promptly resolving diverse client inquiries across hosting services, ensuring uninterrupted operations for our valued clients.', // [cite: 5]
    responsibilities: [
      [cite_start]'Offered proficient technical support for domains, hosting (shared/VPS), control panels (cPanel, Plesk), website errors, mail servers, and DNS clusters.', // [cite: 5]
      [cite_start]'Utilized advanced ticketing systems to manage and prioritize client inquiries efficiently, ensuring prompt resolution.', // [cite: 5]
      [cite_start]'Engaged with the global English-speaking market through diverse communication channels, including ticketing, calls, and live chat support.', // [cite:5]
    ],
  },
  // Technical Specialist - TDCX
  {
    role: 'Technical Specialist - Google Technical Solutions',
    company: 'TDCX',
    location: 'Kuala Lumpur',
    [cite_start]date: 'Sep 2022 - Nov 2023', // [cite: 5]
    [cite_start]summary: 'Dedicated myself to specializing in Google Tracking products.', // [cite: 5]
    responsibilities: [
      [cite_start]'Proficiently implemented Google Tracking Tools, including Google Ads, Google Analytics, Google Tag Manager, and Google Merchant Center.', // [cite: 5]
      [cite_start]'Excelled in providing consulting services with strong business communication and product pitching abilities.', // [cite: 5]
    ],
  },
  // Back End Developer - PT. Uniktif Media (Unictive)
  {
    role: 'Back End Developer',
    company: 'PT. Uniktif Media (Unictive)',
    location: 'Jakarta',
    [cite_start]date: 'Feb 2021 - Feb 2022', // [cite: 6]
    [cite_start]summary: 'Designed and enhanced server-side applications, with proficiency in PHP, JavaScript, and frameworks like Laravel and React.', // [cite: 6]
    responsibilities: [
      [cite_start]'Prioritized seamless API integration between the website\'s back-end and front-end to optimize user experience.', // [cite: 6]
      [cite_start]'Skilled in deploying websites via Nginx, configuring SSL, and occasionally using PM2 for deployment management.', // [cite: 6]
      [cite_start]'Successfully implemented mail server setups for CMS systems, facilitating user management, invitations, and order notifications.', // [cite: 6]
      [cite_start]'Expertise in data infrastructure enables swift and accurate analysis of technical documents.', // [cite: 6]
    ],
  },
  // IT Support - PT Dewaweb
  {
    role: 'IT Support',
    company: 'PT Dewaweb',
    location: 'Jakarta',
    [cite_start]date: 'Feb 2018 - Feb 2019', // [cite: 6]
    [cite_start]summary: 'Committed to providing high-quality IT support, delivering technical assistance via phone and email within a CRM system.', // [cite: 6]
    responsibilities: [
      [cite_start]'Troubleshot and resolved issues within server products including cPanel, WHMPanel, CloudFlare, and SSL, primarily for WordPress websites.', // [cite: 6]
      [cite_start]'Skilled in utilizing CRM systems like WHMCS in hosting support environments.', // [cite: 6]
      [cite_start]'Possess knowledge in domain management, DNS record systems, and various payment platforms.', // [cite: 6]
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-12">
              {/* Vertical timeline bar */}
              <div className="absolute left-2 sm:left-4 top-2 h-full border-l-2 border-primary dark:border-primary-dark"></div>
              {/* Timeline circle */}
              <div className="absolute left-0 sm:left-2.5 top-2 w-4 h-4 bg-primary dark:bg-primary-dark rounded-full border-4 border-gray-50 dark:border-gray-900"></div>

              <div className="mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                <p className="text-md font-semibold text-primary dark:text-primary-dark">
                  {exp.company} <span className="text-gray-600 dark:text-gray-400 font-normal">📍 {exp.location}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{exp.date}</p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 italic my-4">{exp.summary}</p>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-outside space-y-2 pl-5 text-gray-600 dark:text-gray-400">
                  {exp.responsibilities.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;