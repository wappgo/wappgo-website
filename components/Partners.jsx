"use client";
const Partners = () => {
  return (
    <main className="partners-container">
      <h6 className='comman-title text-center'>Trusted Customers and Partners</h6>
      <div className="brands overflow-hidden bg-white mt-4">
        <div className="d-flex marquee-track">
          {[
            "/assets/been-logo.svg",
            "/assets/fair-concects.svg",
            "/assets/Netlink-logo.svg",
            "/assets/qutar-airways.svg",
            "/assets/agrawal-group-logo.svg",
            "/assets/jc-benchar.svg",
            "/assets/laxman-con-logo.svg",
            "/assets/isa-logo.svg",
            "/assets/vaishnav-college.svg",
          ].map((src, idx) => (
            <div key={idx} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '150px' }}>
              <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '60px' }} />
            </div>
          ))}
          {[
             "/assets/been-logo.svg",
            "/assets/fair-concects.svg",
            "/assets/Netlink-logo.svg",
            "/assets/qutar-airways.svg",
            "/assets/agrawal-group-logo.svg",
            "/assets/jc-benchar.svg",
            "/assets/laxman-con-logo.svg",
            "/assets/isa-logo.svg",
            "/assets/vaishnav-college.svg",
          ].map((src, idx) => (
            <div key={`dup-${idx}`} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '150px' }}>
              <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '60px' }} />
            </div>
          ))}
        </div>
      </div>
      <div className="brands-left overflow-hidden bg-white">
        <div className="d-flex marquee-track-left">
          {[
            "/assets/army.svg",
            "/assets/science-tech.svg",
            "/assets/singpure.svg",
            "/assets/medi-caps.svg",
            "/assets/mp-dc.svg",
            "/assets/joonify.svg",
            "/assets/nict.svg",
            "/assets/policy.svg",
            "/assets/gis-logo-mp.svg",
            "/assets/legal.svg",
          ].map((src, idx) => (
            <div key={idx} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '150px' }}>
              <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '60px' }} />
            </div>
          ))}
          {[
            "/assets/army.svg",
            "/assets/science-tech.svg",
            "/assets/singpure.svg",
            "/assets/medi-caps.svg",
            "/assets/mp-dc.svg",
            "/assets/joonify.svg",
            "/assets/nict.svg",
            "/assets/policy.svg",
            "/assets/gis-logo-mp.svg",
            "/assets/legal.svg",
          ].map((src, idx) => (
            <div key={`dup-${idx}`} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '150px' }}>
              <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '60px' }} />
            </div>
          ))}
        </div>
      </div>

    </main>
  );
};

export default Partners;
