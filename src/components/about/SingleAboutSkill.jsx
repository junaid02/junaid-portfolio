import React from 'react';

const SingleAboutSkill = ({ skill }) => {
    const { icon, designation, status } = skill

    return (
        <>
            <li>
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <div className="content">
                    <h4>{designation}</h4>
                    <span>{status}</span>
                </div>
            </li>
        </>
    );
};

export default SingleAboutSkill;