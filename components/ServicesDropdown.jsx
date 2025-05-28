// "use client";
// import { useState,useEffect } from "react";
// import Image from 'next/image';
// import "../public/styles/Navbar.css";
// import { useRouter } from 'next/navigation';
// import Link from "next/link";

// const ServicesDropdown = ({ hideServices }) => {
//   // const [activeService, setActiveService] = useState('Web Development');
//   // const router = useRouter();
//   // const services = [
//   //   'Web Development',
//   //   'UI / UX Design',
//   //   'DevOps Services',
//   //   'QA / Testing',
//   //   'Chatbot Services',
//   //   'Data Engineering',
//   //   'App Development'
//   // ];
//   const [activeService, setActiveService] = useState('Web Development');
//   const router = useRouter();

  
//   const services = [
//     { name: 'Web Development', path: '/servicepages' },
//     { name: 'UI / UX Design', path: '/appdev' },
//     { name: 'DevOps Services', path: '/servicepages' },
//     { name: 'QA / Testing', path: '/servicepages' },
//     { name: 'Chatbot Services', path: '/servicepages' },
//     { name: 'Data Engineering', path: '/servicepages' },
//     { name: 'App Development', path: '/servicepages' }
//   ];

//   // const handleServiceClick = (serviceName, path) => {
//   //   setActiveService(serviceName);
//   //   router.push(path);
//   //   hideServices(); // Close the dropdown after navigation
//   // };

//   const handleServiceClick = (serviceName, path) => {
//     setActiveService(serviceName);
    
//     const isFirstVisit = !sessionStorage.getItem('hasVisited');
    
//     if (isFirstVisit) {
//       sessionStorage.setItem('hasVisited', 'true');
//       localStorage.setItem('hasVisited', 'true');
//       window.location.href = path;
//       // No return statement here - let it continue to hideServices
//     } else {
//       router.push(path);
//     }
    
