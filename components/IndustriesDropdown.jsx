"use client";
import Image from 'next/image';
import Link from 'next/link';
import "../public/styles/Navbar.css";
import { useRouter } from "next/navigation";
const IndustriesDropdown = ({ hideServices }) => {
    const router = useRouter();
  const industries = [
    { name: 'Chatsystem', icon: '/assets/chatsystem.svg', path: '/chatsystem' },
    { name: 'E-Commerce', icon: '/assets/online-shopping.svg', path: '/ecommerce' },
    { name: 'Project Management', icon: '/assets/rocket.svg', path: '/projectmanagement' },
    { name: 'Social Media', icon: '/assets/social-media.svg', path: '/social-media' },
    { name: 'ERP / CRM', icon: '/assets/crm-erp.svg', path: '/erp-crm' },
    { name: 'Healthcare', icon: '/assets/health-insurance.svg', path: '/healthcare' },
    { name: 'Logistics', icon: '/assets/checklist.svg', path: '/logistics' },
    { name: 'Chatbot', icon: '/assets/chat-bot.svg', path: '/chatbot' },
    { name: 'Agriculture', icon: '/assets/agriculture.svg', path: '/agriculture' },
    { name: 'Security', icon: '/assets/insurance.svg', path: '/security' },
    { name: 'Law-tech', icon: '/assets/law.svg', path: '/law-tech' },
    { name: 'Ed-Tech', icon: '/assets/university.svg', path: '/ed-tech' },
    { name: 'Travel', icon: '/assets/travel.svg', path: '/travel' },
    { name: 'Cloud', icon: '/assets/cloud.svg', path: '/cloud' },
    { name: 'Marketplace', icon: '/assets/shopping-cart.svg', path: '/marketplace' }
  ];

  return (
    <main className="services-container-indus" onMouseLeave={hideServices}>
       <div className="industriesdiv2">
             <div className="row align-items-center">
               <div className="services-items">
                 <div
                  onClick={(e) =>{  e.stopPropagation(); router.push("/chatsystem")}}
                  className="instries-content"
                  style={{ cursor: "pointer" }}
                >
                  <img src="/assets/chatsystem.svg" />
                  <h6>Chatsystem</h6>
                </div>
                <div onClick={() => router.push("/industries")}
                  className="instries-content"
                  style={{ cursor: "pointer" }}>
                  <img src="/assets/online-shopping.svg" />
                  <h6>E-Commerce</h6>
                </div>
                <div  onClick={() => router.push("/projectmanagement")} className="instries-content">
                  <img src="/assets/rocket.svg" />
                  <h6>Project Management</h6>
                </div>
                <div  onClick={() => router.push("/social-media")}
                  className="instries-content"
                  style={{ cursor: "pointer" }}>
                  <img src="/assets/social-media.svg" />
                  <h6>Social Media</h6>
                </div>
              </div>
              <div className="services-items">
                <div onClick={() => router.push("/ERP")}
                  className="instries-content"
                  style={{ cursor: "pointer" }}>
                  <img src="/assets/crm-erp.svg" />
                  <h6>ERP / CRM</h6>
                </div>
                <div  onClick={() => router.push("/contact")} className="instries-content">
                  <img src="/assets/health-insurance.svg" />
                  <h6>Healthcare</h6>
                </div>
                <div  onClick={() => router.push("/contact")} className="instries-content">
                  <img src="/assets/checklist.svg" />
                  <h6>Logistics</h6>
                </div>
                <div  onClick={() => router.push("/contact")} className="instries-content">
                  <img src="/assets/chat-bot.svg" />
                  <h6>Chatbot</h6>
                </div>
              </div>
              <div  onClick={() => router.push("/contact")} className="services-items">
                <div className="instries-content">
                  <img src="/assets/agriculture.svg" />
                  <h6>Agriculture</h6>
                </div>
                <div  onClick={() => router.push("/contact")} className="instries-content">
                  <img src="/assets/insurance.svg" />
                  <h6>Security</h6>
                </div>
                <div  onClick={() => router.push("/contact")} className="instries-content">
                  <img src="/assets/law.svg" />
                  <h6>Law-tech</h6>
                </div>
                <div  onClick={() => router.push("/contact")} className="instries-content">
                  <img src="/assets/university.svg" />
                  <h6>Ed-Tech</h6>
                </div>
              </div>
               <div className="services-items">
                <div onClick={() => router.push("/contact")} className="instries-content">
                  <img src="/assets/travel.svg" />
                  <h6>Travel</h6>
                </div>
                <div  onClick={() => router.push("/contact")} className="instries-content">
                  <img src="/assets/cloud.svg" />
                  <h6>Cloud</h6>
                </div>
                <div onClick={() => router.push("/contact")} className="instries-content">
                  <img src="/assets/shopping-cart.svg" />
                  <h6>Marketplace</h6>
                </div>
                {/* <div className="instries-content">
                  <img src="/assets/travel.svg" />
                  <h6>Travel</h6>
                </div> */}
              </div>
              <div className="services-items">
                <div className="instries-content">
                  <img src="/assets/instries-image.svg" />
                </div>
              </div>
            </div>
          </div>
        </main>
  );
};

export default IndustriesDropdown;