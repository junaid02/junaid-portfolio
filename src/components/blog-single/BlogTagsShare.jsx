import React from 'react';
import SocialShare from '../utilities/SocialShare';
import Link from 'next/link';

const BlogTagsShare = () => {
    return (
        <>
            <div className="post-tags share">
                <div className="tags">
                    <h4>Tags: </h4>
                    <Link href="#" scroll={false}>Algorithm</Link>
                    <Link href="#" scroll={false}>Data science</Link>
                </div>
                <div className="social">
                    <h4>Share:</h4>
                    <ul>
                        <SocialShare />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BlogTagsShare;