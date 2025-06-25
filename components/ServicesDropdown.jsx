
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

  let leaveTimeout;

const handleMouseLeave = () => {
  leaveTimeout = setTimeout(() => {
    setHoveredService(null);
    hideServices();
  }, 150);
};

const handleMouseEnter = () => {
  clearTimeout(leaveTimeout);
};

  const services = [
    { name: 'Web Development', path: '/web-development-services' },
    { name: 'UI / UX Design', path: '/ui-ux-services' },
    { name: 'DevOps Services', path: '/devops-services' },
    { name: 'QA / Testing', path: '/qa-testing-services' },
    { name: 'Chatbot Services', path: '/chatbot-development-services' },
    { name: 'Data Engineering', path: '/data-engineering-services' },
    { name: 'App Development', path: '/app-development-services' }
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
              { name: 'Next.js', logo: '/assets/next2.svg' , url:'/web-development-services'},
              { name: 'Angular.js', logo: '/assets/angular.svg'  , url:'/web-development-services' },
              { name: 'React.js', logo: '/assets/react.svg'  , url:'/web-development-services'},
              { name: 'Vue.js', logo: '/assets/vue.svg'  , url:'/web-development-services'},
              { name: 'Talwind', logo: '/assets/talwind.svg'  , url:'/web-development-services'},
              { name: 'Sass', logo: '/assets/sass.svg'  , url:'/web-development-services'},
              { name: 'HTML5', logo: '/assets/html5.svg'  , url:'/web-development-services'},
              { name: 'Javascript', logo: '/assets/js.svg'  , url:'/web-development-services'},
              { name: 'CSS3', logo: '/assets/css3.svg'  , url:'/web-development-services'},
            ],
            'Backend Development': [
              { name: 'Express.js', logo: '/assets/express.svg' , url:'/web-development-services' },
              { name: 'Node.js', logo: '/assets/node.svg'  , url:'/web-development-services' },
              { name: 'Laravel', logo: '/assets/laravel.svg' , url:'/web-development-services' },
              { name: 'Python', logo: '/assets/python.svg'  , url:'/web-development-services'},
              { name: 'SQL', logo: '/assets/sql.svg'  , url:'/web-development-services' },
              { name: 'MongoDB', logo: '/assets/mongo.svg'  , url:'/web-development-services'},
              { name: 'AWS', logo: '/assets/aws.svg'  , url:'/web-development-services'},
              { name: 'Redis', logo: '/assets/redis.svg'  , url:'/web-development-services'},
              { name: 'Firebase', logo: '/assets/firebase.svg'  , url:'/web-development-services'},
              { name: 'ElasticSearch', logo: '/assets/elastic.svg' , url:'/web-development-services' },
              { name: 'PostgreSQL', logo: '/assets/postgre.svg' , url:'/web-development-services' },
              { name: 'Sanity.io', logo: '/assets/Sanity.svg'  , url:'/web-development-services'},
              { name: 'Golang(GO)', logo: '/assets/Golang.svg' , url:'/web-development-services' },
              { name: 'Nest', logo: '/assets/Nest.svg' , url:'/web-development-services' },
            ]
          }
        },
        'UI / UX Design': {
          sections: {
            'Animation': [
              { name: 'After Effects', logo: '/assets/after.svg'  , url:'/ui-ux-services' },
              { name: 'Premiere Pro', logo: '/assets/premiere.svg' , url:'/ui-ux-services' }
            ],
            'UI Design': [
              { name: 'Figma', logo: '/assets/figma.svg' , url:'/ui-ux-services' },
              { name: 'Adobe Illustrator', logo: '/assets/adobe.svg ' , url:'/ui-ux-services' },
              { name: 'Adobe Photoshop', logo: '/assets/photoshop.svg' , url:'/ui-ux-services' },
              { name: 'Framer', logo: '/assets/framer.svg' , url:'/ui-ux-services'},
              { name: 'Milanote', logo: '/assets/milanote.svg' , url:'/ui-ux-services'}
            ]
          },
        },
        'DevOps Services': {
          sections: {
            'Animation': [
              { name: 'Sanity', logo: '/assets/ty.svg' , url:'/devops-services'},
              { name: 'AWS', logo: '/assets/aws.svg' , url:'/devops-services' },
              { name: 'Bitbucket', logo: '/assets/bit.svg' , url:'/devops-services' },
              { name: 'Docker', logo: '/assets/dock.svg' , url:'/devops-services' },
              { name: 'npm', logo: '/assets/npm.svg' , url:'/devops-services'},
              { name: 'GitLab', logo: '/assets/git.svg' , url:'/devops-services'},
              { name: 'GitHub', logo: '/assets/git2.svg' , url:'/devops-services'},
              { name: 'Google Cloud', logo: '/assets/google.svg' , url:'/devops-services'},
              { name: 'Azure', logo: '/assets/as.svg' , url:'/devops-services'},
              { name: 'Ansible', logo: '/assets/ansible.svg' , url:'/devops-services'},
              { name: 'Terraform', logo: '/assets/terra.svg' , url:'/devops-services'},
              { name: 'Shopify', logo: '/assets/shop.svg' , url:'/devops-services'},
            ]
          },
        },
        'QA / Testing': {
          sections: {
            'Animation': [
              { name: 'UI Testing', logo: '/assets/qa.svg' , url:'/qa-testing-services'},
              { name: 'Selenium', logo: '/assets/selenium.svg' , url:'/qa-testing-services' },
              { name: 'Appium', logo: '/assets/hello.svg', url:'/qa-testing-services' },
              { name: 'Vuforia ', logo: '/assets/hello2.svg', url:'/qa-testing-services' }
            ]
          },
        },
        'Chatbot Services': {
          sections: {
            'Animation': [
              { name: 'AWS Sumerian', logo: '/assets/sum.svg', url:'/chatbot-development-services' },
              { name: 'Google Cloud', logo: '/assets/google.svg', url:'/chatbot-development-services' }
            ]
          },
        },
        'Data Engineering': {
          sections: {
            'Technologies': [
              { name: 'Google BigQuery', logo: '/assets/big.svg' , url:'/data-engineering-services'},
              { name: 'Google Data Studio', logo: '/assets/studio.svg' , url:'/data-engineering-services' },
              { name: 'Amazon Redshift', logo: '/assets/redshift.svg'  , url:'/data-engineering-services'},
              { name: 'Amazon QuickSight', logo: '/assets/sight.svg' , url:'/data-engineering-services'},
              { name: 'Microsoft Power BI', logo: '/assets/bi.svg', url:'/data-engineering-services' }
            ]
          },
        },
        'App Development': {
          sections: {
            'Native Apps': [
              { name: 'Android', logo: '/assets/android.svg',url:'/app-development-services' },
              { name: 'iOS', logo: '/assets/ios.svg', url:'/app-development-services' },
              { name: 'Amazon Redshift', logo: '/assets/redshift.svg' , url:'/app-development-services'},
              { name: 'Amazon QuickSight', logo: '/assets/sight.svg' , url:'/app-development-services'},
              { name: 'Microsoft Power BI', logo: '/assets/bi.svg', url:'/app-development-services' }
            ],
            'Hybrid Apps': [
              { name: 'React Native', logo: '/assets/react.svg', url:'/app-development-services' },
              { name: 'Flutter', logo: '/assets/flutter.svg', url:'/app-development-services' },
              { name: 'PWA', logo: '/assets/pwa.svg' , url:'/app-development-services'},
              { name: 'Ionic', logo: '/assets/IONIC.svg', url:'/app-development-services' }
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
                  // onMouseLeave={() => setHoveredService(null)}
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
                          <div key={idx} className="item-main"  onClick={() => item.url && router.push(item.url)}>
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