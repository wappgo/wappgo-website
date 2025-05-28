"use client";

import CarouselComponent from "./ConsultationCarousal";

const GetConsultation = () => {
    return (
        <main>
            <div className="row mb-4">
                <div className="col-lg-7">
                    <div className="contact-hero-container pb-4">
                        <div className="website-hero-texts pb-0">
                            <h4>Get Consultation</h4>
                            <h2 className="herosubheadingtext pb-0">
                                Book Your<span> Cyber</span> Consultation Now !
                            </h2>
                        </div>
                    </div>

                    <div className="consultationform p-3 ">
                        <div className=" consultationform2">
                        
                            <form>
                                <div className="form-group pb-3">
                                    <label for="exampleInputEmail1">Name<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" style={{ backgroundColor: "#f9f9fa" }} />

                                </div>
                                <div className="form-group py-3">
                                    <label for="exampleInputEmail1">Email<span className="text-danger">*</span></label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" style={{ backgroundColor: "#f9f9fa" }} />

                                </div>
                                <div className="form-group py-3">
                                    <label for="exampleInputPassword1">You're<span className="text-danger">*</span></label>

                                    <div className="d-flex pt-2" >

                                        <div className="form-check me-4">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label fw-bold" for="exampleRadios1">
                                                Individual
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label className="form-check-label fw-bold" for="exampleRadios2">
                                                Represents organisation
                                            </label>
                                        </div>
                                    </div>

                                </div>

                                <div className="form-group py-3">
                                    <label for="exampleInputEmail1">Organization Name<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Org Name" style={{ backgroundColor: "#f9f9fa" }} />

                                </div>

                                <div className="row py-3">
                                    <div className="col-md-6 pb-2">
                                        <div className="form-group me-2">
                                            <label for="exampleInputEmail1">Your Designation<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Designation" style={{ backgroundColor: "#f9f9fa" }} />

                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group ms-1">
                                            <label for="exampleInputEmail1">Organization Website<span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Org Website" style={{ backgroundColor: "#f9f9fa" }} />

                                        </div>
                                    </div>
                                </div>

                                <div className="py-3">
                                    <h3 className="whatkind d-flex">What kind of consultation you're looking for ? <div className="multiselect">(multiselect) <span className="text-danger">*</span> </div></h3>

                                    <div className="row py-3">
                                        <div className="col-md-4">
                                            <div className="form-check whatkind-items">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Tech Security & Scalability
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-check whatkind-items">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    System Security
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-check whatkind-items">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Personal security
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-check whatkind-items">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Attack Victim
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-check whatkind-items">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Other
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    {/* <p className="aftersuccessful pb-2">After successful payment you will be reditected to select preferred meeting time slot page.</p> */}
                                    <button className="btn fw-bold  bg-dark rounded-pill text-white py-3 px-4  "><span className="paynowbtn">Pay Now</span> &#8377;2999/-
                                        <img src="/assets\arrow-up-right.png" alt="" className="px-1 " />
                                    </button>
                                </div>
                            </form>


                        </div>

                    </div>

                </div>
                <div className="col-lg-5 text-center  consultationimg  ">
                    <div className="text-center" style={{margin:'15%'}} >
                        {/* <img src="/assets\Rectangle 70.png" alt="" className="w-100 " /> */}
                        <CarouselComponent/>
                    </div>
                    <div className="text-center consultationimg2 d-sm-none d-xs-none d-lg-block ">
                        <img className="img-fluid w-75 " src="/assets/innovation-hero-img.png" />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default GetConsultation

