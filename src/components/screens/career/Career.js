import React, { useEffect } from 'react';
import careerImage from '../../../static/img/core-img/career.png';
import windowUtils from '../../../utils/windowUtils';

function Career({

}) {
    useEffect(() => {
        windowUtils.scrolltoTop();
    },[]);
    return (
        <section className="uza-portfolio-area section-padding-80 career-page-main-container">
        <div className="container career-page-container">
            <div className="career-image-container"><img src={careerImage}/></div>
            <div className="col-12 col-lg-6 career-page-text-container">
                    <div className="section-heading career-heading">
                        <h2>CAREERS</h2>
                    </div>

                    <div className="about-us-content mb-80">
                        <div className="about-tab-content">
                            <div className="tab-content" id="mona_modelTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="tab-content-text">
                                        <p>At Tecgroom.in, we are looking for people who want to drive change & have the power to make a difference. We believe in the power of teamwork and derive strength from the ability and dedication of our team. After all, great customer service depends on the continued professional development of our world-className workforce.</p>
                                        <p className="job-enquire-text">To inquire, please email your resume and a paragraph about why you would like to work with us to</p>
                                        <p className="job-email"><strong><a href="mailto:jobs@tecgroom.in">jobs@tecgroom.in</a></strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="container">
            <div className="border-line mt-80"></div>
        </div>
    </section>
    )
}

export default Career;