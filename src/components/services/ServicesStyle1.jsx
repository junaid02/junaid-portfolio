import React from 'react';
import SkillsData from '@/assets/jsonData/skills/SkillsData.json'
import SingleService1 from './SingleService1';

const ServicesStyle1 = () => {
    return (
        <>
            <div id="services" className="services-style-one-area box-layout default-padding bottom-less bg-light">
                <div className="blur-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">My Expertise</h4>
                                <h2 className="title">What I Do </h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {SkillsData.map(service =>
                            <SingleService1 service={service} key={service.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesStyle1;