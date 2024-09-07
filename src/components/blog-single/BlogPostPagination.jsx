import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BlogPostPagination = () => {
    return (
        <>
            <div className="post-pagi-area">
                <div className="post-previous">
                    <Link href="#" onClick={handleSmoothScroll}>
                        <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                        <div className="nav-title"> Previous Post <h5>Discovery incommode</h5></div>
                    </Link>
                </div>
                <div className="post-next">
                    <Link href="#" onClick={handleSmoothScroll}>
                        <div className="nav-title">Next Post <h5>Discovery incommode</h5></div>
                        <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogPostPagination;