import React from 'react'

function OurDataServices() {
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-md-12'>
                    <h6 className='section-title'>Our Data Engineering Services</h6>
                    <p className='section-subtitle' style={{ fontSize: "18px" }}>
                        We turn your scattered, siloed data into smooth, streamlined systems that scale. From building robust pipelines to real-time integration and rock-solid storage we engineer the infrastructure that keeps your data flowing, clean, and business-ready.
                    </p>
                </div>
            </div>
            <div>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-9 col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-sm-6 mb-4 px-3">
                                <div className="qa-card p-3 h-100 text-start">
                                    <div className="qa-icon mb-2">
                                        <img src="/assets/database.svg" alt="database" />
                                    </div>
                                    <h6 className="fw-bold">Data Pipeline Design & Automation</h6>
                                    <p className="text-muted small m-0">
                                        We build pipelines that flow automating the messy stuff and delivering real-time, ready-to-use data where and when you need it.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4 px-3">
                                <div className="qa-card p-3 h-100 text-start">
                                    <div className="qa-icon mb-2">
                                         <img src="/assets/warehouse.svg" alt="warehouse" />
                                    </div>
                                    <h6 className="fw-bold">Data Warehousing</h6>
                                    <p className="text-muted small m-0">
                                        From Snowflake to BigQuery to Redshift, we design scalable, secure data warehouses that grow with your business not against it.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4 px-3">
                                <div className="qa-card p-3 h-100 text-start">
                                    <div className="qa-icon mb-2">
                                        <img src="/assets/data-transformation.sv" alt="data-transformation" />
                                    </div>
                                    <h6 className="fw-bold">ETL Solutions</h6>
                                    <p className="text-muted small m-0">
                                        Extract. Transform. Load. (Or sometimes Load first, Transform later.) Either way, we make sure your data is clean, consistent, and ready for analysis.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4 px-3">
                                <div className="qa-card p-3 h-100 text-start">
                                    <div className="qa-icon mb-2">
                                        <img src="/assets/collaborate.svg" alt="collaborate" />
                                    </div>
                                    <h6 className="fw-bold">Data Integration Across Platforms</h6>
                                    <p className="text-muted small m-0">
                                        Got 50 tools, systems, and APIs? We stitch them all together into a seamless, synchronized data ecosystem.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4 px-3">
                                <div className="qa-card p-3 h-100 text-start">
                                    <div className="qa-icon mb-2">
                                        <img src="/assets/shield.svg" alt="shield" />
                                    </div>
                                    <h6 className="fw-bold">Data Governance & Security</h6>
                                    <p className="text-muted small m-0">
                                        Your data is valuable — and vulnerable. We bake security, compliance, and privacy best practices into every pipeline and storage solution we build.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurDataServices
