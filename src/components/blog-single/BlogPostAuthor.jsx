import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import authorThumb from '@/assets/img/teams/v2.jpg'

const BlogPostAuthor = () => {
    return (
        <>
            <div className="post-author">
                <div className="thumb">
                    <Image src={authorThumb} alt="Thumb" />
                </div>
                <div className="info">
                    <h4><Link href="#" scroll={false}>Md Sohag</Link></h4>
                    <p>
                        Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.
                    </p>
                </div>
            </div>
        </>
    );
};

export default BlogPostAuthor;