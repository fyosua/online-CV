// src/app/components/Experience.tsx

import React from 'react';

// Paste the updated 'experiences' array from Step 1 here
const experiences = [
  {
    role: 'Technical Specialist - Google Technical Solutions (Rehired)',
    company: 'TDCX',
    location: 'Kuala Lumpur',
    date: 'Sep 2024 - Present',
    summary: 'Rehired to resume responsibilities as a Technical Specialist, highlighting my proven expertise and performance in Google Tracking solutions.',
    responsibilities: [
      'Continue specializing in implementing and managing Google Tracking tools, including Google Ads, Google Analytics, Google Tag Manager, and Google Merchant Center.',
      'Maintain exceptional performance in consulting, technical support, and communication, reinforcing client trust and satisfaction.',
    ],
  },
  {
    role: 'Technical Hosting Support Engineer',
    company: 'PT. World Host Group',
    location: 'Bali',
    date: 'Feb 2024 - Aug 2024',
    summary: 'I excel at promptly resolving diverse client inquiries across hosting services, ensuring uninterrupted operations for our valued clients.',
    responsibilities: [
      'Offered proficient technical support for domains, hosting (shared/VPS), control panels (cPanel, WHM, Plesk, SolidCP), website errors, mail servers, and DNS clusters.',
      'Utilized advanced ticketing systems to manage and prioritize client inquiries efficiently, ensuring prompt resolution.',
      'Engaged with the global English-speaking market through diverse communication channels, including ticketing, calls, and live chat support.',
    ],
  },
  {
    role: 'Technical Specialist - Google Technical Solutions',
    company: 'TDCX',
    location: 'Kuala Lumpur',
    date: 'Sep 2022 - Nov 2023',
    summary: 'Dedicated myself to specializing in Google Tracking products.',
    responsibilities: [
      'Proficiently implemented Google Tracking Tools, including Google Ads, Google Analytics, Google Tag Manager, and Google Merchant Center.',
      'Excelled in providing consulting services with strong business communication and product pitching abilities.',
    ],
  },
  {
    role: 'Back End Developer',
    company: 'PT. Uniktif Media (Unictive)',
    location: 'Jakarta',
    date: 'Feb 2021 - Feb 2022',
    summary: 'Designed and enhanced server-side applications, with proficiency in PHP, JavaScript, and frameworks like Laravel and React.',
    responsibilities: [
      'Prioritized seamless API integration between the website\'s back-end and front-end to optimize user experience.',
      'Skilled in deploying websites via Nginx, configuring SSL, and occasionally using PM2 for deployment management.',
      'Successfully implemented mail server setups for CMS systems, facilitating user management, invitations, and order notifications.',
      'Expertise in data infrastructure enables swift and accurate analysis of technical documents.',
    ],
  },
  {
    role: 'IT Support',
    company: 'PT Dewaweb',
    location: 'Jakarta',
    date: 'Feb 2018 - Feb 2019',
    summary: 'Committed to providing high-quality IT support, delivering technical assistance via phone and email within a CRM system.',
    responsibilities: [
      'Troubleshot and resolved issues within server products including cPanel, WHMPanel, CloudFlare, and SSL, primarily for WordPress websites.',
      'Skilled in utilizing CRM systems like WHMCS in hosting support environments.',
      'Possess knowledge in domain management, DNS record systems, and various payment platforms.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted"> {/* Before: bg-gray-50 dark:bg-gray-900 */}
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-12">
              {/* Vertical timeline bar */}
              <div className="absolute left-2 sm:left-4 top-2 h-full border-l-2 border-primary"></div> {/* Before: border-primary dark:border-primary-dark */}
              {/* Timeline circle */}
              <div className="absolute left-0 sm:left-2.5 top-2 w-4 h-4 bg-primary border-4 border-muted"></div> {/* Before: bg-primary... border-gray-50... */}

              <div className="mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.role}</h3> {/* Before: text-gray-800 dark:text-white */}
                <p className="text-md font-semibold text-primary"> {/* Before: text-primary dark:text-primary-dark */}
                  {exp.company} <span className="text-muted-foreground font-normal">📍 {exp.location}</span> {/* Before: text-gray-600... */}
                </p>
                {/* ... other elements ... */}
              </div>
              {/* ... etc */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;