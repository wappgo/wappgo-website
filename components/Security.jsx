// import { Button } from "./Service";
// import Image from "next/image";

// const Security = () => {
//   return (
//     <main className="security-container">
//       <section className="row">
//         <div className="col-xl-6 tech-security">
//           <h4>Enhanced Security</h4>
//           <h2>
//             An approach to<span> security </span>
//             powered by technology.
//           </h2>
//           <p>
//             Wappgo empowers businesses by providing a comprehensive security
//             solution that combines our expertise with the advanced Wappgo
//             Services. This integration delivers precise and actionable insights
//             into their security status.
//           </p>
//           <Button />
//         </div>
//         <div className="col-xl-6">
//           <div className="security-container-content">
//             <img
//               src="/assets/security-image.png"
//               className="img-fluid security-img"
//             />
//           </div>
//         </div>
//       </section>
//       <section className="row my-5">
//         <article className="col-lg-4">
//           <div className="security-card-container">
//           <div>
//             <img src="/assets/cyber-firewall-icon.svg" />
//           </div>
//           <h6>Attack Surface Management</h6>
//           <p>
//             Businesses have the capability to commence a security project and
//             oversee its advancement using our platform. Each task or action
//             within the project is meticulously recorded, ensuring transparency
//             and comprehensive documentation.
//           </p>
//           </div>
//         </article>
//         <article className="col-lg-4">
//          <div className="security-card-container">
//          <div>
//             <img src="/assets/cyber-project-icon.svg" />
//           </div>
//           <h6>Project Management</h6>
//           <p>
//             Organizations can gain a holistic view of potential attack surfaces
//             identified by the platform within their systems. This encompasses
//             servers, testing domains, and vulnerable third-party
//             software, allowing for a comprehensive assessment of their security
//             posture.
//           </p>
//          </div>
//         </article>
//         <article className="col-lg-4">
//          <div className="security-card-container">
//          <div>
//             <img src="/assets/cyber-scan-virus.svg" />
//           </div>
//           <h6>Vulnerability Management</h6>
//           <p>
//             The platform easily detects vulnerabilities through automated
//             processes or manual input, followed by thorough classification and
//             remediation procedures. It provides a unified perspective on threats
//             and their potential impact on the business.
//           </p>
//          </div>
//         </article>
//       </section>
//     </main>
//   );
// };

// export default Security;

import { Button } from "./Service";
import Image from "next/image";
const Security = () => {
  return (
    <main className="security-container">
      <section className="row">
        <div className="col-lg-6 tech-security">
          <h4>Enhanced Security</h4>
          <h2>
            An approach to<span> security </span>
            powered by technology.
          </h2>
          <p>
            Wappgo empowers businesses by providing a comprehensive security
            solution that combines our expertise with the advanced Wappgo
            Services. This integration delivers precise and actionable insights
            into their security status.
          </p>
          <Button />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <div className="security-container-img">
            <img src="/assets/security-image.png" className="img-fluid" />
          </div>
        </div>
      </section>
      <section className="row security-card-container">
        <article className="col-lg-4">
          <div>
            <div>
              <img className="img-fluid" src="/assets/cyber-firewall-icon.svg" />
            </div>
            <h6>Attack Surface Management</h6>
            <p>
              Businesses initiate, effectively manage, and oversee security
              projects seamlessly using our platform. Each task is meticulously
              documented for transparency, creating comprehensive records aiding
              in project management and assessment.
            </p>
          </div>
        </article>
        <article className="col-lg-4">
          <div className="security-card">
            <div>
              <img className="img-fluid" src="/assets/cyber-project-icon.svg" />
            </div>
            <h6>Project Management</h6>
            <p>
              Organizations obtain a holistic perspective of potential attack
              surfaces, including dormant servers, testing domains, and
              vulnerable third-party software, facilitating a comprehensive and
              thorough assessment of their security posture.
            </p>
          </div>
        </article>
        <article className="col-lg-4">
          <div className="security-card">
            <div>
              <img className="img-fluid" src="/assets/cyber-scan-virus.svg" />
            </div>
            <h6>Vulnerability Management</h6>
            <p>
              The platform seamlessly automates vulnerability detection,
              classification, and ensures thorough, systematic remediation,
              offering a unified view of threats and their business impact for
              comprehensive security measures.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Security;