//     hideServices(); // This will execute before window.location redirect happens
//   };
//   const contentData = {
//     'Web Development': {
//       sections: {
//         'Frontend Development': [
//           { name: 'Next.js', logo: '/assets/next2.svg' },
//           { name: 'Angular.js', logo: '/assets/angular.svg' },
//           { name: 'React.js', logo: '/assets/react.svg' },
//           { name: 'Vue.js', logo: '/assets/vue.svg' },
//           { name: 'Talwind', logo: '/assets/talwind.svg' },
//           { name: 'Sass', logo: '/assets/sass.svg' },
//           { name: 'HTML5', logo: '/assets/html5.svg' },
//           { name: 'Javascript', logo: '/assets/js.svg' },
//           { name: 'CSS3', logo: '/assets/css3.svg' },
//         ],
//         'Backend Development': [
//           { name: 'Express.js', logo: '/assets/express.svg' },
//           { name: 'Node.js', logo: '/assets/node.svg' },
//           { name: 'Laravel', logo: '/assets/laravel.svg' },
//           { name: 'Python', logo: '/assets/python.svg' },
//           { name: 'SQL', logo: '/assets/sql.svg' },
//           { name: 'MongoDB', logo: '/assets/mongo.svg' },
//           { name: 'AWS', logo: '/assets/aws.svg' },
//           { name: 'Redis', logo: '/assets/redis.svg' },
//           { name: 'Firebase', logo: '/assets/firebase.svg' },
//           { name: 'ElasticSearch', logo: '/assets/elastic.svg' },
//           { name: 'PostgreSQL', logo: '/assets/postgre.svg' },
//           { name: 'Sanity.io', logo: '/assets/Sanity.svg' },
//           { name: 'Golang(GO)', logo: '/assets/Golang.svg' },
//           { name: 'Nest', logo: '/assets/Nest.svg' },
//         ]
//       }
//     },
//     'UI / UX Design': {
//       sections: {
//         'Animation': [
//           { name: 'After Effects', logo: '/assets/after.svg' },
//           { name: 'Premiere Pro', logo: '/assets/premiere.svg' }
//         ],
//         'UI Design': [
//           { name: 'Figma', logo: '/assets/figma.svg' },
//           { name: 'Adobe Illustrator', logo: '/assets/adobe.svg' },
//           { name: 'Adobe Photoshop', logo: '/assets/photoshop.svg' },
//           { name: 'Framer', logo: '/assets/framer.svg' },
//           { name: 'Milanote', logo: '/assets/milanote.svg' }
//         ]
//       },
//     },
//     'DevOps Services': {
//       sections: {
//         'Animation': [
//           { name: 'Sanity', logo: '/assets/ty.svg' },
//           { name: 'AWS', logo: '/assets/aws.svg' },
//           { name: 'Bitbucket', logo: '/assets/bit.svg' },
//           { name: 'Docker', logo: '/assets/dock.svg' },
//           { name: 'npm', logo: '/assets/npm.svg' },
//           { name: 'GitLab', logo: '/assets/git.svg' },
//           { name: 'GitHub', logo: '/assets/git2.svg' },
//           { name: 'Google Cloud', logo: '/assets/google.svg' },
//           { name: 'Azure', logo: '/assets/as.svg' },
//           { name: 'Ansible', logo: '/assets/ansible.svg' },
//           { name: 'Terraform', logo: '/assets/terra.svg' },
//           { name: 'Shopify', logo: '/assets/shop.svg' },
//         ]
//       },
//     },
//     'QA / Testing': {
//       sections: {
//         'Animation': [
//           { name: 'UI Testing', logo: '/assets/qa.svg' },
//           { name: 'Selenium', logo: '/assets/selenium.svg' },
//           { name: 'Appium', logo: '/assets/hello.svg' },
//           { name: 'Vuforia ', logo: '/assets/hello2.svg' }
//         ]
//       },
//     },
//     'Chatbot Services': {
//       sections: {
//         'Animation': [
//           { name: 'AWS Sumerian', logo: '/assets/sum.svg' },
//           { name: 'Google Cloud', logo: '/assets/google.svg' }
//         ]
//       },
//     },
//     'Data Engineering': {
//       sections: {
//         'Technologies': [
//           { name: 'Google BigQuery', logo: '/assets/big.svg' },
//           { name: 'Google Data Studio', logo: '/assets/studio.svg' },
//           { name: 'Amazon Redshift', logo: '/assets/redshift.svg' },
//           { name: 'Amazon QuickSight', logo: '/assets/sight.svg' },
//           { name: 'Microsoft Power BI', logo: '/assets/bi.svg' }
//         ]
//       },
//     },
//     'App Development': {
//       sections: {
//         'Native Apps': [
//           { name: 'Android', logo: '/assets/android.svg' },
//           { name: 'iOS', logo: '/assets/ios.svg' },
//           { name: 'Amazon Redshift', logo: '/assets/redshift.svg' },
//           { name: 'Amazon QuickSight', logo: '/assets/sight.svg' },
//           { name: 'Microsoft Power BI', logo: '/assets/bi.svg' }
//         ],
//         'Hybrid Apps': [
//           { name: 'React Native', logo: '/assets/react.svg' },
//           { name: 'Flutter', logo: '/assets/flutter.svg' },
//           { name: 'PWA', logo: '/assets/pwa.svg' },
//           { name: 'Ionic', logo: '/assets/IONIC.svg' }
//         ],
//       },
//     }
//   };

