import Modal from '@/components/modal/Modal';
import React from 'react';
import ServiceSingleContent from '@/components/services/ServiceSingleContent';
import HeaderStyle1 from '@/components/header/HeaderStyle1';

const ServiceSingleModal = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderStyle1 />
                <Modal>
                    <ServiceSingleContent />
                </Modal>
            </div>
        </>
    );
};

export default ServiceSingleModal;