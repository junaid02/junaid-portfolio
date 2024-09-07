"use client"
import React, { useEffect, useRef, useState } from 'react';

const SingleSkill = ({ skill }) => {
    const { title, icon, end } = skill

    const progressRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsVisible(entries[0].isIntersecting);
        });

        observer.observe(progressRef.current);

        return () => {
            observer.disconnect();
        };
    }, [progressRef]);

    useEffect(() => {
        if (isVisible) {
            setProgressWidth(end);
        }
    }, [isVisible, end]);

    return (
        <>
            <li>
                <div className="row align-center">
                    <div className="col-lg-2">
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h4>{title}</h4>
                    </div>
                    <div className="col-lg-5">
                        <div className="progress-box" ref={progressRef}>
                            <h5>{end}%</h5>
                            <div className="progress">
                                <div className={`progress-bar animated-bar`} role="progressbar" data-width={end}
                                    style={{ width: `${progressWidth}%`, transition: `width 2s ease-in-out` }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default SingleSkill;