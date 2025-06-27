// src/app/components/Experience.tsx

import React from 'react';

// Paste the updated 'experiences' array from Step 1 here
const experiences = [
  {
    role: 'Technical Hosting Support Engineer',
    company: 'PT. World Host Group',
    location: 'Bali',
    date: 'YYYY - YYYY', // Add your dates here
    summary: 'I excel at promptly resolving diverse client inquiries across hosting services, ensuring uninterrupted operations for our valued clients.',
    responsibilities: [
      'Offer proficient technical support to clients, focusing on diagnosing and resolving issues for domain management, shared/VPS hosting, and control panels (cPanel, Plesk, etc.).',
      'Rectify website errors and malfunctions.',
      'Configure and troubleshoot mail servers.',
      'Assign and manage DNS clusters.',
    ],
  },
  // Add your other job experiences here
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