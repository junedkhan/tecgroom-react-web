import React from 'react';

function Loader({
    show
}) {
    return show ? (
        <div id="preloader">
            <div className="wrapper">
                <div className="cssload-loader">Tecgroom.in</div>
            </div>
        </div>
    ) : null;
}

export default Loader;