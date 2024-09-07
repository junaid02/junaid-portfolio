import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import Contact from '@/components/contact/Contact';
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';
import React from 'react';

export const metadata = {
    title: "Ambrox - Personal Portfolio - Contact Us"
}

const ContactPage = () => {
    return (
        <>
            <LayoutStyle1>
                <BreadCrumb breadCrumb="contact" title="Contact" />
                <div className="contact-page">
                    <Contact />
                </div>
            </LayoutStyle1>
        </>
    );
};

export default ContactPage;