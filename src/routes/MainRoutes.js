import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Homepage from '../components/screens/homepage/Homepage';
import About from '../components/screens/about/About';
import Career from '../components/screens/career/Career';
import Contact from '../components/screens/contact/Contact';
import PrivacyPolicy from '../components/screens/privacy-policy/PrivacyPolicy';
import Services from '../components/screens/services/Services';

function MainRoutes({

}) {
    return (
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/career" component={Career}/>
                <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
            </Switch>
    )
}

export default MainRoutes;