//   return (
//     <main onMouseLeave={hideServices} className="services-container">
//       <div className="industriesdiv">
//          <div className="row align-items-start justify-content-between">
//            <div className="col-md-3">
//             <div className="header-sidebar-content">
//               {services.map((service, idx) => (
//                 <div
//                   key={idx}
//                   // className={`service-sidebar cursor-pointer rounded ${activeService === service ? 'activeService' : 'service-sidebar'}`}
//                   // onClick={() => setActiveService(service)}
//                   className={`service-sidebar cursor-pointer rounded ${activeService === service.name ? 'activeService' : 'service-sidebar'}`}
//                   onClick={() => handleServiceClick(service.name,service.path)}
//                 >
//                   {/* {service} */}
//                   {service.name}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="col-md-9">
//             <div className="header-sidebar-right">
//               {contentData[activeService] ? (
//                 Object.entries(contentData[activeService].sections).map(([section, items]) => {
//                   return (
//                     <div key={section} className="mb-8">
//                       <h3 className="service-title">{section}</h3>
//                       <div className="services-content">
//                         {items.map((item, idx) => (
//                           <div key={idx} className="item-main">
//                             <img src={item.logo} alt={item.name} />
//                             <h6 className="text-sm">{item.name}</h6>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <p>No content available for this section.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ServicesDropdown;

