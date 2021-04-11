import React from 'react';

const ServiceData = ({service}) => {
    return (
        <div className="text-center mt-5 mb-5 ">
            <img className="mt-5 mb-5" src={service.img} alt=""/>
            <h5>{service.title}</h5>
            <small className="mt-5 mb-5">{service.description}</small>
        </div>
    );
};

export default ServiceData;