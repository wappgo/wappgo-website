"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import "../public/styles/Navbar.css";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { _colorExp } from "gsap/gsap-core";

const ServiceDropdown2 = ({ hideServices }) => {
  const [activeService2, setActiveService] = useState('Web Development');
  const [hoveredService, setHoveredService] = useState(null);
  const router = useRouter();

  const services = [
    { name: 'Web Development', path: '/servicepages' },
    { name: 'UI / UX Design', path: '/uiservices' },
    { name: 'DevOps Services', path: '/devops' },
    { name: 'QA / Testing', path: '/testing' },
    { name: 'Chatbot Services', path: '/chatbot' },
    { name: 'Data Engineering', path: '/data-services' },
    { name: 'App Development', path: '/appsevices' }
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
  const displayedService = hoveredService || activeService2;

  return (
    <main onMouseLeave={hideServices} className="services-container">
      <div className="industriesdiv">
        <div className="row align-items-start justify-content-between">
          <div className="col-md-3">
            <div className="header-sidebar-content2">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`service-sidebar2 cursor-pointer rounded ${
                    displayedService === service.name ? 'activeService2' : ''
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
            <div className="header-sidebar-right2">
              {contentData[displayedService] ? (
                Object.entries(contentData[displayedService].sections).map(([section, items]) => {
                  return (
                    <div key={section} className="mb-8">
                      <h3 className="service-title">{section}</h3>
                      <div className="services-content">
                        {items.map((item, idx) => (
                          <div key={idx} className="item-main">
                            <img src={item.logo} alt={item.name} />
                            <h6 style={{color:"white"}}  className="text-sm">{item.name}</h6>
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

export default ServiceDropdown2;