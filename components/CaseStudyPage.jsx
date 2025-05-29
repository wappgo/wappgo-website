
"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function CaseStudy() {
  const router = useRouter();
  const categories = ['Research', 'Artificial Intelligence', 'Development', 'Design'];
  const [activeCategory, setActiveCategory] = useState('Research');

  const projects = [
    {
      title: 'Garud MP',
      description: 'AI based MP Govt. GIS portal Project for urban development planning.',
      tags: ['Research', 'Artificial Intelligence', 'Development', 'Design'],
      image: "/assets/maxresdefault-gis.svg",
      likeLink: "/gis-study"
    },
    {
      title: 'Accounty.AI',
      description: 'AI based Book Keeping and Accounting Software available for you 24x7.',
      tags: ['Artificial Intelligence', 'Research', 'Development', 'Design'],
      image: "/assets/graud.svg",
      likeLink: "/accountyai-study"
    },
    {
      title: 'TheLAL',
      description: 'AI based Broker oriented property buying selling renting and investment app.',
      tags: ['Artificial Intelligence', 'Research', 'Development', 'Design'],
      image: "/assets/maxresdefault.svg",
      likeLink: "/caseinner"
    },
    {
      title: 'Polisys',
      description: 'Growth Engine for policy innovation and political advancement.',
      tags: ['Research', 'Development'],
      image: "/assets/poly.svg"
    },
  ];

  const fadeRefs = useRef([]);

  // Observe heading fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      fadeRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Observe project card animations — reset on category change
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.project-card');

    cards.forEach((card) => {
      card.classList.remove('animate'); // reset animation
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [activeCategory]);

  // Filter projects by active category
  const filteredProjects = projects.filter(project =>
    project.tags.includes(activeCategory)
  );

  return (
    <>
      <div ref={(el) => (fadeRefs.current[0] = el)} className="get-in-touch-container3 fadeInUp-animation">
        <div className="heading-section">
          <h2>
            Our Case Studies: <br /> Real Success Stories
            <span> Real Impact</span>
          </h2>
          <p>
            Discover how our innovative IT solutions have transformed businesses, optimized operations, and driven growth.
            <br /> From cloud optimization to AI-powered analytics, explore real-world success stories that showcase our expertise in action.
          </p>
        </div>
      </div>

      <div className="container project-showcase mt-5">
        <div className="case-study-container5">
          <div className="search-bar5">
            <span className="search-icon5"><img src='/assets/search.svg' /></span>
            <input
              type="text"
              placeholder="Search Case Studies"
              className="search-input5"
            />
          </div>
          <div className="category-buttons5">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button5 ${activeCategory === category ? 'active5' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4 d-flex">
              <div
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering parent card click
                  if (project.likeLink) {
                    router.push(project.likeLink);
                  }
                }}
                style={{ cursor: project.likeLink ? 'pointer' : 'not-allowed' }}
                className="card project-card w-100"
              >
                <Image
                  src={project.image || '/default-image.png'}
                  alt={project.title}
                  width={636}
                  height={300}
                  className="card-img-top2"
                />
                <div className="card-body2 mb-4">
                  <h5 className="card-title3">{project.title}</h5>
                  <p className="card-text3">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag-badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-12 text-center mt-5">
              <p>No case studies found for "{activeCategory}".</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
