"use client";
import React from "react";
import { useState } from 'react';
import "../public/styles/Career.css";

const jobs = [
  {
    title: "Full-Stack Developers",
    tags: ["Tartu", "Full-time"],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    title: "Application developer (react native)",
    tags: ["Tartu", "Full-time"],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    title: "Senior Product designer",
    tags: ["Hybrid", "Tallinn", "Full-time"],
    description:
      "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let’s talk!",
  },
];
const JobListings = () => {
  const [activeCategory, setActiveCategory] = useState("All positions (17)");

  const categories = [
    "All positions (17)",
    "Engineering (7)",
    "Product (3)",
    "Design (1)",
    "Operation (4)",
    "Marketing (2)",
  ];
  return (
    <div className="careers-section">
      <h2 className="heading-career">
        We Have 3 Open <span className="highlight-career">Positions</span> Now!
      </h2>
      <div className="careers-container">
        <div className="careers-sidebar">
      <ul className="categories">
        {categories.map((cat, index) => (
          <li
            key={index}
            className={`category-item ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      <p className="note">
        We are always seeking talented people. In case you cannot find your desired position
        here, please send us your LinkedIn profile and give us your contact information.
        We will be in touch.
      </p>

      <button className="linkedin-btn">Share your LinkedIn profile</button>
    </div>


        <div className="careers-listings">
          {jobs.map((job, index) => (
            <div className="job-block" key={index}>
              <h3 className="job-title">{job.title}</h3>
              <div className="job-tags">
                {job.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="job-desc">{job.description}</p>
              {/* <button className="position-btn">See positions →</button> */}
              <div className="position-container">
                <button className="position-btn">See positions →</button>
              </div>
              {index < jobs.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListings;

