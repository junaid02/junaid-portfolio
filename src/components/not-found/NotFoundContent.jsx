import Link from 'next/link';
import React from 'react';

const NotFoundContent = () => {
    return (
        <>
            <div className="error-page-area text-center default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="error-box">
                                <h1>404</h1>
                                <h2>Oops! That page can’t be found.</h2>
                                <p>
                                    The page you are looking for might have been removed had its name changed or its temporarily unavailable.
                                </p>
                                <Link className="btn mt-20 btn-md circle btn-theme smooth-menu" href="/">Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundContent;