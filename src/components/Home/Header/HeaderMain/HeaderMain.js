import React from 'react';
import basePanel from '../../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main style={{height : '600px'}} className="row align-items-center">
            <div className="col-md-4 offset-md-2">
                <h1>Your New Smile <br/> starts here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim error nostrum voluptatem aliquam magnam!</p>
                <button className="btn btn-primary">Get Appointment</button>
            </div>
            <div className="col-md-4">
                  <img src={basePanel} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;