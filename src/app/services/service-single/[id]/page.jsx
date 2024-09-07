import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import React from 'react';
import ServiceData from "@/assets/jsonData/skills/SkillsData.json"
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';
import ServiceSinglePage from '@/components/services/ServiceSinglePage';

export const metadata = {
    title: "Ambrox - Personal Portfolio - Service Single"
}

const ServiceSingle = ({ params }) => {

    const { id } = params
    const data = ServiceData.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutStyle1>
                <BreadCrumb breadCrumb="service-single" title="Service Single" />
                <ServiceSinglePage serviceInfo={data} />
            </LayoutStyle1>
        </>
    );
};

export default ServiceSingle;