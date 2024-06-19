"use client";
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
                        <div className="text-dark consultationform2">
                            <h3 className="needConsultation">Need Consultation Form <span className="text-danger">*</span></h3>

                            <div class="flex items-center py-2 ">
                                <div>
                                    <input type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-2" class="ms-2 itself ">Kanhaiya Itself</label>
                                </div>
                                <span className="oneofindia">(One of India's top Ethical Hacker & Cyber Security Expert)</span>

                            </div>
                            <div class="flex items-center py-2">
                                <div>
                                    <input type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="default-radio-2" class="ms-2 itself">Expert from Kanhaiya’s Team</label>
                                </div>


                            </div>

                            <form>
                                <div class="form-group py-2">
                                    <label for="exampleInputEmail1">Name<span className="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />

                                </div>
                                <div class="form-group py-2">
                                    <label for="exampleInputEmail1">Email<span className="text-danger">*</span></label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />

                                </div>
                                <div class="form-group py-2">
                                    <label for="exampleInputPassword1">You're<span className="text-danger">*</span></label>

                                    <div className="d-flex pt-2" >

                                        <div class="form-check me-4">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label class="form-check-label fw-bold" for="exampleRadios1">
                                                Individual
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label fw-bold" for="exampleRadios2">
                                                Represents organisation
                                            </label>
                                        </div>
                                    </div>

                                </div>

                                <div class="form-group py-2">
                                    <label for="exampleInputEmail1">Organization Name<span className="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Org Name" />

                                </div>

                                <div className="row py-3">
                                    <div className="col-md-6 pb-2">
                                        <div class="form-group me-2">
                                            <label for="exampleInputEmail1">Your Designation<span className="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Designation" />

                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div class="form-group ms-1">
                                            <label for="exampleInputEmail1">Organization Website<span className="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Org Website" />

                                        </div>
                                    </div>
                                </div>

                                <div className="py-3">
                                    <h3 className="whatkind d-flex">What kind of consultation you're looking for ? <div className="multiselect">(multiselect) <span className="text-danger">*</span> </div></h3>

                                    <div className="row py-3">
                                        <div className="col-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Tech Security & Scalability
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    System Security
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Personal security
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Attack Victim
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Other
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="py-3">
                                    <h3 className="whatkind d-flex">How much time you required ?<span className="text-danger">*</span></h3>

                                    <div className="row py-3">
                                        <div className="col-md-6 py-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    60 Mins / 1 Hr : <span className="fw-bold">Rs.1999/-</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 py-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    120 Mins / 2 Hr: <span className="fw-bold">Rs 2999/-</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 py-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    180 Mins / 3 Hr:<span className="fw-bold">Rs.3999/-</span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <p className="aftersuccessful ">After successful payment you will be reditected to select preferred meeting time slot page.</p>
                                    <button className="btn fw-bold  bg-dark rounded-pill text-white py-3 px-4 text-center justify-content-center shadow-lg">Pay Now &#8377;2999/-
                                        <img src="/assets\arrow-up-right.png" alt="" className="px-1 " />
                                    </button>
                                </div>
                            </form>


                        </div>

                    </div>

                </div>
                <div className="col-lg-5 text-center consultationimg ">
                    <div className="text-center d-sm-none d-xs-none d-lg-block   " >
                        <img src="/assets\Rectangle 70.png" alt="" className="w-100 " />
                    </div>
                    <div className="text-center consultationimg2 d-sm-none d-xs-none d-lg-block ">
                        <img className="img-fluid w-100" src="/assets/innovation-hero-img.png" />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default GetConsultation