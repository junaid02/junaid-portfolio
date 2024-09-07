import React from 'react';
import ContactForm from '../form/ContactForm';
import ContactInfo from './ContactInfo';

const ContactPageContent = () => {
    return (
        <>
            <div className="contact-page pt-110 pb-110 pt-md-70 pb-md-70 pt-xs-40 pb-xs-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <ContactForm />
                        </div>
                        <div className="col-lg-4 offset-lg-1 pt-md-30 pt-xs-30">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPageContent;