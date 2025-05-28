// import React, { useState } from 'react';
// import '../public/styles/DevopsRelated.css';
// import { FiChevronDown } from 'react-icons/fi';

// const accordionData = [
//   "Ship Fast, Without the Fire Drills",
//   "Smarter Infra, Fewer Surprises",
//   "Automate the Chaos",
//   "Secure by Default",
//   "Downtime? Nah, We Don't Do That.",
// ];

// const WorkflowSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="workflow-section">
//       {/* Centered heading inside the black container */}
//       <div className="workflow-header">
//         <h2>How <span>We Supercharge</span> Your Workflow</h2>
//         <p>From sluggish sprints to seamless shipping<br />
//           we fine-tune every step of your delivery pipeline.
//         </p>
//       </div>

//       <div className="workflow-content">
//         <div className="workflow-left">
//           <img src="/assets/workflow2.svg" alt="Workflow Graphic" />
//         </div>
//         <div className="workflow-right">
//           <div className="workflow-accordion">
//             {accordionData.map((item, index) => (
//               <div
//                 key={index}
//                 className={`workflow-accordion-item ${activeIndex === index ? 'active' : ''}`}
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <div className="workflow-accordion-header">
//                   <span>{item}</span>
//                   <FiChevronDown className={`icon ${activeIndex === index ? 'rotate' : ''}`} />
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="consult-button">
//             Get Consultation <span>⚡</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkflowSection;

import React, { useState } from 'react';
import '../public/styles/DevopsRelated.css';
import { FiChevronDown } from 'react-icons/fi';

const accordionData = [
  {
    title: "Ship Fast, Without the Fire Drills",
    description: "From daily deploys to rollback-ready releases, we streamline your release cycle so your team can move at the speed of 'done.'",
    videoSrc: "/assets/web-dev-video.webm",
  },
  {
    title: "Smarter Infra, Fewer Surprises",
    description: "Identify issues before they surface and build with confidence.",
    videoSrc: "/assets/plane.mp4",
  },
  {
    title: "Automate the Chaos",
    description: "Simplify deployments and eliminate manual toil with pipelines.",
    videoSrc: "/assets/web-dev-video.webm",
  },
  {
    title: "Secure by Default",
    description: "Bake security into every commit, not as an afterthought.",
    videoSrc: "/assets/web-dev-video.webm",
  },
  {
    title: "Downtime? Nah, We Don’t Do That.",
    description: "Resilient systems built to scale without disruption.",
    videoSrc: "/assets/web-dev-video.webm",
  }
];

const WorkflowSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="workflow-section">
      <div className="workflow-header">
        <h2>How <span>We Supercharge</span> Your Workflow</h2>
        <p>From sluggish sprints to seamless shipping<br />
          we fine-tune every step of your delivery pipeline.
        </p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img src="/assets/workflow2.svg" alt="Workflow Graphic" />
        </div>

        <div className="col-md-6 workflow-right">
          <div className="workflow-accordion">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`workflow-accordion-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="workflow-accordion-header">
                  <span>{item.title}</span>
                  <FiChevronDown className={`icon ${activeIndex === index ? 'rotate' : ''}`} />
                </div>

                {hoverIndex === index && activeIndex !== index && (
                  <video
                    className="hover-video"
                    src={item.videoSrc}
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                )}

                {activeIndex === index && (
                  <div className="workflow-accordion-content  side-by-side">
                    <p>{item.description}</p>
                    <video
                      className="main-video2"
                      src={item.videoSrc}
                      controls
                      autoPlay
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="consult-button">
            Get Consultation <span>⚡</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
