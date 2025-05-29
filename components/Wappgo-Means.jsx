"use client";
import { meaningCardData } from "../Data/data";
import React,{useRef,useEffect} from 'react';
const WappgoMeans = () => {
  return (
    <main className="wappgo-means-container">
      <h2>What Wappgo Means</h2>
      <article>
        {meaningCardData.map((item) => (
          <MeaningCard key={item.heading} data={item} />
        ))}
      </article>
    </main>
  );
};

export default WappgoMeans;

export const MeaningCard = ({ data }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.meaning-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);
  return (
    <main className="meaning-card">
      <h1>{data.heading}</h1>
      <p>{data.desc}</p>
    </main>
  );
};
