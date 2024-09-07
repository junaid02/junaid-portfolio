import React from 'react';
import ResumeData from '@/assets/jsonData/resume/ResumeData.json'
import SingleResume from './Education';

const ResumePageContent = () => {
    return (
        <>
            <div className="resume-content pt-110 pb-110 pt-md-70 pb-md-70 pt-xs-50 pb-xs-50">
                <div className="container">
                    <div className="content">
                        <div className="row align-center">
                            <div className="col-lg-12 thumb">
                                <ul className="education-table">
                                    {ResumeData.map(resume =>
                                        <SingleResume resume={resume} key={resume.id} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumePageContent;