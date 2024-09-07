"use client";
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';
import ErrorPageContent from '@/components/not-found/ErrorPageContent';
import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <LayoutStyle1>
                <BreadCrumb breadCrumb="error" title="Error Page" />
                <ErrorPageContent />
            </LayoutStyle1>
        </>
    );
};

export default ErrorPage;