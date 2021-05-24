import React, { Fragment, useEffect } from 'react';
import { MdLocalCarWash } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
import { FaBarcode, FaHome } from "react-icons/fa";
import chooseUsImage from '../../../static/img/core-img/choose-us.png';
import googlePlayImage from '../../../static/img/bg-img/android-play.png';
import referralOneImage from '../../../static/img/bg-img/referral1.png';
import referralTwoImage from '../../../static/img/bg-img/refrral2.png';
import firstImage from '../../../static/img/core-img/1.jpg';
import fourthImage from '../../../static/img/core-img/4.jpg';
import thirdImage from '../../../static/img/core-img/3.jpg';
import secondImage from '../../../static/img/core-img/2.jpg';
import windowUtils from '../../../utils/windowUtils';

const corouselImages = [firstImage, fourthImage, thirdImage, secondImage];

function Homepage({

}) {

    useEffect(() => {
        windowUtils.scrolltoTop();
    },[]);
    return (
        <Fragment>
        <section className="welcome-area">
        <div id="banner">
            <div className="banner-item">
                <div className="category">
                    <MdLocalCarWash className="category-icon" />
                    <div className="category-name">Car Wash</div>
                </div>
                <div className="category">
                    <GiSofa className="category-icon" />
                    <div className="category-name">Sofa Cleaning</div>
                </div>
                <div className="category">
                    <FaBarcode className="category-icon" />
                    <div className="category-name">Carpet Cleaning</div>
                </div>
                <div className="category">
                    <FaHome className="category-icon" />
                    <div className="category-name">Home Deep Cleaning</div>
                </div>
            </div>
        </div>
    </section>
    <section className="uza-why-choose-us-area">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-12 col-lg-6">
                    <div className="choose-us-thumbnail">
                        <img className="choose-us-image" src={chooseUsImage} alt=""/>
                    </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="choose-us-content mb-80">
                    <div className="section-heading mb-4">
                            <div className="section-heading career-heading">
                                    <h2>Why choose Tecgroom.in?</h2>
                                </div>
                        <p><strong>"Now the wait is over forever. When you need it anytime it means we can make it anytime for you."</strong></p>
                        <p>We understand how it is when someone is helpful when everything seems to be helpless around you. Considering this, we try to be someone who tries to give you best of everything that already exists In terms of:</p>
                    </div>
                    <ul>
                        <li className="service-list-item"><i className="fa fa-hourglass" aria-hidden="true"></i> 24x7 availability</li>
                        <li className="service-list-item"><i className="fa fa-inr" aria-hidden="true"></i> Best rates in the market</li>
                        <li className="service-list-item"><i className="fa fa-mobile" aria-hidden="true"></i> Efficient technology</li>
                    </ul>
                    <div className="section-heading mb-4">
                        <p>Currently we are providing services like <strong>car wash, sofa cleaning, carpet cleaning</strong> etc. by latest and high className practices along with the latest technologies.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div className="referral-container mb-10">
        <div className="referral-content col-lg-6 col-md-6">
            <h2>Refer and get free services</h2>
            <p className="mb-40">Invite your friends to Tecgroom. You and your friend will get rewards for every successful purchase of service plan. You can win upto Rs1000 - Rs 5000.</p>
            <h5 className="mb-40">Terms and condition for getting reward:</h5>
            <h6>For every successful purchase of service plan by your invitee, you will get the reward for it and you can collect rewards and redeem to get free service from Tecgroom.</h6>
            <div className="google-play-image">
                <img src={googlePlayImage} />
            </div>
        </div>
        <div className="referral-image col-lg-6 col-md-6">
            <div className="col-6 col-sm-6 col-lg-6 col-md-6">
                <img src={referralOneImage} />
            </div>
            <div className="second-referral-image col-6 col-sm-6 col-lg-6 col-md-6">
                <img src={referralTwoImage} />
            </div>
        </div>
    </div>
</section>
</Fragment>
    )
}

export default Homepage;