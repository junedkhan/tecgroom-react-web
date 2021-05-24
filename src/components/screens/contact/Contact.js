import React, { useEffect } from 'react';
import contactImage from '../../../static/img/bg-img/contact-us.png';
import windowUtils from '../../../utils/windowUtils';

function Contact({

}) {
    useEffect(() => {
        windowUtils.scrolltoTop();
    },[]);
    return (
        <section className="uza-contact-area section-padding-80 contact-page-container">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-5 col-lg-5 contact-detail-container">
                    <div className="col-lg-12 col-md-12 contact-image-container">
                        <img src={contactImage} />
                    </div>
                    <div className="col-lg-12 col-md-12 uza-contact-form mb-50">
                            <div className="section-heading career-heading">
                                    <h2>CONTACT US</h2>
                            </div>
                            <p>Please click on the email below to send us query.</p>
                            <p className="mb-0"><strong>Email:</strong> <a href="mailto:info@tecgroom.in">info@tecgroom.in</a></p>
                            <p className="secondary-mails"><a href="mailto:info@tecgroom.in">jobs@tecgroom.in</a></p>
                            <p className="secondary-mails"><a href="mailto:info@tecgroom.in">social@tecgroom.in</a></p>
                    </div>
                </div>
                <div className="col-md-7 col-lg-7">
                        <div className="google-maps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.8574152574991!2d77.33930322435747!3d28.6381934553832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfad313e02157%3A0xe9311084ec7484a8!2sSector%202%2C%20Vaishali%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201010!5e0!3m2!1sen!2sin!4v1600600343711!5m2!1sen!2sin" width="600" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0" />
                        </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact;