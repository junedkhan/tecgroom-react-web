import React, { useEffect } from 'react';
import ourMissionImage from '../../../static/img/bg-img/our-mission.png';
import windowUtils from '../../../utils/windowUtils';

function About({

}) {
    useEffect(() => {
        windowUtils.scrolltoTop();
    },[]);
    return (
        <>
        <section className="uza-about-us-area about-page-container">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <div className="about-us-thumbnail mb-50">
                        <img src={ourMissionImage} alt=""/>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="section-heading mb-5">
                        <h2>Our Mission</h2>
                    </div>

                    <div className="about-us-content mb-80">
                        <div className="about-tab-content">
                            <div className="tab-content" id="mona_modelTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="tab-content-text">
                                        <p>Tecgroom.in is a service-based company that hires the expert professionals in different operations like cleaning and maintenance etc for giving best service to our customer around the clock (24x7).</p>
                                        <p>We are committed to our goal of fulfilling the unconventional needs of the people and industries sustaining in the Metropolitan cities with the most recent and efficient technologies available in the market.</p>
                                        <p>This may include a variety of services like vehicle wash, sofa cleaning, carpet cleaning and disinfectant services. Our core philosophy is to bring ease and comfort to everyday human activities with our efficient services and sustainable technologies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="uza-cf-area section-padding-80-0">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-cf-area d-flex align-items-center mb-80">
                        <h2><span className="counter">90</span></h2>
                        <div className="cf-text">
                            <h6>Projects<br/>Completed</h6>
                        </div>
                        <div className="bg-icon"><i className="icon_piechart"></i></div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-cf-area d-flex align-items-center mb-80">
                        <h2><span className="counter">120</span></h2>
                        <div className="cf-text">
                            <h6>Happy<br/>clients</h6>
                        </div>
                        <div className="bg-icon"><i className="icon_heart_alt"></i></div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-cf-area d-flex align-items-center mb-80">
                        <h2><span className="counter">1</span></h2>
                        <div className="cf-text">
                            <h6>Serving<br/>cities</h6>
                        </div>
                        <div className="bg-icon"><i className="icon_book_alt"></i></div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-cf-area d-flex align-items-center mb-80">
                        <h2><span className="counter">20</span></h2>
                        <div className="cf-text">
                            <h6>Our<br/>experts</h6>
                        </div>
                        <div className="bg-icon"><i className="icon_profile"></i></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default About;