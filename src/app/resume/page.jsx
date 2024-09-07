import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';
import Resume from '@/components/resume/Resume';
import React from 'react';

export const metadata = {
    title: "Ambrox - Personal Portfolio - Resume"
}

const ResumePage = () => {
    return (
        <>
            <LayoutStyle1>
                <BreadCrumb breadCrumb="resume" title="Resume" />
                <div className="resume-page pb-120">
                    <Resume />
                </div>
            </LayoutStyle1>
        </>
    );
};

export default ResumePage;