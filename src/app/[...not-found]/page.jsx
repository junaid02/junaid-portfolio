import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';
import NotFoundContent from '@/components/not-found/NotFoundContent';
import React from 'react';

const NotFoundPage = () => {
    return (
        <>
            <LayoutStyle1>
                <BreadCrumb breadCrumb="404" title="Error Page" />
                <NotFoundContent />
            </LayoutStyle1>
        </>
    );
};

export default NotFoundPage;