"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import "../public/styles/Navbar.css";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const ServicesDropdown = ({ hideServices }) => {
  const [activeService, setActiveService] = useState('Web Development');
  const [hoveredService, setHoveredService] = useState(null);
  const router = useRouter();

  const services = [
    { name: 'Web Development', path: '/servicepages' },
    { name: 'UI / UX Design', path: '/contact' },
    { name: 'DevOps Services', path: '/devops' },
    { name: 'QA / Testing', path: '/contact' },
    { name: 'Chatbot Services', path: '/contact' },
    { name: 'Data Engineering', path: '/contact' },
    { name: 'App Development', path: '/appdev' }
  ];

  const handleServiceHover = (serviceName) => {
    setHoveredService(serviceName);
  };

  const handleServiceClick = (serviceName, path) => {
    setActiveService(serviceName);
    const isFirstVisit = !sessionStorage.getItem('hasVisited');
    
    if (isFirstVisit) {
      sessionStorage.setItem('hasVisited', 'true');
      localStorage.setItem('hasVisited', 'true');
      window.location.href = path;
    } else {
      router.push(path);
    }
    
    hideServices();
  };

  const contentData = {
        'Web Development': {
          sections: {
            'Frontend Development': [
              { name: 'Next.js', logo: '/assets/next2.svg' },
              { name: 'Angular.js', logo: '/assets/angular.svg' },
              { name: 'React.js', logo: '/assets/react.svg' },
              { name: 'Vue.js', logo: '/assets/vue.svg' },
              { name: 'Talwind', logo: '/assets/talwind.svg' },
              { name: 'Sass', logo: '/assets/sass.svg' },
              { name: 'HTML5', logo: '/assets/html5.svg' },
              { name: 'Javascript', logo: '/assets/js.svg' },
              { name: 'CSS3', logo: '/assets/css3.svg' },
            ],
            'Backend Development': [
              { name: 'Express.js', logo: '/assets/express.svg' },
              { name: 'Node.js', logo: '/assets/node.svg' },
              { name: 'Laravel', logo: '/assets/laravel.svg' },
              { name: 'Python', logo: '/assets/python.svg' },
              { name: 'SQL', logo: '/assets/sql.svg' },
              { name: 'MongoDB', logo: '/assets/mongo.svg' },
              { name: 'AWS', logo: '/assets/aws.svg' },
              { name: 'Redis', logo: '/assets/redis.svg' },
              { name: 'Firebase', logo: '/assets/firebase.svg' },
              { name: 'ElasticSearch', logo: '/assets/elastic.svg' },
              { name: 'PostgreSQL', logo: '/assets/postgre.svg' },
              { name: 'Sanity.io', logo: '/assets/Sanity.svg' },
              { name: 'Golang(GO)', logo: '/assets/Golang.svg' },
              { name: 'Nest', logo: '/assets/Nest.svg' },
            ]
          }
        },
        'UI / UX Design': {
          sections: {
            'Animation': [
              { name: 'After Effects', logo: '/assets/after.svg' },
              { name: 'Premiere Pro', logo: '/assets/premiere.svg' }
            ],
            'UI Design': [
              { name: 'Figma', logo: '/assets/figma.svg' },
              { name: 'Adobe Illustrator', logo: '/assets/adobe.svg' },
              { name: 'Adobe Photoshop', logo: '/assets/photoshop.svg' },
              { name: 'Framer', logo: '/assets/framer.svg' },
              { name: 'Milanote', logo: '/assets/milanote.svg' }
            ]
          },
        },
        'DevOps Services': {
          sections: {
            'Animation': [
              { name: 'Sanity', logo: '/assets/ty.svg' },
              { name: 'AWS', logo: '/assets/aws.svg' },
              { name: 'Bitbucket', logo: '/assets/bit.svg' },
              { name: 'Docker', logo: '/assets/dock.svg' },
              { name: 'npm', logo: '/assets/npm.svg' },
              { name: 'GitLab', logo: '/assets/git.svg' },
              { name: 'GitHub', logo: '/assets/git2.svg' },
              { name: 'Google Cloud', logo: '/assets/google.svg' },
              { name: 'Azure', logo: '/assets/as.svg' },
              { name: 'Ansible', logo: '/assets/ansible.svg' },
              { name: 'Terraform', logo: '/assets/terra.svg' },
              { name: 'Shopify', logo: '/assets/shop.svg' },
            ]
          },
        },
        'QA / Testing': {
          sections: {
            'Animation': [
              { name: 'UI Testing', logo: '/assets/qa.svg' },
              { name: 'Selenium', logo: '/assets/selenium.svg' },
              { name: 'Appium', logo: '/assets/hello.svg' },
              { name: 'Vuforia ', logo: '/assets/hello2.svg' }
            ]
          },
        },
        'Chatbot Services': {
          sections: {
            'Animation': [
              { name: 'AWS Sumerian', logo: '/assets/sum.svg' },
              { name: 'Google Cloud', logo: '/assets/google.svg' }
            ]
          },
        },
        'Data Engineering': {
          sections: {
            'Technologies': [
              { name: 'Google BigQuery', logo: '/assets/big.svg' },
              { name: 'Google Data Studio', logo: '/assets/studio.svg' },
              { name: 'Amazon Redshift', logo: '/assets/redshift.svg' },
              { name: 'Amazon QuickSight', logo: '/assets/sight.svg' },
              { name: 'Microsoft Power BI', logo: '/assets/bi.svg' }
            ]
          },
        },
        'App Development': {
          sections: {
            'Native Apps': [
              { name: 'Android', logo: '/assets/android.svg' },
              { name: 'iOS', logo: '/assets/ios.svg' },
              { name: 'Amazon Redshift', logo: '/assets/redshift.svg' },
              { name: 'Amazon QuickSight', logo: '/assets/sight.svg' },
              { name: 'Microsoft Power BI', logo: '/assets/bi.svg' }
            ],
            'Hybrid Apps': [
              { name: 'React Native', logo: '/assets/react.svg' },
              { name: 'Flutter', logo: '/assets/flutter.svg' },
              { name: 'PWA', logo: '/assets/pwa.svg' },
              { name: 'Ionic', logo: '/assets/IONIC.svg' }
            ],
          },
        }
      };

  // Determine which service to display - hovered takes precedence over active
  const displayedService = hoveredService || activeService;

  return (
    <main onMouseLeave={hideServices} className="services-container">
      <div className="industriesdiv">
        <div className="row align-items-start justify-content-between">
          <div className="col-md-3">
            <div className="header-sidebar-content">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`service-sidebar cursor-pointer rounded ${
                    displayedService === service.name ? 'activeService' : ''
                  }`}
                  onMouseEnter={() => handleServiceHover(service.name)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(service.name, service.path)}
                >
                  {service.name}
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-9">
            <div className="header-sidebar-right">
              {contentData[displayedService] ? (
                Object.entries(contentData[displayedService].sections).map(([section, items]) => {
                  return (
                    <div key={section} className="mb-8">
                      <h3 className="service-title">{section}</h3>
                      <div className="services-content">
                        {items.map((item, idx) => (
                          <div key={idx} className="item-main">
                            <img src={item.logo} alt={item.name} />
                            <h6 className="text-sm">{item.name}</h6>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No content available for this section.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesDropdown;