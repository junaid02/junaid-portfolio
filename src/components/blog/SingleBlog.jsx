import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlog = ({ blog }) => {
    const { id, thumb, title, author, date } = blog

    return (
        <>
            <div className="blog-style-one mb-30 col-lg-4 col-md-6">
                <div className="item">
                    <div className="thumb">
                        <Link href={`/blogs/blog-single/${id}`}>
                            <Image src={`/assets/img/blog/${thumb}`} alt="Thumb" width={305} height={230} />
                        </Link>
                    </div>
                    <div className="info">
                        <h4>
                            <Link href={`/blogs/blog-single/${id}`} >{title}</Link>
                        </h4>
                        <div className="meta">
                            <ul>
                                <li>
                                    <Link href="#" scroll={false}><i className="fas fa-user-circle"></i>{author}</Link>
                                </li>
                                <li>
                                    <i className="fas fa-calendar-alt"></i> {date}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;