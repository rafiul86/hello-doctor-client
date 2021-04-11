import React from 'react';
import {faClock,faMapMarkerAlt,faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Info.css'
const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 ">
            <div className={`d-flex info-container justify-content-center info-${info.background}`}>
            <div className="icon me-3">
            <FontAwesomeIcon  icon={info.icon}/>
            </div>
           <div>
               <h6>{info.title}</h6>
               <small>{info.description}</small>
               </div>
            </div>
        </div>
    );
};

export default InfoCard;