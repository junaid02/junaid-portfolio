import Link from 'next/link';
import React from 'react';

const BreadCrumb = ({ breadCrumb, title }) => {
    return (
        <>
            <div className="breadcrumb-area shadow dark bg-cover text-center text-light" style={{ backgroundImage: `url(/assets/img/banner/3.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1>{title ? title : "404 Not Found"}</h1>
                            <ul className="breadcrumb">
                                <li><Link href="/"><i className="fas fa-home"></i> Home</Link></li>
                                <li>{breadCrumb ? breadCrumb : "404"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;