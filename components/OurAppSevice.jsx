import React from 'react'

function OurAppSevice() {
    return (
        <div className='bg-black py-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-md-12'>
                    <h6 className='section-title text-white'>What We Build
                        Real Products. Real Users. Real Fast.</h6>
                    <p className='section-subtitle text-white' style={{ fontSize: "18px" }}>
                        we craft digital products that launch fast, feel great, and grow with you. Whether you're validating a bold new idea or scaling an app to thousands, we’ve got your back.
                    </p>
                </div>
            </div>
            <div>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-11 col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-sm-6 mb-4 px-3">
                                <div className="qa-card-app p-3 h-100 text-start">
                                    <div className="qa-icon mb-3">
                                        <img src="/assets/app-mvps.svg" alt="database" />
                                    </div>
                                    <h6 className="fw-bold text-white">MVPs</h6>
                                    <p className="small m-0 text-white">
                                        tart lean, move fast. We help you test ideas and get to market in weeks — not quarters.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 px-3">
                                <div className="qa-card-app p-3 h-100 text-start">
                                    <div className="qa-icon mb-3">
                                        <img src="/assets/fullstackmobile.svg" alt="warehouse" />
                                    </div>
                                    <h6 className="fw-bold text-white">Full-Stack Mobile Products</h6>
                                    <p className="text-white small m-0">
                                        FScalable backends, slick frontends, cloud-powered everything. End-to-end builds that just work.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 px-3">
                                <div className="qa-card-app p-3 h-100 text-start">
                                    <div className="qa-icon mb-3">
                                        <img src="/assets/cross-flatform.svg" alt="data-transformation" />
                                    </div>
                                    <h6 className="fw-bold text-white">Cross-Platform Apps</h6>
                                    <p className="text-white small m-0">
                                        One codebase, all platforms. React Native, Flutter — we write once, run everywhere, and keep it snappy
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 px-3">
                                <div className="qa-card-app p-3 h-100 text-start">
                                    <div className="qa-icon mb-3">
                                        <img src="/assets/native-app.svg" alt="collaborate" />
                                    </div>
                                    <h6 className="fw-bold text-white">Native Apps</h6>
                                    <p className="text-white small m-0">
                                        Need top-tier performance? We build native apps that feel buttery smooth and look on every device.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                <button className="consult-button">
                    Get Consultation <span>⚡</span>
                </button>
                </div>
            </div>
        </div>
    )
}

export default OurAppSevice
